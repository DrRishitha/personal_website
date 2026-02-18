"use client";

import { dotDirections } from '@/data/emdrConfig';
import styles from './EMDRControls.module.css';

export default function EMDRControls({ speed, setSpeed, direction, setDirection, volume, setVolume, isPlaying, onTogglePlay, audioEnabled, setAudioEnabled }) {
    return (
        <div className={styles.controls}>
            <div className={styles.row}>
                <div className={styles.control}>
                    <label className={styles.label}>Speed</label>
                    <div className={styles.sliderRow}>
                        <span className={styles.sliderLabel}>Slow</span>
                        <input
                            type="range"
                            min="0.3"
                            max="3"
                            step="0.1"
                            value={speed}
                            onChange={(e) => setSpeed(parseFloat(e.target.value))}
                            className={styles.slider}
                        />
                        <span className={styles.sliderLabel}>Fast</span>
                    </div>
                </div>

                <div className={styles.control}>
                    <label className={styles.label}>Direction</label>
                    <div className={styles.directionBtns}>
                        {dotDirections.map(d => (
                            <button
                                key={d.id}
                                className={`${styles.dirBtn} ${direction === d.id ? styles.dirActive : ''}`}
                                onClick={() => setDirection(d.id)}
                            >
                                {d.icon} {d.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className={styles.row}>
                <div className={styles.control}>
                    <label className={styles.label}>Audio</label>
                    <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                        <button
                            className={`${styles.dirBtn} ${audioEnabled ? styles.dirActive : ''}`}
                            onClick={() => setAudioEnabled(!audioEnabled)}
                        >
                            {audioEnabled ? '🔊 On' : '🔇 Off'}
                        </button>
                        {audioEnabled && (
                            <input
                                type="range"
                                min="0.1"
                                max="1"
                                step="0.1"
                                value={volume}
                                onChange={(e) => setVolume(parseFloat(e.target.value))}
                                className={styles.slider}
                                style={{ width: '100px' }}
                            />
                        )}
                    </div>
                </div>

                <button
                    className={`btn ${isPlaying ? 'btn-outline' : 'btn-primary'}`}
                    onClick={onTogglePlay}
                    style={{ alignSelf: 'flex-end' }}
                >
                    {isPlaying ? '⏸ Pause' : '▶ Resume'}
                </button>
            </div>
        </div>
    );
}
