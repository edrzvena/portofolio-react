import React, { createContext, useContext, useState } from 'react';
import { locales } from '../locales';

// Daftar bahasa yang tersedia (sumber tunggal untuk dropdown pemilih bahasa).
// `code` = key locale internal; `short` = label di tombol navbar; `name` = label di dropdown.
export const LANGUAGES = [
  { code: 'en', short: 'EN', name: 'English' },
  { code: 'id', short: 'ID', name: 'Indonesia' },
  { code: 'ja', short: 'JP', name: '日本語' },
];

// Context bahasa ringan tanpa library. Default 'en' tiap web dibuka (tanpa persist).
// `t` = objek locale untuk bahasa aktif; komponen ambil teks lewat useLanguage().
const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const value = {
    language,
    setLanguage,
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
