"use client";

import styles from './DisorderCard.module.css';

export default function DisorderCard({ disorder, isUnlocked }) {
    return (
        <article className={styles.card}>
            <div className={styles.header}>
                <span className={styles.iconWrap}>{disorder.icon}</span>
                <div>
                    <h3 className={styles.title}>{disorder.title}</h3>
                    <span className={styles.category}>{disorder.category}</span>
                </div>
            </div>

            <div className={`${styles.content} ${!isUnlocked ? styles.blurred : ''}`}>
                <p className={styles.description}>{disorder.briefDescription}</p>

                <div className={styles.section}>
                    <h4>Common symptoms</h4>
                    <ul className={styles.list}>
                        {disorder.symptoms.map((s, i) => (
                            <li key={i}>{s}</li>
                        ))}
                    </ul>
                </div>

                <div className={styles.section}>
                    <h4>Treatment approaches</h4>
                    <div className={styles.tags}>
                        {disorder.treatmentApproaches.map((t, i) => (
                            <span key={i} className={styles.tag}>{t}</span>
                        ))}
                    </div>
                </div>

                <div className={styles.section}>
                    <h4>When to seek help</h4>
                    <p>{disorder.whenToSeekHelp}</p>
                </div>
            </div>

            {!isUnlocked && (
                <div className={styles.lockOverlay}>
                    <span className={styles.lockIcon}>🔒</span>
                    <p>Available after consultation</p>
                </div>
            )}
        </article>
    );
}
