"use client";

import { useState, useEffect } from 'react';
import { disorders } from '@/data/disorders';
import DisorderCard from '@/components/disorders/DisorderCard';

const UNLOCK_KEY = 'disorders_unlocked';

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
        // Simple code-based unlock - doctor provides this code during consultation
        if (code.toLowerCase().trim() === 'mindwell2024' || code.toLowerCase().trim() === 'drrishitha') {
            localStorage.setItem(UNLOCK_KEY, 'true');
            setIsUnlocked(true);
            setShowCodeInput(false);
            setError('');
        } else {
            setError('Invalid code. Please get the code from Dr. Kotla during your consultation.');
        }
    };

    return (
        <div className="container mt-lg mb-lg">
            <header className="text-center mb-lg">
                <h1>Common Mental Health Disorders</h1>
                <p style={{ color: 'var(--color-text-muted)', maxWidth: '600px', margin: '0 auto' }}>
                    Understanding mental health conditions is the first step toward healing.
                </p>

                {!isUnlocked && (
                    <div style={{ marginTop: '1.5rem' }}>
                        {!showCodeInput ? (
                            <button
                                onClick={() => setShowCodeInput(true)}
                                className="btn btn-outline"
                            >
                                🔓 Unlock Full Content
                            </button>
                        ) : (
                            <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
                                <input
                                    type="text"
                                    value={code}
                                    onChange={(e) => { setCode(e.target.value); setError(''); }}
                                    placeholder="Enter consultation code"
                                    style={{
                                        padding: '0.75rem 1rem', borderRadius: '50px', border: '2px solid var(--color-primary)',
                                        fontSize: '1rem', outline: 'none', width: '250px', background: 'white', color: 'var(--color-text-main)'
                                    }}
                                    onKeyDown={(e) => e.key === 'Enter' && handleUnlock()}
                                />
                                <button onClick={handleUnlock} className="btn btn-primary">Unlock</button>
                                <button
                                    onClick={() => { setShowCodeInput(false); setError(''); }}
                                    style={{ background: 'none', border: 'none', color: 'var(--color-text-muted)', cursor: 'pointer' }}
                                >
                                    Cancel
                                </button>
                            </div>
                        )}
                        {error && <p style={{ color: '#ef4444', fontSize: '0.9rem', marginTop: '0.75rem' }}>{error}</p>}
                        <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginTop: '0.75rem' }}>
                            Detailed information is blurred until after your consultation with Dr. Kotla.
                        </p>
                    </div>
                )}

                {isUnlocked && (
                    <p style={{ color: 'var(--color-accent)', fontWeight: 500, marginTop: '1rem' }}>
                        ✅ Content unlocked
                    </p>
                )}
            </header>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
                {disorders.map(disorder => (
                    <DisorderCard
                        key={disorder.id}
                        disorder={disorder}
                        isUnlocked={isUnlocked}
                    />
                ))}
            </div>

            <div className="text-center mt-lg">
                <p style={{ color: 'var(--color-text-muted)', marginBottom: '1rem', fontSize: '0.9rem' }}>
                    This information is for educational purposes only and does not replace professional diagnosis.
                </p>
                <a href="/contact" className="btn btn-primary">Book a Consultation</a>
            </div>
        </div>
    );
}
