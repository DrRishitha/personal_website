import Link from 'next/link';
import HelplineNumber from '@/components/shared/HelplineNumber';

export default function Footer() {
    return (
        <footer style={{ marginTop: 'auto', borderTop: '1px solid hsla(205, 50%, 25%, 0.06)' }}>
            {/* Helpline Banner */}
            <div style={{ background: 'hsla(205, 50%, 25%, 0.04)', padding: '1.5rem 0', borderBottom: '1px solid hsla(205, 50%, 25%, 0.06)' }}>
                <HelplineNumber />
            </div>

            {/* Footer Grid */}
            <div className="container" style={{ padding: '3rem 1rem 1.5rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2.5rem', marginBottom: '2.5rem' }}>
                    {/* Quick Links */}
                    <div>
                        <h4 style={{ color: 'var(--color-primary)', marginBottom: '1rem', fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Quick Links</h4>
                        <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                            <Link href="/" style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>Home</Link>
                            <Link href="/about" style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>About Dr. Kotla</Link>
                            <Link href="/services" style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>Services</Link>
                            <Link href="/tools" style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>Self-Help Tools</Link>
                            <Link href="/disorders" style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>Disorders</Link>
                            <Link href="/emdr" style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>Virtual EMDR</Link>
                        </nav>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 style={{ color: 'var(--color-primary)', marginBottom: '1rem', fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Contact</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
                            <p style={{ marginBottom: 0 }}>Himayathnagar, Hyderabad</p>
                            <a href="tel:+917569200837" style={{ color: 'var(--color-text-muted)' }}>(+91) 7569200837</a>
                            <a href="mailto:dr.rishithakotla@gmail.com" style={{ color: 'var(--color-text-muted)' }}>dr.rishithakotla@gmail.com</a>
                            <p style={{ marginBottom: 0 }}>Mon - Fri: 9:00 AM - 5:00 PM</p>
                        </div>
                    </div>

                    {/* Emergency */}
                    <div>
                        <h4 style={{ color: 'var(--color-primary)', marginBottom: '1rem', fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>In Crisis?</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
                            <p style={{ marginBottom: 0 }}>Emergency: <strong style={{ color: 'var(--color-text-main)' }}>112</strong></p>
                            <p style={{ marginBottom: 0 }}>KIRAN: <a href="tel:18005990019" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>1800-599-0019</a></p>
                            <p style={{ marginBottom: 0 }}>Vandrevala: <a href="tel:18602662345" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>1860-2662-345</a></p>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div style={{ borderTop: '1px solid hsla(205, 50%, 25%, 0.06)', paddingTop: '1.5rem', textAlign: 'center' }}>
                    <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', marginBottom: '0.5rem' }}>
                        &copy; {new Date().getFullYear()} Dr. Rishitha Kotla. All rights reserved.
                    </p>
                    <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem', opacity: 0.7, marginBottom: 0 }}>
                        This website is for informational purposes only and does not provide medical advice.
                        If you are in crisis, please call emergency services.
                    </p>
                </div>
            </div>
        </footer>
    );
}
