import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Certificates = () => {
  const { isDarkMode } = useTheme();
  return (
    <section id="certificates" className="py-12 px-4 sm:px-8 lg:px-16 mb-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent mb-8 text-center">Certificates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
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
          ].map(cert => (
            <div key={cert.title} className={`${isDarkMode ? 'bg-white bg-opacity-10' : 'bg-gray-800 bg-opacity-10'} backdrop-blur-lg rounded-lg border ${isDarkMode ? 'border-white border-opacity-20' : 'border-gray-300'} p-6 flex flex-col transition-transform duration-300 hover:scale-[1.01]`}>
              <h3 className={`text-xl font-bold mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{cert.title}</h3>
              <p className={`text-sm font-medium mb-3 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent`}>{cert.issuer}</p>
              <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} flex-1`}>{cert.description}</p>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-4 inline-flex items-center gap-1 text-sm font-medium ${isDarkMode ? 'text-cyan-400 hover:text-cyan-300' : 'text-blue-600 hover:text-blue-500'} transition-colors duration-300`}
              >
                Verify Credential
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
