import React, { createContext, useContext, useEffect, useState } from 'react';

// Context tema (terang/gelap) tanpa library. Nilai awal diambil dari localStorage,
// fallback ke preferensi sistem (prefers-color-scheme). Perubahan disimpan ke
// localStorage dan disinkron ke class `dark` di <html> (dipakai Tailwind darkMode:'class').
const ThemeContext = createContext(null);

const getInitialTheme = () => {
  if (typeof window === 'undefined') return 'light';
  try {
    const stored = localStorage.getItem('theme');
    if (stored === 'dark' || stored === 'light') return stored;
    // Default: selalu light mode saat web pertama dibuka (belum ada pilihan tersimpan).
    return 'light';
  } catch (e) {
    return 'light';
  }
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', theme === 'dark');

    // Sinkron warna chrome browser mobile dengan warna latar halaman.
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', theme === 'dark' ? '#0b1120' : '#ffffff');

    try {
      localStorage.setItem('theme', theme);
    } catch (e) {
      /* localStorage bisa gagal (mode privasi) — abaikan saja. */
    }
  }, [theme]);

  const toggleTheme = () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme harus dipakai di dalam <ThemeProvider>');
  }
  return context;
};
