import React from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../../context/ThemeContext';

// Tombol ganti tema gelap/terang — ikon matahari saat gelap (klik ke terang),
// ikon bulan saat terang (klik ke gelap). Ditaruh di navbar sebelah pemilih bahasa.
const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Light mode' : 'Dark mode'}
      className="flex h-8 w-8 items-center justify-center rounded-full border border-line text-muted transition-colors duration-200 hover:bg-surface hover:text-ink"
    >
      {isDark ? <FiSun className="h-4 w-4" /> : <FiMoon className="h-4 w-4" />}
    </button>
  );
};

export default ThemeToggle;
