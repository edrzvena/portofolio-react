import { useState, useEffect } from 'react';
import { SECTION_IDS } from '../constants/sections';

const useScrollEffects = () => {
  // '' = belum di section manapun (mis. masih di hero) → tidak ada nav link aktif.
  const [activeSection, setActiveSection] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleSectionChange = () => {
      const scrollPosition = window.scrollY + 100;

      let current = '';
      for (const section of SECTION_IDS) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            current = section;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    handleSectionChange();
    window.addEventListener("scroll", handleSectionChange);
    return () => window.removeEventListener("scroll", handleSectionChange);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  return {
    activeSection,
    isMenuOpen,
    setIsMenuOpen,
    scrollToSection
  };
};

export default useScrollEffects;
