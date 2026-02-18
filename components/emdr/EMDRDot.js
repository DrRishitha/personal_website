"use client";

import styles from './EMDRDot.module.css';

export default function EMDRDot({ speed = 1.2, direction = 'horizontal', isActive = false }) {
    const duration = `${1 / speed}s`;

    const getAnimationClass = () => {
        switch (direction) {
            case 'vertical': return styles.vertical;
            case 'diagonal': return styles.diagonal;
            default: return styles.horizontal;
        }
    };

    return (
        <div className={styles.dotContainer}>
            <div
                className={`${styles.dot} ${getAnimationClass()} ${isActive ? styles.active : ''}`}
                style={{ animationDuration: duration }}
            />
        </div>
    );
}
