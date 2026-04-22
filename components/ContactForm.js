"use client";

import { useState } from 'react';
import styles from './ContactForm.module.css';

const WA_NUMBER = '917569200837';
const EMAIL = 'dr.rishithakotla@gmail.com';

export default function ContactForm() {
    const [form, setForm] = useState({ name: '', email: '', subject: 'General inquiry', message: '' });
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState('idle'); // idle | success

    const update = (field) => (e) => {
        setForm(f => ({ ...f, [field]: e.target.value }));
        setErrors(errs => ({ ...errs, [field]: undefined }));
    };

    const validate = () => {
        const next = {};
        if (!form.name.trim()) next.name = 'Please enter your name.';
        if (!form.email.trim()) next.email = 'Please enter your email.';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Please enter a valid email.';
        if (!form.message.trim()) next.message = 'Please tell us how we can help.';
        else if (form.message.trim().length < 10) next.message = 'Please share a little more detail.';
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
        const msg = `Hello Dr. Kotla,\n\nName: ${form.name}\nEmail: ${form.email}\nTopic: ${form.subject}\n\n${form.message}`;
        const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
        window.open(url, '_blank', 'noopener,noreferrer');
        setStatus('success');
    };

    if (status === 'success') {
        return (
            <div className={styles.successCard}>
                <div className={styles.successIcon}>✅</div>
                <h3>Message ready to send</h3>
                <p>
                    We&apos;ve prepared your message. If your email or WhatsApp didn&apos;t open automatically,
                    please try again or contact us directly at{' '}
                    <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
                </p>
                <button
                    onClick={() => { setStatus('idle'); setForm({ name: '', email: '', subject: 'General inquiry', message: '' }); }}
                    className="btn btn-outline"
                >
                    Send another message
                </button>
            </div>
        );
    }

    return (
        <form className={styles.form} onSubmit={sendByEmail} noValidate>
            <div className={styles.row}>
                <div className={styles.field}>
                    <label htmlFor="cf-name" className="form-label">Your name</label>
                    <input
                        id="cf-name"
                        type="text"
                        className={`form-input ${errors.name ? styles.inputError : ''}`}
                        placeholder="Jane Doe"
                        value={form.name}
                        onChange={update('name')}
                        autoComplete="name"
                    />
                    {errors.name && <span className={styles.errorText}>{errors.name}</span>}
                </div>
                <div className={styles.field}>
                    <label htmlFor="cf-email" className="form-label">Email address</label>
                    <input
                        id="cf-email"
                        type="email"
                        className={`form-input ${errors.email ? styles.inputError : ''}`}
                        placeholder="jane@example.com"
                        value={form.email}
                        onChange={update('email')}
                        autoComplete="email"
                    />
                    {errors.email && <span className={styles.errorText}>{errors.email}</span>}
                </div>
            </div>

            <div className={styles.field}>
                <label htmlFor="cf-subject" className="form-label">Topic</label>
                <select
                    id="cf-subject"
                    className="form-input"
                    value={form.subject}
                    onChange={update('subject')}
                >
                    <option>General inquiry</option>
                    <option>Book an appointment</option>
                    <option>Medication question</option>
                    <option>Therapy question</option>
                    <option>Second opinion</option>
                    <option>Something else</option>
                </select>
            </div>

            <div className={styles.field}>
                <label htmlFor="cf-message" className="form-label">Message</label>
                <textarea
                    id="cf-message"
                    className={`form-textarea ${errors.message ? styles.inputError : ''}`}
                    placeholder="How can we help?"
                    value={form.message}
                    onChange={update('message')}
                />
                {errors.message && <span className={styles.errorText}>{errors.message}</span>}
            </div>

            <div className={styles.actions}>
                <button type="submit" className="btn btn-primary">
                    ✉️ Send via Email
                </button>
                <button type="button" onClick={sendByWhatsApp} className={`btn ${styles.whatsapp}`}>
                    💬 Send via WhatsApp
                </button>
            </div>

            <p className={styles.privacyNote}>
                🔒 This form opens your email or WhatsApp — nothing is stored on our servers.
            </p>
        </form>
    );
}
