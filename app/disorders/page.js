"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { disorders } from '@/data/disorders';
import DisorderCard from '@/components/disorders/DisorderCard';
import styles from './Disorders.module.css';

const UNLOCK_KEY = 'disorders_unlocked';
const VALID_CODES = ['mindwell2024', 'drrishitha'];

export default function DisordersPage() {
    const [isUnlocked, setIsUnlocked] = useState(false);
    const [showCodeInput, setShowCodeInput] = useState(false);
    const [code, setCode] = useState('');
    const [error, setError] = useState('');

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
            setError('Invalid code. Please get the code from Dr. Kotla during your consultation.');
        }
    };

    const relock = () => {
        localStorage.removeItem(UNLOCK_KEY);
        setIsUnlocked(false);
    };

    return (
        <div className="container mt-lg mb-lg">
            <header className={styles.pageHeader}>
                <span className="eyebrow">Educational resource</span>
                <h1>Understanding <span className="gradient-text">mental health disorders</span></h1>
                <p>Learning about a condition is often the first step toward healing. This library covers common disorders with symptoms, treatments, and guidance on when to seek help.</p>

                <div className={styles.statusRow}>
                    {!isUnlocked ? (
                        !showCodeInput ? (
                            <button
                                onClick={() => setShowCodeInput(true)}
                                className="btn btn-outline"
                            >
                                🔓 Unlock full content
                            </button>
                        ) : (
                            <div className={styles.codeInputRow}>
                                <input
                                    type="text"
                                    value={code}
                                    onChange={(e) => { setCode(e.target.value); setError(''); }}
                                    placeholder="Enter consultation code"
                                    className="form-input"
                                    style={{ width: '260px' }}
                                    onKeyDown={(e) => e.key === 'Enter' && handleUnlock()}
                                    autoFocus
                                />
                                <button onClick={handleUnlock} className="btn btn-primary">Unlock</button>
                                <button
                                    onClick={() => { setShowCodeInput(false); setError(''); setCode(''); }}
                                    className="btn btn-ghost"
                                >
                                    Cancel
                                </button>
                            </div>
                        )
                    ) : (
                        <div className={styles.unlockedBadge}>
                            <span>✅ Content unlocked</span>
                            <button onClick={relock} className={styles.relockLink}>Re-lock</button>
                        </div>
                    )}
                    {error && <p className={styles.error}>{error}</p>}
                    {!isUnlocked && (
                        <p className={styles.hint}>
                            Detailed information is blurred until after your consultation with Dr. Kotla.
                        </p>
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
                <p>This information is for educational purposes only and does not replace professional diagnosis.</p>
                <Link href="/contact" className="btn btn-primary">Book a Consultation</Link>
            </div>
        </div>
    );
}
