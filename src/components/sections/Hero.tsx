'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ArrowDown } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/app/providers/LanguageProvider';

interface HeroProps {
    backgroundSrc?: string;
    backgroundType?: 'video' | 'image';
}

export const Hero = ({ backgroundSrc = '/footage/2818546-uhd_3840_2160_24fps.mp4', backgroundType = 'video' }: HeroProps) => {
    const { t } = useLanguage();

    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
            {/* Background (Drone Video or Image) */}
            <div className="absolute inset-0 z-0">
                {backgroundType === 'video' ? (
                    <video
                        src={backgroundSrc}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover opacity-90"
                    />
                ) : (
                    <img
                        src={backgroundSrc}
                        alt="Hero Background"
                        className="w-full h-full object-cover opacity-90"
                    />
                )}
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/80" />
            </div>

            <div className="container relative z-10 flex flex-col items-center text-center max-w-4xl px-4 text-white">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 text-balance font-[family-name:var(--font-outfit)] drop-shadow-2xl"
                >
                    {t.hero.title}
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
                    className="text-xl md:text-2xl text-white/95 mb-12 max-w-2xl text-balance whitespace-pre-line font-medium drop-shadow-xl"
                >
                    {t.hero.subtitle}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <Link href="#work">
                        <Button size="lg" className="bg-white text-black hover:bg-zinc-200 border-none font-bold px-10 py-6 text-lg rounded-full shadow-lg hover:scale-105 transition-transform">
                            {t.hero.cta}
                        </Button>
                    </Link>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[var(--text-secondary)] animate-bounce"
            >
                <ArrowDown size={24} strokeWidth={1.5} />
            </motion.div>
        </section>
    );
};
