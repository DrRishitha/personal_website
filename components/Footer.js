"use client";

import Link from 'next/link';
import HelplineNumber from '@/components/shared/HelplineNumber';
import { useLanguage } from '@/components/i18n/LanguageProvider';
import styles from './Footer.module.css';

export default function Footer() {
    const { t } = useLanguage();

    return (
        <footer className={styles.footer}>
            <div className={styles.helplineStrip}>
                <HelplineNumber />
            </div>

            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.brandCol}>
                        <Link href="/" className={styles.brand}>
                            <span className={styles.brandMark} aria-hidden="true">✦</span>
                            <span>
                                <span className={styles.brandTitle}>Dr. Rishitha Kotla</span>
                                <span className={styles.brandSub}>{t('footer.brandSub')}</span>
                            </span>
                        </Link>
                        <p className={styles.brandDesc}>{t('footer.brandDesc')}</p>
                        <div className={styles.socials}>
                            <a href="mailto:dr.rishithakotla@gmail.com" className={styles.iconBtn} aria-label="Email">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M4 6h16a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2z M2 8l10 6 10-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                            </a>
                            <a href="tel:+917569200837" className={styles.iconBtn} aria-label="Phone">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.86 19.86 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.86 19.86 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                            </a>
                            <a
                                href="https://wa.me/917569200837"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.iconBtn}
                                aria-label="WhatsApp"
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.6 6.3A7.9 7.9 0 0012 4a7.94 7.94 0 00-6.9 11.9l-.1 5 5.1-1.4a7.9 7.9 0 003.9 1h.01A7.94 7.94 0 0020 12.06 7.9 7.9 0 0017.6 6.3zm-5.6 12.2a6.55 6.55 0 01-3.3-.9l-.2-.1-3 .8.8-2.9-.2-.3a6.6 6.6 0 011.2-9 6.6 6.6 0 019 .2 6.56 6.56 0 01-4.3 12.1zm3.6-4.9c-.2-.1-1.2-.6-1.4-.7s-.3-.1-.5.1-.5.6-.6.8-.2.2-.4.1a5.32 5.32 0 01-2.6-2.3c-.2-.3 0-.5.1-.6s.2-.3.4-.4.2-.2.3-.4.1-.3 0-.4-.5-1.2-.7-1.6-.4-.4-.5-.4h-.4a.84.84 0 00-.6.3 2.54 2.54 0 00-.8 1.9 4.4 4.4 0 00.9 2.3 10 10 0 003.8 3.4c.5.2.9.4 1.2.5a2.88 2.88 0 001.3.1 2.12 2.12 0 001.4-1 1.7 1.7 0 00.1-1c0-.1-.2-.2-.4-.3z"/></svg>
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className={styles.colTitle}>{t('footer.exploreTitle')}</h4>
                        <nav className={styles.linkList} aria-label="Footer navigation">
                            <Link href="/">{t('footer.linkHome')}</Link>
                            <Link href="/about">{t('footer.linkAbout')}</Link>
                            <Link href="/services">{t('footer.linkServices')}</Link>
                            <Link href="/tools">{t('footer.linkTools')}</Link>
                            <Link href="/disorders">{t('footer.linkDisorders')}</Link>
                            <Link href="/emdr">{t('footer.linkEmdr')}</Link>
                            <Link href="/contact">{t('footer.linkContact')}</Link>
                        </nav>
                    </div>

                    <div>
                        <h4 className={styles.colTitle}>{t('footer.contactTitle')}</h4>
                        <ul className={styles.contactList}>
                            <li>
                                <span>📍</span>
                                <span>{t('footer.location')}</span>
                            </li>
                            <li>
                                <span>📞</span>
                                <a href="tel:+917569200837">(+91) 7569 200 837</a>
                            </li>
                            <li>
                                <span>✉️</span>
                                <a href="mailto:dr.rishithakotla@gmail.com">dr.rishithakotla@gmail.com</a>
                            </li>
                            <li>
                                <span>🕐</span>
                                <span>{t('footer.workHours')}</span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className={styles.colTitle}>{t('footer.crisisTitle')}</h4>
                        <div className={styles.crisisCard}>
                            <p className={styles.crisisLine}>
                                <span>{t('footer.emergency')}</span>
                                <a href="tel:112">112</a>
                            </p>
                            <p className={styles.crisisLine}>
                                <span>{t('footer.kiranLabel')}</span>
                                <a href="tel:18005990019">1800-599-0019</a>
                            </p>
                            <p className={styles.crisisLine}>
                                <span>{t('footer.vandrevalaLabel')}</span>
                                <a href="tel:18602662345">1860-2662-345</a>
                            </p>
                        </div>
                    </div>
                </div>

                <div className={styles.bottomBar}>
                    <p>&copy; {new Date().getFullYear()} Dr. Rishitha Kotla. {t('footer.allRightsReserved')}</p>
                    <p className={styles.disclaimer}>{t('footer.disclaimer')}</p>
                </div>
            </div>
        </footer>
    );
}
