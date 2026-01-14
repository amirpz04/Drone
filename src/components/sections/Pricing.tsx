'use client';

import { Check } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { useLanguage } from '@/app/providers/LanguageProvider';
import { motion } from 'framer-motion';

export const Pricing = () => {
    const { t } = useLanguage();

    return (
        <section id="pricing" className="section-padding bg-[var(--bg-primary)]">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-2xl mx-auto mb-20"
                >
                    <h2 className="text-3xl md:text-5xl font-medium mb-6 font-[family-name:var(--font-outfit)]">
                        {t.pricing.title}
                    </h2>
                    <p className="text-[var(--text-secondary)] text-lg">
                        {t.pricing.subtitle}
                    </p>
                </motion.div>

                {/* One-off Services */}
                <div className="grid md:grid-cols-3 gap-6 mb-32">
                    {/* Photo Package */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                        className="p-8 rounded-2xl bg-[#171717] border border-white/5 hover:border-white/20 transition-colors duration-300 flex flex-col"
                    >
                        <h3 className="text-xl font-medium mb-4 text-white">{t.pricing.packages.photo.title}</h3>
                        <div className="text-5xl font-bold mb-8 tracking-tighter text-white">1000 TRY</div>
                        <ul className="space-y-4 mb-10 text-zinc-400 flex-1">
                            {t.pricing.packages.photo.features.map((feature, i) => (
                                <li key={i} className="flex items-start gap-4">
                                    <Check size={18} className="text-white shrink-0 mt-1" />
                                    <span className="leading-snug">{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <Link href="#contact" className="w-full">
                            <Button variant="outline" className="w-full bg-transparent border-white/20 text-white hover:bg-white hover:text-black transition-all rounded-xl py-6">
                                {t.pricing.packages.photo.cta}
                            </Button>
                        </Link>
                    </motion.div>

                    {/* Video Package */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="p-8 rounded-2xl bg-[#171717] border border-white/5 hover:border-white/20 transition-colors duration-300 flex flex-col"
                    >
                        <h3 className="text-xl font-medium mb-4 text-white">{t.pricing.packages.video.title}</h3>
                        <div className="text-5xl font-bold mb-8 tracking-tighter text-white">2000 TRY</div>
                        <ul className="space-y-4 mb-10 text-zinc-400 flex-1">
                            {t.pricing.packages.video.features.map((feature, i) => (
                                <li key={i} className="flex items-start gap-4">
                                    <Check size={18} className="text-white shrink-0 mt-1" />
                                    <span className="leading-snug">{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <Link href="#contact" className="w-full">
                            <Button variant="outline" className="w-full bg-transparent border-white/20 text-white hover:bg-white hover:text-black transition-all rounded-xl py-6">
                                {t.pricing.packages.video.cta}
                            </Button>
                        </Link>
                    </motion.div>

                    {/* Bundle */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="relative p-8 rounded-2xl bg-[#171717] border border-white/20 shadow-2xl shadow-white/5 flex flex-col"
                    >
                        <div className="absolute top-4 right-4 bg-white text-black text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                            {t.pricing.packages.bundle.badge}
                        </div>
                        <h3 className="text-xl font-medium mb-4 text-white">{t.pricing.packages.bundle.title}</h3>
                        <div className="text-5xl font-bold mb-8 tracking-tighter text-white">2500 TRY</div>
                        <ul className="space-y-4 mb-10 text-zinc-300 flex-1">
                            {t.pricing.packages.bundle.features.map((feature, i) => (
                                <li key={i} className="flex items-start gap-4">
                                    <Check size={18} className="text-white shrink-0 mt-1" />
                                    <span className="leading-snug">{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <Link href="#contact" className="w-full">
                            <Button variant="primary" className="w-full bg-white text-black hover:bg-zinc-200 border-transparent rounded-xl py-6 font-bold">
                                {t.pricing.packages.bundle.cta}
                            </Button>
                        </Link>
                    </motion.div>
                </div>

                {/* Monthly Plans */}
                <div className="max-w-4xl mx-auto pt-20">
                    <h3 className="text-2xl font-medium mb-12 text-center text-white">{t.pricing.monthly.title}</h3>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-8 rounded-2xl bg-[#171717] hover:bg-[#222] transition-colors border border-white/5">
                            <h4 className="font-medium mb-2 text-lg text-white">{t.pricing.monthly.starter.title}</h4>
                            <p className="text-3xl font-semibold mb-4 text-white">9,000 <span className="text-sm font-normal text-zinc-500">/mo</span></p>
                            <p className="text-sm text-zinc-400 leading-relaxed">{t.pricing.monthly.starter.subtitle}</p>
                        </div>
                        <div className="p-8 rounded-2xl bg-[#171717] border border-white/10 hover:border-white/20 transition-all relative overflow-hidden">
                            <h4 className="font-medium mb-2 text-lg text-white">{t.pricing.monthly.pro.title}</h4>
                            <p className="text-3xl font-semibold mb-4 text-white">16,000 <span className="text-sm font-normal text-zinc-500">/mo</span></p>
                            <p className="text-sm text-zinc-400 leading-relaxed">{t.pricing.monthly.pro.subtitle}</p>
                        </div>
                        <div className="p-8 rounded-2xl bg-[#171717] hover:bg-[#222] transition-colors flex flex-col justify-center text-center group cursor-pointer border border-white/5">
                            <h4 className="font-medium mb-3 text-lg text-white">{t.pricing.monthly.custom.title}</h4>
                            <p className="text-sm text-zinc-400 mb-6 leading-relaxed">{t.pricing.monthly.custom.subtitle}</p>
                            <Link href="#contact" className="text-sm font-bold underline underline-offset-4 decoration-white/50 text-white group-hover:decoration-white transition-all">
                                {t.pricing.monthly.custom.link}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
