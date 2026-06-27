import React from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { SECTION_IDS } from '../../constants/sections';
import { useLanguage } from '../../context/LanguageContext';
import LanguageSwitcher from '../ui/LanguageSwitcher';

// Header full-width sticky bergaya glassmorphism terang (backdrop blur, putih 80%,
// border bawah tipis) — sesuai DESIGN.md & mockup.
// - Kiri: logo/nama (font mono)
// - Tengah: nav links (font mono) — active dikasih warna aksen + underline biru
// - Kanan: pemilih bahasa (LanguageSwitcher — globe + kode bahasa aktif, dropdown EN/ID/JP)
// Di bawah lg jadi hamburger menu (panel dropdown di bawah header).
// Catatan: id section tetap bahasa Inggris lowercase (skills, experience, …) karena dipakai
// sebagai id elemen & target scroll; label tampilannya diambil dari t.nav[id].
const Navbar = ({ activeSection, scrollToSection, isMenuOpen, setIsMenuOpen }) => {
  const { t } = useLanguage();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-8 lg:px-16">
        {/* Kiri: logo / nama */}
        <button
          onClick={() => scrollToSection('home')}
          className="shrink-0 font-mono text-sm font-semibold tracking-tight text-ink"
        >
          {'</> Pedro Widya'}
        </button>

        {/* Tengah: nav links (desktop) */}
        <nav className="hidden flex-1 items-center justify-center gap-8 lg:flex">
          {SECTION_IDS.map((sectionId) => {
            const isActive = activeSection === sectionId;
            return (
              <button
                key={sectionId}
                onClick={() => scrollToSection(sectionId)}
                className={`relative font-mono text-xs transition-colors duration-200 ${
                  isActive ? 'text-accent' : 'text-muted hover:text-ink'
                }`}
              >
                {t.nav[sectionId]}
                <span
                  className={`absolute -bottom-1.5 left-0 h-0.5 w-full rounded-full bg-accent transition-opacity duration-200 ${
                    isActive ? 'opacity-100' : 'opacity-0'
                  }`}
                ></span>
              </button>
            );
          })}
        </nav>

        {/* Kanan: pemilih bahasa + hamburger */}
        <div className="flex shrink-0 items-center gap-2">
          <LanguageSwitcher />

          {/* Hamburger (mobile) */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-line text-ink transition-colors duration-200 hover:bg-surface lg:hidden"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FiX className="h-4 w-4" /> : <FiMenu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {isMenuOpen && (
        <div className="border-b border-line bg-white/95 px-4 py-3 backdrop-blur-md sm:px-8 lg:hidden">
          <div className="flex flex-col gap-1">
            {SECTION_IDS.map((sectionId) => {
              const isActive = activeSection === sectionId;
              return (
                <button
                  key={sectionId}
                  onClick={() => scrollToSection(sectionId)}
                  className={`rounded-lg px-4 py-2.5 text-left font-mono text-sm transition-colors duration-200 ${
                    isActive ? 'bg-surface text-accent' : 'text-muted hover:bg-surface hover:text-ink'
                  }`}
                >
                  {t.nav[sectionId]}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
