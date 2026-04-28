import React from "react";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Skills from '../sections/Skills';
import Experience from '../sections/Experience';
import Education from '../sections/Education';
import Projects from '../sections/Projects';
import Contact from '../sections/Contact';
import { useTheme } from '../context/ThemeContext';
import useScrollEffects from '../hooks/useScrollEffects';

const Home = () => {
  const { isDarkMode } = useTheme();
  const { 
    blobRefs, 
    activeSection, 
    isMenuOpen, 
    setIsMenuOpen, 
    scrollToSection 
  } = useScrollEffects();

  return (
    <div className={`${isDarkMode ? 'bg-black text-white' : 'bg-gray-100 text-gray-900'} font-sans overflow-x-hidden relative flex transition-colors duration-300 min-h-screen`}>
      <Navbar 
        activeSection={activeSection} 
        scrollToSection={scrollToSection} 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen} 
      />

      {/* Main Content */}
      <div className="flex-1 w-full lg:ml-0 lg:pl-64 transition-all duration-300">
        {/* Animated Background */}
        <div className="fixed inset-0">
          <div className="absolute inset-0">
            <div
              ref={(ref) => (blobRefs.current[0] = ref)}
              className={`absolute top-0 -left-4 md:w-96 md:h-96 w-72 h-72 ${isDarkMode ? 'bg-purple-500' : 'bg-purple-300'} rounded-full mix-blend-multiply filter blur-[128px] ${isDarkMode ? 'opacity-40 md:opacity-20' : 'opacity-30 md:opacity-15'}`}
            ></div>
            <div
              ref={(ref) => (blobRefs.current[1] = ref)}
              className={`absolute top-0 -right-4 w-96 h-96 ${isDarkMode ? 'bg-cyan-500' : 'bg-cyan-300'} rounded-full mix-blend-multiply filter blur-[128px] ${isDarkMode ? 'opacity-40 md:opacity-20' : 'opacity-30 md:opacity-15'} hidden sm:block`}
            ></div>
            <div
              ref={(ref) => (blobRefs.current[2] = ref)}
              className={`absolute -bottom-8 left-[-40%] md:left-20 w-96 h-96 ${isDarkMode ? 'bg-blue-500' : 'bg-blue-300'} rounded-full mix-blend-multiply filter blur-[128px] ${isDarkMode ? 'opacity-40 md:opacity-20' : 'opacity-30 md:opacity-15'}`}
            ></div>
            <div
              ref={(ref) => (blobRefs.current[3] = ref)}
              className={`absolute -bottom-10 right-20 w-96 h-96 ${isDarkMode ? 'bg-blue-500' : 'bg-blue-300'} rounded-full mix-blend-multiply filter blur-[128px] ${isDarkMode ? 'opacity-20 md:opacity-10' : 'opacity-15 md:opacity-5'} hidden sm:block`}
            ></div>
          </div>
          {/* Grid Background */}
          <div className={`absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f10_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f10_1px,transparent_1px)] bg-[size:24px_24px] ${isDarkMode ? '' : 'opacity-20'}`}></div>
        </div>

        <Hero scrollToSection={scrollToSection} />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
