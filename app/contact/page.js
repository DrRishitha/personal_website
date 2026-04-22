export const metadata = {
    title: "Contact | Dr. Kotla",
    description: "Book a consultation online or visit our clinic. Get in touch to schedule an appointment.",
};

import styles from './Contact.module.css';
import BookConsultation from '@/components/BookConsultation';
import ContactForm from '@/components/ContactForm';

export default function Contact() {
    return (
        <div className="container mt-lg mb-lg">
            <header className={styles.header}>
                <span className="eyebrow">Get in touch</span>
                <h1>Let&rsquo;s start your <span className="gradient-text">healing journey</span></h1>
                <p>Book a consultation online, visit our clinic in Hyderabad, or send us a message — we reply within 24 hours on weekdays.</p>
            </header>

            <div className={`glass-panel ${styles.section}`}>
                <BookConsultation />
            </div>

            <div className={`glass-panel ${styles.section} ${styles.messageSection}`}>
                <div className={styles.messageHeader}>
                    <h2>Send a message</h2>
                    <p>Have a question before booking? We&rsquo;ll read and respond personally.</p>
                </div>
                <div className={styles.grid}>
                    <aside className={styles.sidebar}>
                        <div className={styles.infoBlock}>
                            <h4>📍 Clinic</h4>
                            <p>Himayathnagar, Hyderabad</p>
                        </div>
                        <div className={styles.infoBlock}>
                            <h4>📞 Phone</h4>
                            <p><a href="tel:+917569200837">(+91) 7569 200 837</a></p>
                        </div>
                        <div className={styles.infoBlock}>
                            <h4>✉️ Email</h4>
                            <p><a href="mailto:dr.rishithakotla@gmail.com">dr.rishithakotla@gmail.com</a></p>
                        </div>
                        <div className={styles.infoBlock}>
                            <h4>🕐 Hours</h4>
                            <p>Mon – Fri<br/>9:00 AM – 5:00 PM</p>
                        </div>
                        <div className={styles.crisisBlock}>
                            <strong>In crisis?</strong>
                            <p>Call KIRAN 24/7 — <a href="tel:18005990019">1800-599-0019</a></p>
                        </div>
                    </aside>
                    <div>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    );
}
