"use client";

import { useState } from 'react';
import Tabs from '@/components/shared/Tabs';

function OnlineBooking() {
    const [hasPaid, setHasPaid] = useState(false);

    if (hasPaid) {
        return (
            <div style={{ textAlign: 'center', padding: '2rem' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
                <h3 style={{ marginBottom: '1rem' }}>Thank You!</h3>
                <p style={{ marginBottom: '2rem', color: 'var(--color-text-muted)', maxWidth: '450px', margin: '0 auto 2rem' }}>
                    Please confirm your appointment via WhatsApp. Share your name, preferred date/time, and a screenshot of the payment.
                </p>
                <a
                    href="https://wa.me/917569200837?text=Hello%20Dr.%20Kotla%2C%20I%20have%20completed%20the%20payment%20for%20my%20consultation.%20I%20would%20like%20to%20book%20an%20appointment."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    style={{ background: '#25D366', fontSize: '1.1rem', padding: '1rem 2rem' }}
                >
                    📱 Confirm on WhatsApp
                </a>
                <button
                    onClick={() => setHasPaid(false)}
                    style={{ display: 'block', margin: '1rem auto 0', background: 'none', border: 'none', color: 'var(--color-text-muted)', cursor: 'pointer', fontSize: '0.9rem' }}
                >
                    ← Go back
                </button>
            </div>
        );
    }

    return (
        <div>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <h3 style={{ marginBottom: '0.75rem', fontSize: '1.3rem' }}>Pay via UPI</h3>
                <p style={{ color: 'var(--color-text-muted)', marginBottom: '0', maxWidth: '450px', margin: '0 auto' }}>
                    Scan the QR code or use the UPI ID below to complete your consultation payment.
                </p>
            </div>

            <div style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem',
                padding: '2rem', background: 'hsla(205, 50%, 25%, 0.03)', borderRadius: 'var(--radius-lg)',
                border: '1px solid hsla(205, 50%, 25%, 0.06)'
            }}>
                {/* QR Code Placeholder */}
                <div style={{
                    width: '200px', height: '200px', background: 'white', borderRadius: 'var(--radius-md)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px dashed var(--color-primary)',
                    color: 'var(--color-text-muted)', fontSize: '0.9rem', textAlign: 'center', padding: '1rem'
                }}>
                    UPI QR Code<br />(Place qr-upi.png in /public)
                </div>

                <div style={{ textAlign: 'center' }}>
                    <p style={{ fontWeight: 600, color: 'var(--color-primary)', marginBottom: '0.5rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>UPI ID</p>
                    <p style={{
                        fontSize: '1.25rem', fontWeight: 700, padding: '0.75rem 1.5rem',
                        background: 'white', borderRadius: 'var(--radius-md)', border: '1px solid hsla(205, 50%, 25%, 0.1)',
                        letterSpacing: '0.02em', color: 'var(--color-text-main)', marginBottom: 0
                    }}>
                        dr.rishithakotla@upi
                    </p>
                </div>

                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', textAlign: 'center', marginBottom: 0 }}>
                    After completing payment, click the button below to confirm your booking via WhatsApp.
                </p>

                <button onClick={() => setHasPaid(true)} className="btn btn-primary" style={{ width: '100%', maxWidth: '300px' }}>
                    I&apos;ve Completed Payment
                </button>
            </div>
        </div>
    );
}

function OfflineBooking() {
    return (
        <div>
            <h3 style={{ marginBottom: '1.5rem', textAlign: 'center', fontSize: '1.3rem' }}>Visit Our Clinic</h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '500px', margin: '0 auto' }}>
                <div style={{ padding: '1.25rem 1.5rem', background: 'hsla(205, 50%, 25%, 0.03)', borderRadius: 'var(--radius-md)', border: '1px solid hsla(205, 50%, 25%, 0.06)' }}>
                    <h4 style={{ marginBottom: '0.5rem', fontSize: '0.95rem' }}>📍 Address</h4>
                    <p style={{ color: 'var(--color-text-muted)', marginBottom: 0 }}>Himayathnagar, Hyderabad</p>
                </div>

                <div style={{ padding: '1.25rem 1.5rem', background: 'hsla(205, 50%, 25%, 0.03)', borderRadius: 'var(--radius-md)', border: '1px solid hsla(205, 50%, 25%, 0.06)' }}>
                    <h4 style={{ marginBottom: '0.5rem', fontSize: '0.95rem' }}>🕐 Clinic Hours</h4>
                    <p style={{ color: 'var(--color-text-muted)', marginBottom: '0.25rem' }}>Monday - Friday: 9:00 AM - 5:00 PM</p>
                    <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', marginBottom: 0, opacity: 0.8 }}>Walk-ins welcome. Appointments preferred.</p>
                </div>

                <div style={{ padding: '1.25rem 1.5rem', background: 'hsla(205, 50%, 25%, 0.03)', borderRadius: 'var(--radius-md)', border: '1px solid hsla(205, 50%, 25%, 0.06)' }}>
                    <h4 style={{ marginBottom: '0.5rem', fontSize: '0.95rem' }}>📞 Call to Book</h4>
                    <a href="tel:+917569200837" style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '1.1rem' }}>
                        (+91) 7569200837
                    </a>
                </div>

                <div style={{ padding: '1.25rem 1.5rem', background: 'hsla(205, 50%, 25%, 0.03)', borderRadius: 'var(--radius-md)', border: '1px solid hsla(205, 50%, 25%, 0.06)' }}>
                    <h4 style={{ marginBottom: '0.5rem', fontSize: '0.95rem' }}>✉️ Email</h4>
                    <a href="mailto:dr.rishithakotla@gmail.com" style={{ color: 'var(--color-primary)', fontWeight: 500 }}>
                        dr.rishithakotla@gmail.com
                    </a>
                </div>

                <a
                    href="https://wa.me/917569200837?text=Hello%20Dr.%20Kotla%2C%20I%20would%20like%20to%20book%20an%20in-clinic%20appointment."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    style={{ background: '#25D366', textAlign: 'center', marginTop: '0.5rem' }}
                >
                    📱 Book via WhatsApp
                </a>
            </div>
        </div>
    );
}

export default function BookConsultation() {
    const tabs = [
        { id: 'online', label: 'Online Consultation', icon: '💻', content: <OnlineBooking /> },
        { id: 'offline', label: 'Visit Clinic', icon: '🏥', content: <OfflineBooking /> }
    ];

    return <Tabs tabs={tabs} defaultTab="online" />;
}
