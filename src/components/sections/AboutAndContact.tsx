'use client';

import { Mail, Phone, MessageCircle, Send, MapPin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useLanguage } from '@/app/providers/LanguageProvider';
import { motion } from 'framer-motion';

export const AboutAndContact = () => {
    const { t, dir } = useLanguage();

    return (
        <>
            {/* About Section */}
            <section id="about" className="section-padding bg-[var(--bg-secondary)] relative overflow-hidden">

                <div className="container relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-6xl font-medium mb-12 font-[family-name:var(--font-outfit)] leading-tight text-white"
                        >
                            {t.about.title}
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="grid md:grid-cols-2 gap-12 text-lg text-[var(--text-secondary)] leading-relaxed"
                        >
                            <div>
                                <p className="mb-6">{t.about.p1}</p>
                                <div className="h-1 w-20 bg-white mt-8" />
                            </div>
                            <div>
                                <p className="mb-6">{t.about.p2}</p>
                                <p>{t.about.p3}</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-32 bg-[#000000] text-white">
                <div className="container max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="flex flex-col md:flex-row gap-12 md:gap-24"
                    >

                        <div className="md:w-1/2">
                            <h2 className="text-5xl md:text-7xl font-bold mb-8 font-[family-name:var(--font-outfit)] tracking-tight">
                                {t.contact.title}
                            </h2>
                            <p className="text-white/60 mb-12 text-xl leading-relaxed max-w-md">
                                {t.contact.subtitle}
                            </p>

                            <div className="space-y-6 text-lg">
                                <a href="mailto:Amir.TCP@outlook.com" className="group flex items-center gap-6 p-4 rounded-xl hover:bg-white/10 transition-all cursor-pointer">
                                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white group-hover:text-white transition-colors">
                                        <Mail size={20} />
                                    </div>
                                    <span className="font-light tracking-wide">Amir.TCP@outlook.com</span>
                                </a>
                                <a href="tel:+905527438304" className="group flex items-center gap-6 p-4 rounded-xl hover:bg-white/10 transition-all cursor-pointer">
                                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white group-hover:text-white transition-colors">
                                        <Phone size={20} />
                                    </div>
                                    <span className="font-light tracking-wide">+90 552 743 83 04</span>
                                </a>
                            </div>
                        </div>

                        <div className="md:w-1/2 flex flex-col justify-center">
                            <div className="bg-white/5 backdrop-blur-lg p-10 rounded-[2.5rem] border border-white/10 shadow-2xl">
                                <div className="flex flex-col gap-6">
                                    <a href="https://wa.me/905527438304" target="_blank" rel="noopener noreferrer" className="block w-full">
                                        <Button className="w-full justify-between px-8 py-6 h-auto text-lg !bg-[#25D366] hover:!bg-[#1ebd59] !text-white border-none rounded-2xl group transition-transform hover:scale-105 shadow-lg">
                                            <span className="flex items-center gap-4 font-bold">
                                                <MessageCircle size={24} />
                                                {t.contact.whatsapp}
                                            </span>
                                            <ArrowRight className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                                        </Button>
                                    </a>

                                    <a href="https://t.me/amirpzq" target="_blank" rel="noopener noreferrer" className="block w-full">
                                        <Button className="w-full justify-between px-8 py-6 h-auto text-lg !bg-[#0088cc] hover:!bg-[#007abd] !text-white border-none rounded-2xl group transition-transform hover:scale-105 shadow-lg">
                                            <span className="flex items-center gap-4 font-bold">
                                                <Send size={24} />
                                                {t.contact.telegram}
                                            </span>
                                            <ArrowRight className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                                        </Button>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </motion.div>
                </div>
            </section>
        </>
    );
};
