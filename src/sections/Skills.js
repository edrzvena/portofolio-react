import React from 'react';
import { SiJavascript, SiTypescript, SiPython, SiSharp, SiDotnet, SiReact, SiDjango, SiNodedotjs, SiExpress, SiPostgresql, SiSupabase, SiTailwindcss, SiBootstrap, SiVercel, SiGit, SiBruno, SiDocker, SiKubernetes, SiGrafana, SiGithub, SiClaude, SiAmazonwebservices, SiPostman, SiDbeaver } from 'react-icons/si';
import { DiMsqlServer } from 'react-icons/di';
import { VscAzure } from 'react-icons/vsc';
import { useLanguage } from '../context/LanguageContext';

const skills = [
  // Languages
  { title: 'JavaScript', Icon: SiJavascript },
  { title: 'TypeScript', Icon: SiTypescript },
  { title: 'Python', Icon: SiPython },
  { title: 'C#', Icon: SiSharp },

  // Backend frameworks
  { title: 'Node.js', Icon: SiNodedotjs },
  { title: 'Express', Icon: SiExpress },
  { title: 'Django', Icon: SiDjango },
  { title: '.NET', Icon: SiDotnet },

  // Frontend
  { title: 'React', Icon: SiReact },
  { title: 'Tailwind CSS', Icon: SiTailwindcss },
  { title: 'Bootstrap', Icon: SiBootstrap },

  // Database
  { title: 'PostgreSQL', Icon: SiPostgresql },
  { title: 'SQL Server Express', Icon: DiMsqlServer },
  { title: 'Supabase', Icon: SiSupabase }
]

const tools = [
  // Version control
  { title: 'Git', Icon: SiGit },
  { title: 'GitHub', Icon: SiGithub },

  // Deployment & infrastructure
  { title: 'Vercel', Icon: SiVercel },
  { title: 'AWS', Icon: SiAmazonwebservices },
  { title: 'Azure', Icon: VscAzure },
  { title: 'Docker', Icon: SiDocker },
  { title: 'Kubernetes', Icon: SiKubernetes },
  { title: 'Grafana', Icon: SiGrafana },

  // API & others
  { title: 'Bruno API', Icon: SiBruno },
  { title: 'Postman', Icon: SiPostman },
  { title: 'DBeaver', Icon: SiDbeaver },
  { title: 'Claude', Icon: SiClaude }
]

const TechCard = ({ title, Icon }) => (
  <div className="flex flex-col items-center gap-3 rounded-xl border border-line bg-card p-5 text-center transition-all duration-300 hover:border-line-strong hover:shadow-air">
    <Icon className="h-8 w-8 flex-shrink-0 text-accent" aria-hidden="true" />
    <h3 className="text-xs font-medium leading-snug text-ink sm:text-sm">{title}</h3>
  </div>
)

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
            <TechCard key={title} title={title} Icon={Icon} />
          ))}
        </div>

        {/* Tools & Others */}
        <h3 className="mb-6 mt-16 text-center text-2xl font-semibold tracking-tight text-ink">
          {t.skills.toolsHeading}
        </h3>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {tools.map(({ title, Icon }) => (
            <TechCard key={title} title={title} Icon={Icon} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
