export const metadata = {
    title: "Services | Dr. Richardson",
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
                <p>Personalized treatment plans tailored to your needs.</p>
            </header>

            <div style={{ display: 'grid', gap: '2rem' }}>
                {services.map((service, idx) => (
                    <div key={idx} className="glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
                            <h2 style={{ fontSize: '1.75rem', marginBottom: '0' }}>{service.title}</h2>
                            <span style={{ color: 'var(--color-primary)', fontWeight: '600' }}>{service.price}</span>
                        </div>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>

            <div className="text-center mt-lg">
                <p style={{ marginBottom: '1rem' }}>Not sure what you need?</p>
                <a href="/contact" className="btn btn-primary">Get in Touch</a>
            </div>
        </div>
    );
}
