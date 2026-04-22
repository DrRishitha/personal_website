import Link from 'next/link';
import { therapyModalities } from '@/data/therapyModalities';
import { medicationCategories, medicationDisclaimer } from '@/data/medications';
import MedicationAccordion from '@/components/MedicationAccordion';
import DeaddictionCarousel from '@/components/deaddiction/DeaddictionCarousel';
import styles from './Services.module.css';

export const metadata = {
    title: "Services | Dr. Kotla",
    description: "Comprehensive psychiatric services including therapy, medication management, and consultations.",
};

const services = [
    {
        title: "Psychiatric Evaluation",
        description: "A comprehensive 60–90 minute initial assessment to understand your history, symptoms, and goals. We work together to form a diagnosis and treatment plan.",
        price: "Inquire for rates",
        duration: "60–90 min",
        icon: "🩺",
    },
    {
        title: "Medication Management",
        description: "Ongoing 30-minute follow-ups to monitor progress, adjust medications if needed, and ensure you are feeling your best.",
        price: "Inquire for rates",
        duration: "30 min",
        icon: "💊",
    },
    {
        title: "Psychotherapy",
        description: "Individual therapy incorporating CBT, ACT, and psychodynamic approaches to address anxiety, depression, and trauma.",
        price: "Inquire for rates",
        duration: "50 min",
        icon: "🗣️",
    },
    {
        title: "Second Opinion Consultations",
        description: "Expert review of your current diagnosis and treatment plan to provide clarity and new perspectives.",
        price: "Inquire for rates",
        duration: "45 min",
        icon: "🔍",
    },
];

export default function Services() {
    return (
        <div className="container mt-lg mb-lg">
            <header className={styles.pageHeader}>
                <span className="eyebrow">Services</span>
                <h1>Personalized psychiatric care</h1>
                <p>Comprehensive treatment plans tailored to what you need — evidence-based, collaborative, and judgment-free.</p>
            </header>

            {/* Core services */}
            <section className={styles.servicesGrid}>
                {services.map((service, idx) => (
                    <article key={idx} className={`glass-panel ${styles.serviceCard}`}>
                        <div className={styles.serviceTop}>
                            <div className={styles.serviceIcon}>{service.icon}</div>
                            <span className={styles.serviceDuration}>{service.duration}</span>
                        </div>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                        <div className={styles.serviceFooter}>
                            <span className={styles.servicePrice}>{service.price}</span>
                            <Link href="/contact" className={styles.serviceLink}>
                                Book
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                                    <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </Link>
                        </div>
                    </article>
                ))}
            </section>

            {/* Therapy Modalities */}
            <section className={styles.subSection}>
                <div className={styles.subHeader}>
                    <span className="eyebrow">Modalities</span>
                    <h2>Therapy approaches we offer</h2>
                    <p>Evidence-based approaches matched to your goals and comfort.</p>
                </div>
                <div className={styles.modalityGrid}>
                    {therapyModalities.map(modality => (
                        <article key={modality.id} className={`glass-panel ${styles.modalityCard}`}>
                            <div className={styles.modalityIcon}>{modality.icon}</div>
                            <h3>{modality.name}</h3>
                            <p>{modality.description}</p>
                            <div className={styles.modalityChips}>
                                {modality.bestFor.map((condition, i) => (
                                    <span key={i} className={styles.modalityChip}>{condition}</span>
                                ))}
                            </div>
                            {modality.id === 'emdr' && (
                                <Link href="/emdr" className={styles.modalityLink}>
                                    Try Virtual EMDR
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                                        <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </Link>
                            )}
                        </article>
                    ))}
                </div>
            </section>

            {/* Medication guide */}
            <section className={styles.subSection} style={{ maxWidth: '940px', margin: '0 auto 4rem' }}>
                <div className={styles.subHeader}>
                    <span className="eyebrow">Medication guide</span>
                    <h2>Understanding common psychiatric medications</h2>
                    <p>An educational reference — always speak with a psychiatrist before starting or changing medication.</p>
                </div>

                <div className={styles.disclaimerBox}>
                    <span>⚠️</span>
                    <p>{medicationDisclaimer}</p>
                </div>

                <MedicationAccordion categories={medicationCategories} />
            </section>

            {/* Deaddiction */}
            <section className={styles.subSection}>
                <div className={styles.subHeader}>
                    <span className="eyebrow">Recovery</span>
                    <h2>Deaddiction approaches</h2>
                    <p>Evidence-based methods for recovery from substance dependence.</p>
                </div>
                <DeaddictionCarousel />
            </section>

            {/* CTA */}
            <section className={`glass-panel ${styles.ctaPanel}`}>
                <h3>Not sure what you need?</h3>
                <p>A short conversation can help you figure out the right next step — no commitment required.</p>
                <Link href="/contact" className="btn btn-primary btn-lg">Get in touch</Link>
            </section>
        </div>
    );
}
