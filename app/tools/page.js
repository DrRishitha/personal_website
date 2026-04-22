"use client";

import { useState } from 'react';
import Link from 'next/link';
import DepressionScreener from '@/components/tools/DepressionScreener';
import AnxietyScreener from '@/components/tools/AnxietyScreener';
import StressScreener from '@/components/tools/StressScreener';
import PTSDScreener from '@/components/tools/PTSDScreener';
import SleepScreener from '@/components/tools/SleepScreener';
import AddictionScreener from '@/components/tools/AddictionScreener';
import BreathingExercise from '@/components/tools/BreathingExercise';
import JPMRExercise from '@/components/tools/JPMRExercise';
import styles from './Tools.module.css';

const toolCards = [
    { id: 'depression', title: 'Depression Screener', icon: '🌧️', description: 'PHQ-9 assessment for depressive symptom severity.', category: 'Screening', minutes: '3 min' },
    { id: 'anxiety', title: 'Anxiety Screener', icon: '😰', description: 'GAD-7 questionnaire to understand anxiety levels.', category: 'Screening', minutes: '2 min' },
    { id: 'stress', title: 'Stress Scale', icon: '🔥', description: 'PSS-10 measures perceived stress over the last month.', category: 'Screening', minutes: '4 min' },
    { id: 'ptsd', title: 'PTSD Screen', icon: '⚡', description: 'PC-PTSD-5 brief screen for post-traumatic stress.', category: 'Screening', minutes: '2 min' },
    { id: 'sleep', title: 'Sleep Quality', icon: '🌙', description: 'Insomnia Severity Index for sleep difficulties.', category: 'Screening', minutes: '2 min' },
    { id: 'addiction', title: 'Addiction Screen', icon: '🚫', description: 'CAGE questionnaire for alcohol-related concerns.', category: 'Screening', minutes: '1 min' },
    { id: 'breathing-box', title: 'Box Breathing (4·4·4)', icon: '🫁', description: 'Guided 4-4-4 breathing to calm the nervous system.', category: 'Relaxation', minutes: '3 min' },
    { id: 'breathing-426', title: 'Relaxing Breath (4·2·6)', icon: '🌊', description: 'A 4-2-6 rhythm for deep relaxation and sleep prep.', category: 'Relaxation', minutes: '3 min' },
    { id: 'jpmr', title: 'Progressive Muscle Relaxation', icon: '💪', description: 'Guided JPMR session to systematically release tension.', category: 'Relaxation', minutes: '15 min' },
];

export default function Tools() {
    const [activeTool, setActiveTool] = useState(null);

    const renderTool = () => {
        switch (activeTool) {
            case 'depression': return <DepressionScreener />;
            case 'anxiety': return <AnxietyScreener />;
            case 'stress': return <StressScreener />;
            case 'ptsd': return <PTSDScreener />;
            case 'sleep': return <SleepScreener />;
            case 'addiction': return <AddictionScreener />;
            case 'breathing-box': return <BreathingExercise inhale={4} hold={4} exhale={4} title="Box Breathing (4·4·4)" />;
            case 'breathing-426': return <BreathingExercise inhale={4} hold={2} exhale={6} title="Relaxing Breath (4·2·6)" />;
            case 'jpmr': return <JPMRExercise />;
            default: return null;
        }
    };

    const screeningTools = toolCards.filter(t => t.category === 'Screening');
    const relaxationTools = toolCards.filter(t => t.category === 'Relaxation');

    return (
        <div className="container mt-lg mb-lg">
            {activeTool ? (
                <div className="fade-in-up">
                    <button
                        onClick={() => setActiveTool(null)}
                        className={`btn btn-ghost ${styles.backBtn}`}
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                            <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Back to all tools
                    </button>
                    {renderTool()}
                </div>
            ) : (
                <>
                    <header className={styles.header}>
                        <span className="eyebrow">Self-help toolkit</span>
                        <h1>Free, confidential tools for <span className="gradient-text">everyday well-being</span></h1>
                        <p style={{ color: 'var(--color-text-muted)', maxWidth: '640px', margin: '1rem auto 0', fontSize: '1.05rem' }}>
                            Research-backed screeners and guided exercises you can use anytime.
                            Your results stay on your device — nothing is uploaded.
                        </p>
                    </header>

                    <div className={styles.sectionTitle}>
                        <h2>Mental health screening</h2>
                        <span className={styles.count}>{screeningTools.length} tools</span>
                    </div>
                    <div className={styles.grid}>
                        {screeningTools.map((tool, i) => (
                            <button
                                key={tool.id}
                                className={styles.card}
                                data-category={tool.category}
                                onClick={() => setActiveTool(tool.id)}
                                style={{ animationDelay: `${i * 0.04}s` }}
                            >
                                <div className={styles.iconTile}>{tool.icon}</div>
                                <div className={styles.cardTitleRow}>
                                    <h3>{tool.title}</h3>
                                    <span className={styles.tag}>{tool.minutes}</span>
                                </div>
                                <p>{tool.description}</p>
                                <span className={styles.cardCta}>
                                    Start assessment
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                                        <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </span>
                            </button>
                        ))}
                    </div>

                    <div className={styles.sectionTitle}>
                        <h2>Relaxation & exercises</h2>
                        <span className={styles.count}>{relaxationTools.length + 1} tools</span>
                    </div>
                    <div className={styles.grid}>
                        {relaxationTools.map((tool, i) => (
                            <button
                                key={tool.id}
                                className={styles.card}
                                data-category={tool.category}
                                onClick={() => setActiveTool(tool.id)}
                                style={{ animationDelay: `${i * 0.04}s` }}
                            >
                                <div className={styles.iconTile}>{tool.icon}</div>
                                <div className={styles.cardTitleRow}>
                                    <h3>{tool.title}</h3>
                                    <span className={styles.tag}>{tool.minutes}</span>
                                </div>
                                <p>{tool.description}</p>
                                <span className={styles.cardCta}>
                                    Start exercise
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                                        <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </span>
                            </button>
                        ))}

                        <Link
                            href="/emdr"
                            className={`${styles.card} ${styles.emdrCard}`}
                            data-category="Relaxation"
                        >
                            <div className={styles.iconTile}>👁️</div>
                            <div className={styles.cardTitleRow}>
                                <h3>Virtual EMDR</h3>
                                <span className={styles.tag}>30 min</span>
                            </div>
                            <p>Full guided EMDR session with bilateral stimulation for trauma processing.</p>
                            <span className={styles.cardCta}>
                                Open session
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                                    <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </span>
                        </Link>
                    </div>

                    <div style={{ textAlign: 'center', padding: '3rem 1rem 1rem' }}>
                        <p style={{ color: 'var(--color-text-muted)', marginBottom: '1rem' }}>
                            Need personalized support beyond self-assessment?
                        </p>
                        <Link href="/contact" className="btn btn-primary">
                            Book a Consultation
                        </Link>
                    </div>
                </>
            )}
        </div>
    );
}
