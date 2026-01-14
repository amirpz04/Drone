'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/app/providers/LanguageProvider';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export type PortfolioItem = {
    id: string; // Changed to string to support flexible IDs
    type: 'video' | 'image';
    src: string;
    alt: string;
};

interface PortfolioProps {
    items: PortfolioItem[];
}

export const Portfolio = ({ items }: PortfolioProps) => {
    const { t } = useLanguage();
    // Use the passed items, or empty array if undefined
    const portfolioItems = items || [];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const [isFullScreen, setIsFullScreen] = useState(false);

    // Lock body scroll when fullscreen
    useEffect(() => {
        if (isFullScreen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isFullScreen]);

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.95,
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1,
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.95,
        }),
    };

    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset: number, velocity: number) => {
        return Math.abs(offset) * velocity;
    };

    const paginate = (newDirection: number) => {
        setDirection(newDirection);
        setCurrentIndex((prev) => (prev + newDirection + portfolioItems.length) % portfolioItems.length);
    };

    if (portfolioItems.length === 0) {
        return null; // Or some placeholder state
    }

    return (
        <section id="work" className="section-padding bg-[var(--bg-primary)] overflow-hidden">
            <div className="container relative min-h-[600px] flex flex-col justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mb-12 max-w-2xl z-10"
                >
                    <h2 className="text-3xl md:text-5xl font-medium mb-6 font-[family-name:var(--font-outfit)]">
                        {t.portfolio.title}
                    </h2>
                    <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
                        {t.portfolio.description}
                    </p>
                </motion.div>

                <div className="relative w-full h-[50vh] md:h-[70vh] rounded-3xl overflow-hidden shadow-2xl bg-[var(--bg-secondary)]">
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.div
                            key={currentIndex}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.2 },
                            }}
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={1}
                            onDragEnd={(e, { offset, velocity }) => {
                                const swipe = swipePower(offset.x, velocity.x);

                                if (swipe < -swipeConfidenceThreshold) {
                                    paginate(1);
                                } else if (swipe > swipeConfidenceThreshold) {
                                    paginate(-1);
                                }
                            }}
                            className="absolute inset-0 w-full h-full"
                        >
                            {portfolioItems[currentIndex].type === 'video' ? (
                                <video
                                    src={portfolioItems[currentIndex].src}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <img
                                    src={portfolioItems[currentIndex].src}
                                    alt={portfolioItems[currentIndex].alt}
                                    className="w-full h-full object-cover"
                                />
                            )}

                            {/* Slide Overlay/Info */}
                            {/* Slide Overlay/Info */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                        </motion.div>
                    </AnimatePresence>

                    {/* Fullscreen Button - Top Right (Static) */}
                    <button
                        onClick={() => setIsFullScreen(true)}
                        className="absolute top-4 right-4 md:top-8 md:right-8 z-30 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all hover:scale-105 active:scale-95 group"
                        aria-label="View Fullscreen"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-maximize-2"><polyline points="15 3 21 3 21 9" /><polyline points="9 21 3 21 3 15" /><line x1="21" x2="14" y1="3" y2="10" /><line x1="3" x2="10" y1="21" y2="14" /></svg>
                    </button>

                    {/* Navigation Controls (Counter + Buttons) */}
                    <div className="absolute right-4 bottom-4 md:right-8 md:bottom-8 z-20 flex items-center gap-3">
                        {/* Slide Counter */}
                        <div className="h-12 md:h-14 px-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium text-sm md:text-base flex items-center justify-center gap-2 select-none shadow-sm">
                            <span className="text-white">{currentIndex + 1}</span>
                            <span className="text-white/40 font-light">/</span>
                            <span className="text-white/60">{portfolioItems.length}</span>
                        </div>

                        {/* Prev Button */}
                        <button
                            onClick={() => paginate(-1)}
                            className="p-3 md:p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all hover:scale-105 active:scale-95 shadow-sm flex items-center justify-center"
                            aria-label="Previous slide"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>

                        {/* Next Button */}
                        <button
                            onClick={() => paginate(1)}
                            className="p-3 md:p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all hover:scale-105 active:scale-95 shadow-sm flex items-center justify-center"
                            aria-label="Next slide"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Full Screen Modal */}
            <AnimatePresence>
                {isFullScreen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
                        onClick={() => setIsFullScreen(false)}
                    >
                        <button
                            onClick={() => setIsFullScreen(false)}
                            className="absolute top-4 right-4 md:top-8 md:right-8 p-3 text-white/50 hover:text-white transition-colors z-50"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                        </button>

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative w-full h-full flex items-center justify-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {portfolioItems[currentIndex].type === 'video' ? (
                                <video
                                    src={portfolioItems[currentIndex].src}
                                    autoPlay
                                    controls
                                    className="max-w-full max-h-full object-contain rounded-md shadow-2xl"
                                />
                            ) : (
                                <img
                                    src={portfolioItems[currentIndex].src}
                                    alt={portfolioItems[currentIndex].alt}
                                    className="max-w-full max-h-full object-contain rounded-md shadow-2xl"
                                />
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};
