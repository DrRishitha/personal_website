import Link from 'next/link';
import { therapyModalities } from '@/data/therapyModalities';
import { medicationCategories, medicationDisclaimer } from '@/data/medications';
import MedicationAccordion from '@/components/MedicationAccordion';
import DeaddictionCarousel from '@/components/deaddiction/DeaddictionCarousel';

export const metadata = {
    title: "Services | Dr. Kotla",
    description: "Comprehensive psychiatric services including therapy, medication management, and consultations.",
};

const services = [
    {
        title: "Psychiatric Evaluation",
        description: "A comprehensive 60-90 minute initial assessment to understand your history, symptoms, and goals. We will work together to form a diagnosis and treatment plan.",
        price: "Inquire for rates"
    },
    {
        title: "Medication Management",
        description: "Ongoing 30-minute follow-ups to monitor your progress, adjust medications if necessary, and ensure you are feeling your best.",
        price: "Inquire for rates"
    },
    {
        title: "Psychotherapy",
        description: "Individual therapy sessions incorporating CBT, ACT, and psychodynamic approaches to address anxiety, depression, and trauma.",
        price: "Inquire for rates"
    },
    {
        title: "Second Opinion Consultations",
        description: "Expert review of your current diagnosis and treatment plan to provide clarity and new perspectives.",
        price: "Inquire for rates"
    }
];

export default function Services() {
    return (
        <div className="container mt-lg mb-lg">
            <header className="text-center mb-lg">
                <h1>Our Services</h1>
                <p style={{ color: 'var(--color-text-muted)', maxWidth: '600px', margin: '0 auto' }}>
                    Personalized treatment plans tailored to your needs.
                </p>
            </header>

            {/* Core Services */}
            <div style={{ display: 'grid', gap: '2rem', marginBottom: '4rem', maxWidth: '900px', margin: '0 auto 4rem' }}>
                {services.map((service, idx) => (
                    <div key={idx} className="glass-panel" style={{ padding: '2rem 2.5rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
                            <h2 style={{ fontSize: '1.5rem', marginBottom: '0' }}>{service.title}</h2>
                            <span style={{ color: 'var(--color-accent)', fontWeight: '600', fontSize: '0.9rem' }}>{service.price}</span>
                        </div>
                        <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.7 }}>{service.description}</p>
                    </div>
                ))}
            </div>

            {/* Therapy Modalities */}
            <section style={{ marginBottom: '4rem' }}>
                <h2 className="text-center" style={{ marginBottom: '0.5rem' }}>Therapy Modalities We Offer</h2>
                <p className="text-center" style={{ color: 'var(--color-text-muted)', marginBottom: '2rem', maxWidth: '500px', margin: '0 auto 2rem' }}>
                    Evidence-based approaches for a range of conditions
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                    {therapyModalities.map(modality => (
                        <div key={modality.id} className="glass-panel" style={{ padding: '2rem', textAlign: 'center' }}>
                            <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>{modality.icon}</div>
                            <h3 style={{ fontSize: '1.15rem', marginBottom: '0.5rem' }}>{modality.name}</h3>
                            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.6, marginBottom: '1rem' }}>{modality.description}</p>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', justifyContent: 'center' }}>
                                {modality.bestFor.map((condition, i) => (
                                    <span key={i} style={{
                                        padding: '0.25rem 0.75rem', background: 'hsla(160, 25%, 45%, 0.1)',
                                        borderRadius: '50px', fontSize: '0.75rem', color: 'var(--color-accent)', fontWeight: 500
                                    }}>
                                        {condition}
                                    </span>
                                ))}
                            </div>
                            {modality.id === 'emdr' && (
                                <Link href="/emdr" style={{ display: 'inline-block', marginTop: '1rem', color: 'var(--color-accent)', fontWeight: 600, fontSize: '0.9rem' }}>
                                    Try Virtual EMDR →
                                </Link>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* Medication Guide */}
            <section style={{ marginBottom: '4rem', maxWidth: '900px', margin: '0 auto 4rem' }}>
                <h2 className="text-center" style={{ marginBottom: '0.5rem' }}>Medication Guide</h2>
                <p className="text-center" style={{ color: 'var(--color-text-muted)', marginBottom: '2rem', maxWidth: '500px', margin: '0 auto 2rem' }}>
                    Common medications used in psychiatric treatment
                </p>

                <div style={{
                    padding: '1rem 1.5rem', background: 'hsla(45, 100%, 50%, 0.08)', border: '1px solid hsla(45, 100%, 50%, 0.2)',
                    borderRadius: 'var(--radius-md)', marginBottom: '1.5rem', borderLeft: '4px solid #eab308'
                }}>
                    <p style={{ fontSize: '0.9rem', color: 'var(--color-text-main)', fontWeight: 500, margin: 0 }}>
                        ⚠️ {medicationDisclaimer}
                    </p>
                </div>

                <MedicationAccordion categories={medicationCategories} />
            </section>

            {/* Deaddiction Methods */}
            <section style={{ marginBottom: '4rem' }}>
                <h2 className="text-center" style={{ marginBottom: '0.5rem' }}>Deaddiction Approaches</h2>
                <p className="text-center" style={{ color: 'var(--color-text-muted)', marginBottom: '2rem', maxWidth: '500px', margin: '0 auto 2rem' }}>
                    Evidence-based methods for recovery from substance dependence
                </p>
                <DeaddictionCarousel />
            </section>

            <div className="text-center mt-lg">
                <p style={{ marginBottom: '1rem', color: 'var(--color-text-muted)' }}>Not sure what you need?</p>
                <a href="/contact" className="btn btn-primary">Get in Touch</a>
            </div>
        </div>
    );
}
