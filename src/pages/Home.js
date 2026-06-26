import React from "react";
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../sections/Hero';
import Skills from '../sections/Skills';
import Experience from '../sections/Experience';
import Education from '../sections/Education';
import Certificates from '../sections/Certificates';
import Projects from '../sections/Projects';
import Contact from '../sections/Contact';
import useScrollEffects from '../hooks/useScrollEffects';

const Home = () => {
  const {
    activeSection,
    isMenuOpen,
    setIsMenuOpen,
    scrollToSection
  } = useScrollEffects();

  return (
    <div className="min-h-screen bg-white text-ink font-sans overflow-x-hidden">
      <Navbar
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      <main>
        <Hero scrollToSection={scrollToSection} />
        <Skills />
        <Experience />
        <Education />
        <Certificates />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

export default Home;
