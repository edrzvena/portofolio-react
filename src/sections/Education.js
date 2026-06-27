import React from 'react';
import Reveal from '../components/ui/Reveal';
import { useLanguage } from '../context/LanguageContext';

// Tanggal tetap di sini; title, institution & details diterjemahkan via t.education.items
// (urutan harus sama dengan array ini).
const educationMeta = [
  { date: '2020 - 2024' },
  { date: '2023 - 2024' },
];

const Education = () => {
  const { t } = useLanguage();
  return (
    <section id="education" className="bg-band py-24 px-4 sm:px-8 lg:px-16">
      <Reveal className="mx-auto max-w-4xl">
        <h2 className="mb-12 text-center text-3xl font-semibold tracking-tight text-ink">{t.education.heading}</h2>

        <div className="relative ml-2 border-l border-line pl-8 sm:ml-4">
          <div className="flex flex-col gap-10">
            {educationMeta.map((meta, i) => {
              const edu = t.education.items[i];
              return (
                <div key={edu.title} className="relative">
                  {/* node dot */}
                  <span className="absolute -left-[42px] top-1.5 h-3 w-3 rounded-full border-2 border-band bg-accent ring-1 ring-line"></span>
                  <p className="mb-1 font-mono text-sm text-muted">{meta.date}</p>
                  <h3 className="text-xl font-semibold text-ink">{edu.title}</h3>
                  <p className="mb-3 text-muted">{edu.institution}</p>
                  <ul className="ml-5 list-disc space-y-2 text-muted">
                    {edu.details.map(detail => <li key={detail}>{detail}</li>)}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default Education;
