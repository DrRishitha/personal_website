"use client";

import { useState } from 'react';
import { useLanguage } from '@/components/i18n/LanguageProvider';
import styles from './ContactForm.module.css';

const WA_NUMBER = '917569200837';
const EMAIL = 'dr.rishithakotla@gmail.com';

export default function ContactForm() {
    const { t } = useLanguage();
    const [form, setForm] = useState({ name: '', email: '', subject: t('form.topicGeneral'), message: '' });
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState('idle');

    const update = (field) => (e) => {
        setForm(f => ({ ...f, [field]: e.target.value }));
        setErrors(errs => ({ ...errs, [field]: undefined }));
    };

    const validate = () => {
        const next = {};
        if (!form.name.trim()) next.name = t('form.errName');
        if (!form.email.trim()) next.email = t('form.errEmail');
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = t('form.errEmailValid');
        if (!form.message.trim()) next.message = t('form.errMessage');
        else if (form.message.trim().length < 10) next.message = t('form.errMessageShort');
        return next;
    };

    const sendByEmail = (e) => {
        e.preventDefault();
        const v = validate();
        if (Object.keys(v).length) {
            setErrors(v);
            return;
        }
        const body = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`;
        const url = `mailto:${EMAIL}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = url;
        setStatus('success');
    };

    const sendByWhatsApp = () => {
        const v = validate();
        if (Object.keys(v).length) {
            setErrors(v);
            return;
        }
        const msg = `Name: ${form.name}\nEmail: ${form.email}\nTopic: ${form.subject}\n\n${form.message}`;
        const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
        window.open(url, '_blank', 'noopener,noreferrer');
        setStatus('success');
    };

    if (status === 'success') {
        return (
            <div className={styles.successCard}>
                <div className={styles.successIcon}>✅</div>
                <h3>{t('form.successHeading')}</h3>
                <p>
                    {t('form.successBody1')}{' '}
                    <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
                </p>
                <button
                    onClick={() => { setStatus('idle'); setForm({ name: '', email: '', subject: t('form.topicGeneral'), message: '' }); }}
                    className="btn btn-outline"
                >
                    {t('form.sendAnother')}
                </button>
            </div>
        );
    }

    return (
        <form className={styles.form} onSubmit={sendByEmail} noValidate>
            <div className={styles.row}>
                <div className={styles.field}>
                    <label htmlFor="cf-name" className="form-label">{t('form.name')}</label>
                    <input
                        id="cf-name"
                        type="text"
                        className={`form-input ${errors.name ? styles.inputError : ''}`}
                        placeholder={t('form.namePlaceholder')}
                        value={form.name}
                        onChange={update('name')}
                        autoComplete="name"
                    />
                    {errors.name && <span className={styles.errorText}>{errors.name}</span>}
                </div>
                <div className={styles.field}>
                    <label htmlFor="cf-email" className="form-label">{t('form.email')}</label>
                    <input
                        id="cf-email"
                        type="email"
                        className={`form-input ${errors.email ? styles.inputError : ''}`}
                        placeholder={t('form.emailPlaceholder')}
                        value={form.email}
                        onChange={update('email')}
                        autoComplete="email"
                    />
                    {errors.email && <span className={styles.errorText}>{errors.email}</span>}
                </div>
            </div>

            <div className={styles.field}>
                <label htmlFor="cf-subject" className="form-label">{t('form.topic')}</label>
                <select
                    id="cf-subject"
                    className="form-input"
                    value={form.subject}
                    onChange={update('subject')}
                >
                    <option>{t('form.topicGeneral')}</option>
                    <option>{t('form.topicAppointment')}</option>
                    <option>{t('form.topicMedication')}</option>
                    <option>{t('form.topicTherapy')}</option>
                    <option>{t('form.topicSecondOpinion')}</option>
                    <option>{t('form.topicOther')}</option>
                </select>
            </div>

            <div className={styles.field}>
                <label htmlFor="cf-message" className="form-label">{t('form.message')}</label>
                <textarea
                    id="cf-message"
                    className={`form-textarea ${errors.message ? styles.inputError : ''}`}
                    placeholder={t('form.messagePlaceholder')}
                    value={form.message}
                    onChange={update('message')}
                />
                {errors.message && <span className={styles.errorText}>{errors.message}</span>}
            </div>

            <div className={styles.actions}>
                <button type="submit" className="btn btn-primary">
                    {t('form.sendEmail')}
                </button>
                <button type="button" onClick={sendByWhatsApp} className={`btn ${styles.whatsapp}`}>
                    {t('form.sendWhatsapp')}
                </button>
            </div>

            <p className={styles.privacyNote}>{t('form.privacy')}</p>
        </form>
    );
}
