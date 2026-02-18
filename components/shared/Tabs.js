"use client";

import { useState } from 'react';
import styles from './Tabs.module.css';

export default function Tabs({ tabs, defaultTab }) {
    const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);

    const activeContent = tabs.find(t => t.id === activeTab);

    return (
        <div className={styles.tabsContainer}>
            <div className={styles.tabButtons}>
                {tabs.map(tab => (
                    <button
                        key={tab.id}
                        className={`${styles.tabBtn} ${activeTab === tab.id ? styles.active : ''}`}
                        onClick={() => setActiveTab(tab.id)}
                    >
                        {tab.icon && <span className={styles.tabIcon}>{tab.icon}</span>}
                        {tab.label}
                    </button>
                ))}
            </div>
            <div className={styles.tabContent}>
                {activeContent?.content}
            </div>
        </div>
    );
}
