"use client";
import React, { createContext, useState, useMemo, useCallback } from 'react';
import { translations } from '@/lib/translations';

type Language = 'en' | 'es';

// This function is a bit more robust for nested keys
const getTranslation = (lang: Language, key: string): string => {
  const keys = key.split('.');
  let result: any = translations[lang];
  for (const k of keys) {
    result = result?.[k];
    if (result === undefined) {
      return key; // Return key if not found
    }
  }
  return result;
}

interface I18nContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => any; // Can return string or array of objects
}

export const I18nContext = createContext<I18nContextType | null>(null);

export const I18nProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLang] = useState<Language>('en');

  const t = useCallback((key: string) => {
    return getTranslation(lang, key);
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang, t }), [lang, t]);

  return (
    <I18nContext.Provider value={value}>
      {children}
    </I18nContext.Provider>
  );
};
