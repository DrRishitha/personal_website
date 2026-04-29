"use client";

import { useState, useEffect, useCallback } from 'react';
import styles from './Carousel.module.css';

export default function Carousel({ children, autoPlay = 6000, showDots = true, showArrows = true }) {
    const items = Array.isArray(children) ? children : [children];
    const [current, setCurrent] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const next = useCallback(() => {
        setCurrent(prev => (prev + 1) % items.length);
    }, [items.length]);

    const prev = useCallback(() => {
        setCurrent(prev => (prev - 1 + items.length) % items.length);
    }, [items.length]);

    useEffect(() => {
        if (!autoPlay || isPaused || items.length <= 1) return;
        const interval = setInterval(next, autoPlay);
        return () => clearInterval(interval);
    }, [autoPlay, isPaused, next, items.length]);

    if (items.length === 0) return null;

    return (
        <div
            className={styles.carousel}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <div className={styles.track}>
                <div
                    className={styles.slider}
                    style={{
                        width: `${items.length * 100}%`,
                        transform: `translateX(-${current * (100 / items.length)}%)`,
                    }}
                >
                    {items.map((child, index) => (
                        <div key={index} className={styles.slide}>
                            {child}
                        </div>
                    ))}
                </div>
            </div>

            {showArrows && items.length > 1 && (
                <>
                    <button className={`${styles.arrow} ${styles.arrowLeft}`} onClick={prev} aria-label="Previous">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                    <button className={`${styles.arrow} ${styles.arrowRight}`} onClick={next} aria-label="Next">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </>
            )}

            {showDots && items.length > 1 && (
                <div className={styles.dots}>
                    {items.map((_, index) => (
                        <button
                            key={index}
                            className={`${styles.dot} ${index === current ? styles.dotActive : ''}`}
                            onClick={() => setCurrent(index)}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
