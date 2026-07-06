import React from 'react';

// Kartu "Precision": permukaan putih, border tipis 1px, sudut 12px.
// Hover memunculkan "air shadow" halus dan mempertegas border.
// Pakai `className` untuk utilitas tambahan per pemakaian, mis. "group" atau "flex flex-col".
const Card = ({ children, className = '' }) => {
  return (
    <div
      className={`bg-card border border-line rounded-xl p-6 transition-all duration-300 hover:border-line-strong hover:shadow-air ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
