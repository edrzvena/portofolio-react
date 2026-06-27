import React from 'react';
import { FiDownload } from 'react-icons/fi';
import Button from '../components/ui/Button';
import CodeCard from '../components/ui/CodeCard';
import profile from '../assets/images/myself_casual.jpg';
import resumeFile from '../assets/files/PEDRO WIDYADHARTA CIADY.pdf';
import { useLanguage } from '../context/LanguageContext';

// Value statistik tetap (non-teks); label-nya diterjemahkan via t.hero.stats (urutan harus sama).
const statValues = ['5+', '2', '12'];

const Hero = ({ scrollToSection }) => {
  const { t } = useLanguage();
  return (
    <section id="home" className="relative flex min-h-screen items-center px-4 pt-28 pb-16 sm:px-8 lg:px-16">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-2">

        {/* Text */}
        <div className="text-center lg:text-left">
          {/* Avatar + speech bubble (gaya komik) */}
          <div className="mb-6 flex flex-col items-center gap-4 lg:flex-row lg:items-center lg:justify-start">
            <img
              src={profile}
              alt="Pedro Widya"
              className="h-44 w-44 shrink-0 rounded-full border border-line object-cover shadow-air sm:h-56 sm:w-56"
            />
            <div className="relative max-w-xs rounded-2xl border-2 border-ink bg-white px-5 pb-4 pt-5 text-left shadow-[5px_5px_0_0_#111827]">
              {/* tail: nunjuk ke atas (mobile) / ke kiri (desktop) */}
              <span className="absolute left-1/2 top-0 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rotate-45 border-l-2 border-t-2 border-ink bg-white lg:left-0 lg:top-1/2 lg:border-t-0 lg:border-b-2"></span>
              {/* tanda kutip dekoratif */}
              <span aria-hidden="true" className="pointer-events-none absolute -top-5 left-3 font-display text-6xl leading-none text-accent">&ldquo;</span>
              <p className="relative text-base font-semibold leading-snug text-ink sm:text-lg">
                {t.hero.quote}
              </p>
              <p className="relative mt-2 font-mono text-xs text-muted">{t.hero.quoteAuthor}</p>
            </div>
          </div>

          <p className="mb-3 font-mono text-sm text-accent">{t.hero.role}</p>

          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-ink sm:text-5xl md:text-6xl">
            {t.hero.greeting} <span className="text-accent">Pedro Widya</span>{t.hero.greetingSuffix}
          </h1>

          <p className="mt-5 font-mono text-sm text-muted">
            JavaScript <span className="text-line-strong">/</span> TypeScript <span className="text-line-strong">/</span> React <span className="text-line-strong">/</span> Express <span className="text-line-strong">/</span> Tailwind <span className="text-line-strong">/</span> PostgreSQL
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
            <Button onClick={() => scrollToSection('projects')} className="px-6 py-3">
              {t.hero.viewProjects}
            </Button>
            <Button as="a" href={resumeFile} target="_blank" rel="noopener noreferrer" variant="secondary" className="px-6 py-3">
              <span>{t.hero.downloadCV}</span>
              <FiDownload className="h-4 w-4" />
            </Button>
          </div>

          {/* Honest stats */}
          <div className="mt-10 flex justify-center gap-8 lg:justify-start">
            {statValues.map((value, i) => (
              <div key={t.hero.stats[i]} className="text-center lg:text-left">
                <div className="font-display text-2xl font-bold text-ink">{value}</div>
                <div className="font-mono text-xs uppercase tracking-wider text-muted">{t.hero.stats[i]}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Code card */}
        <div className="hidden lg:block">
          <CodeCard />
        </div>
      </div>
    </section>
  );
};

export default Hero;
