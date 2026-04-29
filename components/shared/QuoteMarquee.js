"use client";

import { useEffect, useState } from 'react';
import { translatedQuotes } from '@/data/quotesTranslated';
import { useLanguage } from '@/components/i18n/LanguageProvider';
import styles from './QuoteMarquee.module.css';

const ROTATION_MS = 8000;

export default function QuoteMarquee() {
    const { lang, t } = useLanguage();
    const [index, setIndex] = useState(() => Math.floor(Math.random() * translatedQuotes.length));
    const [phase, setPhase] = useState('in');

    useEffect(() => {
        const interval = setInterval(() => {
            setPhase('out');
            setTimeout(() => {
                setIndex((i) => (i + 1) % translatedQuotes.length);
                setPhase('in');
            }, 450);
        }, ROTATION_MS);
        return () => clearInterval(interval);
    }, []);

    const entry = translatedQuotes[index];
    const quote = (entry && (entry[lang] || entry.en)) || { text: '', author: '' };

    return (
        <section className={styles.section} aria-label="Inspirational quote">
            <div className={`container ${styles.container}`}>
                <span className={styles.eyebrow}>{t('quote.eyebrow')}</span>
                <figure
                    key={index}
                    className={`${styles.figure} ${phase === 'out' ? styles.fadeOut : styles.fadeIn}`}
                >
                    <span className={styles.openMark} aria-hidden="true">&ldquo;</span>
                    <blockquote className={styles.quote}>{quote.text}</blockquote>
                    <figcaption className={styles.author}>— {quote.author}</figcaption>
                </figure>
                <div className={styles.dots} role="tablist" aria-label="Quote indicator">
                    {translatedQuotes.slice(0, 5).map((_, i) => {
                        const active = i === index % 5;
                        return (
                            <span
                                key={i}
                                className={`${styles.dot} ${active ? styles.dotActive : ''}`}
                                aria-hidden="true"
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
