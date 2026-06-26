import React from 'react';
import { FiExternalLink } from 'react-icons/fi';
import Card from '../components/ui/Card';
import Reveal from '../components/ui/Reveal';

const certificates = [
  {
    title: 'Claude 101',
    issuer: 'Anthropic',
    description: 'Prompt engineering, Projects, Artifacts, Skills, MCP integration, Enterprise Search, dan Research mode.',
    link: 'https://verify.skilljar.com/c/7t6seko3wzra'
  },
  {
    title: 'Claude Code 101',
    issuer: 'Anthropic',
    description: 'AI coding agent workflows: Explore→Plan→Code→Commit, context management, CLAUDE.md, subagents, MCP servers, dan hooks.',
    link: 'https://verify.skilljar.com/c/v8p393f46h7m'
  }
];

const Certificates = () => {
  return (
    <section id="certificates" className="py-24 px-4 sm:px-8 lg:px-16">
      <Reveal className="mx-auto max-w-5xl">
        <p className="mb-3 text-center font-mono text-sm text-accent">{'// credentials'}</p>
        <h2 className="mb-12 text-center text-3xl font-semibold tracking-tight text-ink">Certificates</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {certificates.map(cert => (
            <Card key={cert.title} className="flex flex-col">
              <h3 className="mb-1 text-xl font-semibold text-ink">{cert.title}</h3>
              <p className="mb-3 font-mono text-sm text-muted">{cert.issuer}</p>
              <p className="flex-1 text-muted">{cert.description}</p>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors duration-200 hover:text-accent-hover"
              >
                Verify Credential
                <FiExternalLink className="h-4 w-4" />
              </a>
            </Card>
          ))}
        </div>
      </Reveal>
    </section>
  );
};

export default Certificates;
