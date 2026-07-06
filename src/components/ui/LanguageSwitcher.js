import React, { useEffect, useRef, useState } from 'react';
import { FiGlobe, FiChevronDown, FiCheck } from 'react-icons/fi';
import { LANGUAGES, useLanguage } from '../../context/LanguageContext';

// Pemilih bahasa minimalis: tombol globe + kode bahasa aktif (EN/ID/JP) yang membuka
// dropdown kecil berisi nama lengkap tiap bahasa. Menu tutup saat klik di luar / Escape.
const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  const current = LANGUAGES.find((l) => l.code === language) ?? LANGUAGES[0];

  useEffect(() => {
    if (!open) return undefined;

    const handlePointerDown = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };

    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open]);

  const handleSelect = (code) => {
    setLanguage(code);
    setOpen(false);
  };

  return (
    <div ref={containerRef} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={`Switch language (current: ${current.name})`}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="inline-flex items-center gap-1.5 font-mono text-xs text-muted transition-colors duration-200 hover:text-ink"
      >
        <FiGlobe className="h-3.5 w-3.5" />
        {current.short}
        <FiChevronDown className={`h-3 w-3 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute right-0 z-50 mt-2 w-36 overflow-hidden rounded-xl border border-line bg-card py-1 shadow-air"
        >
          {LANGUAGES.map((lang) => {
            const isActive = lang.code === language;
            return (
              <li key={lang.code} role="option" aria-selected={isActive}>
                <button
                  onClick={() => handleSelect(lang.code)}
                  className={`flex w-full items-center justify-between px-4 py-2 text-left font-mono text-xs transition-colors duration-200 ${
                    isActive ? 'text-accent' : 'text-muted hover:bg-surface hover:text-ink'
                  }`}
                >
                  {lang.name}
                  {isActive && <FiCheck className="h-3.5 w-3.5" />}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default LanguageSwitcher;
