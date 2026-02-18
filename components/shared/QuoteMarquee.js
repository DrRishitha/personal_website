import { quotes } from '@/data/quotes';
import styles from './QuoteMarquee.module.css';

export default function QuoteMarquee() {
    return (
        <section className={styles.marqueeSection}>
            <div className={styles.marqueeWrapper}>
                <div className={styles.marqueeTrack}>
                    {quotes.map((q, i) => (
                        <span key={i} className={styles.quoteItem}>
                            <em>&ldquo;{q.text}&rdquo;</em>
                            <strong> — {q.author}</strong>
                        </span>
                    ))}
                    {quotes.map((q, i) => (
                        <span key={`dup-${i}`} className={styles.quoteItem} aria-hidden="true">
                            <em>&ldquo;{q.text}&rdquo;</em>
                            <strong> — {q.author}</strong>
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
