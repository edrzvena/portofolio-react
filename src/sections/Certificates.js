import React from 'react';
import { FiExternalLink } from 'react-icons/fi';
import Card from '../components/ui/Card';
import Reveal from '../components/ui/Reveal';
import { useLanguage } from '../context/LanguageContext';

// Issuer & link tetap di sini; title & description diterjemahkan via t.certificates.items
// (urutan harus sama dengan array ini).
const certificateMeta = [
  { issuer: 'Anthropic', link: 'https://verify.skilljar.com/c/7t6seko3wzra' },
  { issuer: 'Anthropic', link: 'https://verify.skilljar.com/c/v8p393f46h7m' },
];

const Certificates = () => {
  const { t } = useLanguage();
  return (
    <section id="certificates" className="py-24 px-4 sm:px-8 lg:px-16">
      <Reveal className="mx-auto max-w-5xl">
        <h2 className="mb-12 text-center text-3xl font-semibold tracking-tight text-ink">{t.certificates.heading}</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {certificateMeta.map((meta, i) => {
            const cert = t.certificates.items[i];
            return (
              <Card key={cert.title} className="flex flex-col">
                <h3 className="mb-1 text-xl font-semibold text-ink">{cert.title}</h3>
                <p className="mb-3 font-mono text-sm text-muted">{meta.issuer}</p>
                <p className="flex-1 text-muted">{cert.description}</p>
                <a
                  href={meta.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors duration-200 hover:text-accent-hover"
                >
                  {t.certificates.verify}
                  <FiExternalLink className="h-4 w-4" />
                </a>
              </Card>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
};

export default Certificates;
