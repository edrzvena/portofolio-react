import React from 'react';
import { SiJavascript, SiTypescript, SiPython, SiReact, SiNodedotjs, SiExpress, SiPostgresql, SiSupabase, SiTailwindcss, SiVercel, SiGit, SiBruno } from 'react-icons/si';
import { useLanguage } from '../context/LanguageContext';

const skills = [
  { title: 'JavaScript', Icon: SiJavascript },
  { title: 'TypeScript', Icon: SiTypescript },
  { title: 'Python', Icon: SiPython },
  { title: 'React', Icon: SiReact },
  { title: 'Node.js', Icon: SiNodedotjs },
  { title: 'Express', Icon: SiExpress },
  { title: 'PostgreSQL', Icon: SiPostgresql },
  { title: 'Supabase', Icon: SiSupabase },
  { title: 'Tailwind CSS', Icon: SiTailwindcss },
  { title: 'Vercel', Icon: SiVercel },
  { title: 'Git', Icon: SiGit },
  { title: 'Bruno API', Icon: SiBruno },
]

const Skills = () => {
  const { t } = useLanguage();
  return (
    <section id="skills" className="py-24 px-4 sm:px-8 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-3 text-center text-3xl font-semibold tracking-tight text-ink">
          {t.skills.heading}
        </h2>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {skills.map(({ title, Icon }) => (
            <div
              key={title}
              className="flex flex-col items-center gap-3 rounded-xl border border-line bg-card p-5 text-center transition-all duration-300 hover:border-line-strong hover:shadow-air"
            >
              <Icon className="h-8 w-8 flex-shrink-0 text-accent" aria-hidden="true" />
              <h3 className="text-xs font-medium leading-snug text-ink sm:text-sm">{title}</h3>
            </div>
          ))}
        </div>

        {/* Tools & Others */}
        <div className="mt-12 rounded-xl border border-line bg-surface p-6">
          <h3 className="mb-6 text-center text-lg font-semibold text-ink">
            {t.skills.toolsHeading}
          </h3>

          <div className="flex flex-wrap justify-center gap-3">
            {t.skills.tools.map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-line bg-card px-4 py-2 font-mono text-xs text-muted transition-colors duration-200 hover:border-line-strong hover:text-ink sm:text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
