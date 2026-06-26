import React from 'react';
import { FiDownload } from 'react-icons/fi';
import Button from '../components/ui/Button';
import CodeCard from '../components/ui/CodeCard';
import profile from '../assets/images/myself_casual.jpg';
import resumeFile from '../assets/files/PEDRO WIDYADHARTA CIADY.pdf';

const stats = [
  { value: '5+', label: 'Projects' },
  { value: '2', label: 'Certifications' },
  { value: '12', label: 'Technologies' },
];

const Hero = ({ scrollToSection }) => {
  return (
    <section id="home" className="relative flex min-h-screen items-center px-4 pt-28 pb-16 sm:px-8 lg:px-16">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-2">

        {/* Text */}
        <div className="text-center lg:text-left">
          {/* Avatar */}
          <img
            src={profile}
            alt="Pedro Widya"
            className="mx-auto mb-5 h-28 w-28 rounded-full border border-line object-cover shadow-air sm:h-32 sm:w-32 lg:mx-0"
          />
          <p className="mb-3 font-mono text-sm text-accent">{'// Web Developer'}</p>

          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-ink sm:text-5xl md:text-6xl">
            Hi, I'm <span className="text-accent">Pedro Widya</span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-lg text-muted lg:mx-0">
            "Talk is cheap. Show me the code." — Linus Torvalds
          </p>

          <p className="mt-4 font-mono text-sm text-muted">
            JavaScript <span className="text-line-strong">/</span> TypeScript <span className="text-line-strong">/</span> React <span className="text-line-strong">/</span> Express <span className="text-line-strong">/</span> Tailwind <span className="text-line-strong">/</span> PostgreSQL
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
            <Button onClick={() => scrollToSection('projects')} className="px-6 py-3">
              View Projects
            </Button>
            <Button as="a" href={resumeFile} target="_blank" rel="noopener noreferrer" variant="secondary" className="px-6 py-3">
              <span>Download CV</span>
              <FiDownload className="h-4 w-4" />
            </Button>
          </div>

          {/* Honest stats */}
          <div className="mt-10 flex justify-center gap-8 lg:justify-start">
            {stats.map((s) => (
              <div key={s.label} className="text-center lg:text-left">
                <div className="font-display text-2xl font-bold text-ink">{s.value}</div>
                <div className="font-mono text-xs uppercase tracking-wider text-muted">{s.label}</div>
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
