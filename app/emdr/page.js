"use client";

import EMDRSession from '@/components/emdr/EMDRSession';

export default function EMDRPage() {
    return (
        <div className="container mt-lg mb-lg">
            <header className="text-center" style={{ marginBottom: '2rem' }}>
                <h1>Virtual EMDR Session</h1>
                <p style={{ color: 'var(--color-text-muted)', maxWidth: '600px', margin: '0 auto' }}>
                    Eye Movement Desensitization and Reprocessing — A guided practice tool for bilateral stimulation
                </p>
            </header>

            {/* Disclaimer */}
            <div style={{
                padding: '1rem 1.5rem', background: 'hsla(45, 100%, 50%, 0.08)', border: '1px solid hsla(45, 100%, 50%, 0.2)',
                borderRadius: 'var(--radius-md)', marginBottom: '2rem', borderLeft: '4px solid #eab308',
                maxWidth: '800px', margin: '0 auto 2rem'
            }}>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-main)', fontWeight: 500, margin: 0, maxWidth: 'none' }}>
                    ⚠️ This virtual EMDR tool is for supplementary practice only and is not a substitute for professional EMDR therapy conducted by a trained therapist.
                    If you are working through trauma, please do so under the guidance of a qualified mental health professional.
                </p>
            </div>

            <EMDRSession />

            <div className="text-center" style={{ marginTop: '3rem' }}>
                <p style={{ color: 'var(--color-text-muted)', marginBottom: '1rem', fontSize: '0.9rem' }}>
                    Want to experience professional EMDR therapy?
                </p>
                <a href="/contact" className="btn btn-primary">Book a Session with Dr. Kotla</a>
            </div>
        </div>
    );
}
