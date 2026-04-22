import Link from 'next/link';
import HelplineNumber from '@/components/shared/HelplineNumber';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.ambient} aria-hidden="true">
                <div className={`${styles.blob} ${styles.blobA}`}></div>
                <div className={`${styles.blob} ${styles.blobB}`}></div>
                <div className={`${styles.blob} ${styles.blobC}`}></div>
            </div>

            <div className={`container ${styles.container}`}>
                <div className={styles.content}>
                    <span className={styles.eyebrow}>
                        <span className={styles.dot} aria-hidden="true"></span>
                        Board-Certified Psychiatrist · Hyderabad
                    </span>
                    <h1 className={styles.title}>
                        Find balance and <span className="gradient-text">inner peace</span>
                    </h1>
                    <p className={styles.subtitle}>
                        Compassionate, evidence-based psychiatric care tailored to your unique journey.
                        Start healing with Dr. Rishitha Kotla today.
                    </p>
                    <div className={styles.actions}>
                        <Link href="/contact" className="btn btn-primary btn-lg">
                            Book a Consultation
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Link>
                        <Link href="/tools" className="btn btn-outline btn-lg">
                            Try Self-Help Tools
                        </Link>
                    </div>

                    <div className={styles.trustRow}>
                        <div className={styles.trustItem}>
                            <strong>15+</strong>
                            <span>years of care</span>
                        </div>
                        <div className={styles.trustDivider} aria-hidden="true"></div>
                        <div className={styles.trustItem}>
                            <strong>9+</strong>
                            <span>free tools</span>
                        </div>
                        <div className={styles.trustDivider} aria-hidden="true"></div>
                        <div className={styles.trustItem}>
                            <strong>3</strong>
                            <span>languages</span>
                        </div>
                    </div>

                    <div className={styles.helplineBanner}>
                        <HelplineNumber compact />
                    </div>
                </div>

                <div className={styles.visual} aria-hidden="true">
                    <div className={styles.visualCard}>
                        <div className={styles.avatar}>
                            <span role="img" aria-label="Doctor">🩺</span>
                        </div>
                        <div className={styles.visualContent}>
                            <span className={styles.liveDot}></span>
                            <h4>Now accepting new patients</h4>
                            <p>Online consultations available across India. Secure, private, and convenient.</p>
                        </div>
                        <div className={styles.chipRow}>
                            <span className={styles.chip}>CBT</span>
                            <span className={styles.chip}>EMDR</span>
                            <span className={styles.chip}>Medication</span>
                            <span className={styles.chip}>Teletherapy</span>
                        </div>
                    </div>

                    <div className={styles.floatingBadge} style={{ top: '8%', right: '-2%' }}>
                        <span className={styles.badgeIcon}>🧠</span>
                        <div>
                            <strong>Mind</strong>
                            <small>Evidence-based care</small>
                        </div>
                    </div>

                    <div className={styles.floatingBadge} style={{ bottom: '6%', left: '-4%' }}>
                        <span className={styles.badgeIcon}>🌿</span>
                        <div>
                            <strong>Calm</strong>
                            <small>Holistic wellness</small>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
