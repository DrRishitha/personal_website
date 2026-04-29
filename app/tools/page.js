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
import { useLanguage } from '@/components/i18n/LanguageProvider';
import styles from './Tools.module.css';

export default function Tools() {
    const [activeTool, setActiveTool] = useState(null);
    const { t } = useLanguage();

    const toolCards = [
        { id: 'depression', title: t('tools.depressionTitle'), icon: '🌧️', description: t('tools.depressionDesc'), category: 'Screening', minutes: `3 ${t('tools.minute')}` },
        { id: 'anxiety', title: t('tools.anxietyTitle'), icon: '😰', description: t('tools.anxietyDesc'), category: 'Screening', minutes: `2 ${t('tools.minute')}` },
        { id: 'stress', title: t('tools.stressTitle'), icon: '🔥', description: t('tools.stressDesc'), category: 'Screening', minutes: `4 ${t('tools.minute')}` },
        { id: 'ptsd', title: t('tools.ptsdTitle'), icon: '⚡', description: t('tools.ptsdDesc'), category: 'Screening', minutes: `2 ${t('tools.minute')}` },
        { id: 'sleep', title: t('tools.sleepTitle'), icon: '🌙', description: t('tools.sleepDesc'), category: 'Screening', minutes: `2 ${t('tools.minute')}` },
        { id: 'addiction', title: t('tools.addictionTitle'), icon: '🚫', description: t('tools.addictionDesc'), category: 'Screening', minutes: `1 ${t('tools.minute')}` },
        { id: 'breathing-box', title: t('tools.boxBreathingTitle'), icon: '🫁', description: t('tools.boxBreathingDesc'), category: 'Relaxation', minutes: `3 ${t('tools.minute')}` },
        { id: 'breathing-426', title: t('tools.relaxBreathingTitle'), icon: '🌊', description: t('tools.relaxBreathingDesc'), category: 'Relaxation', minutes: `3 ${t('tools.minute')}` },
        { id: 'jpmr', title: t('tools.jpmrTitle'), icon: '💪', description: t('tools.jpmrDesc'), category: 'Relaxation', minutes: t('tools.minutes15') },
    ];

    const renderTool = () => {
        switch (activeTool) {
            case 'depression': return <DepressionScreener />;
            case 'anxiety': return <AnxietyScreener />;
            case 'stress': return <StressScreener />;
            case 'ptsd': return <PTSDScreener />;
            case 'sleep': return <SleepScreener />;
            case 'addiction': return <AddictionScreener />;
            case 'breathing-box': return <BreathingExercise inhale={4} hold={4} exhale={4} title={t('tools.boxBreathingTitle')} />;
            case 'breathing-426': return <BreathingExercise inhale={4} hold={2} exhale={6} title={t('tools.relaxBreathingTitle')} />;
            case 'jpmr': return <JPMRExercise />;
            default: return null;
        }
    };

    const screeningTools = toolCards.filter(tc => tc.category === 'Screening');
    const relaxationTools = toolCards.filter(tc => tc.category === 'Relaxation');

    return (
        <div className="container mt-lg mb-lg">
            {activeTool ? (
                <div className="fade-in-up">
                    <button
                        onClick={() => setActiveTool(null)}
                        className={`btn btn-ghost ${styles.backBtn}`}
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                            <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {t('tools.backToAll')}
                    </button>
                    {renderTool()}
                </div>
            ) : (
                <>
                    <header className={styles.header}>
                        <span className="eyebrow">{t('tools.eyebrow')}</span>
                        <h1>{t('tools.headingPart1')} <span className="gradient-text">{t('tools.headingPart2')}</span></h1>
                        <p style={{ color: 'var(--color-text-muted)', maxWidth: '640px', margin: '1rem auto 0', fontSize: '1.05rem' }}>
                            {t('tools.subheading')}
                        </p>
                    </header>

                    <div className={styles.sectionTitle}>
                        <h2>{t('tools.screeningHeading')}</h2>
                        <span className={styles.count}>{screeningTools.length} {t('tools.toolsCount')}</span>
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
                                    {t('tools.startAssessment')}
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                                        <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                            </button>
                        ))}
                    </div>

                    <div className={styles.sectionTitle}>
                        <h2>{t('tools.relaxationHeading')}</h2>
                        <span className={styles.count}>{relaxationTools.length + 1} {t('tools.toolsCount')}</span>
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
                                    {t('tools.startExercise')}
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                                        <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
                                <h3>{t('tools.emdrTitle')}</h3>
                                <span className={styles.tag}>{t('tools.minutes30')}</span>
                            </div>
                            <p>{t('tools.emdrDesc')}</p>
                            <span className={styles.cardCta}>
                                {t('tools.openSession')}
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                                    <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                        </Link>
                    </div>

                    <div style={{ textAlign: 'center', padding: '3rem 1rem 1rem' }}>
                        <p style={{ color: 'var(--color-text-muted)', marginBottom: '1rem' }}>
                            {t('tools.needSupport')}
                        </p>
                        <Link href="/contact" className="btn btn-primary">
                            {t('tools.bookConsultation')}
                        </Link>
                    </div>
                </>
            )}
        </div>
    );
}
