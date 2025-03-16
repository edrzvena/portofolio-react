import React, { useEffect, useRef } from "react";
import './index.css'; // Pastikan file CSS Tailwind di-import

const App = () => {
  // Referensi untuk elemen blob
  const blobRefs = useRef([]);
  // Posisi awal untuk setiap blob
  const initialPositions = [
    { x: -4, y: 0 },
    { x: -4, y: 0 },
    { x: 20, y: -8 },
    { x: 20, y: -8 },
  ];

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

    window.addEventListener("scroll", handleScroll); // Menambahkan event listener untuk scroll
    return () => {
      window.removeEventListener("scroll", handleScroll); // Menghapus event listener saat komponen di-unmount
      cancelAnimationFrame(requestId); // Membatalkan requestAnimationFrame
    };
  }, []);

  return (
    <div className="bg-black text-white font-sans overflow-x-hidden relative"> {/* Mengubah latar belakang menjadi biru gelap */}
      {/* Animated Background */}
      <div className="fixed inset-0">
        <div className="absolute inset-0">
          <div
            ref={(ref) => (blobRefs.current[0] = ref)}
            className="absolute top-0 -left-4 md:w-96 md:h-96 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-40 md:opacity-20"
          ></div>
          <div
            ref={(ref) => (blobRefs.current[1] = ref)}
            className="absolute top-0 -right-4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-40 md:opacity-20 hidden sm:block"
          ></div>
          <div
            ref={(ref) => (blobRefs.current[2] = ref)}
            className="absolute -bottom-8 left-[-40%] md:left-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-40 md:opacity-20"
          ></div>
          <div
            ref={(ref) => (blobRefs.current[3] = ref)}
            className="absolute -bottom-10 right-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 md:opacity-10 hidden sm:block"
          ></div>
        </div>
        {/* Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f10_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f10_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full p-4 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg border border-white border-opacity-20 z-50">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">My Portfolio</h1>
          <div className="flex gap-6">
            {['About', 'Skills', 'Projects', 'Contact'].map(section => (
              <div className="relative group" key={section}>
                <a
                  href={`#${section.toLowerCase()}`}
                  className="text-transparent bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text transition duration-300"
                >
                  {section}
                </a>
                <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-gradient-to-r from-green-400 to-blue-500 transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
              </div>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center text-center">
        <div>
          <h1 className="text-6xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent mb-4">
            Hi, I'm <span className="inline-block overflow-hidden whitespace-nowrap animate-typing">Pedro Widya</span>
          </h1>
          <p className="text-xl text-gray-400">Full-Stack Developer | UI/UX Designer | IT Support</p>
          <div className="mt-8 flex justify-center">
            <a href="#about" className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent font-semibold py-3 px-6 rounded-full shadow-lg z-50">View My Profile</a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen p-16 bg-gray-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent mb-8">About Me</h2>
          <div className="grid grid-cols-1 gap-8 items-center">
            <div className="animate-float">
              <img src="/images/myself.jpg" alt="Profile" className="w-64 h-64 rounded-full mx-auto shadow-lg" />
            </div>
            <div className="text-lg text-gray-400">
            <p className="text-center mx-auto mb-4">Saya adalah seorang lulusan baru di bidang IT yang memiliki minat besar di pengembangan web. Selama kuliah, saya telah mempelajari berbagai teknologi web dan saya siap untuk mengembangkan kemampuan saya lebih lanjut.</p>
              <p className="text-center mx-auto mb-4">Saya bersemangat untuk memulai karir saya di bidang pengembangan web dan saya siap untuk bekerja sama dengan tim untuk menciptakan solusi-solusi inovatif.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen p-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent mb-8 text-center">
            Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'Python (Django)', percentage: 95 },
              { title: 'JavaScript (React)', percentage: 80 },
              { title: 'Database (PostgreSQL, MySQL)', percentage: 70 },
              { title: 'CSS (Tailwind, Bootstrap)', percentage: 80 },
              { title: 'UI/UX (Figma)', percentage: 80 }
            ].map((skill) => (
              <div
                key={skill.title}
                className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg border border-white border-opacity-20 p-6 flex flex-col items-center shadow-lg transition-transform transform hover:scale-110 duration-300"
              >
                <h3 className="text-xl font-bold mb-4 text-gray-200">{skill.title}</h3>
                <div className="relative size-40">
                  <svg className="size-full -rotate-90" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                    {/* Background Circle */}
                    <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-gray-200 dark:text-neutral-700" strokeWidth="2"></circle>
                    {/* Progress Circle */}
                    <circle
                      cx="18"
                      cy="18"
                      r="16"
                      fill="none"
                      className="stroke-current text-blue-600 dark:text-blue-500"
                      strokeWidth="2"
                      strokeDasharray="100"
                      strokeDashoffset={`${100 - skill.percentage}`}
                      strokeLinecap="round"
                      style={{ transition: 'stroke-dashoffset 1.5s ease-in-out' }}
                    ></circle>
                  </svg>
                  {/* Percentage Text */}
                  <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
                    <span className="text-center text-2xl font-bold text-blue-600 dark:text-blue-500">{skill.percentage}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="mb-8">
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
                "title": "Security Officer",
                "company": "PT. GFC Terpadu",
                "date": "2022 - present",
                "tasks": [
                  "Memantau dan menganalisis sistem keamanan",
                  "Memastikan kinerja optimal dan integritas data"
                ]
              }

            ].map(exp => (
              <div key={exp.title} className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg border border-white border-opacity-20 p-6">
                <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                <p className="text-gray-400">{exp.company}</p>
                <ul className="list-disc ml-6 text-gray-400 mt-2">
                  {exp.tasks.map(task => <li key={task}>{task}</li>)}
                </ul>
                <span className="text-sm text-gray-400">{exp.date}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="mb-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent mb-8">Education</h2>
          <div className="flex flex-col gap-8">
            {[
              { 
                title: 'Sarjana Teknik Komputer', 
                institution: 'Universitas Buddhi Dharma', 
                date: '2020 - 2024', 
                details: ['IPK: 3.51', 'Fokus pada pengembangan web menggunakan framework Laravel', 'Pengembangan NLP, Data Mining dan Text Mining.'] 
              },

              { 
                title: 'Proyek Skripsi', 
                institution: 'Implementasi sentimen emosi pada lirik lagu menggunakan Bot Discord dengan metode analisis sentimen berbasis leksikon', 
                date: '2023 - 2024', 
                details: ['Mengembangkan Bot Discord untuk memutar lagu', 'Mengembangkan Bot Discord untuk menganalisis sentimen emosi lagu', 'Mengembangkan sistem kontrol Next, Previous, Pause, Shut Down, dan Show Lyric pada Bot Discord.'] 
              }
              
            ].map(edu => (
              <div key={edu.title} className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg border border-white border-opacity-20 p-6">
                <h3 className="text-2xl font-bold mb-2">{edu.title}</h3>
                <p className="text-gray-400">{edu.institution}</p>
                <ul className="list-disc ml-6 text-gray-400 mt-2">
                  {edu.details.map(detail => <li key={detail}>{detail}</li>)}
                </ul>
                <span className="text-sm text-gray-400">{edu.date}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen p-16">
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
              <div key={project.title} className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg border border-white border-opacity-20 p-6">
                <img src={project.image} alt={project.title} className="rounded-lg mb-4" />
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400">{project.description}</p>
                <a href="#" className="text-blue-400 hover:text-blue-300 mt-4 inline-block">View Project →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen p-16 bg-gray-900">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent mb-8">
            Let's Connect!
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            Tertarik bekerja sama atau sekedar ngobrol? Jangan ragu untuk menghubungi saya!
          </p>
          <div className="flex justify-center gap-6 relative z-10">
            {[
              { name: '📧 Email', link: 'mailto:widyadharta@gmail.com' },
              { name: '🔗 LinkedIn', link: 'https://www.linkedin.com/in/pedro-widyadharta-773209350/' },
              { name: '🐱 GitHub', link: 'https://github.com/edrzvena' },
            ].map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 text-lg font-semibold relative z-20"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className="p-8 text-center text-gray-400">
        <p>© 2025 Pedro Widya. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;