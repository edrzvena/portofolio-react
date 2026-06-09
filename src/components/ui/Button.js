import React from 'react';

// Tombol "primary" dengan gradient brand (hijau -> biru).
// Bisa render sebagai <button> (default) atau elemen lain lewat prop `as`,
// mis. <Button as="a" href="..."> untuk link.
// Variasi padding/radius/lebar diteruskan lewat `className`.
const Button = ({ as: Component = 'button', className = '', children, ...props }) => {
  return (
    <Component
      className={`inline-flex items-center justify-center gap-2 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold transition-all duration-300 hover:shadow-cyan-500/30 hover:scale-105 text-sm sm:text-base ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Button;
