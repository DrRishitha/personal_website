"use client";

import Link from 'next/link';
import EMDRSession from '@/components/emdr/EMDRSession';
import { useLanguage } from '@/components/i18n/LanguageProvider';

export default function EMDRPage() {
    const { t } = useLanguage();

    return (
        <div className="container mt-lg mb-lg">
            <header className="text-center" style={{ marginBottom: '2rem', maxWidth: '720px', margin: '0 auto 2.5rem' }}>
                <span className="eyebrow">{t('emdr.eyebrow')}</span>
                <h1>{t('emdr.headingPart1')} <span className="gradient-text">{t('emdr.headingPart2')}</span> {t('emdr.headingSuffix')}</h1>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem', marginTop: '1rem' }}>
                    {t('emdr.subheading')}
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
                    {t('emdr.warning')}
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
                <h3 style={{ marginBottom: '0.5rem' }}>{t('emdr.proHeading')}</h3>
                <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.25rem' }}>
                    {t('emdr.proBody')}
                </p>
                <Link href="/contact" className="btn btn-primary">{t('emdr.bookSession')}</Link>
            </div>
        </div>
    );
}
