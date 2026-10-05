import React from 'react';

// Logo nama bergaya syntax pemanggilan fungsi JS: pedroWidya()
// Dipakai di Navbar & Footer.
const Logo = ({ className = '' }) => {
  return (
    <span className={`whitespace-nowrap font-mono text-sm font-semibold ${className}`}>
      <span className="text-accent">pedroWidya</span>
      <span className="text-muted">()</span>
    </span>
  );
};

export default Logo;
