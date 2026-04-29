"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/components/i18n/LanguageProvider';
import styles from './About.module.css';

export default function About() {
    const { t } = useLanguage();

    const educationItems = [
        { label: t('about.eduResidency'), detail: t('about.eduResidencyDetail') },
        { label: t('about.eduMbbs'), detail: t('about.eduMbbsDetail') },
    ];

    const specializations = [
        t('about.specDepression'), t('about.specAnxiety'), t('about.specPtsd'), t('about.specOcd'),
        t('about.specAdhd'), t('about.specBipolar'), t('about.specSleep'), t('about.specSubstance'),
        t('about.specPersonality'), t('about.specPsychotherapy'), t('about.specEmdr'), t('about.specMedication'),
    ];

    const memberships = [t('about.member1'), t('about.member2'), t('about.member3')];

    const philosophy = [
        { icon: '🎯', title: t('about.philIcon1Title'), desc: t('about.philIcon1Desc') },
        { icon: '🧪', title: t('about.philIcon2Title'), desc: t('about.philIcon2Desc') },
        { icon: '🌿', title: t('about.philIcon3Title'), desc: t('about.philIcon3Desc') },
        { icon: '🤝', title: t('about.philIcon4Title'), desc: t('about.philIcon4Desc') },
    ];

    return (
        <div className="container mt-lg mb-lg">
            <header className={styles.pageHeader}>
                <span className="eyebrow">{t('about.eyebrow')}</span>
                <h1>
                    {t('about.headingPart1')} <span className="gradient-text">{t('about.headingPart2')}</span>
                </h1>
                <p>{t('about.headingSub')}</p>
            </header>

            <div className={`glass-panel ${styles.introPanel}`}>
                <div className={styles.contentWrapper}>
                    <div className={styles.photo}>
                        <div className={styles.photoInner}>
                            <Image
                                src="/dr-rishitha-kotla.jpeg"
                                alt="Dr. Rishitha Kotla"
                                fill
                                sizes="(max-width: 900px) 280px, 320px"
                                className={styles.photoImage}
                                priority
                            />
                        </div>
                        <div className={styles.photoRing} aria-hidden="true"></div>
                    </div>

                    <div className={styles.textContent}>
                        <h2>{t('about.introTitle')}</h2>
                        <p>{t('about.introBody')}</p>
                        <blockquote className={styles.blockquote}>
                            <span className={styles.quoteMark} aria-hidden="true">&ldquo;</span>
                            {t('about.philosophyQuote')}
                        </blockquote>
                        <div className={styles.actions}>
                            <Link href="/contact" className="btn btn-primary">{t('about.bookConsultation')}</Link>
                            <Link href="/services" className="btn btn-outline">{t('about.viewServices')}</Link>
                        </div>
                    </div>
                </div>
            </div>

            <section className={styles.detailSection}>
                <div className="glass-panel" style={{ padding: '2.5rem' }}>
                    <div className={styles.sectionTop}>
                        <span className="eyebrow">{t('about.credentials')}</span>
                        <h3>{t('about.educationHeading')}</h3>
                    </div>
                    <div className={styles.timeline}>
                        {educationItems.map((item, i) => (
                            <div key={i} className={styles.timelineItem}>
                                <div className={styles.timelineMarker}>{i + 1}</div>
                                <div className={styles.timelineContent}>
                                    <strong>{item.label}</strong>
                                    <p>{item.detail}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className={styles.detailSection}>
                <div className="glass-panel" style={{ padding: '2.5rem', textAlign: 'center' }}>
                    <div className={styles.sectionTop} style={{ textAlign: 'center' }}>
                        <span className="eyebrow">{t('about.focusAreas')}</span>
                        <h3>{t('about.specializationHeading')}</h3>
                    </div>
                    <div className={styles.chipCloud}>
                        {specializations.map((spec, i) => (
                            <span key={i} className={styles.chip}>{spec}</span>
                        ))}
                    </div>
                </div>
            </section>

            <section className={styles.detailSection}>
                <div className="glass-panel" style={{ padding: '2.5rem' }}>
                    <div className={styles.sectionTop} style={{ textAlign: 'center' }}>
                        <span className="eyebrow">{t('about.howWeWork')}</span>
                        <h3>{t('about.philosophyHeading')}</h3>
                    </div>
                    <div className={styles.philosophyGrid}>
                        {philosophy.map((item, i) => (
                            <div key={i} className={styles.philosophyCard}>
                                <div className={styles.philosophyIcon}>{item.icon}</div>
                                <h4>{item.title}</h4>
                                <p>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className={styles.detailSection}>
                <div className={styles.splitRow}>
                    <div className="glass-panel" style={{ padding: '2rem' }}>
                        <span className="eyebrow">{t('about.memberships')}</span>
                        <h3 style={{ marginTop: '0.75rem', marginBottom: '1rem' }}>{t('about.affiliations')}</h3>
                        <ul className={styles.memberList}>
                            {memberships.map((m, i) => (
                                <li key={i}>
                                    <span className={styles.bullet} aria-hidden="true">✓</span>
                                    {m}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="glass-panel" style={{ padding: '2rem' }}>
                        <span className="eyebrow">{t('about.languages')}</span>
                        <h3 style={{ marginTop: '0.75rem', marginBottom: '1rem' }}>{t('about.speakWith')}</h3>
                        <div className={styles.langList}>
                            <span className={styles.lang}>🇬🇧 {t('about.langEnglish')}</span>
                            <span className={styles.lang}>🇮🇳 {t('about.langHindi')}</span>
                            <span className={styles.lang}>🇮🇳 {t('about.langTelugu')}</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className={`glass-panel ${styles.ctaPanel}`}>
                <h3>{t('about.ctaTitle')}</h3>
                <p>{t('about.ctaBody')}</p>
                <div className={styles.actions} style={{ justifyContent: 'center' }}>
                    <Link href="/contact" className="btn btn-primary btn-lg">{t('about.scheduleVisit')}</Link>
                    <Link href="/tools" className="btn btn-outline btn-lg">{t('about.tryTools')}</Link>
                </div>
            </section>
        </div>
    );
}
