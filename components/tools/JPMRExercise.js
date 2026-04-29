"use client";

import { useState, useEffect, useRef } from 'react';
import {
    jpmrMuscleGroupsByLang,
    jpmrIntroByLang,
    jpmrInstructionsByLang,
    jpmrCompletionByLang,
} from '@/data/clinical.localized';
import { useLanguage } from '@/components/i18n/LanguageProvider';
import styles from './JPMRExercise.module.css';

export default function JPMRExercise() {
    const { t, lang } = useLanguage();

    const jpmrMuscleGroups = jpmrMuscleGroupsByLang[lang] || jpmrMuscleGroupsByLang.en;
    const jpmrIntro = jpmrIntroByLang[lang] || jpmrIntroByLang.en;
    const jpmrInstructions = jpmrInstructionsByLang[lang] || jpmrInstructionsByLang.en;
    const jpmrCompletion = jpmrCompletionByLang[lang] || jpmrCompletionByLang.en;

    const [state, setState] = useState('idle');
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
                            setGroupIndex(p => p + 1);
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
    }, [state, groupIndex, isPaused, currentGroup, totalGroups, jpmrMuscleGroups]);

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
            setGroupIndex(p => p + 1);
            setState('tension');
            setTimeLeft(jpmrMuscleGroups[groupIndex + 1].tensionDuration);
        } else {
            setState('complete');
        }
    };

    if (state === 'idle') {
        return (
            <div className={styles.container}>
                <h3 className={styles.title}>{t('jpmr.title')}</h3>
                <p className={styles.intro}>{jpmrIntro}</p>
                <div className={styles.instructionList}>
                    {jpmrInstructions.map((inst, i) => (
                        <p key={i} className={styles.instruction}>
                            <span className={styles.bullet}>{i + 1}</span> {inst}
                        </p>
                    ))}
                </div>
                <p className={styles.duration}>
                    {t('jpmr.totalSession')
                        .replace('{{minutes}}', Math.round(totalGroups * 15 / 60))
                        .replace('{{groups}}', totalGroups)}
                </p>
                <button onClick={start} className="btn btn-primary" style={{ width: '100%', marginTop: '1.5rem' }}>
                    {t('jpmr.beginSession')}
                </button>
            </div>
        );
    }

    if (state === 'complete') {
        return (
            <div className={styles.container}>
                <div className={styles.completeIcon}>✨</div>
                <h3 className={styles.title}>{t('jpmr.complete')}</h3>
                <p className={styles.intro}>{jpmrCompletion}</p>
                <button onClick={reset} className="btn btn-primary" style={{ width: '100%', marginTop: '1.5rem' }}>
                    {t('jpmr.startOver')}
                </button>
            </div>
        );
    }

    const maxTime = state === 'tension' ? currentGroup.tensionDuration : currentGroup.relaxDuration;
    const progress = ((maxTime - timeLeft) / maxTime) * 100;

    return (
        <div className={styles.container}>
            <div className={styles.progressHeader}>
                <span>{t('jpmr.muscleGroupOf').replace('{{current}}', groupIndex + 1).replace('{{total}}', totalGroups)}</span>
                <span>{currentGroup.name}</span>
            </div>
            <div className={styles.progressTrack}>
                <div className={styles.progressFill} style={{ width: `${(groupIndex / totalGroups) * 100}%` }}></div>
            </div>

            <div className={`${styles.phaseIndicator} ${state === 'tension' ? styles.tensionPhase : styles.releasePhase}`}>
                <span className={styles.phaseLabel}>
                    {state === 'tension' ? t('jpmr.tense') : t('jpmr.relax')}
                </span>
            </div>

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

            <p className={styles.currentInstruction}>
                {state === 'tension' ? currentGroup.tensionInstruction : currentGroup.relaxInstruction}
            </p>

            <div className={styles.controls}>
                <button onClick={() => setIsPaused(!isPaused)} className="btn btn-outline" style={{ flex: 1 }}>
                    {isPaused ? t('jpmr.resume') : t('jpmr.pause')}
                </button>
                <button onClick={skipNext} className="btn btn-outline" style={{ flex: 1 }}>
                    {t('jpmr.skip')}
                </button>
                <button onClick={reset} className="btn btn-outline" style={{ flex: 1 }}>
                    {t('jpmr.reset')}
                </button>
            </div>
        </div>
    );
}
