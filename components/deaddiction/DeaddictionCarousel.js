"use client";

import { useRef } from 'react';
import { deaddictionMethodsByLang } from '@/data/practice.localized';
import { useLanguage } from '@/components/i18n/LanguageProvider';
import styles from './DeaddictionCarousel.module.css';

export default function DeaddictionCarousel({ methods }) {
    const { lang } = useLanguage();
    const fallback = deaddictionMethodsByLang[lang] || deaddictionMethodsByLang.en;
    const items = methods || fallback;
    const scrollRef = useRef(null);

    const scrollLeft = () => {
        scrollRef.current?.scrollBy({ left: -320, behavior: 'smooth' });
    };

    const scrollRight = () => {
        scrollRef.current?.scrollBy({ left: 320, behavior: 'smooth' });
    };

    return (
        <div className={styles.wrapper}>
            <button className={`${styles.arrow} ${styles.arrowLeft}`} onClick={scrollLeft} aria-label="Scroll left">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>

            <div className={styles.scrollContainer} ref={scrollRef}>
                {items.map(method => (
                    <div key={method.id} className={styles.card}>
                        <span className={styles.icon}>{method.icon}</span>
                        <h4 className={styles.name}>{method.name}</h4>
                        <p className={styles.description}>{method.description}</p>
                        <ul className={styles.keyPoints}>
                            {method.keyPoints.map((point, i) => (
                                <li key={i}>{point}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <button className={`${styles.arrow} ${styles.arrowRight}`} onClick={scrollRight} aria-label="Scroll right">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
        </div>
    );
}
