"use client";

import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/components/i18n/LanguageProvider';
import styles from './BreathingExercise.module.css';

export default function BreathingExercise({ inhale = 4, hold = 4, exhale = 4, title }) {
    const { t } = useLanguage();
    const [phase, setPhase] = useState('ready');
    const [cycles, setCycles] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const tickRef = useRef(null);

    useEffect(() => {
        if (phase === 'ready' || phase === 'paused') return;

        let timeout;
        if (phase === 'inhale') {
            timeout = setTimeout(() => setPhase(hold > 0 ? 'hold' : 'exhale'), inhale * 1000);
        } else if (phase === 'hold') {
            timeout = setTimeout(() => setPhase('exhale'), hold * 1000);
        } else if (phase === 'exhale') {
            timeout = setTimeout(() => {
                setCycles(c => c + 1);
                setPhase('inhale');
            }, exhale * 1000);
        }
        return () => clearTimeout(timeout);
    }, [phase, inhale, hold, exhale]);

    useEffect(() => {
        if (phase === 'ready' || phase === 'paused') {
            clearInterval(tickRef.current);
            return;
        }
        tickRef.current = setInterval(() => setSeconds(s => s + 1), 1000);
        return () => clearInterval(tickRef.current);
    }, [phase]);

    const start = () => {
        setPhase('inhale');
        setCycles(0);
        setSeconds(0);
    };

    const stop = () => {
        setPhase('ready');
        setCycles(0);
        setSeconds(0);
    };

    const togglePause = () => {
        if (phase === 'paused') setPhase('inhale');
        else if (phase !== 'ready') setPhase('paused');
    };

    const getText = () => {
        switch (phase) {
            case 'ready': return t('breathing.ready');
            case 'inhale': return t('breathing.inhale');
            case 'hold': return t('breathing.hold');
            case 'exhale': return t('breathing.exhale');
            case 'paused': return t('breathing.paused');
            default: return '';
        }
    };

    const getSubText = () => {
        switch (phase) {
            case 'inhale': return `${inhale}s`;
            case 'hold': return `${hold}s`;
            case 'exhale': return `${exhale}s`;
            default: return '';
        }
    };

    const getDuration = () => {
        switch (phase) {
            case 'inhale': return `${inhale}s`;
            case 'hold': return `${hold}s`;
            case 'exhale': return `${exhale}s`;
            default: return '0.5s';
        }
    };

    const totalMinutes = Math.floor(seconds / 60);
    const totalSeconds = seconds % 60;

    return (
        <div className={styles.wrapper}>
            {title && <h3 className={styles.title}>{title}</h3>}
            <p className={styles.pattern}>
                {t('breathing.pattern')}&nbsp;·&nbsp;
                <strong>{inhale}s</strong> {t('breathing.patternInhale')}
                <span>·</span>
                <strong>{hold}s</strong> {t('breathing.patternHold')}
                <span>·</span>
                <strong>{exhale}s</strong> {t('breathing.patternExhale')}
            </p>

            <div className={styles.stage}>
                <div className={styles.rings} aria-hidden="true">
                    <span className={styles.ring}></span>
                    <span className={styles.ring}></span>
                    <span className={styles.ring}></span>
                </div>
                <div
                    className={`${styles.circle} ${styles[phase]}`}
                    style={{ transitionDuration: getDuration() }}
                />
                <div className={styles.center}>
                    <span className={styles.phaseLabel}>{getText()}</span>
                    {getSubText() && <span className={styles.phaseTime}>{getSubText()}</span>}
                </div>
            </div>

            <div className={styles.stats}>
                <div>
                    <span className={styles.statValue}>{cycles}</span>
                    <span className={styles.statLabel}>{t('breathing.cycles')}</span>
                </div>
                <div>
                    <span className={styles.statValue}>
                        {totalMinutes}:{String(totalSeconds).padStart(2, '0')}
                    </span>
                    <span className={styles.statLabel}>{t('breathing.elapsed')}</span>
                </div>
            </div>

            <div className={styles.actions}>
                {phase === 'ready' ? (
                    <button onClick={start} className="btn btn-primary btn-lg btn-block">
                        {t('breathing.begin')}
                    </button>
                ) : (
                    <>
                        <button onClick={togglePause} className="btn btn-outline">
                            {phase === 'paused' ? t('breathing.resume') : t('breathing.pause')}
                        </button>
                        <button onClick={stop} className="btn btn-ghost">
                            {t('breathing.stop')}
                        </button>
                    </>
                )}
            </div>

            <p className={styles.tip}>{t('breathing.tip')}</p>
        </div>
    );
}
