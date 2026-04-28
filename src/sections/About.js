import React from 'react';
import { useTheme } from '../context/ThemeContext';
import profile from "../assets/images/myself_casual.jpg";
import cvPDF from "../assets/files/Pedro_CV.pdf";

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
              Halo, saya seorang <span className="font-semibold text-green-400">IT Support</span> dengan
              latar belakang pendidikan di bidang IT dan memiliki ketertarikan pada
              <span className="font-semibold text-green-400"> web development</span>.
            </p>

            <p className="mb-4">
              Salah satu proyek yang pernah saya kerjakan adalah{' '}
              <span className="font-semibold text-green-400">
                Text Emotion Analyzer
              </span>{' '}
              yang saya publikasikan di
              <span className="font-semibold text-green-400"> GitHub</span>, sebagai bagian dari proses belajar
              menggabungkan pemrosesan data dengan pengembangan aplikasi web.
            </p>

            <p className="mb-4">
              Saat ini saya sedang memperdalam kemampuan di bidang
              <span className="font-semibold text-green-400"> web development</span> dan memanfaatkan berbagai tools berbasis
              <span className="font-semibold text-green-400"> AI</span> untuk membantu
              proses riset, debugging, dan eksplorasi solusi, sambil tetap
              berfokus pada pemahaman
              <span className="font-semibold text-green-400"> fundamental</span> pemrograman.
            </p>

            <p className="mb-6">
              Saya selalu terbuka untuk belajar hal baru dan tertarik untuk terlibat
              dalam proyek yang dapat meningkatkan kemampuan teknis sekaligus
              memberikan dampak nyata.
            </p>

            {/* Download CV Button */}
            <div className="mt-6 flex justify-center lg:justify-start">
              <a
                href={cvPDF}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold py-2 px-6 rounded-full transition-all duration-300 hover:shadow-cyan-500/30 hover:scale-105 text-sm sm:text-base"
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
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;