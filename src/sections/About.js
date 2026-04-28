import React from 'react';
import { useTheme } from '../context/ThemeContext';
import profile from "../assets/images/myself_casual.jpg"
import cvPDF from "../assets/files/Pedro_CV.pdf"

const About = () => {
  const { isDarkMode } = useTheme();
  return (
    <section id="about" className={`min-h-screen py-12 px-4 sm:px-8 lg:px-16 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent mb-8">About Me</h2>
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <div className="animate-float order-2 lg:order-1 lg:w-1/2">
            <img src={profile} alt="Profile" className="w-48 h-48 lg:w-64 lg:h-64 rounded-full mx-auto shadow-lg" />
          </div>
          <div className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} order-1 lg:order-2 lg:w-1/2 text-center lg:text-left`}>
            <p className="mb-4">
              Halo, saya seorang IT Support dengan latar belakang pendidikan di bidang IT dan memiliki ketertarikan pada pengembangan web. Selama masa kuliah, saya mulai mempelajari berbagai teknologi web dan mengerjakan beberapa proyek website sebagai bagian dari proses belajar.
            </p>

            <p className="mb-4">
              Salah satu proyek yang pernah saya kerjakan adalah <strong>Text Emotion Analyzer</strong> yang saya publikasikan di GitHub. Melalui proyek tersebut, saya mencoba menggabungkan pemrosesan data dengan pengembangan aplikasi berbasis web.
            </p>

            <p className="mb-6">
              Saat ini saya bekerja sebagai IT Support sambil terus memperdalam kemampuan di bidang web development. Saya juga aktif memanfaatkan berbagai tools, termasuk teknologi AI, untuk membantu proses belajar, pengembangan, dan penyelesaian masalah. Bagi saya, kombinasi antara pengalaman teknis dan pemahaman terhadap kebutuhan pengguna sangat penting dalam membangun solusi digital yang bermanfaat.
            </p>

            <p className="mb-6">
              Saya selalu terbuka untuk belajar hal baru dan tertarik untuk terlibat dalam proyek yang dapat meningkatkan kemampuan teknis saya sekaligus memberikan dampak nyata.
            </p>
            {/* Download CV Button */}
            <div className="mt-8 flex justify-center lg:justify-start">
              <a
                href={cvPDF}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold py-2 px-6 rounded-full transition-all duration-300 hover:shadow-cyan-500/30 hover:scale-105 text-sm sm:text-base"
              >
                <span>Download CV</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
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
