"use client";

import { useState } from 'react';
import Image from 'next/image';
import Tabs from '@/components/shared/Tabs';
import { useLanguage } from '@/components/i18n/LanguageProvider';
import styles from './BookConsultation.module.css';

const UPI_ID = 'dr.rishithakotla@upi';
const WA_NUMBER = '917569200837';

function OnlineBooking() {
    const { t } = useLanguage();
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
                <h3>{t('booking.thanks')}</h3>
                <p>{t('booking.thanksBody')}</p>
                <a
                    href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(t('booking.upiHelloMsg'))}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`btn ${styles.whatsapp}`}
                >
                    {t('booking.confirmWhatsapp')}
                </a>
                <button onClick={() => setHasPaid(false)} className="btn btn-ghost" style={{ marginTop: '0.5rem' }}>
                    {t('booking.goBack')}
                </button>
            </div>
        );
    }

    return (
        <div>
            <div className={styles.sectionHeader}>
                <h3>{t('booking.payUpiHeading')}</h3>
                <p>{t('booking.payUpiBody')}</p>
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
                            <span>{t('booking.demoQr')}</span>
                        </div>
                    )}
                </div>

                <div className={styles.upiContent}>
                    <span className={styles.upiLabel}>{t('booking.upiId')}</span>
                    <div className={styles.upiRow}>
                        <code className={styles.upiId}>{UPI_ID}</code>
                        <button onClick={copyUpi} className={styles.copyBtn} aria-label={t('booking.copy')}>
                            {copied ? t('booking.copied') : t('booking.copy')}
                        </button>
                    </div>
                    <p className={styles.upiHint}>{t('booking.upiHint')}</p>
                    <button onClick={() => setHasPaid(true)} className="btn btn-primary btn-block">
                        {t('booking.completedPayment')}
                    </button>
                </div>
            </div>
        </div>
    );
}

function OfflineBooking() {
    const { t } = useLanguage();

    return (
        <div>
            <div className={styles.sectionHeader}>
                <h3>{t('booking.visitHeading')}</h3>
                <p>{t('booking.visitBody')}</p>
            </div>

            <div className={styles.infoGrid}>
                <div className={styles.infoCard}>
                    <div className={styles.infoIcon}>📍</div>
                    <div>
                        <h4>{t('booking.address')}</h4>
                        <p>{t('footer.location')}</p>
                    </div>
                </div>
                <div className={styles.infoCard}>
                    <div className={styles.infoIcon}>🕐</div>
                    <div>
                        <h4>{t('booking.clinicHours')}</h4>
                        <p>{t('footer.workHours')}</p>
                    </div>
                </div>
                <div className={styles.infoCard}>
                    <div className={styles.infoIcon}>📞</div>
                    <div>
                        <h4>{t('booking.callToBook')}</h4>
                        <p><a href="tel:+917569200837">(+91) 7569 200 837</a></p>
                    </div>
                </div>
                <div className={styles.infoCard}>
                    <div className={styles.infoIcon}>✉️</div>
                    <div>
                        <h4>{t('contact.email').replace('✉️ ', '')}</h4>
                        <p><a href="mailto:dr.rishithakotla@gmail.com">dr.rishithakotla@gmail.com</a></p>
                    </div>
                </div>
            </div>

            <a
                href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(t('booking.offlineHelloMsg'))}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`btn ${styles.whatsapp} btn-block`}
                style={{ marginTop: '1rem' }}
            >
                {t('booking.bookViaWhatsapp')}
            </a>
        </div>
    );
}

export default function BookConsultation() {
    const { t } = useLanguage();

    const tabs = [
        { id: 'online', label: t('booking.tabOnline'), icon: '💻', content: <OnlineBooking /> },
        { id: 'offline', label: t('booking.tabOffline'), icon: '🏥', content: <OfflineBooking /> },
    ];

    return (
        <div>
            <div className={styles.hero}>
                <span className="eyebrow">{t('booking.eyebrow')}</span>
                <h2>{t('booking.heading')}</h2>
            </div>
            <Tabs tabs={tabs} defaultTab="online" />
        </div>
    );
}
