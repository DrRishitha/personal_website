"use client";

import { useState, useEffect, useRef } from 'react';
import { jpmrMuscleGroups, jpmrIntro, jpmrInstructions, jpmrCompletion } from '@/data/jpmrSteps';
import styles from './JPMRExercise.module.css';

export default function JPMRExercise() {
    const [state, setState] = useState('idle'); // idle, tension, release, complete
    const [groupIndex, setGroupIndex] = useState(0);
    const [timeLeft, setTimeLeft] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const intervalRef = useRef(null);

    const currentGroup = jpmrMuscleGroups[groupIndex];
    const totalGroups = jpmrMuscleGroups.length;

    useEffect(() => {
        if (state === 'idle' || state === 'complete' || isPaused) return;

        intervalRef.current = setInterval(() => {
            setTimeLeft(prev => {
                if (prev <= 1) {
                    if (state === 'tension') {
                        setState('release');
                        return currentGroup.relaxDuration;
                    } else if (state === 'release') {
                        if (groupIndex < totalGroups - 1) {
                            setGroupIndex(prev => prev + 1);
                            setState('tension');
                            return jpmrMuscleGroups[groupIndex + 1].tensionDuration;
                        } else {
                            setState('complete');
                            return 0;
                        }
                    }
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(intervalRef.current);
    }, [state, groupIndex, isPaused, currentGroup, totalGroups]);

    const start = () => {
        setGroupIndex(0);
        setState('tension');
        setTimeLeft(jpmrMuscleGroups[0].tensionDuration);
        setIsPaused(false);
    };

    const reset = () => {
        clearInterval(intervalRef.current);
        setState('idle');
        setGroupIndex(0);
        setTimeLeft(0);
        setIsPaused(false);
    };

    const skipNext = () => {
        if (groupIndex < totalGroups - 1) {
            setGroupIndex(prev => prev + 1);
            setState('tension');
            setTimeLeft(jpmrMuscleGroups[groupIndex + 1].tensionDuration);
        } else {
            setState('complete');
        }
    };

    if (state === 'idle') {
        return (
            <div className={styles.container}>
                <h3 className={styles.title}>Progressive Muscle Relaxation</h3>
                <p className={styles.intro}>{jpmrIntro}</p>
                <div className={styles.instructionList}>
                    {jpmrInstructions.map((inst, i) => (
                        <p key={i} className={styles.instruction}>
                            <span className={styles.bullet}>{i + 1}</span> {inst}
                        </p>
                    ))}
                </div>
                <p className={styles.duration}>
                    Total session: ~{Math.round(totalGroups * 15 / 60)} minutes ({totalGroups} muscle groups)
                </p>
                <button onClick={start} className="btn btn-primary" style={{ width: '100%', marginTop: '1.5rem' }}>
                    Begin Session
                </button>
            </div>
        );
    }

    if (state === 'complete') {
        return (
            <div className={styles.container}>
                <div className={styles.completeIcon}>✨</div>
                <h3 className={styles.title}>Session Complete</h3>
                <p className={styles.intro}>{jpmrCompletion}</p>
                <button onClick={reset} className="btn btn-primary" style={{ width: '100%', marginTop: '1.5rem' }}>
                    Start Over
                </button>
            </div>
        );
    }

    const maxTime = state === 'tension' ? currentGroup.tensionDuration : currentGroup.relaxDuration;
    const progress = ((maxTime - timeLeft) / maxTime) * 100;

    return (
        <div className={styles.container}>
            {/* Progress */}
            <div className={styles.progressHeader}>
                <span>Muscle Group {groupIndex + 1} of {totalGroups}</span>
                <span>{currentGroup.name}</span>
            </div>
            <div className={styles.progressTrack}>
                <div className={styles.progressFill} style={{ width: `${((groupIndex) / totalGroups) * 100}%` }}></div>
            </div>

            {/* Phase Indicator */}
            <div className={`${styles.phaseIndicator} ${state === 'tension' ? styles.tensionPhase : styles.releasePhase}`}>
                <span className={styles.phaseLabel}>
                    {state === 'tension' ? '💪 TENSE' : '😌 RELAX'}
                </span>
            </div>

            {/* Timer */}
            <div className={styles.timerCircle}>
                <svg className={styles.timerSvg} viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="hsla(205,50%,25%,0.1)" strokeWidth="4" />
                    <circle
                        cx="50" cy="50" r="45" fill="none"
                        stroke={state === 'tension' ? 'var(--color-primary)' : 'var(--color-accent)'}
                        strokeWidth="4" strokeLinecap="round"
                        strokeDasharray={`${progress * 2.83} ${283 - progress * 2.83}`}
                        strokeDashoffset="70.75"
                        style={{ transition: 'stroke-dasharray 1s linear' }}
                    />
                </svg>
                <span className={styles.timerText}>{timeLeft}s</span>
            </div>

            {/* Instruction */}
            <p className={styles.currentInstruction}>
                {state === 'tension' ? currentGroup.tensionInstruction : currentGroup.relaxInstruction}
            </p>

            {/* Controls */}
            <div className={styles.controls}>
                <button onClick={() => setIsPaused(!isPaused)} className="btn btn-outline" style={{ flex: 1 }}>
                    {isPaused ? '▶ Resume' : '⏸ Pause'}
                </button>
                <button onClick={skipNext} className="btn btn-outline" style={{ flex: 1 }}>
                    Skip →
                </button>
                <button onClick={reset} className="btn btn-outline" style={{ flex: 1 }}>
                    Reset
                </button>
            </div>
        </div>
    );
}
