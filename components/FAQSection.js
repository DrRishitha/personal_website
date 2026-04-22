"use client";

import Accordion from '@/components/shared/Accordion';
import { faqs } from '@/data/faqs';

export default function FAQSection() {
    return (
        <section style={{ padding: '5rem 0' }}>
            <div className="container">
                <div className="section-header">
                    <span className="eyebrow">Frequently asked</span>
                    <h2>Your questions, answered</h2>
                    <p>Everything you&rsquo;d want to know before scheduling a consultation.</p>
                </div>
                <div style={{ maxWidth: '820px', margin: '0 auto' }}>
                    <Accordion items={faqs} />
                </div>
            </div>
        </section>
    );
}
