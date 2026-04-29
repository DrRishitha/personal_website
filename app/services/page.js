"use client";

import Link from 'next/link';
import { therapyModalitiesByLang, deaddictionMethodsByLang } from '@/data/practice.localized';
import { medicationCategoriesByLang, medicationDisclaimerByLang } from '@/data/clinical.localized';
import MedicationAccordion from '@/components/MedicationAccordion';
import DeaddictionCarousel from '@/components/deaddiction/DeaddictionCarousel';
import { useLanguage } from '@/components/i18n/LanguageProvider';
import styles from './Services.module.css';

export default function Services() {
    const { t, lang } = useLanguage();

    const therapyModalities = therapyModalitiesByLang[lang] || therapyModalitiesByLang.en;
    const deaddictionMethods = deaddictionMethodsByLang[lang] || deaddictionMethodsByLang.en;
    const medicationCategories = medicationCategoriesByLang[lang] || medicationCategoriesByLang.en;
    const medicationDisclaimer = medicationDisclaimerByLang[lang] || medicationDisclaimerByLang.en;

    const services = [
        { title: t('services.svc1Title'), description: t('services.svc1Desc'), duration: t('services.svc1Duration'), icon: '🩺' },
        { title: t('services.svc2Title'), description: t('services.svc2Desc'), duration: t('services.svc2Duration'), icon: '💊' },
        { title: t('services.svc3Title'), description: t('services.svc3Desc'), duration: t('services.svc3Duration'), icon: '🗣️' },
        { title: t('services.svc4Title'), description: t('services.svc4Desc'), duration: t('services.svc4Duration'), icon: '🔍' },
    ];

    return (
        <div className="container mt-lg mb-lg">
            <header className={styles.pageHeader}>
                <span className="eyebrow">{t('services.eyebrow')}</span>
                <h1>{t('services.heading')}</h1>
                <p>{t('services.subheading')}</p>
            </header>

            <section className={styles.servicesGrid}>
                {services.map((service, idx) => (
                    <article key={idx} className={`glass-panel ${styles.serviceCard}`}>
                        <div className={styles.serviceTop}>
                            <div className={styles.serviceIcon}>{service.icon}</div>
                            <span className={styles.serviceDuration}>{service.duration}</span>
                        </div>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                        <div className={styles.serviceFooter}>
                            <span className={styles.servicePrice}>{t('services.priceLabel')}</span>
                            <Link href="/contact" className={styles.serviceLink}>
                                {t('services.bookCta')}
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                                    <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                        </div>
                    </article>
                ))}
            </section>

            <section className={styles.subSection}>
                <div className={styles.subHeader}>
                    <span className="eyebrow">{t('services.modalitiesEyebrow')}</span>
                    <h2>{t('services.modalitiesHeading')}</h2>
                    <p>{t('services.modalitiesSub')}</p>
                </div>
                <div className={styles.modalityGrid}>
                    {therapyModalities.map(modality => (
                        <article key={modality.id} className={`glass-panel ${styles.modalityCard}`}>
                            <div className={styles.modalityIcon}>{modality.icon}</div>
                            <h3>{modality.name}</h3>
                            <p>{modality.description}</p>
                            <div className={styles.modalityChips}>
                                {modality.bestFor.map((condition, i) => (
                                    <span key={i} className={styles.modalityChip}>{condition}</span>
                                ))}
                            </div>
                            {modality.id === 'emdr' && (
                                <Link href="/emdr" className={styles.modalityLink}>
                                    {t('services.tryEmdr')}
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                                        <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </Link>
                            )}
                        </article>
                    ))}
                </div>
            </section>

            <section className={styles.subSection} style={{ maxWidth: '940px', margin: '0 auto 4rem' }}>
                <div className={styles.subHeader}>
                    <span className="eyebrow">{t('services.medGuideEyebrow')}</span>
                    <h2>{t('services.medGuideHeading')}</h2>
                    <p>{t('services.medGuideSub')}</p>
                </div>

                <div className={styles.disclaimerBox}>
                    <span>⚠️</span>
                    <p>{medicationDisclaimer}</p>
                </div>

                <MedicationAccordion categories={medicationCategories} />
            </section>

            <section className={styles.subSection}>
                <div className={styles.subHeader}>
                    <span className="eyebrow">{t('services.recoveryEyebrow')}</span>
                    <h2>{t('services.recoveryHeading')}</h2>
                    <p>{t('services.recoverySub')}</p>
                </div>
                <DeaddictionCarousel methods={deaddictionMethods} />
            </section>

            <section className={`glass-panel ${styles.ctaPanel}`}>
                <h3>{t('services.ctaTitle')}</h3>
                <p>{t('services.ctaBody')}</p>
                <Link href="/contact" className="btn btn-primary btn-lg">{t('services.ctaButton')}</Link>
            </section>
        </div>
    );
}
