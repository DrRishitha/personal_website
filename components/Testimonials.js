export default function Testimonials() {
    return (
        <section style={{ background: 'var(--color-primary)', color: 'white', padding: '6rem 0' }}>
            <div className="container text-center">
                <h2 style={{ color: 'white', marginBottom: '3rem' }}>Patient Stories</h2>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <blockquote style={{ fontSize: '1.5rem', fontStyle: 'italic', marginBottom: '2rem' }}>
                        &quot;Dr. Richardson provided the safe space I needed to finally address my anxiety. The combination of therapy and practical tools has given me my life back.&quot;
                    </blockquote>
                    <cite style={{ fontStyle: 'normal', fontWeight: 'bold' }}>— Anonymous Patient</cite>
                </div>
            </div>
        </section>
    );
}
