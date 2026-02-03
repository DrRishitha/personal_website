export default function Footer() {
    return (
        <footer style={{ marginTop: 'auto', padding: '4rem 0 2rem', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
            <div className="container text-center">
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
                    &copy; {new Date().getFullYear()} Dr. Rishitha Kotla. All rights reserved.
                </p>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem', marginTop: '0.5rem' }}>
                    This website is for informational purposes only and does not provide medical advice.
                    If you are in crisis, please call emergency services.
                </p>
            </div>
        </footer>
    );
}
