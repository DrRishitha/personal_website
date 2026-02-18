"use client";

import { useState, useEffect } from 'react';
import styles from './BreathingExercise.module.css';

export default function BreathingExercise({ inhale = 4, hold = 4, exhale = 4, title }) {
    const [phase, setPhase] = useState('ready'); // ready, inhale, hold, exhale

    useEffect(() => {
        if (phase === 'ready') return;

        let timeout;
        if (phase === 'inhale') {
            timeout = setTimeout(() => setPhase(hold > 0 ? 'hold' : 'exhale'), inhale * 1000);
        } else if (phase === 'hold') {
            timeout = setTimeout(() => setPhase('exhale'), hold * 1000);
        } else if (phase === 'exhale') {
            timeout = setTimeout(() => setPhase('inhale'), exhale * 1000);
        }

        return () => clearTimeout(timeout);
    }, [phase, inhale, hold, exhale]);

    const toggle = () => {
        if (phase === 'ready') setPhase('inhale');
        else setPhase('ready');
    };

    const getText = () => {
        switch (phase) {
            case 'ready': return 'Click to Start';
            case 'inhale': return `Inhale... ${inhale}s`;
            case 'hold': return `Hold... ${hold}s`;
            case 'exhale': return `Exhale... ${exhale}s`;
            default: return '';
        }
    };

    // Adjust CSS transition duration to match current phase timing
    const getDuration = () => {
        switch (phase) {
            case 'inhale': return `${inhale}s`;
            case 'hold': return `${hold}s`;
            case 'exhale': return `${exhale}s`;
            default: return '0.3s';
        }
    };

    return (
        <div>
            {title && <h3 style={{ textAlign: 'center', marginBottom: '1rem' }}>{title}</h3>}
            <p style={{ textAlign: 'center', color: 'var(--color-text-muted)', marginBottom: '1rem', fontSize: '0.9rem' }}>
                Pattern: {inhale}-{hold}-{exhale} (Inhale-Hold-Exhale)
            </p>
            <div className={styles.container} onClick={toggle}>
                <div
                    className={`${styles.circle} ${styles[phase]}`}
                    style={{ transitionDuration: getDuration() }}
                ></div>
                <div className={styles.label}>{getText()}</div>
            </div>
        </div>
    );
}
