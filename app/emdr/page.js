"use client";

import Link from 'next/link';
import EMDRSession from '@/components/emdr/EMDRSession';

export default function EMDRPage() {
    return (
        <div className="container mt-lg mb-lg">
            <header className="text-center" style={{ marginBottom: '2rem', maxWidth: '720px', margin: '0 auto 2.5rem' }}>
                <span className="eyebrow">Trauma processing tool</span>
                <h1>Virtual <span className="gradient-text">EMDR</span> Session</h1>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem', marginTop: '1rem' }}>
                    Eye Movement Desensitization and Reprocessing — a guided practice tool for bilateral stimulation.
                </p>
            </header>

            <div
                style={{
                    display: 'flex',
                    gap: '0.85rem',
                    padding: '1rem 1.25rem',
                    background: 'hsla(38, 92%, 55%, 0.1)',
                    border: '1px solid hsla(38, 92%, 55%, 0.25)',
                    borderLeft: '3px solid var(--color-warning)',
                    borderRadius: 'var(--radius-md)',
                    marginBottom: '2.5rem',
                    maxWidth: '820px',
                    marginInline: 'auto',
                }}
            >
                <span style={{ fontSize: '1.1rem', flexShrink: 0 }}>⚠️</span>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-main)', fontWeight: 500, margin: 0, maxWidth: 'none', lineHeight: 1.5 }}>
                    This virtual EMDR tool is for supplementary practice only and is not a substitute for
                    professional EMDR therapy conducted by a trained therapist. If you are working through trauma,
                    please do so under the guidance of a qualified mental health professional.
                </p>
            </div>

            <EMDRSession />

            <div style={{
                textAlign: 'center',
                marginTop: '3rem',
                padding: '2.5rem 1.5rem',
                background: 'var(--color-surface-glass)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-lg)',
                maxWidth: '620px',
                marginInline: 'auto',
            }}>
                <h3 style={{ marginBottom: '0.5rem' }}>Want professional EMDR therapy?</h3>
                <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.25rem' }}>
                    Dr. Kotla provides full guided EMDR sessions with clinical expertise.
                </p>
                <Link href="/contact" className="btn btn-primary">Book a session</Link>
            </div>
        </div>
    );
}
