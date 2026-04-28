import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Navbar = ({ activeSection, scrollToSection, isMenuOpen, setIsMenuOpen }) => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <>
      {/* Left Navbar - Hidden on mobile, shown on desktop */}
      <div className={`fixed left-0 top-0 h-full w-0 lg:w-64 ${isDarkMode ? 'bg-black bg-opacity-70' : 'bg-white bg-opacity-90'} backdrop-blur-lg border-r ${isDarkMode ? 'border-white border-opacity-20' : 'border-gray-200'} z-50 flex-col justify-between py-8 transition-all duration-300 hidden lg:flex`}>
        <div>
          <div className="flex justify-start lg:pl-6 mb-12">
            <h1 className="text-xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">My Portfolio</h1>
          </div>

          <div className="flex flex-col items-start space-y-8">
            {['About', 'Skills', 'Experience', 'Education', 'Projects', 'Contact'].map(section => {
              const sectionId = section.toLowerCase();
              return (
                <button
                  key={sectionId}
                  onClick={() => scrollToSection(sectionId)}
                  className={`flex items-center justify-start w-full px-6 py-3 transition-all duration-300 group relative ${activeSection === sectionId
                    ? `${isDarkMode ? 'text-white' : 'text-gray-900'}`
                    : `${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'}`
                    }`}
                >
                  <span>{section}</span>
                  <span className={`absolute left-0 h-8 w-1 rounded-r-lg bg-gradient-to-b from-green-400 to-blue-500 transition-all duration-300 ${activeSection === sectionId ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'
                    }`}></span>
                </button>
              );
            })}
          </div>

          {/* Toggle Dark/Light Mode */}
          <div className="flex justify-center mt-8">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-700 dark:bg-gray-300 transition-colors duration-300"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
          </div>
        </div>

        <div className="flex justify-start lg:pl-6">
          <p className={`text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>© 2026 Pedro Widya</p>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className="fixed top-4 left-4 z-50 lg:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`p-3 rounded-lg ${isDarkMode ? 'bg-black bg-opacity-70' : 'bg-white bg-opacity-90'} backdrop-blur-lg border ${isDarkMode ? 'border-white border-opacity-20' : 'border-gray-200'}`}
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className={`fixed inset-0 ${isDarkMode ? 'bg-black bg-opacity-90' : 'bg-white bg-opacity-95'} backdrop-blur-lg z-40 lg:hidden flex flex-col items-center justify-center`}>
          <div className="flex flex-col space-y-6 text-center w-full px-4">
            {['About', 'Skills', 'Experience', 'Education', 'Projects', 'Contact'].map(section => {
              const sectionId = section.toLowerCase();
              return (
                <button
                  key={sectionId}
                  onClick={() => scrollToSection(sectionId)}
                  className={`text-2xl font-bold py-4 transition-all duration-300 ${activeSection === sectionId
                    ? 'bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent'
                    : `${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'}`
                    }`}
                >
                  {section}
                </button>
              );
            })}

            {/* Dark mode toggle in mobile menu */}
            <div className="mt-8 flex justify-center">
              <button
                onClick={toggleDarkMode}
                className="p-3 rounded-full bg-gray-700 dark:bg-gray-300 transition-colors duration-300"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
