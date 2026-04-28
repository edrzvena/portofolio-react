import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Skills = () => {
  const { isDarkMode } = useTheme();
  return (
    <section id="skills" className="min-h-screen py-12 px-4 sm:px-8 lg:px-16 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent mb-8 text-center">
          My Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: 'Python (Django)', icon: '🐍', color: 'from-yellow-500 to-green-500' },
            { title: 'JavaScript (React)', icon: '⚛️', color: 'from-yellow-400 to-blue-500' },
            { title: 'Database (PostgreSQL)', icon: '🗄️', color: 'from-blue-400 to-purple-500' },
            { title: 'CSS (Tailwind)', icon: '🎨', color: 'from-pink-400 to-purple-500' },
            { title: 'UI/UX (Stitch Google AI)', icon: '✨', color: 'from-red-400 to-purple-500' },
          ].map((skill) => (
            <div
              key={skill.title}
              className={`relative group overflow-hidden rounded-2xl p-6 ${isDarkMode
                ? 'bg-gradient-to-br from-gray-800 to-gray-900'
                : 'bg-gradient-to-br from-white to-gray-100'
                } shadow-lg transform transition-all duration-500 hover:-translate-y-1`}
            >
              <div className="text-center mb-4">
                <span className="text-4xl">{skill.icon}</span>
              </div>

              <h3
                className={`text-xl font-bold text-center ${isDarkMode ? 'text-white' : 'text-gray-800'
                  }`}
              >
                {skill.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div
          className={`mt-12 p-6 rounded-2xl ${isDarkMode
            ? 'bg-gradient-to-r from-gray-800 to-gray-900'
            : 'bg-gradient-to-r from-white to-gray-100'
            } shadow-lg`}
        >
          <h3
            className={`text-xl font-bold mb-6 text-center ${isDarkMode ? 'text-white' : 'text-gray-800'
              }`}
          >
            Additional Technologies
          </h3>

          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Git', 'REST APIs', 'Node.js', 'Express.js'
            ].map((tech) => (
              <span
                key={tech}
                className={`px-3 py-2 rounded-full text-xs sm:text-sm font-medium ${isDarkMode
                  ? 'bg-gray-700 text-gray-200 hover:bg-gray-600'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  } transition-colors duration-300 cursor-default`}
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
