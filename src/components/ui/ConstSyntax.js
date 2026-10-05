import React from 'react';

// Teks bergaya syntax JS: const <name> = "<value>";
// Dipakai untuk role di Hero. Ukuran & font diatur lewat className.
const ConstSyntax = ({ name, value, className = '' }) => {
  return (
    <span className={`whitespace-nowrap font-mono ${className}`}>
      <span className="text-violet-600 dark:text-violet-400">const</span>{' '}
      <span className="text-accent">{name}</span>{' '}
      <span className="text-muted">=</span>{' '}
      <span className="text-emerald-700 dark:text-emerald-400">"{value}"</span>
      <span className="text-muted">;</span>
    </span>
  );
};

export default ConstSyntax;
