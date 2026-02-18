export const metadata = {
    title: "About Dr. Kotla | Psychiatrist",
    description: "Learn about Dr. Rishitha Kotla's background, qualifications, and philosophy of care.",
};

import styles from './About.module.css';

export default function About() {
    return (
        <div className="container mt-lg mb-lg">
            <div className={`glass-panel ${styles.panel}`}>
                <h1 className="text-center" style={{ marginBottom: '2rem' }}>About Dr. Rishitha Kotla</h1>

                <div className={styles.contentWrapper}>
                    <div className={styles.imagePlaceholder}>
                        <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', flexDirection: 'column', gap: '0.5rem' }}>
                            <span style={{ fontSize: '4rem' }}>👨‍⚕️</span>
                            <span style={{ fontSize: '0.9rem', opacity: 0.8 }}>Photo Placeholder</span>
                        </div>
                    </div>

                    <div className={styles.textContent}>
                        <h2>Compassionate Care, Clinical Excellence</h2>
                        <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.7 }}>
                            Dr. Rishitha Kotla is a board-certified psychiatrist dedicated to providing holistic, evidence-based mental health care.
                            With a deep commitment to understanding each patient&apos;s unique story, Dr. Kotla combines clinical expertise with genuine empathy
                            to create personalized treatment plans that promote lasting wellness.
                        </p>

                        <blockquote style={{
                            borderLeft: '3px solid var(--color-accent)', paddingLeft: '1.5rem', margin: '2rem 0',
                            fontStyle: 'italic', color: 'var(--color-text-muted)'
                        }}>
                            &quot;My philosophy is rooted in the belief that mental health care should be collaborative.
                            I combine the latest evidence-based treatments with a warm, empathetic approach to help you find your path to wellness.&quot;
                        </blockquote>
                    </div>
                </div>
            </div>

            {/* Detailed Sections */}
            <div style={{ maxWidth: '900px', margin: '2rem auto 0', display: 'grid', gap: '2rem' }}>
                <div className="glass-panel" style={{ padding: '2.5rem' }}>
                    <h3 className="text-center" style={{ marginBottom: '1.5rem' }}>Education &amp; Training</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '600px', margin: '0 auto' }}>
                        {[
                            { year: 'MD', detail: 'Doctor of Medicine — University of Medicine' },
                            { year: 'Residency', detail: 'Psychiatry Residency Training' },
                            { year: 'Board Cert.', detail: 'Board Certified in Psychiatry & Neurology' },
                        ].map((item, i) => (
                            <div key={i} style={{ display: 'flex', gap: '1.5rem', alignItems: 'baseline' }}>
                                <span style={{ minWidth: '100px', fontWeight: 700, color: 'var(--color-primary)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                    {item.year}
                                </span>
                                <span style={{ color: 'var(--color-text-muted)' }}>{item.detail}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="glass-panel" style={{ padding: '2.5rem', textAlign: 'center' }}>
                    <h3 style={{ marginBottom: '1.5rem' }}>Areas of Specialization</h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
                        {['Depression & Mood Disorders', 'Anxiety Disorders', 'PTSD & Trauma', 'OCD', 'ADHD', 'Bipolar Disorder', 'Sleep Disorders', 'Substance Use & Addiction', 'Personality Disorders', 'Psychotherapy', 'EMDR Therapy', 'Medication Management'].map((spec, i) => (
                            <span key={i} style={{ padding: '0.5rem 1.25rem', background: 'hsla(205, 50%, 25%, 0.06)', borderRadius: '50px', fontSize: '0.9rem', color: 'var(--color-primary)', fontWeight: 500 }}>
                                {spec}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="glass-panel" style={{ padding: '2.5rem', textAlign: 'center' }}>
                    <h3 style={{ marginBottom: '1.5rem' }}>Professional Memberships</h3>
                    <ul style={{ listStyle: 'none', padding: 0, color: 'var(--color-text-muted)', lineHeight: 2.2 }}>
                        <li>Indian Psychiatric Society (IPS)</li>
                        <li>Indian Medical Association (IMA)</li>
                        <li>Telangana State Medical Council</li>
                    </ul>
                </div>

                <div className="glass-panel" style={{ padding: '2.5rem' }}>
                    <h3 className="text-center" style={{ marginBottom: '2rem' }}>Treatment Philosophy</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem' }}>
                        {[
                            { title: 'Patient-Centered', desc: 'Every treatment plan is tailored to your unique needs, goals, and preferences.' },
                            { title: 'Evidence-Based', desc: 'Treatment approaches grounded in the latest psychiatric research and clinical evidence.' },
                            { title: 'Holistic Care', desc: 'Addressing mental health as part of overall well-being — mind, body, and lifestyle.' },
                            { title: 'Collaborative', desc: 'Working together as partners in your healing journey, with open communication at every step.' },
                        ].map((item, i) => (
                            <div key={i} style={{ textAlign: 'center' }}>
                                <h4 style={{ fontSize: '1.05rem', marginBottom: '0.5rem' }}>{item.title}</h4>
                                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="glass-panel" style={{ padding: '2.5rem', textAlign: 'center' }}>
                    <h3 style={{ marginBottom: '0.75rem' }}>Languages</h3>
                    <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem', fontSize: '1.05rem' }}>English, Hindi, Telugu</p>
                    <div>
                        <a href="/contact" className="btn btn-primary" style={{ marginRight: '1rem' }}>Schedule a Visit</a>
                        <a href="/tools" className="btn btn-outline">Try Self-Help Tools</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
