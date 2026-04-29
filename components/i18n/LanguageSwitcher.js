"use client";

import { useEffect, useRef, useState } from 'react';
import { useLanguage } from './LanguageProvider';
import styles from './LanguageSwitcher.module.css';

const SHORT_CODE = { en: 'EN', hi: 'हि', te: 'తె' };

export default function LanguageSwitcher({ variant = 'desktop' }) {
    const { lang, setLang, languages, t } = useLanguage();
    const [open, setOpen] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        if (!open) return;
        const handleClick = (e) => {
            if (containerRef.current && !containerRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        const handleKey = (e) => {
            if (e.key === 'Escape') setOpen(false);
        };
        document.addEventListener('mousedown', handleClick);
        document.addEventListener('keydown', handleKey);
        return () => {
            document.removeEventListener('mousedown', handleClick);
            document.removeEventListener('keydown', handleKey);
        };
    }, [open]);

    const current = languages.find((l) => l.code === lang) || languages[0];

    return (
        <div
            ref={containerRef}
            className={`${styles.wrapper} ${variant === 'mobile' ? styles.wrapperMobile : ''}`}
        >
            <button
                type="button"
                className={styles.trigger}
                onClick={() => setOpen((v) => !v)}
                aria-haspopup="listbox"
                aria-expanded={open}
                aria-label={t('nav.language')}
            >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
                    <path
                        d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                </svg>
                <span className={styles.code}>{SHORT_CODE[lang] || 'EN'}</span>
                <span className={styles.native}>{current.native}</span>
                <svg
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                    className={`${styles.caret} ${open ? styles.caretOpen : ''}`}
                >
                    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>

            {open && (
                <ul className={styles.menu} role="listbox" aria-label={t('nav.language')}>
                    {languages.map((l) => (
                        <li key={l.code}>
                            <button
                                type="button"
                                role="option"
                                aria-selected={lang === l.code}
                                className={`${styles.option} ${lang === l.code ? styles.optionActive : ''}`}
                                onClick={() => {
                                    setLang(l.code);
                                    setOpen(false);
                                }}
                            >
                                <span className={styles.optionNative}>{l.native}</span>
                                <span className={styles.optionLabel}>{l.label}</span>
                                {lang === l.code && (
                                    <svg
                                        width="14"
                                        height="14"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        aria-hidden="true"
                                        className={styles.check}
                                    >
                                        <path
                                            d="M5 13l4 4L19 7"
                                            stroke="currentColor"
                                            strokeWidth="2.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                )}
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
