export const metadata = {
    title: "About Dr. Richardson | Psychiatrist",
    description: "Learn about Dr. Rishitha Kotla's background, qualifications, and philosophy of care.",
};

import styles from './About.module.css';

import styles from './About.module.css';

export default function About() {
    return (
        <div className="container mt-lg mb-lg">
            <div className="glass-panel" style={{ padding: '3rem', maxWidth: '900px', margin: '0 auto' }}>
                <h1 className="text-center" style={{ marginBottom: '2rem' }}>About Dr. Richardson</h1>

                <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', alignItems: 'flex-start' }}>
                    <div style={{ flex: '1 1 300px', background: 'var(--color-primary-light)', height: '300px', borderRadius: 'var(--radius-md)' }}>
                        {/* Placeholder for Doctor's Image */}
                        <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                            Photo Placeholder
                        </div>
                    </div>

                    <div style={{ flex: '2 1 400px' }}>
                        <h2>Compassionate Care, Clinical Excellence</h2>
                        <p>
                            Dr. Rishitha Kotla is a board-certified psychiatrist with over 15 years of experience in treating complex mental health conditions.
                            He completed his residency at [Prestigious Hospital] and fellowship at [Respected Institute].
                        </p>
                        <p>
                            &quot;My philosophy is rooted in the belief that mental health care should be collaborative. I combine the latest evidence-based treatments
                            with a warm, empathetic approach to help you find your path to wellness.&quot;
                        </p>

                        <h3 style={{ marginTop: '2rem' }}>Credentials</h3>
                        <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
                            <li>MD from University of Medicine</li>
                            <li>Board Certified in Psychiatry & Neurology</li>
                            <li>Member regarding American Psychiatric Association</li>
                        </ul>

                        <a href="/contact" className="btn btn-primary">Schedule a Visit</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
