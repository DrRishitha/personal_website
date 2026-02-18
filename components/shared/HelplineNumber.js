import styles from './HelplineNumber.module.css';

export default function HelplineNumber({ compact = false }) {
    return (
        <div className={`${styles.helpline} ${compact ? styles.compact : ''}`}>
            {!compact && <p className={styles.label}>24/7 Mental Health Helpline (Toll-Free)</p>}
            <a href="tel:18005990019" className={styles.number}>
                KIRAN: 1800-599-0019
            </a>
            {!compact && (
                <p className={styles.sublabel}>
                    Available 24/7 in Hindi, English &amp; regional languages
                </p>
            )}
        </div>
    );
}
