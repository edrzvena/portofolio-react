import React, { useRef, useState, useEffect } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import Card from '../components/ui/Card';
import Reveal from '../components/ui/Reveal';
import music_discord from "../assets/images/music-discord.png";
import sentiment from "../assets/images/sentiment.jpeg";
import pos from "../assets/images/pos.png";
import code_explainer from "../assets/images/code_explainer.jpg";
import daily_standup from "../assets/images/daily_standup.jpg";
import { useLanguage } from '../context/LanguageContext';

// Gambar & link tetap di sini; title & description diterjemahkan via t.projects.items
// (urutan harus sama dengan array ini).
const projectMeta = [
  { image: daily_standup, link: 'https://github.com/edrzvena/daily-standup' },
  { image: code_explainer, link: 'https://github.com/edrzvena/code-explainer' },
  { image: pos, link: 'https://github.com/edrzvena/kasir-nya' },
  { image: music_discord, link: 'https://discord.com/oauth2/authorize?client_id=1223985141144092794' },
  { image: sentiment, link: 'https://github.com/edrzvena/text-emotion-analyzer' },
];

const ProjectCard = ({ project }) => {
  const { t } = useLanguage();
  const descRef = useRef(null);
  const [expanded, setExpanded] = useState(false);
  const [isClamped, setIsClamped] = useState(false);

  useEffect(() => {
    const el = descRef.current;
    if (el) {
      // Deteksi apakah teks kepotong saat di-clamp (butuh "Read more").
      // Re-deteksi saat deskripsi berubah (mis. ganti bahasa) karena panjang teks beda.
      setIsClamped(el.scrollHeight > el.clientHeight + 1);
    }
  }, [project.description]);

  return (
    <Card className="group flex flex-col">
      <div className="mb-4 overflow-hidden rounded-lg border border-line">
        <img src={project.image} alt={project.title} loading="lazy" className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
      </div>
      <h3 className="mb-2 text-lg font-semibold text-ink">{project.title}</h3>
      <p
        ref={descRef}
        className={`text-sm text-muted ${expanded ? '' : 'line-clamp-3'}`}
      >
        {project.description}
      </p>
      {(isClamped || expanded) && (
        <button
          onClick={() => setExpanded((v) => !v)}
          className="mt-1 self-start text-xs font-medium text-accent transition-colors duration-200 hover:text-accent-hover"
        >
          {expanded ? t.projects.readLess : t.projects.readMore}
        </button>
      )}
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-medium text-accent transition-all duration-200 hover:text-accent-hover group-hover:gap-2.5"
      >
        <span>{t.projects.viewProject}</span>
        <FiArrowRight className="h-4 w-4" />
      </a>
    </Card>
  );
};

const Projects = () => {
  const { t } = useLanguage();
  return (
    <section id="projects" className="py-24 px-4 sm:px-8 lg:px-16">
      <Reveal className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col items-center gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div className="text-center sm:text-left">
            <h2 className="text-3xl font-semibold tracking-tight text-ink">{t.projects.heading}</h2>
          </div>
          <a
            href="https://github.com/edrzvena"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-sm font-medium text-accent transition-colors duration-200 hover:text-accent-hover"
          >
            {t.projects.viewAll}
            <FiArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projectMeta.map((meta, i) => (
            <ProjectCard key={t.projects.items[i].title} project={{ ...meta, ...t.projects.items[i] }} />
          ))}
        </div>
      </Reveal>
    </section>
  );
};

export default Projects;
