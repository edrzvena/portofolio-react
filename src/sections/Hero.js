import React from 'react';
import { FiDownload, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import Button from '../components/ui/Button';
import CodeCard from '../components/ui/CodeCard';
import ConstSyntax from '../components/ui/ConstSyntax';
import profile from '../assets/images/myself_casual.jpg';
import resumeFile from '../assets/files/PEDRO WIDYADHARTA CIADY.pdf';
import { useLanguage } from '../context/LanguageContext';

const socials = [
  { name: 'GitHub', Icon: FiGithub, link: 'https://github.com/edrzvena' },
  { name: 'LinkedIn', Icon: FiLinkedin, link: 'https://www.linkedin.com/in/pedro-widyadharta-ciady-773209350' },
  { name: 'Email', Icon: FiMail, link: 'mailto:widyadharta@gmail.com' },
];

// Tombol Download CV disembunyikan sementara; set ke true untuk menampilkannya lagi.
const SHOW_CV_DOWNLOAD = false;

const Hero = ({ scrollToSection }) => {
  const { t } = useLanguage();
  return (
    <section id="home" className="relative flex min-h-screen items-center px-4 pt-28 pb-16 sm:px-8 lg:px-16">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-2">

        {/* Text */}
        <div className="text-center lg:text-left">
          {/* Balon kata ala manga, digeser ke kanan dari foto; ekornya turun ke kiri ke arah foto. */}
          <div className="mb-8 flex justify-center lg:justify-start">
            {/* HP/tablet: foto di tengah, balon cuma digeser visual ke kanan (translate). Desktop: semua rata kiri, balon pakai margin. */}
            <div className="flex w-fit flex-col items-center lg:items-start">
              <div className="relative mb-9 max-w-[22rem] translate-x-5 rounded-[50%] min-[380px]:translate-x-10 border-[3px] border-ink bg-card px-10 py-8 text-center lg:ml-20 lg:translate-x-0">
                {/* Efek suara ala manga (dekoratif) */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-3 -top-5 rotate-12 select-none text-2xl font-black text-ink sm:text-3xl"
                >
                  ドン！
                </span>
                <p className="font-display text-lg font-bold uppercase leading-snug tracking-wide text-ink sm:text-xl">
                  {/* Satu kalimat per baris (split setelah titik / 。) biar patahan barisnya rapi di semua bahasa */}
                  {t.hero.quote.split(/(?<=[.。])\s*/).filter(Boolean).map((sentence) => (
                    <span key={sentence} className="block">{sentence}</span>
                  ))}
                </p>
                <p className="mt-1.5 font-mono text-xs text-muted">{t.hero.quoteAuthor}</p>
                {/* Ekor balon melengkung ke kiri bawah, nunjuk ke foto. Pangkalnya di bagian bawah oval yang
                    datar; path pertama (fill) naik ke dalam balon buat nutup garis oval di sambungan,
                    path kedua cuma garis sisi ekornya. */}
                <svg
                  aria-hidden="true"
                  viewBox="0 0 48 44"
                  className="absolute left-[30%] top-[calc(100%-6px)] h-11 w-12"
                >
                  <path className="fill-card" d="M20 0 L20 6 C18 18, 10 30, 1 42 C18 36, 34 22, 46 6 L46 0 Z" />
                  <path className="fill-none stroke-ink" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" d="M20 6 C18 18, 10 30, 1 42 C18 36, 34 22, 46 6" />
                </svg>
              </div>
              <img
                src={profile}
                alt="Pedro Widya"
                className="h-44 w-44 shrink-0 rounded-full border border-line object-cover shadow-air sm:h-56 sm:w-56"
              />
            </div>
          </div>

          {/* Role ditulis sebagai syntax JS: const role = "..."; */}
          <p className="mb-3 text-sm">
            <ConstSyntax name="role" value={t.hero.role} />
          </p>

          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-ink sm:text-5xl md:text-6xl">
            {t.hero.greeting} <span className="text-accent">{t.hero.name}</span>{t.hero.greetingSuffix}
          </h1>

          <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
            <Button onClick={() => scrollToSection('projects')} className="px-6 py-3">
              {t.hero.viewProjects}
            </Button>
            {SHOW_CV_DOWNLOAD && (
              <Button as="a" href={resumeFile} target="_blank" rel="noopener noreferrer" variant="secondary" className="px-6 py-3">
                <span>{t.hero.downloadCV}</span>
                <FiDownload className="h-4 w-4" />
              </Button>
            )}
          </div>

          {/* Social links */}
          <div className="mt-8 flex justify-center gap-3 lg:justify-start">
            {socials.map(({ name, Icon, link }) => (
              <a
                key={name}
                href={link}
                aria-label={name}
                title={name}
                {...(link.startsWith('mailto:') ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
                className="flex h-11 w-11 items-center justify-center rounded-lg border border-line bg-card text-muted transition-colors duration-200 hover:border-line-strong hover:text-accent"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Code card — tampil di semua ukuran layar (di HP/tablet turun ke bawah teks).
            min-w-0 supaya item grid tidak melebar mengikuti baris kode terpanjang;
            baris yang kepanjangan di-scroll horizontal di dalam <pre> CodeCard. */}
        <div className="min-w-0">
          <CodeCard />
        </div>
      </div>
    </section>
  );
};

export default Hero;
