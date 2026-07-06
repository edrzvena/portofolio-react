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
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  } catch (e) {
    return 'light';
  }
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', theme === 'dark');
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
