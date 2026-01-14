'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '@/app/providers/LanguageProvider';
import { motion, AnimatePresence } from 'framer-motion';

export const Navigation = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { language, setLanguage, t } = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const links = [
        { href: '#work', label: t.nav.work },
        { href: '#services', label: t.nav.services },
        { href: '#pricing', label: t.nav.pricing },
        { href: '#about', label: t.nav.about },
    ];

    return (
        <nav
            className={clsx(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
                isScrolled
                    ? 'py-4 bg-[var(--bg-primary)]/90 backdrop-blur-md shadow-sm'
                    : 'py-6 bg-transparent'
            )}
        >
            <div className="container flex items-center justify-between">
                <Link
                    href="/"
                    className="text-xl md:text-2xl font-bold tracking-tight font-[family-name:var(--font-outfit)] hover:opacity-80 transition-opacity"
                    onClick={() => setIsMobileMenuOpen(false)}
                >
                    Drone Perspectives
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    <div className="flex gap-6 items-center">
                        {links.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors relative group"
                            >
                                {link.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[var(--accent)] transition-all duration-300 group-hover:w-full" />
                            </Link>
                        ))}
                    </div>

                    <div className="h-4 w-px bg-[var(--text-secondary)]/20 mx-2" />

                    {/* Language Switcher */}
                    <div className="flex items-center gap-3 text-sm font-medium text-[var(--text-secondary)]">
                        <button
                            onClick={() => setLanguage('tr')}
                            className={clsx("hover:text-[var(--text-primary)] transition-colors", language === 'tr' && "text-[var(--accent)] font-bold")}
                        >
                            TR
                        </button>
                        <button
                            onClick={() => setLanguage('en')}
                            className={clsx("hover:text-[var(--text-primary)] transition-colors", language === 'en' && "text-[var(--accent)] font-bold")}
                        >
                            EN
                        </button>
                    </div>

                    <Link
                        href="#contact"
                        className="px-5 py-2 rounded-full bg-[var(--text-primary)] text-[var(--bg-primary)] text-sm font-medium hover:opacity-90 transition-opacity hover:scale-105 transform duration-200"
                    >
                        {t.nav.contact}
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="flex items-center gap-4 md:hidden">
                    {/* Mobile Language Switcher */}
                    <div className="flex items-center gap-2 text-xs font-bold text-[var(--text-secondary)] mr-2">
                        <button onClick={() => setLanguage('tr')} className={language === 'tr' ? 'text-[var(--accent)]' : ''}>TR</button>
                        <span>/</span>
                        <button onClick={() => setLanguage('en')} className={language === 'en' ? 'text-[var(--accent)]' : ''}>EN</button>
                    </div>

                    <button
                        className="p-2 text-[var(--text-primary)]"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, x: '100%' }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: '100%' }}
                            transition={{ type: "tween", duration: 0.3 }}
                            className="fixed inset-0 bg-[var(--bg-primary)] z-40 md:hidden flex flex-col pt-24 px-6 h-screen"
                        >
                            <div className="flex flex-col gap-8 text-center sm:text-left">
                                {links.map((link) => (
                                    <Link
                                        key={link.label}
                                        href={link.href}
                                        className="text-3xl font-light text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                                <Link
                                    href="#contact"
                                    className="px-8 py-4 mt-8 rounded-full bg-[var(--text-primary)] text-[var(--bg-primary)] text-xl font-medium w-full text-center"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {t.nav.contact}
                                </Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>
        </nav>
    );
};
