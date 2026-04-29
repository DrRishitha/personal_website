"use client";

import { useState, useEffect, useRef, useCallback } from 'react';
import { emdrPhasesByLang } from '@/data/clinical.localized';
import { audioConfig } from '@/data/emdrConfig';
import EMDRDot from './EMDRDot';
import EMDRControls from './EMDRControls';
import { useEMDRAudio } from './EMDRAudio';
import { useLanguage } from '@/components/i18n/LanguageProvider';
import styles from './EMDRSession.module.css';

export default function EMDRSession() {
    const { t, lang } = useLanguage();
    const emdrPhases = emdrPhasesByLang[lang] || emdrPhasesByLang.en;

    const [phaseIndex, setPhaseIndex] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [elapsed, setElapsed] = useState(0);
    const [instructionIndex, setInstructionIndex] = useState(0);
    const [speed, setSpeed] = useState(1.2);
    const [direction, setDirection] = useState('horizontal');
    const [volume, setVolume] = useState(audioConfig.volume);
    const [audioEnabled, setAudioEnabled] = useState(true);
    const timerRef = useRef(null);
    const audioTimerRef = useRef(null);

    const currentPhase = emdrPhases[phaseIndex];
    const { init: initAudio, playBeep } = useEMDRAudio(volume, audioConfig.frequency);

    useEffect(() => {
        if (!isActive || !currentPhase.duration) return;

        timerRef.current = setInterval(() => {
            setElapsed(prev => {
                if (prev >= currentPhase.duration) {
                    setIsActive(false);
                    return prev;
                }
                return prev + 1;
            });
        }, 1000);

        return () => clearInterval(timerRef.current);
    }, [isActive, currentPhase]);

    useEffect(() => {
        if (!isActive || currentPhase.id === 'desensitization' || currentPhase.id === 'intro') return;
        if (!currentPhase.instructions) return;

        const instrDuration = currentPhase.duration / currentPhase.instructions.length;
        const instrTimer = setInterval(() => {
            setInstructionIndex(prev => {
                if (prev >= currentPhase.instructions.length - 1) return prev;
                return prev + 1;
            });
        }, instrDuration * 1000);

        return () => clearInterval(instrTimer);
    }, [isActive, currentPhase]);

    useEffect(() => {
        if (!isActive || currentPhase.id !== 'desensitization' || !audioEnabled) {
            clearInterval(audioTimerRef.current);
            return;
        }

        const beepInterval = (1 / speed) * 500;
        let isLeft = true;

        audioTimerRef.current = setInterval(() => {
            playBeep(isLeft ? -1 : 1);
            isLeft = !isLeft;
        }, beepInterval);

        return () => clearInterval(audioTimerRef.current);
    }, [isActive, currentPhase.id, audioEnabled, speed, playBeep]);

    const startPhase = useCallback(() => {
        initAudio();
        setIsActive(true);
        setElapsed(0);
        setInstructionIndex(0);
    }, [initAudio]);

    const nextPhase = () => {
        if (phaseIndex < emdrPhases.length - 1) {
            setPhaseIndex(prev => prev + 1);
            setIsActive(false);
            setElapsed(0);
            setInstructionIndex(0);
        }
    };

    const resetSession = () => {
        setPhaseIndex(0);
        setIsActive(false);
        setElapsed(0);
        setInstructionIndex(0);
    };

    const formatTime = (seconds) => {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${m}:${s.toString().padStart(2, '0')}`;
    };

    const phaseComplete = currentPhase.duration ? elapsed >= currentPhase.duration : false;
    const isLastPhase = phaseIndex === emdrPhases.length - 1;

    return (
        <div className={styles.session}>
            <div className={styles.phaseProgress}>
                {emdrPhases.map((phase, i) => (
                    <div
                        key={phase.id}
                        className={`${styles.phaseStep} ${i === phaseIndex ? styles.currentStep : ''} ${i < phaseIndex ? styles.completedStep : ''}`}
                    >
                        <div className={styles.stepDot} />
                        <span className={styles.stepLabel}>{phase.name}</span>
                    </div>
                ))}
            </div>

            <div className={styles.content}>
                <h2 className={styles.phaseName}>{currentPhase.name}</h2>

                {currentPhase.id === 'intro' && (
                    <div className={styles.introContent}>
                        {currentPhase.instructions.map((inst, i) => (
                            <p key={i} className={styles.instruction}>{inst}</p>
                        ))}
                        <button onClick={nextPhase} className="btn btn-primary" style={{ marginTop: '2rem', width: '100%' }}>
                            {t('emdrSession.beginSession')}
                        </button>
                    </div>
                )}

                {(currentPhase.id === 'preparation' || currentPhase.id === 'closure' || currentPhase.id === 'installation') && (
                    <div className={styles.guidedContent}>
                        {!isActive && !phaseComplete && (
                            <button onClick={startPhase} className="btn btn-primary" style={{ marginBottom: '2rem' }}>
                                {t('emdrSession.start').replace('{{phase}}', currentPhase.name)}
                            </button>
                        )}

                        {isActive && currentPhase.instructions && (
                            <div className={styles.guidedInstruction}>
                                <p className={styles.largeText}>
                                    {currentPhase.instructions[instructionIndex]}
                                </p>
                                {currentPhase.duration && (
                                    <p className={styles.timer}>{formatTime(currentPhase.duration - elapsed)}</p>
                                )}
                            </div>
                        )}

                        {currentPhase.id === 'installation' && isActive && (
                            <EMDRDot speed={speed * 0.6} direction={direction} isActive={isActive} />
                        )}

                        {phaseComplete && (
                            <div className={styles.phaseCompleteMsg}>
                                <p>{t('emdrSession.phaseComplete')}</p>
                                {!isLastPhase ? (
                                    <button onClick={nextPhase} className="btn btn-primary">
                                        {t('emdrSession.continueTo').replace('{{phase}}', emdrPhases[phaseIndex + 1]?.name || '')}
                                    </button>
                                ) : (
                                    <div>
                                        <p style={{ marginBottom: '1rem', color: 'var(--color-text-muted)' }}>
                                            {t('emdrSession.sessionDone')}
                                        </p>
                                        <button onClick={resetSession} className="btn btn-primary">{t('emdrSession.startNew')}</button>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                )}

                {currentPhase.id === 'desensitization' && (
                    <div className={styles.desensitizationContent}>
                        {currentPhase.instructions && (
                            <div className={styles.desensInstructions}>
                                {currentPhase.instructions.map((inst, i) => (
                                    <p key={i}>{inst}</p>
                                ))}
                            </div>
                        )}

                        {!isActive && !phaseComplete && (
                            <button onClick={startPhase} className="btn btn-primary" style={{ marginBottom: '1.5rem', width: '100%' }}>
                                {t('emdrSession.startEyeMovement')}
                            </button>
                        )}

                        <EMDRDot speed={speed} direction={direction} isActive={isActive} />

                        {isActive && (
                            <p className={styles.timer} style={{ marginTop: '1rem' }}>
                                {t('emdrSession.timeRemaining').replace('{{time}}', formatTime(currentPhase.duration - elapsed))}
                            </p>
                        )}

                        <EMDRControls
                            speed={speed}
                            setSpeed={setSpeed}
                            direction={direction}
                            setDirection={setDirection}
                            volume={volume}
                            setVolume={setVolume}
                            isPlaying={isActive}
                            onTogglePlay={() => setIsActive(!isActive)}
                            audioEnabled={audioEnabled}
                            setAudioEnabled={setAudioEnabled}
                        />

                        {phaseComplete && (
                            <div className={styles.phaseCompleteMsg}>
                                <p>{t('emdrSession.desensComplete')}</p>
                                <button onClick={nextPhase} className="btn btn-primary">
                                    {t('emdrSession.continueTo').replace('{{phase}}', emdrPhases[phaseIndex + 1]?.name || '')}
                                </button>
                            </div>
                        )}
                    </div>
                )}
            </div>

            {phaseIndex > 0 && (
                <button onClick={resetSession} className={styles.resetBtn}>
                    {t('emdrSession.resetSession')}
                </button>
            )}
        </div>
    );
}
