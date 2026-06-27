import React from 'react';
import Reveal from '../components/ui/Reveal';
import { useLanguage } from '../context/LanguageContext';

// Data non-teks (perusahaan, tanggal) tetap di sini; title & tasks diterjemahkan via
// t.experience.items (urutan harus sama dengan array ini).
const experienceMeta = [
  { company: 'PT. GFC Terpadu', date: 'Nov 2022 - present' },
  { company: 'PT. Usaha Inti Bersama', date: 'Nov 2020 - Mar 2022' },
];

const Experience = () => {
  const { t } = useLanguage();
  return (
    <section id="experience" className="py-24 px-4 sm:px-8 lg:px-16">
      <Reveal className="mx-auto max-w-4xl">
        <h2 className="mb-12 text-center text-3xl font-semibold tracking-tight text-ink">{t.experience.heading}</h2>

        <div className="relative ml-2 border-l border-line pl-8 sm:ml-4">
          <div className="flex flex-col gap-10">
            {experienceMeta.map((meta, i) => {
              const exp = t.experience.items[i];
              return (
                <div key={meta.company} className="relative">
                  {/* node dot */}
                  <span className="absolute -left-[42px] top-1.5 h-3 w-3 rounded-full border-2 border-white bg-accent ring-1 ring-line sm:-left-[42px]"></span>
                  <p className="mb-1 font-mono text-sm text-muted">{meta.date}</p>
                  <h3 className="text-xl font-semibold text-ink">{exp.title}</h3>
                  <p className="mb-3 text-muted">{meta.company}</p>
                  <ul className="ml-5 list-disc space-y-2 text-muted">
                    {exp.tasks.map(task => <li key={task}>{task}</li>)}
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

export default Experience;
