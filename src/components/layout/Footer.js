import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="border-t border-line bg-page px-4 py-10 sm:px-8 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
          <span className="font-mono text-sm font-semibold text-ink">{'</> Pedro Widya'}</span>
          <p className="text-center text-sm text-muted sm:text-right">
            {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
