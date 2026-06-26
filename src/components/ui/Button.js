import React from 'react';

// Tombol mengikuti sistem "Precision Portfolio".
// - primary: latar biru royal solid, teks putih (aksi utama).
// - secondary: latar putih, border 1px, teks charcoal (aksi sekunder).
// Bisa render sebagai <button> (default) atau elemen lain lewat prop `as`,
// mis. <Button as="a" href="..."> untuk link. Padding/lebar diteruskan lewat `className`.
const VARIANTS = {
  primary: 'bg-accent text-white hover:bg-accent-hover',
  secondary: 'bg-white text-ink border border-line hover:bg-surface hover:border-line-strong',
};

const Button = ({ as: Component = 'button', variant = 'primary', className = '', children, ...props }) => {
  return (
    <Component
      className={`inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-200 active:scale-[0.98] text-sm sm:text-base ${VARIANTS[variant]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Button;
