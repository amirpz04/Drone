'use client';

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { translations, Language } from '@/lib/i18n';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: typeof translations['tr'];
    dir: 'ltr' | 'rtl';
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguage] = useState<Language>('tr');

    // Load language from localStorage if available
    useEffect(() => {
        const savedLang = localStorage.getItem('language') as Language;
        if (savedLang && ['tr', 'en'].includes(savedLang)) {
            setLanguage(savedLang);
        }
    }, []);

    const handleSetLanguage = (lang: Language) => {
        setLanguage(lang);
        localStorage.setItem('language', lang);
        // Set document language
        document.documentElement.lang = lang;
        document.documentElement.dir = 'ltr';
    };

    const dir = 'ltr';

    return (
        <LanguageContext.Provider
            value={{
                language,
                setLanguage: handleSetLanguage,
                t: translations[language],
                dir
            }}
        >
            <div dir="ltr">
                {children}
            </div>
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
