import React from 'react';
import { FiArrowUpRight, FiMenu, FiX } from 'react-icons/fi';
import { useTheme } from '../../context/ThemeContext';
import { SECTIONS } from '../../constants/sections';
import resumeFile from '../../assets/files/PEDRO WIDYADHARTA CIADY.pdf';

// Top floating pill navbar.
// - Kiri: logo/nama (font mono)
// - Tengah: nav links (font mono, kecil) — active dikasih underline accent + lebih terang
// - Kanan: toggle dark mode + CTA "Resume" (pill, icon arrow-up-right)
// Di bawah lg jadi hamburger menu (dropdown pill di bawah navbar).
const Navbar = ({ activeSection, scrollToSection, isMenuOpen, setIsMenuOpen }) => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  // Warna mengikuti palette yang sudah ada (lihat Home.js / Navbar lama).
  const surface = isDarkMode ? 'bg-black/70 border-white/20' : 'bg-white/90 border-gray-200';
  const dimText = isDarkMode ? 'text-gray-400' : 'text-gray-500';
  const dimHover = isDarkMode ? 'hover:text-gray-200' : 'hover:text-gray-700';
  const brightText = isDarkMode ? 'text-white' : 'text-gray-900';

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <div
        className={`mx-auto flex max-w-[680px] items-center justify-between gap-3 rounded-full border ${surface} px-3 py-2 shadow-lg backdrop-blur-lg transition-colors duration-300 sm:px-4 lg:max-w-fit lg:justify-center lg:gap-6`}
      >
        {/* Kiri: logo / nama */}
        <button
          onClick={() => scrollToSection(SECTIONS[0].toLowerCase())}
          className="shrink-0 font-mono text-sm font-bold tracking-tight bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent"
        >
          {'</> Pedro'}
        </button>

        {/* Tengah: nav links (desktop) */}
        <div className="hidden items-center gap-4 lg:flex">
          {SECTIONS.map((section) => {
            const sectionId = section.toLowerCase();
            const isActive = activeSection === sectionId;
            return (
              <button
                key={sectionId}
                onClick={() => scrollToSection(sectionId)}
                className={`relative font-mono text-xs transition-colors duration-300 ${
                  isActive ? brightText : `${dimText} ${dimHover}`
                }`}
              >
                {section}
                <span
                  className={`absolute -bottom-1.5 left-0 h-0.5 w-full rounded-full bg-gradient-to-r from-green-400 to-blue-500 transition-opacity duration-300 ${
                    isActive ? 'opacity-100' : 'opacity-0'
                  }`}
                ></span>
              </button>
            );
          })}
        </div>

        {/* Kanan: toggle dark mode + Resume CTA */}
        <div className="flex shrink-0 items-center gap-2">
          <button
            onClick={toggleDarkMode}
            className={`hidden h-8 w-8 items-center justify-center rounded-full border ${surface} transition-colors duration-300 sm:flex`}
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>

          <a
            href={resumeFile}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-green-400 to-blue-500 px-3 py-1.5 font-mono text-xs font-semibold text-white transition-all duration-300 hover:shadow-cyan-500/30 hover:scale-105"
          >
            Resume
            <FiArrowUpRight className="h-3.5 w-3.5" />
          </a>

          {/* Hamburger (mobile) */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`flex h-8 w-8 items-center justify-center rounded-full border ${surface} ${brightText} transition-colors duration-300 lg:hidden`}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FiX className="h-4 w-4" /> : <FiMenu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {isMenuOpen && (
        <div
          className={`mx-auto mt-2 max-w-[680px] rounded-3xl border ${surface} p-4 shadow-lg backdrop-blur-lg transition-colors duration-300 lg:hidden`}
        >
          <div className="flex flex-col gap-1">
            {SECTIONS.map((section) => {
              const sectionId = section.toLowerCase();
              const isActive = activeSection === sectionId;
              return (
                <button
                  key={sectionId}
                  onClick={() => scrollToSection(sectionId)}
                  className={`rounded-xl px-4 py-2.5 text-left font-mono text-sm transition-colors duration-300 ${
                    isActive
                      ? `${brightText} ${isDarkMode ? 'bg-white/10' : 'bg-gray-100'}`
                      : `${dimText}`
                  }`}
                >
                  {section}
                </button>
              );
            })}

            {/* Toggle dark mode di mobile menu */}
            <button
              onClick={toggleDarkMode}
              className={`mt-2 flex items-center gap-2 rounded-xl px-4 py-2.5 font-mono text-sm ${dimText} transition-colors duration-300`}
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                  Light Mode
                </>
              ) : (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                  Dark Mode
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
