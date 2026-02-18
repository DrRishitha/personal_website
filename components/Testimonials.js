"use client";

import Carousel from '@/components/shared/Carousel';
import { testimonials } from '@/data/testimonials';

export default function Testimonials() {
    return (
        <section style={{ background: 'var(--color-primary)', color: 'white', padding: '6rem 0' }}>
            <div className="container text-center">
                <h2 style={{ color: 'white', marginBottom: '3rem' }}>Patient Stories</h2>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <Carousel autoPlay={7000} showDots showArrows={false}>
                        {testimonials.map(t => (
                            <div key={t.id}>
                                <blockquote style={{ fontSize: '1.4rem', fontStyle: 'italic', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                                    &quot;{t.quote}&quot;
                                </blockquote>
                                <cite style={{ fontStyle: 'normal', fontWeight: 'bold', display: 'block' }}>
                                    — {t.author}
                                </cite>
                                <span style={{ fontSize: '0.85rem', opacity: 0.7, marginTop: '0.25rem', display: 'block' }}>
                                    {t.condition}
                                </span>
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>
        </section>
    );
}
