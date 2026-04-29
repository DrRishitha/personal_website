"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { translations, DEFAULT_LANGUAGE, LANGUAGES } from '@/data/translations';

const STORAGE_KEY = 'psychrish.lang';

const LanguageContext = createContext({
    lang: DEFAULT_LANGUAGE,
    setLang: () => {},
    t: (key) => key,
    languages: LANGUAGES,
});

export function LanguageProvider({ children }) {
    const [lang, setLangState] = useState(DEFAULT_LANGUAGE);

    useEffect(() => {
        try {
            const stored = window.localStorage.getItem(STORAGE_KEY);
            if (stored && translations[stored]) {
                setLangState(stored);
            }
        } catch {}
    }, []);

    useEffect(() => {
        if (typeof document !== 'undefined') {
            document.documentElement.lang = lang;
        }
    }, [lang]);

    const setLang = useCallback((next) => {
        if (!translations[next]) return;
        setLangState(next);
        try {
            window.localStorage.setItem(STORAGE_KEY, next);
        } catch {}
    }, []);

    const t = useCallback(
        (key) => {
            const dict = translations[lang] || translations[DEFAULT_LANGUAGE];
            if (dict[key] != null) return dict[key];
            const fallback = translations[DEFAULT_LANGUAGE];
            return fallback[key] != null ? fallback[key] : key;
        },
        [lang],
    );

    const value = useMemo(() => ({ lang, setLang, t, languages: LANGUAGES }), [lang, setLang, t]);

    return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
    return useContext(LanguageContext);
}
