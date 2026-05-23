'use client';

import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import styles from './AudioKaraoke.module.css';

/**
 * AudioKaraoke — plays audio with word-by-word highlighting.
 *
 * Props:
 *   entry       { url, words: [{word, offset_ms, duration_ms}], duration_ms }
 *   autoPlay    boolean — start playing immediately when entry changes
 *   onEnded     callback when playback finishes
 *   compact     boolean — icon-only button (no inline text display)
 */
export default function AudioKaraoke({ entry, autoPlay = false, onEnded, compact = false }) {
  const audioRef = useRef(null);
  const rafRef   = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [activeIdx, setActiveIdx] = useState(-1);

  const words = useMemo(() => entry?.words ?? [], [entry]);
  const url   = entry?.url;

  // Update active word on animation frame while playing
  const tick = useCallback(() => {
    const audio = audioRef.current;
    if (!audio || audio.paused) return;
    const nowMs = audio.currentTime * 1000;
    let idx = -1;
    for (let i = 0; i < words.length; i++) {
      if (nowMs >= words[i].offset_ms) idx = i;
      else break;
    }
    setActiveIdx(idx);
    rafRef.current = requestAnimationFrame(tick);
  }, [words]);

  const stop = useCallback(() => {
    cancelAnimationFrame(rafRef.current);
    const audio = audioRef.current;
    if (audio) { audio.pause(); audio.currentTime = 0; }
    setPlaying(false);
    setActiveIdx(-1);
  }, []);

  const play = useCallback(() => {
    if (!url) return;
    const audio = audioRef.current;
    if (!audio) return;
    audio.src = url;
    audio.play().then(() => {
      setPlaying(true);
      rafRef.current = requestAnimationFrame(tick);
    }).catch(() => {});
  }, [url, tick]);

  // Auto-play when entry changes (for JPMR)
  useEffect(() => {
    if (autoPlay && url) {
      stop();
      setTimeout(play, 80);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, autoPlay]);

  // Stop on unmount
  useEffect(() => () => { cancelAnimationFrame(rafRef.current); audioRef.current?.pause(); }, []);

  const handleEnded = useCallback(() => {
    cancelAnimationFrame(rafRef.current);
    setPlaying(false);
    setActiveIdx(-1);
    onEnded?.();
  }, [onEnded]);

  const toggle = () => (playing ? stop() : play());

  if (!url) return null;

  if (compact) {
    return (
      <>
        <audio ref={audioRef} onEnded={handleEnded} preload="none" />
        <button
          className={`${styles.iconBtn} ${playing ? styles.iconBtnActive : ''}`}
          onClick={toggle}
          aria-label={playing ? 'Stop audio' : 'Play audio'}
          title={playing ? 'Stop' : 'Listen'}
        >
          {playing ? '⏹' : '🔊'}
        </button>
      </>
    );
  }

  return (
    <div className={styles.wrapper}>
      <audio ref={audioRef} onEnded={handleEnded} preload="none" />
      <button
        className={`${styles.playBtn} ${playing ? styles.playBtnActive : ''}`}
        onClick={toggle}
        aria-label={playing ? 'Stop audio' : 'Play audio'}
      >
        {playing ? '⏹' : '▶'}
      </button>
      {words.length > 0 && (
        <p className={styles.text}>
          {words.map((w, i) => (
            <span
              key={i}
              className={`${styles.word} ${i === activeIdx ? styles.wordActive : ''}`}
            >
              {w.word}{' '}
            </span>
          ))}
        </p>
      )}
    </div>
  );
}
