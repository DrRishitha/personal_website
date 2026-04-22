"use client";

import { useState } from 'react';
import styles from './Tabs.module.css';

export default function Tabs({ tabs, defaultTab }) {
    const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);

    const activeContent = tabs.find(t => t.id === activeTab);

    return (
        <div className={styles.tabsContainer}>
            <div className={styles.tabButtonsWrap}>
                <div className={styles.tabButtons} role="tablist">
                    {tabs.map(tab => (
                        <button
                            key={tab.id}
                            role="tab"
                            aria-selected={activeTab === tab.id}
                            className={`${styles.tabBtn} ${activeTab === tab.id ? styles.active : ''}`}
                            onClick={() => setActiveTab(tab.id)}
                        >
                            {tab.icon && <span className={styles.tabIcon}>{tab.icon}</span>}
                            {tab.label}
                        </button>
                    ))}
                </div>
            </div>
            <div className={styles.tabContent} key={activeTab}>
                {activeContent?.content}
            </div>
        </div>
    );
}
