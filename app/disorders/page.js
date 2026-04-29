"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { disordersByLang } from '@/data/disordersFaqs.localized';
import DisorderCard from '@/components/disorders/DisorderCard';
import { useLanguage } from '@/components/i18n/LanguageProvider';
import styles from './Disorders.module.css';

const UNLOCK_KEY = 'disorders_unlocked';
const VALID_CODES = ['mindwell2024', 'drrishitha'];

export default function DisordersPage() {
    const { t, lang } = useLanguage();
    const [isUnlocked, setIsUnlocked] = useState(false);
    const [showCodeInput, setShowCodeInput] = useState(false);
    const [code, setCode] = useState('');
    const [error, setError] = useState('');

    const disorders = disordersByLang[lang] || disordersByLang.en;

    useEffect(() => {
        const unlocked = localStorage.getItem(UNLOCK_KEY);
        if (unlocked === 'true') setIsUnlocked(true);
    }, []);

    const handleUnlock = () => {
        if (VALID_CODES.includes(code.toLowerCase().trim())) {
            localStorage.setItem(UNLOCK_KEY, 'true');
            setIsUnlocked(true);
            setShowCodeInput(false);
            setError('');
        } else {
            setError(t('disorders.invalidCode'));
        }
    };

    const relock = () => {
        localStorage.removeItem(UNLOCK_KEY);
        setIsUnlocked(false);
    };

    return (
        <div className="container mt-lg mb-lg">
            <header className={styles.pageHeader}>
                <span className="eyebrow">{t('disorders.eyebrow')}</span>
                <h1>{t('disorders.headingPart1')} <span className="gradient-text">{t('disorders.headingPart2')}</span></h1>
                <p>{t('disorders.subheading')}</p>

                <div className={styles.statusRow}>
                    {!isUnlocked ? (
                        !showCodeInput ? (
                            <button
                                onClick={() => setShowCodeInput(true)}
                                className="btn btn-outline"
                            >
                                {t('disorders.unlockBtn')}
                            </button>
                        ) : (
                            <div className={styles.codeInputRow}>
                                <input
                                    type="text"
                                    value={code}
                                    onChange={(e) => { setCode(e.target.value); setError(''); }}
                                    placeholder={t('disorders.codePlaceholder')}
                                    className="form-input"
                                    style={{ width: '260px', maxWidth: '100%' }}
                                    onKeyDown={(e) => e.key === 'Enter' && handleUnlock()}
                                    autoFocus
                                />
                                <button onClick={handleUnlock} className="btn btn-primary">{t('disorders.unlock')}</button>
                                <button
                                    onClick={() => { setShowCodeInput(false); setError(''); setCode(''); }}
                                    className="btn btn-ghost"
                                >
                                    {t('disorders.cancel')}
                                </button>
                            </div>
                        )
                    ) : (
                        <div className={styles.unlockedBadge}>
                            <span>{t('disorders.unlocked')}</span>
                            <button onClick={relock} className={styles.relockLink}>{t('disorders.relock')}</button>
                        </div>
                    )}
                    {error && <p className={styles.error}>{error}</p>}
                    {!isUnlocked && (
                        <p className={styles.hint}>{t('disorders.hint')}</p>
                    )}
                </div>
            </header>

            <div className={styles.grid}>
                {disorders.map((disorder, i) => (
                    <div key={disorder.id} style={{ animationDelay: `${i * 0.04}s` }}>
                        <DisorderCard disorder={disorder} isUnlocked={isUnlocked} />
                    </div>
                ))}
            </div>

            <div className={styles.footer}>
                <p>{t('disorders.disclaimer')}</p>
                <Link href="/contact" className="btn btn-primary">{t('disorders.bookConsultation')}</Link>
            </div>
        </div>
    );
}
