"use client";

import Link from 'next/link';
import HelplineNumber from '@/components/shared/HelplineNumber';
import { useLanguage } from '@/components/i18n/LanguageProvider';
import styles from './Hero.module.css';

export default function Hero() {
    const { t } = useLanguage();

    return (
        <section className={styles.hero}>
            <div className={styles.ambient} aria-hidden="true">
                <div className={`${styles.blob} ${styles.blobA}`}></div>
                <div className={`${styles.blob} ${styles.blobB}`}></div>
                <div className={`${styles.blob} ${styles.blobC}`}></div>
            </div>

            <div className={`container ${styles.container}`}>
                <div className={styles.content}>
                    <span className={styles.eyebrow}>
                        <span className={styles.dot} aria-hidden="true"></span>
                        {t('hero.eyebrow')}
                    </span>
                    <h1 className={styles.title}>
                        {t('hero.titlePart1')} <span className="gradient-text">{t('hero.titlePart2')}</span>
                    </h1>
                    <p className={styles.subtitle}>{t('hero.subtitle')}</p>
                    <div className={styles.actions}>
                        <Link href="/contact" className="btn btn-primary btn-lg">
                            {t('hero.bookConsultation')}
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Link>
                        <Link href="/tools" className="btn btn-outline btn-lg">
                            {t('hero.trySelfHelp')}
                        </Link>
                    </div>

                    <div className={styles.trustRow}>
                        <div className={styles.trustItem}>
                            <strong>9+</strong>
                            <span>{t('hero.freeTools')}</span>
                        </div>
                        <div className={styles.trustDivider} aria-hidden="true"></div>
                        <div className={styles.trustItem}>
                            <strong>3</strong>
                            <span>{t('hero.languages')}</span>
                        </div>
                    </div>

                    <div className={styles.helplineBanner}>
                        <HelplineNumber compact />
                    </div>
                </div>

                <div className={styles.visual} aria-hidden="true">
                    <div className={styles.visualCard}>
                        <div className={styles.avatar}>
                            <span role="img" aria-label="Doctor">🩺</span>
                        </div>
                        <div className={styles.visualContent}>
                            <span className={styles.liveDot}></span>
                            <h4>{t('hero.acceptingTitle')}</h4>
                            <p>{t('hero.acceptingDesc')}</p>
                        </div>
                        <div className={styles.chipRow}>
                            <span className={styles.chip}>CBT</span>
                            <span className={styles.chip}>EMDR</span>
                            <span className={styles.chip}>Medication</span>
                            <span className={styles.chip}>Teletherapy</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
