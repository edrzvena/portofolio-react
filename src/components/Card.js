import React from 'react';
import { useTheme } from '../context/ThemeContext';

// Card dengan style glassmorphism yang dipakai di banyak section
// (Education, Experience, Projects, Certificates).
// Pakai `className` untuk menambah utilitas khusus per pemakaian, mis. "group" atau "flex flex-col".
const Card = ({ children, className = '' }) => {
  const { isDarkMode } = useTheme();
  return (
    <div
      className={`${isDarkMode ? 'bg-white bg-opacity-10' : 'bg-gray-800 bg-opacity-10'} backdrop-blur-lg rounded-lg border ${isDarkMode ? 'border-white border-opacity-20' : 'border-gray-300'} p-6 transition-transform duration-300 hover:scale-[1.01] ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
