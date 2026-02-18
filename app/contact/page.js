export const metadata = {
    title: "Contact | Dr. Kotla",
    description: "Book a consultation online or visit our clinic. Get in touch to schedule an appointment.",
};

import styles from './Contact.module.css';
import BookConsultation from '@/components/BookConsultation';

export default function Contact() {
    return (
        <div className="container mt-lg mb-lg">
            {/* Booking Section */}
            <div className={`glass-panel ${styles.section}`} style={{ maxWidth: '900px' }}>
                <h1 className="text-center" style={{ marginBottom: '0.5rem' }}>Book a Consultation</h1>
                <p className="text-center" style={{ color: 'var(--color-text-muted)', marginBottom: '2rem', maxWidth: '500px', margin: '0 auto 2rem' }}>
                    Choose how you would like to consult with Dr. Kotla
                </p>
                <BookConsultation />
            </div>

            {/* Contact Form */}
            <div className={`glass-panel ${styles.section}`} style={{ maxWidth: '900px', marginTop: '2rem' }}>
                <h2 className="text-center" style={{ marginBottom: '2rem' }}>Send a Message</h2>
                <div className={styles.grid}>
                    <div>
                        <h3 style={{ fontSize: '1.3rem', marginBottom: '1.25rem' }}>Office Information</h3>
                        <p style={{ color: 'var(--color-text-muted)' }}><strong style={{ color: 'var(--color-text-main)' }}>Address:</strong><br />Himayathnagar<br />Hyderabad</p>
                        <p style={{ marginTop: '1rem', color: 'var(--color-text-muted)' }}><strong style={{ color: 'var(--color-text-main)' }}>Email:</strong><br />dr.rishithakotla@gmail.com</p>
                        <p style={{ marginTop: '1rem', color: 'var(--color-text-muted)' }}><strong style={{ color: 'var(--color-text-main)' }}>Phone:</strong><br />(+91) 7569200837</p>

                        <div style={{ marginTop: '2rem', padding: '1.25rem', background: 'hsla(205, 50%, 25%, 0.04)', borderRadius: 'var(--radius-md)', border: '1px solid hsla(205, 50%, 25%, 0.08)' }}>
                            <h4 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>Hours</h4>
                            <p style={{ color: 'var(--color-text-muted)', marginBottom: 0 }}>Mon - Fri: 9:00 AM - 5:00 PM</p>
                        </div>
                    </div>

                    <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: 'var(--color-text-main)' }}>Name</label>
                            <input type="text" style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', border: '1px solid hsla(205, 50%, 25%, 0.15)', fontSize: '0.95rem', outline: 'none', background: 'white', color: 'var(--color-text-main)' }} placeholder="Your Name" />
                        </div>

                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: 'var(--color-text-main)' }}>Email</label>
                            <input type="email" style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', border: '1px solid hsla(205, 50%, 25%, 0.15)', fontSize: '0.95rem', outline: 'none', background: 'white', color: 'var(--color-text-main)' }} placeholder="email@example.com" />
                        </div>

                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: 'var(--color-text-main)' }}>Message</label>
                            <textarea style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', border: '1px solid hsla(205, 50%, 25%, 0.15)', minHeight: '120px', fontSize: '0.95rem', outline: 'none', background: 'white', color: 'var(--color-text-main)', fontFamily: 'inherit' }} placeholder="How can we help?"></textarea>
                        </div>

                        <button type="button" className="btn btn-primary" style={{ marginTop: '0.5rem' }}>Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
