import React from 'react';
import { useTheme } from '../context/ThemeContext';
import Button from '../components/ui/Button';
import profile from "../assets/images/myself_casual.jpg";
import resumeFile from "../assets/files/Pedro_CV.pdf";

const About = () => {
  const { isDarkMode } = useTheme();

  return (
    <section
      id="about"
      className={`min-h-screen py-16 px-4 sm:px-8 lg:px-16 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'
        }`}
    >
      <div className="max-w-5xl mx-auto relative z-10">

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent mb-12">
          About Me
        </h2>

        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">

          {/* Profile Photo */}
          <div className="relative w-56 h-56 lg:w-64 lg:h-64 flex-shrink-0">

            {/* Glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400 to-blue-500 blur-xl opacity-40"></div>

            <img
              src={profile}
              alt="Profile"
              className="relative w-full h-full object-cover rounded-full border-4 border-white shadow-2xl"
            />
          </div>

          {/* Text Content */}
          <div
            className={`text-base sm:text-lg leading-relaxed max-w-2xl ${isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}
          >
            <p className="mb-4">
              Saat ini saya sedang memperdalam kemampuan{' '}
              <span className="font-semibold text-green-400">web development</span> dengan membangun berbagai
              proyek pribadi di <span className="font-semibold text-green-400">GitHub</span> menggunakan{' '}
              <span className="font-semibold text-green-400">React</span>,{' '}
              <span className="font-semibold text-green-400">Node.js</span>, dan{' '}
              <span className="font-semibold text-green-400">PostgreSQL</span>, seperti{' '}
              <span className="font-semibold text-green-400">Text Emotion Analyzer</span> dan sistem{' '}
              <span className="font-semibold text-green-400">POS Cashier</span> berbasis web. Saya juga
              memanfaatkan tools berbasis <span className="font-semibold text-green-400">AI</span> untuk
              membantu riset, debugging, dan eksplorasi solusi, sambil tetap berfokus pada pemahaman{' '}
              <span className="font-semibold text-green-400">fundamental</span> pemrograman.
            </p>

            <p className="mb-6">
              Saya selalu terbuka untuk mempelajari <span className="font-semibold text-green-400">teknologi</span> baru
              dan <span className="font-semibold text-green-400">tertarik</span> terlibat dalam proyek yang
              dapat meningkatkan kemampuan teknis sekaligus memberikan dampak{' '}
              <span className="font-semibold text-green-400">nyata</span>.
            </p>

            {/* Download CV Button */}
            <div className="mt-6 flex justify-center lg:justify-start">
              <Button
                as="a"
                href={resumeFile}
                className="py-2 px-6 rounded-full"
              >
                <span>Download CV</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;