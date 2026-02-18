"use client";

import { useState, useEffect, useRef, useCallback } from 'react';
import { emdrPhases, audioConfig } from '@/data/emdrConfig';
import EMDRDot from './EMDRDot';
import EMDRControls from './EMDRControls';
import { useEMDRAudio } from './EMDRAudio';
import styles from './EMDRSession.module.css';

export default function EMDRSession() {
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

    // Timer for active phases
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

    // Auto-advance instructions for preparation/closure phases
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

    // Bilateral audio beeps during desensitization
    useEffect(() => {
        if (!isActive || currentPhase.id !== 'desensitization' || !audioEnabled) {
            clearInterval(audioTimerRef.current);
            return;
        }

        const beepInterval = (1 / speed) * 500; // beep at each side
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
            {/* Phase Progress */}
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

            {/* Phase Content */}
            <div className={styles.content}>
                <h2 className={styles.phaseName}>{currentPhase.name}</h2>

                {/* Intro Phase */}
                {currentPhase.id === 'intro' && (
                    <div className={styles.introContent}>
                        {currentPhase.instructions.map((inst, i) => (
                            <p key={i} className={styles.instruction}>{inst}</p>
                        ))}
                        <button onClick={nextPhase} className="btn btn-primary" style={{ marginTop: '2rem', width: '100%' }}>
                            Begin Session
                        </button>
                    </div>
                )}

                {/* Preparation & Closure Phases */}
                {(currentPhase.id === 'preparation' || currentPhase.id === 'closure' || currentPhase.id === 'installation') && (
                    <div className={styles.guidedContent}>
                        {!isActive && !phaseComplete && (
                            <button onClick={startPhase} className="btn btn-primary" style={{ marginBottom: '2rem' }}>
                                Start {currentPhase.name}
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
                                <p>Phase complete.</p>
                                {!isLastPhase ? (
                                    <button onClick={nextPhase} className="btn btn-primary">
                                        Continue to {emdrPhases[phaseIndex + 1]?.name}
                                    </button>
                                ) : (
                                    <div>
                                        <p style={{ marginBottom: '1rem', color: 'var(--color-text-muted)' }}>
                                            The session is now complete. Take a moment to notice how you feel. It is normal to continue processing after the session.
                                        </p>
                                        <button onClick={resetSession} className="btn btn-primary">Start New Session</button>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                )}

                {/* Desensitization Phase */}
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
                                Start Eye Movement
                            </button>
                        )}

                        <EMDRDot speed={speed} direction={direction} isActive={isActive} />

                        {isActive && (
                            <p className={styles.timer} style={{ marginTop: '1rem' }}>
                                {formatTime(currentPhase.duration - elapsed)} remaining
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
                                <p>Desensitization phase complete.</p>
                                <button onClick={nextPhase} className="btn btn-primary">
                                    Continue to {emdrPhases[phaseIndex + 1]?.name}
                                </button>
                            </div>
                        )}
                    </div>
                )}
            </div>

            {/* Reset */}
            {phaseIndex > 0 && (
                <button onClick={resetSession} className={styles.resetBtn}>
                    Reset Session
                </button>
            )}
        </div>
    );
}
