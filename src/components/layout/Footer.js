import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const links = [
  { name: 'GitHub', href: 'https://github.com/edrzvena' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/pedro-widyadharta-ciady-773209350' },
  { name: 'Email', href: 'mailto:widyadharta@gmail.com' },
];

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="border-t border-line bg-page px-4 py-10 sm:px-8 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <span className="font-mono text-sm font-semibold text-ink">{'</> Pedro Widya'}</span>
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm text-muted transition-colors duration-200 hover:text-accent"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
        <p className="mt-8 text-center text-sm text-muted sm:text-left">
          {t.footer.rights}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
