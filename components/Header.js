"use client";

import { useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <header className={styles.header}>
            <div className={`container ${styles.container}`}>
                <Link href="/" className={styles.logo} onClick={closeMenu}>
                    Dr. Rishitha Kotla
                </Link>

                {/* Desktop Nav */}
                <nav className={styles.navDesktop}>
                    <Link href="/" className={styles.link}>Home</Link>
                    <Link href="/about" className={styles.link}>About</Link>
                    <Link href="/services" className={styles.link}>Services</Link>
                    <Link href="/tools" className={styles.link}>Self-Help Tools</Link>
                    <Link href="/contact" className={`btn btn-primary ${styles.cta}`}>Contact</Link>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className={styles.hamburger}
                    onClick={toggleMenu}
                    aria-label="Toggle navigation"
                    aria-expanded={isOpen}
                >
                    <span className={`${styles.bar} ${isOpen ? styles.open : ''}`}></span>
                    <span className={`${styles.bar} ${isOpen ? styles.open : ''}`}></span>
                    <span className={`${styles.bar} ${isOpen ? styles.open : ''}`}></span>
                </button>

                {/* Mobile Nav Overlay */}
                <div className={`${styles.mobileMenu} ${isOpen ? styles.menuOpen : ''}`}>
                    <nav className={styles.navMobile}>
                        <Link href="/" className={styles.mobileLink} onClick={closeMenu}>Home</Link>
                        <Link href="/about" className={styles.mobileLink} onClick={closeMenu}>About</Link>
                        <Link href="/services" className={styles.mobileLink} onClick={closeMenu}>Services</Link>
                        <Link href="/tools" className={styles.mobileLink} onClick={closeMenu}>Self-Help Tools</Link>
                        <Link href="/contact" className={`btn btn-primary ${styles.mobileCta}`} onClick={closeMenu}>Contact</Link>
                    </nav>
                </div>
            </div>
        </header>
    );
}
