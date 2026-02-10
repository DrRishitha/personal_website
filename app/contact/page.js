export const metadata = {
    title: "Contact | Dr. Kotla",
    description: "Get in touch to schedule an appointment or ask questions.",
};

import styles from './Contact.module.css';

export default function Contact() {
    return (
        <div className="container mt-lg mb-lg">
            <div className={`glass-panel ${styles.section}`}>
                <h1 className="text-center" style={{ marginBottom: '2rem' }}>Contact Us</h1>

                <div className={styles.grid}>
                    <div>
                        <h3>Office Information</h3>
                        <p><strong>Address:</strong><br />Himayathnagar<br />Hyderabad</p>
                        <p style={{ marginTop: '1rem' }}><strong>Email:</strong><br />dr.rishithakotla@gmail.com</p>
                        <p style={{ marginTop: '1rem' }}><strong>Phone:</strong><br />(+91) 7569200837</p>

                        <div style={{ marginTop: '2rem', padding: '1rem', background: 'hsla(35, 30%, 96%, 0.5)', borderRadius: 'var(--radius-md)' }}>
                            <h4>Hours</h4>
                            <p>Mon - Fri: 9:00 AM - 5:00 PM</p>
                        </div>
                    </div>

                    <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Name</label>
                            <input type="text" style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid #ddd' }} placeholder="Your Name" />
                        </div>

                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Email</label>
                            <input type="email" style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid #ddd' }} placeholder="email@example.com" />
                        </div>

                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Message</label>
                            <textarea style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid #ddd', minHeight: '120px' }} placeholder="How can we help?"></textarea>
                        </div>

                        <button type="button" className="btn btn-primary" style={{ marginTop: '1rem' }}>Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
