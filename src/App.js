import React, { useEffect, useRef, useState } from "react";
import './index.css'; // Pastikan file CSS Tailwind di-import


import { SiDjango, SiReact, SiPostgresql, SiTailwindcss, SiFigma } from "react-icons/si";
import { motion, useSpring, useMotionValue, useTransform } from "framer-motion";


const App = () => {
  // Referensi untuk elemen blob
  const blobRefs = useRef([]);
  // State untuk menu aktif
  const [activeSection, setActiveSection] = useState('about');
  // State untuk toggle menu mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // State untuk dark mode
  const [isDarkMode, setIsDarkMode] = useState(true);
  // Posisi awal untuk setiap blob
  const initialPositions = [
    { x: -4, y: 0 },
    { x: -4, y: 0 },
    { x: 20, y: -8 },
    { x: 20, y: -8 },
  ];

  // Simpan preference ke localStorage
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  // Baca preference dari localStorage saat komponen mount
  useEffect(() => {
    const savedMode = JSON.parse(localStorage.getItem('darkMode'));
    if (savedMode !== null) {
      setIsDarkMode(savedMode);
    }
  }, []);

  useEffect(() => {
    let currentScroll = 0; // Menyimpan posisi scroll saat ini
    let requestId; // Untuk menyimpan ID dari requestAnimationFrame

    const handleScroll = () => {
      const newScroll = window.pageYOffset; // Mendapatkan posisi scroll baru
      const scrollDelta = newScroll - currentScroll; // Menghitung perubahan scroll
      currentScroll = newScroll; // Memperbarui posisi scroll saat ini

      // Menggerakkan setiap blob berdasarkan posisi scroll
      blobRefs.current.forEach((blob, index) => {
        const initialPos = initialPositions[index];

        // Menghitung pergerakan dalam arah X dan Y
        const xOffset = Math.sin(newScroll / 100 + index * 0.5) * 340; // Pergerakan horizontal
        const yOffset = Math.cos(newScroll / 100 + index * 0.5) * 40; // Pergerakan vertikal

        const x = initialPos.x + xOffset; // Posisi X baru
        const y = initialPos.y + yOffset; // Posisi Y baru

        // Menerapkan transformasi dengan transisi halus
        blob.style.transform = `translate(${x}px, ${y}px)`;
        blob.style.transition = "transform 1.4s ease-out"; // Durasi transisi
      });

      requestId = requestAnimationFrame(handleScroll); // Meminta frame animasi berikutnya
    };

    // Fungsi untuk mendeteksi section yang aktif
    const handleSectionChange = () => {
      const sections = ['about', 'skills', 'experience', 'education', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll); // Menambahkan event listener untuk scroll
    window.addEventListener("scroll", handleSectionChange); // Mendeteksi section aktif
    return () => {
      window.removeEventListener("scroll", handleScroll); // Menghapus event listener saat komponen di-unmount
      window.removeEventListener("scroll", handleSectionChange);
      cancelAnimationFrame(requestId); // Membatalkan requestAnimationFrame
    };
  }, []);

  // Fungsi untuk scroll ke section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false); // Tutup menu mobile setelah klik
    }
  };

  return (
    <div className={`${isDarkMode ? 'bg-black text-white' : 'bg-gray-100 text-gray-900'} font-sans overflow-x-hidden relative flex transition-colors duration-300`}>
      {/* Left Navbar */}
      <div className={`fixed left-0 top-0 h-full w-20 lg:w-64 ${isDarkMode ? 'bg-black bg-opacity-70' : 'bg-white bg-opacity-90'} backdrop-blur-lg border-r ${isDarkMode ? 'border-white border-opacity-20' : 'border-gray-200'} z-50 flex flex-col justify-between py-8 transition-all duration-300`}>
        <div>
          <div className="flex justify-center lg:justify-start lg:pl-6 mb-12">
            <h1 className="text-xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent hidden lg:block">My Portfolio</h1>
            <div className="lg:hidden text-2xl">🎯</div>
          </div>
          
          <div className="flex flex-col items-center lg:items-start space-y-8">
            {['About', 'Skills', 'Experience', 'Education', 'Projects', 'Contact'].map(section => {
              const sectionId = section.toLowerCase();
              return (
                <button
                  key={sectionId}
                  onClick={() => scrollToSection(sectionId)}
                  className={`flex items-center justify-center lg:justify-start w-full px-2 lg:px-6 py-3 transition-all duration-300 group relative ${
                    activeSection === sectionId 
                      ? `${isDarkMode ? 'text-white' : 'text-gray-900'}` 
                      : `${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'}`
                  }`}
                >
                  <span className="hidden lg:block">{section}</span>
                  <span className="lg:hidden text-xl">
                    {sectionId === 'about' && '👤'}
                    {sectionId === 'skills' && '💻'}
                    {sectionId === 'experience' && '📊'}
                    {sectionId === 'education' && '🎓'}
                    {sectionId === 'projects' && '🚀'}
                    {sectionId === 'contact' && '📞'}
                  </span>
                  <span className={`absolute left-0 h-8 w-1 rounded-r-lg bg-gradient-to-b from-green-400 to-blue-500 transition-all duration-300 ${
                    activeSection === sectionId ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'
                  }`}></span>
                </button>
              );
            })}
          </div>

          {/* Toggle Dark/Light Mode */}
          <div className="flex justify-center mt-8">
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-full bg-gray-700 dark:bg-gray-300 transition-colors duration-300"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                // Icon matahari (light mode)
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                // Icon bulan (dark mode)
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
          </div>
        </div>
        
        <div className="flex justify-center lg:justify-start lg:pl-6">
          <p className={`text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-400'} hidden lg:block`}>© 2025 Pedro Widya</p>
          <div className={`lg:hidden text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>©2025</div>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className="fixed top-4 left-4 z-50 lg:hidden">
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`p-2 rounded-lg ${isDarkMode ? 'bg-black bg-opacity-70' : 'bg-white bg-opacity-90'} backdrop-blur-lg border ${isDarkMode ? 'border-white border-opacity-20' : 'border-gray-200'}`}
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className={`fixed inset-0 ${isDarkMode ? 'bg-black bg-opacity-80' : 'bg-white bg-opacity-95'} backdrop-blur-lg z-40 lg:hidden flex items-center justify-center`}>
          <div className="flex flex-col space-y-6 text-center">
            {['About', 'Skills', 'Experience', 'Education', 'Projects', 'Contact'].map(section => {
              const sectionId = section.toLowerCase();
              return (
                <button
                  key={sectionId}
                  onClick={() => scrollToSection(sectionId)}
                  className={`text-2xl font-bold py-3 transition-all duration-300 ${
                    activeSection === sectionId 
                      ? 'bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent' 
                      : `${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'}`
                  }`}
                >
                  {section}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 ml-0 lg:ml-64 transition-all duration-300">
        {/* Animated Background */}
        <div className="fixed inset-0">
          <div className="absolute inset-0">
            <div
              ref={(ref) => (blobRefs.current[0] = ref)}
              className={`absolute top-0 -left-4 md:w-96 md:h-96 w-72 h-72 ${isDarkMode ? 'bg-purple-500' : 'bg-purple-300'} rounded-full mix-blend-multiply filter blur-[128px] ${isDarkMode ? 'opacity-40 md:opacity-20' : 'opacity-30 md:opacity-15'}`}
            ></div>
            <div
              ref={(ref) => (blobRefs.current[1] = ref)}
              className={`absolute top-0 -right-4 w-96 h-96 ${isDarkMode ? 'bg-cyan-500' : 'bg-cyan-300'} rounded-full mix-blend-multiply filter blur-[128px] ${isDarkMode ? 'opacity-40 md:opacity-20' : 'opacity-30 md:opacity-15'} hidden sm:block`}
            ></div>
            <div
              ref={(ref) => (blobRefs.current[2] = ref)}
              className={`absolute -bottom-8 left-[-40%] md:left-20 w-96 h-96 ${isDarkMode ? 'bg-blue-500' : 'bg-blue-300'} rounded-full mix-blend-multiply filter blur-[128px] ${isDarkMode ? 'opacity-40 md:opacity-20' : 'opacity-30 md:opacity-15'}`}
            ></div>
            <div
              ref={(ref) => (blobRefs.current[3] = ref)}
              className={`absolute -bottom-10 right-20 w-96 h-96 ${isDarkMode ? 'bg-blue-500' : 'bg-blue-300'} rounded-full mix-blend-multiply filter blur-[128px] ${isDarkMode ? 'opacity-20 md:opacity-10' : 'opacity-15 md:opacity-5'} hidden sm:block`}
            ></div>
          </div>
          {/* Grid Background */}
          <div className={`absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f10_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f10_1px,transparent_1px)] bg-[size:24px_24px] ${isDarkMode ? '' : 'opacity-20'}`}></div>
        </div>

        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center text-center relative z-10">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent mb-4">
              Hi, I'm <span className="inline-block overflow-hidden whitespace-nowrap animate-typing">Pedro Widya</span>
            </h1>
            <p className={`text-xl ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Full-Stack Developer | UI/UX Designer | IT Support</p>
            <div className="mt-8 flex justify-center">
              <button 
                onClick={() => scrollToSection('about')} 
                className="bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold py-3 px-6 rounded-full shadow-lg z-50 transition-all duration-300 hover:shadow-cyan-500/30 hover:scale-105"
              >
                View My Profile
              </button>
            </div>
            
            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <div className={`w-6 h-10 border-2 ${isDarkMode ? 'border-gray-400' : 'border-gray-500'} rounded-full flex justify-center`}>
                <div className={`w-1 h-3 ${isDarkMode ? 'bg-gray-400' : 'bg-gray-500'} rounded-full mt-2`}></div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className={`min-h-screen p-8 lg:p-16 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent mb-8">About Me</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="animate-float order-2 lg:order-1">
                <img src="/images/myself.jpg" alt="Profile" className="w-48 h-48 lg:w-64 lg:h-64 rounded-full mx-auto shadow-lg" />
              </div>
              <div className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} order-1 lg:order-2`}>
                <p className="text-center lg:text-left mx-auto mb-4">Saya adalah seorang lulusan baru di bidang IT yang memiliki minat besar di pengembangan web. Selama kuliah, saya telah mempelajari berbagai teknologi web dan saya siap untuk mengembangkan kemampuan saya lebih lanjut.</p>
                <p className="text-center lg:text-left mx-auto mb-4">Saya bersemangat untuk memulai karir saya di bidang pengembangan web dan saya siap untuk bekerja sama dengan tim untuk menciptakan solusi-solusi inovatif.</p>
                
                {/* Download CV Button */}
                <div className="mt-8 flex justify-center lg:justify-start">
                  <a 
                    href="#" 
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold py-2 px-6 rounded-full transition-all duration-300 hover:shadow-cyan-500/30 hover:scale-105"
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

        {/* Skills */}
        <section id="skills" className="min-h-screen p-8 lg:p-16 relative">
          <div className="max-w-6xl mx-auto">
            {/* Title */}
            <h2 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent mb-12 text-center">
              My{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                Skills
              </span>
            </h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: 'Python (Django)', icon: '🐍', color: 'from-yellow-500 to-green-500' },
            { title: 'JavaScript (React)', icon: '⚛️', color: 'from-yellow-400 to-blue-500' },
            { title: 'Database (PostgreSQL, MySQL)', icon: '🗄️', color: 'from-blue-400 to-purple-500' },
            { title: 'CSS (Tailwind, Bootstrap)', icon: '🎨', color: 'from-pink-400 to-purple-500' },
            { title: 'UI/UX (Figma)', icon: '✨', color: 'from-red-400 to-purple-500' },
            { title: 'DevOps', icon: '🔄', color: 'from-gray-400 to-blue-500' }
          ].map((skill) => (
            <div
              key={skill.title}
              className={`relative group overflow-hidden rounded-2xl p-6 ${
                isDarkMode
                  ? 'bg-gradient-to-br from-gray-800 to-gray-900'
                  : 'bg-gradient-to-br from-white to-gray-100'
              } shadow-2xl transform transition-all duration-500 hover:-translate-y-2`}
              style={{
                boxShadow: isDarkMode
                  ? '0 10px 30px rgba(0, 0, 0, 0.3)'
                  : '0 10px 30px rgba(0, 0, 0, 0.1)'
              }}
            >
              {/* Background glow effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 transition-opacity duration-500 rounded-2xl z-0`}
              ></div>

              {/* Main Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="text-center mb-4">
                  <span className="text-4xl">{skill.icon}</span>
                </div>

                {/* Title */}
                <h3
                  className={`text-xl font-bold text-center ${
                    isDarkMode ? 'text-white' : 'text-gray-800'
                  }`}
                >
                  {skill.title}
                </h3>
              </div>

              {/* Hover Border Effect */}
              <div
                className={`absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-opacity-30 transition-all duration-500 z-0`}
              ></div>
            </div>
          ))}
        </div>

            {/* Additional Skills */}
            <div
              className={`mt-16 p-8 rounded-2xl ${
                isDarkMode
                  ? 'bg-gradient-to-r from-gray-800 to-gray-900'
                  : 'bg-gradient-to-r from-white to-gray-100'
              } shadow-xl`}
            >
              <h3
                className={`text-2xl font-bold mb-6 text-center ${
                  isDarkMode ? 'text-white' : 'text-gray-800'
                }`}
              >
                Additional Technologies
              </h3>

              <div className="flex flex-wrap justify-center gap-4">
                {[
                  'Git',
                  'Docker',
                  'REST APIs',
                  'GraphQL',
                  'AWS',
                  'Firebase',
                  'Node.js',
                  'Express',
                  'MongoDB'
                ].map((tech) => (
                  <span
                    key={tech}
                    className={`px-4 py-2 rounded-full text-sm font-medium ${
                      isDarkMode
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

        {/* Experience Section */}
        <section id="experience" className="p-8 lg:p-16 mb-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent mb-8">Experience</h2>
            <div className="flex flex-col gap-8">
              {[
                {
                  "title": "Administrasi",
                  "company": "Toko Purnama",
                  "date": "2019 - 2020",
                  "tasks": [
                    "Mengelola operasional toko",
                    "Memberikan layanan pelanggan yang luar biasa",
                    "Memelihara manajemen gudang stok yang efisien"
                  ]
                },

                {
                  "title": "Marketing Online",
                  "company": "PT. Usaha Inti Bersama",
                  "date": "2020 - 2022",
                  "tasks": [
                    "Mengelola toko online",
                    "Membuat konten digital yang menarik",
                    "Menganalisis tren pasar untuk mengoptimalkan penjualan"
                  ]
                },

                {
                  "title": "IT Support",
                  "company": "PT. GFC Terpadu",
                  "date": "2022 - present",
                  "tasks": [
                    "Maintenance CCTV",
                    "Troubleshooting CCTV",
                    "Mengatur dan mengkonfirgurasi sistem CCTV untuk memenuhi kebutuhan toko"
                  ]
                }

              ].map(exp => (
                <div key={exp.title} className={`${isDarkMode ? 'bg-white bg-opacity-10' : 'bg-gray-800 bg-opacity-10'} backdrop-blur-lg rounded-lg border ${isDarkMode ? 'border-white border-opacity-20' : 'border-gray-300'} p-6 transition-transform duration-300 hover:scale-[1.02]`}>
                  <h3 className={`text-2xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{exp.title}</h3>
                  <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{exp.company}</p>
                  <ul className={`list-disc ml-6 mt-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {exp.tasks.map(task => <li key={task}>{task}</li>)}
                  </ul>
                  <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{exp.date}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="p-8 lg:p-16 mb-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent mb-8">Education</h2>
            <div className="flex flex-col gap-8">
              {[
                { 
                  title: 'Sarjana Teknik Komputer', 
                  institution: 'Universitas Buddhi Dharma', 
                  date: '2020 - 2024', 
                  details: ['IPK: 3.51', 'Fokus pada pengembangan web menggunakan framework React', 'Pengembangan NLP, Data Mining dan Text Mining.'] 
                },

                { 
                  title: 'Proyek Skripsi', 
                  institution: 'Implementasi sentimen emosi pada lirik lagu menggunakan Bot Discord dengan metode analisis sentimen berbasis leksikon', 
                  date: '2023 - 2024', 
                  details: ['Mengembangkan Bot Discord untuk memutar lagu', 'Mengembangkan Bot Discord untuk menganalisis sentimen emosi lagu', 'Mengembangkan sistem kontrol Next, Previous, Pause, Shut Down, dan Show Lyric pada Bot Discord.'] 
                }
                
              ].map(edu => (
                <div key={edu.title} className={`${isDarkMode ? 'bg-white bg-opacity-10' : 'bg-gray-800 bg-opacity-10'} backdrop-blur-lg rounded-lg border ${isDarkMode ? 'border-white border-opacity-20' : 'border-gray-300'} p-6 transition-transform duration-300 hover:scale-[1.02]`}>
                  <h3 className={`text-2xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{edu.title}</h3>
                  <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{edu.institution}</p>
                  <ul className={`list-disc ml-6 mt-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {edu.details.map(detail => <li key={detail}>{detail}</li>)}
                  </ul>
                  <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{edu.date}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen p-8 lg:p-16">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent mb-8">Projects</h2>
            <div className="grid grid-cols-1 gap-8">
              {[
                { 
                  title: 'Bot Discord', 
                  description: 'Bot untuk memutar Musik di Platform Discord.', 
                  image: '/images/music-discord.png' 
                },

                { 
                  title: 'Implementation Of Text Mining For Emotion Detection', 
                  description: 'Mendeteksi sentimen emosi dari teks menggunakan teknik text mining untuk menganalisis dan mengidentifikasi emosi yang terkandung dalam kalimat.', 
                  image: '/images/Sentiment.jpeg' 
                },

              ].map(project => (
                <div key={project.title} className={`${isDarkMode ? 'bg-white bg-opacity-10' : 'bg-gray-800 bg-opacity-10'} backdrop-blur-lg rounded-lg border ${isDarkMode ? 'border-white border-opacity-20' : 'border-gray-300'} p-6 transition-transform duration-300 hover:scale-[1.02] group`}>
                  <div className="overflow-hidden rounded-lg mb-4">
                    <img src={project.image} alt={project.title} className="rounded-lg w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <h3 className={`text-2xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{project.title}</h3>
                  <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{project.description}</p>
                  <a href="#" className="inline-flex items-center text-blue-400 hover:text-blue-300 mt-4 transition-all duration-300 group-hover:translate-x-2">
                    <span>View Project</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className={`min-h-screen p-8 lg:p-16 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent mb-8">
              Let's Connect!
            </h2>
            <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-8`}>
              Tertarik bekerja sama atau sekedar ngobrol? Jangan ragu untuk menghubungi saya!
            </p>
            <div className="flex flex-wrap justify-center gap-6 relative z-10">
              {[
                { name: '📧 Email', link: 'mailto:widyadharta@gmail.com', color: 'hover:shadow-cyan-500/30' },
                { name: '🔗 LinkedIn', link: 'https://www.linkedin.com/in/pedro-widyadharta-773209350/', color: 'hover:shadow-blue-500/30' },
                { name: '🐱 GitHub', link: 'https://github.com/edrzvena', color: 'hover:shadow-purple-500/30' },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${isDarkMode ? 'bg-white bg-opacity-10' : 'bg-gray-800 bg-opacity-10'} backdrop-blur-lg border ${isDarkMode ? 'border-white border-opacity-20' : 'border-gray-300'} rounded-lg px-6 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105 ${item.color}`}
                >
                  {item.name}
                </a>
              ))}
            </div>
            
            {/* Contact Form */}
            <div className={`mt-16 ${isDarkMode ? 'bg-white bg-opacity-10' : 'bg-gray-800 bg-opacity-10'} backdrop-blur-lg rounded-lg border ${isDarkMode ? 'border-white border-opacity-20' : 'border-gray-300'} p-8 max-w-2xl mx-auto`}>
              <h3 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Send me a message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className={`${isDarkMode ? 'bg-black bg-opacity-30 border-white border-opacity-20' : 'bg-white border-gray-300'} border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300`}
                  />
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    className={`${isDarkMode ? 'bg-black bg-opacity-30 border-white border-opacity-20' : 'bg-white border-gray-300'} border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300`}
                  />
                </div>
                <textarea 
                  placeholder="Your Message" 
                  rows="5"
                  className={`w-full ${isDarkMode ? 'bg-black bg-opacity-30 border-white border-opacity-20' : 'bg-white border-gray-300'} border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300`}
                ></textarea>
                <button 
                  type="submit"
                  className="bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:shadow-cyan-500/30 hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>

        <footer className={`p-8 text-center ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          <p>© 2025 Pedro Widya. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;