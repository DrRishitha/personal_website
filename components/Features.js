import styles from './Features.module.css';

const features = [
    {
        title: "Individual Therapy",
        description: "Personalized psychotherapy sessions to help you navigate life's challenges.",
        icon: "🗣️"
    },
    {
        title: "Medication Management",
        description: "Careful, evidence-based medication planning when necessary for your recovery.",
        icon: "💊"
    },
    {
        title: "Self-Help Tools",
        description: "Free access to Guided Breathing, Depression Screeners, and specialized exercises.",
        icon: "🧘"
    },
    {
        title: "Telepsychiatry",
        description: "Completely private and secure video sessions from the comfort of your home.",
        icon: "💻"
    }
];

export default function Features() {
    return (
        <section className="container mb-lg">
            <h2 className="text-center" style={{ marginBottom: '3rem' }}>Comprehensive Care Approach</h2>
            <div className={styles.grid}>
                {features.map((feature, index) => (
                    <div key={index} className="glass-panel" style={{ padding: '2rem' }}>
                        <div className={styles.icon}>{feature.icon}</div>
                        <h3>{feature.title}</h3>
                        <p>{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
