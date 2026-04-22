import Link from 'next/link';
import styles from './About.module.css';

export const metadata = {
    title: "About Dr. Kotla | Psychiatrist",
    description: "Learn about Dr. Rishitha Kotla's background, qualifications, and philosophy of care.",
};

const education = [
    { year: 'MD', detail: 'Doctor of Medicine — University of Medicine' },
    { year: 'Residency', detail: 'Psychiatry Residency Training' },
    { year: 'Board Cert.', detail: 'Board Certified in Psychiatry & Neurology' },
];

const specializations = [
    'Depression & Mood Disorders', 'Anxiety Disorders', 'PTSD & Trauma', 'OCD', 'ADHD',
    'Bipolar Disorder', 'Sleep Disorders', 'Substance Use & Addiction', 'Personality Disorders',
    'Psychotherapy', 'EMDR Therapy', 'Medication Management'
];

const memberships = [
    'Indian Psychiatric Society (IPS)',
    'Indian Medical Association (IMA)',
    'Telangana State Medical Council',
];

const philosophy = [
    { icon: '🎯', title: 'Patient-Centered', desc: 'Every treatment plan is tailored to your unique needs, goals, and preferences.' },
    { icon: '🧪', title: 'Evidence-Based', desc: 'Treatment approaches grounded in the latest psychiatric research and clinical evidence.' },
    { icon: '🌿', title: 'Holistic Care', desc: 'Addressing mental health as part of overall well-being — mind, body, and lifestyle.' },
    { icon: '🤝', title: 'Collaborative', desc: 'Working together as partners in your healing journey, with open communication at every step.' },
];

export default function About() {
    return (
        <div className="container mt-lg mb-lg">
            <header className={styles.pageHeader}>
                <span className="eyebrow">About</span>
                <h1>Meet <span className="gradient-text">Dr. Rishitha Kotla</span></h1>
                <p>Board-certified psychiatrist dedicated to holistic, evidence-based mental health care.</p>
            </header>

            {/* Hero intro */}
            <div className={`glass-panel ${styles.introPanel}`}>
                <div className={styles.contentWrapper}>
                    <div className={styles.photo}>
                        <div className={styles.photoInner}>
                            <span className={styles.photoEmoji}>👩‍⚕️</span>
                        </div>
                        <div className={styles.photoRing} aria-hidden="true"></div>
                        <div className={styles.floatingStat} style={{ top: '12%', right: '-6%' }}>
                            <strong>15+</strong>
                            <span>years</span>
                        </div>
                        <div className={styles.floatingStat} style={{ bottom: '14%', left: '-8%' }}>
                            <strong>3</strong>
                            <span>languages</span>
                        </div>
                    </div>

                    <div className={styles.textContent}>
                        <h2>Compassionate care, clinical excellence</h2>
                        <p>
                            Dr. Rishitha Kotla is a board-certified psychiatrist dedicated to providing holistic,
                            evidence-based mental health care. With a deep commitment to understanding each patient&apos;s
                            unique story, Dr. Kotla combines clinical expertise with genuine empathy to create
                            personalized treatment plans that promote lasting wellness.
                        </p>
                        <blockquote className={styles.blockquote}>
                            <span className={styles.quoteMark} aria-hidden="true">&ldquo;</span>
                            My philosophy is rooted in the belief that mental health care should be collaborative.
                            I combine the latest evidence-based treatments with a warm, empathetic approach to help
                            you find your path to wellness.
                        </blockquote>
                        <div className={styles.actions}>
                            <Link href="/contact" className="btn btn-primary">Book a Consultation</Link>
                            <Link href="/services" className="btn btn-outline">View Services</Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Education */}
            <section className={styles.detailSection}>
                <div className="glass-panel" style={{ padding: '2.5rem' }}>
                    <div className={styles.sectionTop}>
                        <span className="eyebrow">Credentials</span>
                        <h3>Education & training</h3>
                    </div>
                    <div className={styles.timeline}>
                        {education.map((item, i) => (
                            <div key={i} className={styles.timelineItem}>
                                <div className={styles.timelineMarker}>{i + 1}</div>
                                <div className={styles.timelineContent}>
                                    <strong>{item.year}</strong>
                                    <p>{item.detail}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Specializations */}
            <section className={styles.detailSection}>
                <div className="glass-panel" style={{ padding: '2.5rem', textAlign: 'center' }}>
                    <div className={styles.sectionTop} style={{ textAlign: 'center' }}>
                        <span className="eyebrow">Focus areas</span>
                        <h3>Areas of specialization</h3>
                    </div>
                    <div className={styles.chipCloud}>
                        {specializations.map((spec, i) => (
                            <span key={i} className={styles.chip}>{spec}</span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Philosophy */}
            <section className={styles.detailSection}>
                <div className="glass-panel" style={{ padding: '2.5rem' }}>
                    <div className={styles.sectionTop} style={{ textAlign: 'center' }}>
                        <span className="eyebrow">How we work</span>
                        <h3>Treatment philosophy</h3>
                    </div>
                    <div className={styles.philosophyGrid}>
                        {philosophy.map((item, i) => (
                            <div key={i} className={styles.philosophyCard}>
                                <div className={styles.philosophyIcon}>{item.icon}</div>
                                <h4>{item.title}</h4>
                                <p>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Memberships + languages */}
            <section className={styles.detailSection}>
                <div className={styles.splitRow}>
                    <div className="glass-panel" style={{ padding: '2rem' }}>
                        <span className="eyebrow">Memberships</span>
                        <h3 style={{ marginTop: '0.75rem', marginBottom: '1rem' }}>Professional affiliations</h3>
                        <ul className={styles.memberList}>
                            {memberships.map((m, i) => (
                                <li key={i}>
                                    <span className={styles.bullet} aria-hidden="true">✓</span>
                                    {m}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="glass-panel" style={{ padding: '2rem' }}>
                        <span className="eyebrow">Languages</span>
                        <h3 style={{ marginTop: '0.75rem', marginBottom: '1rem' }}>Speak with you in</h3>
                        <div className={styles.langList}>
                            <span className={styles.lang}>🇬🇧 English</span>
                            <span className={styles.lang}>🇮🇳 Hindi</span>
                            <span className={styles.lang}>🇮🇳 Telugu</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={`glass-panel ${styles.ctaPanel}`}>
                <h3>Ready to begin?</h3>
                <p>Take the first step toward feeling better — we&rsquo;ll walk with you the rest of the way.</p>
                <div className={styles.actions} style={{ justifyContent: 'center' }}>
                    <Link href="/contact" className="btn btn-primary btn-lg">Schedule a Visit</Link>
                    <Link href="/tools" className="btn btn-outline btn-lg">Try Self-Help Tools</Link>
                </div>
            </section>
        </div>
    );
}
