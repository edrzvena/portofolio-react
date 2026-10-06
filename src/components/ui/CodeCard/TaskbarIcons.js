import React, { useId } from 'react';

// Ikon taskbar Windows 11 yang tidak ada di react-icons, digambar sebagai SVG.

// Logo Start: empat kotak sama besar.
export const WindowsLogo = ({ className = '' }) => (
  <svg viewBox="0 0 16 16" className={className}>
    <rect x="0" y="0" width="7.5" height="7.5" rx="0.6" />
    <rect x="8.5" y="0" width="7.5" height="7.5" rx="0.6" />
    <rect x="0" y="8.5" width="7.5" height="7.5" rx="0.6" />
    <rect x="8.5" y="8.5" width="7.5" height="7.5" rx="0.6" />
  </svg>
);

// Task View: dua jendela bertumpuk.
export const TaskViewIcon = ({ className = '' }) => (
  <svg viewBox="0 0 16 16" className={className} fill="none" stroke="currentColor" strokeWidth="1.3">
    <rect x="1.5" y="4.5" width="9" height="9" rx="1.5" fill="currentColor" fillOpacity="0.9" />
    <path d="M5.5 2.5h7a1.5 1.5 0 0 1 1.5 1.5v7" strokeLinecap="round" />
  </svg>
);

// Ilustrasi kecil "Search Highlights" di sisi kanan kotak Search (di Windows asli gambarnya
// berganti tiap hari): langit senja, matahari, dan bukit.
export const SearchHighlight = ({ className = '' }) => {
  const gradientId = useId();
  return (
    <svg viewBox="0 0 30 18" className={className}>
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#6366f1" />
          <stop offset="1" stopColor="#f472b6" />
        </linearGradient>
      </defs>
      <rect width="30" height="18" rx="9" fill={`url(#${gradientId})`} />
      <circle cx="20" cy="7" r="3.2" fill="#fde047" />
      <path d="M0 15 Q7 8 14 13 T30 11 V18 H0 Z" fill="#22c55e" />
      <path d="M0 18 Q10 12 20 16 T30 15 V18 Z" fill="#15803d" />
    </svg>
  );
};
