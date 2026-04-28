import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Hero = ({ scrollToSection }) => {
  const { isDarkMode } = useTheme();
  return (
    <section className="min-h-screen flex items-center justify-center text-center relative z-10 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent mb-4">
          Hi, I'm <span className="inline-block overflow-hidden whitespace-nowrap animate-typing">Pedro Widya</span>
        </h1>
        <p className={`text-lg sm:text-xl ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-1`}>
          Full-Stack Developer
        </p>

        <p className={`text-sm sm:text-base ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} mb-2`}>
          React <span className="text-green-400">|</span> Express <span className="text-green-400">|</span> Tailwind <span className="text-green-400">|</span> PostgreSQL
        </p>
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => scrollToSection('about')}
            className="bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold py-3 px-6 rounded-full shadow-lg z-50 transition-all duration-300 hover:shadow-cyan-500/30 hover:scale-105 text-sm sm:text-base"
          >
            View My Profile
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className={`w-6 h-10 border-2 ${isDarkMode ? 'border-gray-400' : 'border-gray-500'} rounded-full flex justify-center`}>
            <div className={`w-1 h-3 ${isDarkMode ? 'bg-gray-400' : 'bg-gray-500'} rounded-full mt-2`}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
