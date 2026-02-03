import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={`container ${styles.container}`}>
                <div className={styles.content}>
                    <h1 className={styles.title}>
                        Find Balance & <br /> Inner Peace
                    </h1>
                    <p className={styles.subtitle}>
                        Compassionate, evidence-based psychiatric care tailored to your unique journey.
                        Start healing with Dr. Rishitha Kotla today.
                    </p>
                    <div className={styles.actions}>
                        <Link href="/contact" className="btn btn-primary">Book Consultation</Link>
                        <Link href="/tools" className="btn btn-outline">Try Self-Help Tools</Link>
                    </div>
                </div>
                <div className={styles.visual}>
                    {/* Abstract calm shape using CSS gradients */}
                    <div className={styles.blob}></div>
                </div>
            </div>
        </section>
    );
}
