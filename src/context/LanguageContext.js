import React, { createContext, useContext, useState } from 'react';
import { locales } from '../locales';

// Context bahasa ringan tanpa library. Default 'en' tiap web dibuka (tanpa persist).
// `t` = objek locale untuk bahasa aktif; komponen ambil teks lewat useLanguage().
const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'id' : 'en'));
  };

  const value = {
    language,
    toggleLanguage,
    t: locales[language],
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage harus dipakai di dalam <LanguageProvider>');
  }
  return context;
};
