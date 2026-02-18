"use client";

import Accordion from '@/components/shared/Accordion';
import { faqs } from '@/data/faqs';

export default function FAQSection() {
    return (
        <section style={{ padding: '6rem 0' }}>
            <div className="container">
                <h2 className="text-center" style={{ marginBottom: '3rem' }}>Frequently Asked Questions</h2>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <Accordion items={faqs} />
                </div>
            </div>
        </section>
    );
}
