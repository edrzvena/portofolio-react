import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import Logo from '../ui/Logo';

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="border-t border-line bg-page px-4 py-10 sm:px-8 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
          <Logo />
          <p className="text-center text-sm text-muted sm:text-right">
            {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
