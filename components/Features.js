"use client";

import { useLanguage } from '@/components/i18n/LanguageProvider';
import styles from './Features.module.css';

export default function Features() {
    const { t } = useLanguage();

    const features = [
        {
            title: t('features.therapyTitle'),
            description: t('features.therapyDesc'),
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            accent: 'primary',
        },
        {
            title: t('features.medsTitle'),
            description: t('features.medsDesc'),
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M10.5 20.5a7 7 0 0 0 9.9-9.9L13.5 3.6a7 7 0 0 0-9.9 9.9l6.9 7zM8.1 8.1l7.8 7.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            accent: 'accent',
        },
        {
            title: t('features.toolsTitle'),
            description: t('features.toolsDesc'),
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
            ),
            accent: 'tertiary',
        },
        {
            title: t('features.teleTitle'),
            description: t('features.teleDesc'),
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect x="2" y="4" width="20" height="15" rx="2" stroke="currentColor" strokeWidth="1.8" />
                    <path d="M8 22h8M12 19v3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
            ),
            accent: 'primary',
        },
    ];

    return (
        <section className={`container ${styles.section}`}>
            <div className="section-header">
                <span className="eyebrow">{t('features.eyebrow')}</span>
                <h2>{t('features.heading')}</h2>
                <p>{t('features.subheading')}</p>
            </div>
            <div className={styles.grid}>
                {features.map((feature, index) => (
                    <article
                        key={index}
                        className={`${styles.card} hover-lift`}
                        data-accent={feature.accent}
                        style={{ animationDelay: `${index * 0.08}s` }}
                    >
                        <div className={styles.iconWrap}>
                            <span className={styles.iconGlow} aria-hidden="true"></span>
                            <span className={styles.icon}>{feature.icon}</span>
                        </div>
                        <h3>{feature.title}</h3>
                        <p>{feature.description}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}
