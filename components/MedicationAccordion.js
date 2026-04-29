"use client";

import Accordion from '@/components/shared/Accordion';
import { useLanguage } from '@/components/i18n/LanguageProvider';

export default function MedicationAccordion({ categories }) {
    const { t } = useLanguage();
    const items = categories.map(cat => ({
        question: cat.category,
        answer: (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {cat.commonMedications.map((med, i) => (
                    <div key={i} style={{ padding: '0.75rem 1rem', background: 'hsla(205, 50%, 25%, 0.03)', borderRadius: 'var(--radius-md)' }}>
                        <strong style={{ color: 'var(--color-primary)', fontSize: '0.95rem' }}>{med.name}</strong>
                        <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', margin: '0.25rem 0', lineHeight: 1.5 }}>
                            {t('med.examplesLabel')} {med.examples}
                        </p>
                        <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', margin: '0.25rem 0' }}>
                            {t('med.usedForLabel')} {med.commonUses}
                        </p>
                        <p style={{ fontSize: '0.8rem', color: 'var(--color-accent)', margin: '0.25rem 0 0', fontWeight: 500 }}>
                            {t('med.noteLabel')} {med.importantNotes}
                        </p>
                    </div>
                ))}
            </div>
        )
    }));

    return <Accordion items={items} allowMultiple />;
}
