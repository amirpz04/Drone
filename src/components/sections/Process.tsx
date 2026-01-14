'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/app/providers/LanguageProvider';

export const Process = () => {
    const { t } = useLanguage();

    return (
        <section className="section-padding bg-black text-white relative overflow-hidden">
            {/* Subtle background detail */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <div className="container relative z-10">
                <div className="mb-20 max-w-2xl">
                    <h2 className="text-3xl md:text-5xl font-medium mb-6 font-[family-name:var(--font-outfit)]">
                        {t.process.title}
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-12 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-[2.5rem] left-0 right-0 h-px bg-gradient-to-r from-white/5 via-white/20 to-white/5" />

                    {t.process.steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="relative"
                        >
                            <div className="w-20 h-20 rounded-full bg-[#111] border border-white/10 flex items-center justify-center text-xl font-bold font-[family-name:var(--font-outfit)] mb-8 relative z-10 group hover:border-white/30 transition-colors">
                                {step.number}
                            </div>
                            <h3 className="text-2xl font-medium mb-4">{step.title}</h3>
                            <p className="text-zinc-400 leading-relaxed text-lg">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
