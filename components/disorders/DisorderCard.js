"use client";

import { useState, useEffect } from 'react';
import styles from './DisorderCard.module.css';

export default function DisorderCard({ disorder, isUnlocked }) {
    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <span className={styles.icon}>{disorder.icon}</span>
                <h3 className={styles.title}>{disorder.title}</h3>
                <span className={styles.category}>{disorder.category}</span>
            </div>

            <div className={`${styles.content} ${!isUnlocked ? styles.blurred : ''}`}>
                <p className={styles.description}>{disorder.briefDescription}</p>

                <div className={styles.section}>
                    <h4>Common Symptoms</h4>
                    <ul className={styles.list}>
                        {disorder.symptoms.map((s, i) => (
                            <li key={i}>{s}</li>
                        ))}
                    </ul>
                </div>

                <div className={styles.section}>
                    <h4>Treatment Approaches</h4>
                    <div className={styles.tags}>
                        {disorder.treatmentApproaches.map((t, i) => (
                            <span key={i} className={styles.tag}>{t}</span>
                        ))}
                    </div>
                </div>

                <div className={styles.section}>
                    <h4>When to Seek Help</h4>
                    <p>{disorder.whenToSeekHelp}</p>
                </div>
            </div>

            {!isUnlocked && (
                <div className={styles.lockOverlay}>
                    <span className={styles.lockIcon}>🔒</span>
                    <p>Content available after consultation</p>
                </div>
            )}
        </div>
    );
}
