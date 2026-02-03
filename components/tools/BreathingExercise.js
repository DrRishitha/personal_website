"use client";

import { useState, useEffect } from 'react';
import styles from './BreathingExercise.module.css';

export default function BreathingExercise() {
    const [phase, setPhase] = useState('ready'); // ready, inhale, hold, exhale

    useEffect(() => {
        if (phase === 'ready') return;

        let timeout;
        if (phase === 'inhale') {
            timeout = setTimeout(() => setPhase('hold'), 4000);
        } else if (phase === 'hold') {
            timeout = setTimeout(() => setPhase('exhale'), 4000);
        } else if (phase === 'exhale') {
            timeout = setTimeout(() => setPhase('inhale'), 4000);
        }

        return () => clearTimeout(timeout);
    }, [phase]);

    const toggle = () => {
        if (phase === 'ready') setPhase('inhale');
        else {
            setPhase('ready');
        }
    };

    const getText = () => {
        switch (phase) {
            case 'ready': return 'Click to Start';
            case 'inhale': return 'Inhale...';
            case 'hold': return 'Hold...';
            case 'exhale': return 'Exhale...';
            default: return '';
        }
    };

    return (
        <div className={styles.container} onClick={toggle}>
            <div className={`${styles.circle} ${styles[phase]}`}></div>
            <div className={styles.label}>{getText()}</div>
        </div>
    );
}
