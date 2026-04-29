"use client";

import styles from './Contact.module.css';
import BookConsultation from '@/components/BookConsultation';
import ContactForm from '@/components/ContactForm';
import { useLanguage } from '@/components/i18n/LanguageProvider';

export default function Contact() {
    const { t } = useLanguage();

    return (
        <div className="container mt-lg mb-lg">
            <header className={styles.header}>
                <span className="eyebrow">{t('contact.eyebrow')}</span>
                <h1>{t('contact.headingPart1')} <span className="gradient-text">{t('contact.headingPart2')}</span></h1>
                <p>{t('contact.subheading')}</p>
            </header>

            <div className={`glass-panel ${styles.section}`}>
                <BookConsultation />
            </div>

            <div className={`glass-panel ${styles.section} ${styles.messageSection}`}>
                <div className={styles.messageHeader}>
                    <h2>{t('contact.sendMessage')}</h2>
                    <p>{t('contact.haveQuestion')}</p>
                </div>
                <div className={styles.grid}>
                    <aside className={styles.sidebar}>
                        <div className={styles.infoBlock}>
                            <h4>{t('contact.clinic')}</h4>
                            <p>{t('footer.location')}</p>
                        </div>
                        <div className={styles.infoBlock}>
                            <h4>{t('contact.phone')}</h4>
                            <p><a href="tel:+917569200837">(+91) 7569 200 837</a></p>
                        </div>
                        <div className={styles.infoBlock}>
                            <h4>{t('contact.email')}</h4>
                            <p><a href="mailto:dr.rishithakotla@gmail.com">dr.rishithakotla@gmail.com</a></p>
                        </div>
                        <div className={styles.infoBlock}>
                            <h4>{t('contact.hours')}</h4>
                            <p>{t('footer.workHours')}</p>
                        </div>
                        <div className={styles.crisisBlock}>
                            <strong>{t('contact.crisis')}</strong>
                            <p>{t('contact.crisisCall')} <a href="tel:18005990019">1800-599-0019</a></p>
                        </div>
                    </aside>
                    <div>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    );
}
