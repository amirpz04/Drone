'use client';

import { motion } from 'framer-motion';
import { Camera, Video, Layers } from 'lucide-react';
import { useLanguage } from '@/app/providers/LanguageProvider';

export const Services = () => {
    const { t } = useLanguage();

    const icons = [
        <Camera size={40} strokeWidth={1} key="cam" />,
        <Video size={40} strokeWidth={1} key="vid" />,
        <Layers size={40} strokeWidth={1} key="lay" />
    ];

    return (
        <section id="services" className="section-padding bg-[var(--bg-secondary)]">
            <div className="container">
                <div className="flex flex-col md:flex-row gap-16 md:items-start">
                    <div className="md:w-1/3">
                        <h2 className="text-3xl md:text-5xl font-medium mb-6 font-[family-name:var(--font-outfit)] sticky top-32">
                            {t.services.title}
                        </h2>
                    </div>

                    <div className="md:w-2/3 grid gap-8">
                        {t.services.items.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group p-8 rounded-3xl bg-[#171717] hover:bg-[#222] transition-all duration-300 shadow-sm hover:shadow-lg border border-white/5 hover:border-white/10"
                            >
                                <div className="mb-6 text-zinc-400 group-hover:text-white group-hover:scale-110 transition-all duration-300 origin-left">
                                    {icons[index]}
                                </div>
                                <h3 className="text-2xl font-medium mb-4 text-white">{service.title}</h3>
                                <p className="text-zinc-400 leading-relaxed text-lg group-hover:text-zinc-300 transition-colors">
                                    {service.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
