"use client";

import { useLanguage } from '@/components/i18n/LanguageProvider';
import styles from './HelplineNumber.module.css';

export default function HelplineNumber({ compact = false }) {
    const { t } = useLanguage();
    return (
        <div className={`${styles.helpline} ${compact ? styles.compact : ''}`}>
            {!compact && <p className={styles.label}>{t('helpline.label')}</p>}
            <a href="tel:18005990019" className={styles.number}>
                {t('helpline.kiranName')}: 1800-599-0019
            </a>
            {!compact && (
                <p className={styles.sublabel}>{t('helpline.sublabel')}</p>
            )}
        </div>
    );
}
