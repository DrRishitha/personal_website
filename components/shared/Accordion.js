"use client";

import { useState } from 'react';
import styles from './Accordion.module.css';

export default function Accordion({ items, allowMultiple = false }) {
    const [openItems, setOpenItems] = useState(new Set());

    const toggle = (index) => {
        setOpenItems(prev => {
            const next = new Set(allowMultiple ? prev : []);
            if (prev.has(index)) {
                next.delete(index);
            } else {
                next.add(index);
            }
            return next;
        });
    };

    return (
        <div className={styles.accordion}>
            {items.map((item, index) => {
                const isOpen = openItems.has(index);
                return (
                    <div key={index} className={`${styles.item} ${isOpen ? styles.open : ''}`}>
                        <button
                            className={styles.header}
                            onClick={() => toggle(index)}
                            aria-expanded={isOpen}
                        >
                            <span className={styles.question}>{item.question}</span>
                            <span className={styles.chevron}>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                        </button>
                        <div className={styles.body}>
                            <div className={styles.bodyInner}>
                                <div className={styles.bodyContent}>
                                    {typeof item.answer === 'string' ? <p>{item.answer}</p> : item.answer}
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
