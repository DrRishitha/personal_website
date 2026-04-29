"use client";

import { useLanguage } from '@/components/i18n/LanguageProvider';
import styles from './DisorderCard.module.css';

export default function DisorderCard({ disorder, isUnlocked }) {
    const { t } = useLanguage();

    return (
        <article className={styles.card}>
            <div className={styles.header}>
                <span className={styles.iconWrap}>{disorder.icon}</span>
                <div>
                    <h3 className={styles.title}>{disorder.title}</h3>
                    <span className={styles.category}>{disorder.category}</span>
                </div>
            </div>

            <div className={`${styles.content} ${!isUnlocked ? styles.blurred : ''}`}>
                <p className={styles.description}>{disorder.briefDescription}</p>

                <div className={styles.section}>
                    <h4>{t('disorders.commonSymptoms')}</h4>
                    <ul className={styles.list}>
                        {disorder.symptoms.map((s, i) => (
                            <li key={i}>{s}</li>
                        ))}
                    </ul>
                </div>

                <div className={styles.section}>
                    <h4>{t('disorders.treatmentApproaches')}</h4>
                    <div className={styles.tags}>
                        {disorder.treatmentApproaches.map((tx, i) => (
                            <span key={i} className={styles.tag}>{tx}</span>
                        ))}
                    </div>
                </div>

                <div className={styles.section}>
                    <h4>{t('disorders.whenToSeek')}</h4>
                    <p>{disorder.whenToSeekHelp}</p>
                </div>
            </div>

            {!isUnlocked && (
                <div className={styles.lockOverlay}>
                    <span className={styles.lockIcon}>🔒</span>
                    <p>{t('disorders.afterConsultation')}</p>
                </div>
            )}
        </article>
    );
}
