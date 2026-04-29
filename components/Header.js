"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';
import { useLanguage } from '@/components/i18n/LanguageProvider';
import LanguageSwitcher from '@/components/i18n/LanguageSwitcher';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();
    const { t } = useLanguage();

    const NAV_LINKS = [
        { href: '/', label: t('nav.home') },
        { href: '/about', label: t('nav.about') },
        { href: '/services', label: t('nav.services') },
        { href: '/tools', label: t('nav.tools') },
        { href: '/disorders', label: t('nav.disorders') },
    ];

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    const toggleMenu = () => setIsOpen(v => !v);
    const closeMenu = () => setIsOpen(false);

    return (
        <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
            <div className={`container ${styles.container}`}>
                <Link href="/" className={styles.logo} onClick={closeMenu}>
                    <span className={styles.logoMark} aria-hidden="true">✦</span>
                    <span className={styles.logoText}>
                        <span className={styles.logoTitle}>Dr. Rishitha Kotla</span>
                        <span className={styles.logoSub}>Psychiatrist</span>
                    </span>
                </Link>

                <nav className={styles.navDesktop} aria-label="Primary">
                    {NAV_LINKS.map(link => {
                        const active = pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`${styles.link} ${active ? styles.linkActive : ''}`}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                    <div className={styles.langSlot}>
                        <LanguageSwitcher />
                    </div>
                    <Link href="/contact" className={`btn btn-primary ${styles.cta}`}>
                        {t('nav.bookConsultation')}
                    </Link>
                </nav>

                <button
                    className={`${styles.hamburger} ${isOpen ? styles.hamburgerOpen : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle navigation"
                    aria-expanded={isOpen}
                >
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                </button>
            </div>

            <div
                className={`${styles.mobileMenu} ${isOpen ? styles.menuOpen : ''}`}
                aria-hidden={!isOpen}
            >
                <nav className={styles.navMobile} aria-label="Mobile">
                    {NAV_LINKS.map((link, i) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={styles.mobileLink}
                            onClick={closeMenu}
                            style={{ animationDelay: `${0.05 * i + 0.1}s` }}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <div className={styles.mobileLangSlot}>
                        <LanguageSwitcher variant="mobile" />
                    </div>
                    <Link
                        href="/contact"
                        className={`btn btn-primary btn-lg ${styles.mobileCta}`}
                        onClick={closeMenu}
                    >
                        {t('nav.bookConsultation')}
                    </Link>
                </nav>
            </div>
        </header>
    );
}
