"use client";

import Carousel from '@/components/shared/Carousel';
import { testimonialsByLang } from '@/data/practice.localized';
import { useLanguage } from '@/components/i18n/LanguageProvider';
import styles from './Testimonials.module.css';

export default function Testimonials() {
    const { t, lang } = useLanguage();
    const testimonials = testimonialsByLang[lang] || testimonialsByLang.en;

    return (
        <section className={styles.section}>
            <div className={styles.ambient} aria-hidden="true"></div>
            <div className="container">
                <div className="section-header">
                    <span className="eyebrow" style={{ background: 'hsla(255, 100%, 100%, 0.12)', color: 'white', borderColor: 'hsla(255, 100%, 100%, 0.2)' }}>
                        {t('testimonials.eyebrow')}
                    </span>
                    <h2 className={styles.heading}>{t('testimonials.heading')}</h2>
                </div>

                <div className={styles.wrapper}>
                    <svg className={styles.quoteMark} viewBox="0 0 40 30" aria-hidden="true">
                        <path d="M11 0H0l6 15v15h15V10h-10zM35 0H24l6 15v15h15V10H35z" fill="currentColor" />
                    </svg>
                    <Carousel autoPlay={7000} showDots showArrows={false}>
                        {testimonials.map(item => (
                            <div key={item.id} className={styles.slide}>
                                <blockquote className={styles.quote}>
                                    &ldquo;{item.quote}&rdquo;
                                </blockquote>
                                <cite className={styles.author}>
                                    <span className={styles.authorAvatar}>
                                        {item.author?.charAt(0) || 'A'}
                                    </span>
                                    <span>
                                        <strong>{item.author}</strong>
                                        <small>{item.condition}</small>
                                    </span>
                                </cite>
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>
        </section>
    );
}
