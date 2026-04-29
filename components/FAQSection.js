"use client";

import Accordion from '@/components/shared/Accordion';
import { faqsByLang } from '@/data/disordersFaqs.localized';
import { useLanguage } from '@/components/i18n/LanguageProvider';

export default function FAQSection() {
    const { t, lang } = useLanguage();
    const faqs = faqsByLang[lang] || faqsByLang.en;

    return (
        <section style={{ padding: '5rem 0' }}>
            <div className="container">
                <div className="section-header">
                    <span className="eyebrow">{t('faq.eyebrow')}</span>
                    <h2>{t('faq.heading')}</h2>
                    <p>{t('faq.subheading')}</p>
                </div>
                <div style={{ maxWidth: '820px', margin: '0 auto' }}>
                    <Accordion items={faqs} />
                </div>
            </div>
        </section>
    );
}
