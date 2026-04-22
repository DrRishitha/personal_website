"use client";

import { useState } from 'react';
import Image from 'next/image';
import Tabs from '@/components/shared/Tabs';
import styles from './BookConsultation.module.css';

const UPI_ID = 'dr.rishithakotla@upi';
const WA_NUMBER = '917569200837';

function OnlineBooking() {
    const [hasPaid, setHasPaid] = useState(false);
    const [copied, setCopied] = useState(false);
    const [qrFailed, setQrFailed] = useState(false);

    const copyUpi = async () => {
        try {
            await navigator.clipboard.writeText(UPI_ID);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            // clipboard may be unavailable; silently fail
        }
    };

    if (hasPaid) {
        return (
            <div className={styles.thankyou}>
                <div className={styles.thankyouIcon}>✅</div>
                <h3>Thank you!</h3>
                <p>
                    Please confirm your appointment via WhatsApp. Share your name, preferred date/time,
                    and a screenshot of the payment so we can block your slot.
                </p>
                <a
                    href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Hello Dr. Kotla, I have completed the payment for my consultation. I would like to book an appointment.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`btn ${styles.whatsapp}`}
                >
                    💬 Confirm on WhatsApp
                </a>
                <button onClick={() => setHasPaid(false)} className="btn btn-ghost" style={{ marginTop: '0.5rem' }}>
                    ← Go back
                </button>
            </div>
        );
    }

    return (
        <div>
            <div className={styles.sectionHeader}>
                <h3>Pay via UPI</h3>
                <p>Scan the QR code or copy the UPI ID below to complete your consultation payment.</p>
            </div>

            <div className={styles.upiCard}>
                <div className={styles.qrWrap}>
                    {!qrFailed ? (
                        <Image
                            src="/qr-upi.png"
                            alt="UPI QR code"
                            width={200}
                            height={200}
                            className={styles.qrImage}
                            onError={() => setQrFailed(true)}
                            unoptimized
                        />
                    ) : (
                        <div className={styles.qrPlaceholder} aria-hidden="true">
                            <svg viewBox="0 0 200 200" width="170" height="170">
                                <defs>
                                    <pattern id="dots" width="14" height="14" patternUnits="userSpaceOnUse">
                                        <rect width="10" height="10" rx="2" fill="currentColor" opacity="0.85" />
                                    </pattern>
                                </defs>
                                <rect width="200" height="200" rx="12" fill="white" />
                                <rect x="14" y="14" width="172" height="172" fill="url(#dots)" />
                                <rect x="14" y="14" width="50" height="50" fill="white" />
                                <rect x="22" y="22" width="34" height="34" fill="currentColor" />
                                <rect x="136" y="14" width="50" height="50" fill="white" />
                                <rect x="144" y="22" width="34" height="34" fill="currentColor" />
                                <rect x="14" y="136" width="50" height="50" fill="white" />
                                <rect x="22" y="144" width="34" height="34" fill="currentColor" />
                            </svg>
                            <span>Demo code — place <code>qr-upi.png</code> in /public</span>
                        </div>
                    )}
                </div>

                <div className={styles.upiContent}>
                    <span className={styles.upiLabel}>UPI ID</span>
                    <div className={styles.upiRow}>
                        <code className={styles.upiId}>{UPI_ID}</code>
                        <button onClick={copyUpi} className={styles.copyBtn} aria-label="Copy UPI ID">
                            {copied ? '✓ Copied' : 'Copy'}
                        </button>
                    </div>
                    <p className={styles.upiHint}>After paying, tap the button below to confirm via WhatsApp.</p>
                    <button onClick={() => setHasPaid(true)} className="btn btn-primary btn-block">
                        I&apos;ve completed payment
                    </button>
                </div>
            </div>
        </div>
    );
}

function OfflineBooking() {
    return (
        <div>
            <div className={styles.sectionHeader}>
                <h3>Visit our clinic</h3>
                <p>Walk-ins welcome. Appointments preferred for shorter wait times.</p>
            </div>

            <div className={styles.infoGrid}>
                <div className={styles.infoCard}>
                    <div className={styles.infoIcon}>📍</div>
                    <div>
                        <h4>Address</h4>
                        <p>Himayathnagar, Hyderabad</p>
                    </div>
                </div>
                <div className={styles.infoCard}>
                    <div className={styles.infoIcon}>🕐</div>
                    <div>
                        <h4>Clinic hours</h4>
                        <p>Mon – Fri · 9:00 AM – 5:00 PM</p>
                    </div>
                </div>
                <div className={styles.infoCard}>
                    <div className={styles.infoIcon}>📞</div>
                    <div>
                        <h4>Call to book</h4>
                        <p><a href="tel:+917569200837">(+91) 7569 200 837</a></p>
                    </div>
                </div>
                <div className={styles.infoCard}>
                    <div className={styles.infoIcon}>✉️</div>
                    <div>
                        <h4>Email</h4>
                        <p><a href="mailto:dr.rishithakotla@gmail.com">dr.rishithakotla@gmail.com</a></p>
                    </div>
                </div>
            </div>

            <a
                href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Hello Dr. Kotla, I would like to book an in-clinic appointment.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`btn ${styles.whatsapp} btn-block`}
                style={{ marginTop: '1rem' }}
            >
                💬 Book via WhatsApp
            </a>
        </div>
    );
}

export default function BookConsultation() {
    const tabs = [
        { id: 'online', label: 'Online consultation', icon: '💻', content: <OnlineBooking /> },
        { id: 'offline', label: 'Visit clinic', icon: '🏥', content: <OfflineBooking /> }
    ];

    return (
        <div>
            <div className={styles.hero}>
                <span className="eyebrow">Book with Dr. Kotla</span>
                <h2>Choose how you&rsquo;d like to consult</h2>
            </div>
            <Tabs tabs={tabs} defaultTab="online" />
        </div>
    );
}
