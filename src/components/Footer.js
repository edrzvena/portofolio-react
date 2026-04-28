import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
  const { isDarkMode } = useTheme();
  return (
    <footer className={`py-8 text-center ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} px-4`}>
      <p className="text-sm">© 2026 Pedro Widya. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
