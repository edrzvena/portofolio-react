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
              <a
                key={section}
                href={`#${section.toLowerCase()}`}
                className="text-transparent bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text hover:text-transparent hover:bg-clip-text transition duration-300"
              >
                {section}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center text-center">
        <div>
          <h1 className="text-6xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent mb-4">
            Hi, I'm <span className="inline-block overflow-hidden whitespace-nowrap animate-typing">[Pedro]</span>
          </h1>
          <p className="text-xl text-gray-400">Full-Stack Developer | Tech Enthusiast | Problem Solver</p>
          <div className="mt-8 flex justify-center">
            <a href="#projects" className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent font-semibold py-3 px-6 rounded-full shadow-lg z-50">View My Work</a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen p-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent mb-8">About Me</h2>
          <div className="grid grid-cols-1 gap-8 items-center">
            <div className="animate-float">
              <img src="/images/myself.jpg" alt="Profile" className="w-64 h-64 rounded-full mx-auto shadow-lg" />
            </div>
            <div className="text-lg text-gray-400">
              <p>Saya adalah seorang Full-Stack Developer dengan passion di bidang pengembangan web dan teknologi...</p>
              <p className="mt-4">Selain coding, saya juga suka berkolaborasi dengan tim...</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen p-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent mb-8 text-center">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'Python (Django, Flask)', percentage: '95%' },
              { title: 'JavaScript (React, Node.js)', percentage: '80%' }
            ].map(skill => (
              <div key={skill.title} className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg border border-white border-opacity-20 p-6 flex flex-col items-center">
                <h3 className="text-xl font-bold mb-4">{skill.title}</h3>
                <div className="relative w-32 h-32">
                  <div className={`w-full h-full rounded-full bg-[conic-gradient(#00aaf9_${skill.percentage === '95%' ? '95%' : '80%'},#000000_${skill.percentage === '95%' ? '95%' : '80%'},#2d3748_0%)]`} style={{ WebkitMask: 'radial-gradient(farthest-side, transparent calc(100% - 8px), black calc(100% - 7px))', animation: 'fill 1.5s ease-in-out forwards' }}></div>
                  <span className="text-xl text-gray-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">{skill.percentage}</span>
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
              { title: 'Web Developer Intern', company: 'PT. Teknologi Maju Jaya', date: 'Jun 2019 - Des 2019', tasks: ['Mengembangkan aplikasi web internal menggunakan Django dan React.', 'Mengoptimalkan performa database.', 'Berpartisipasi dalam code review.'] },
              { title: 'Freelance Web Developer', company: 'Self-Employed', date: 'Jan 2020 - Sekarang', tasks: ['Membangun website untuk klien.', 'Mengintegrasikan sistem pembayaran.', 'Memberikan dukungan teknis.'] },
              { title: 'Security Officer (Part-Time)', company: 'PT. Keamanan Terpercaya', date: 'Mar 2018 - Des 2019', tasks: ['Menangani sistem keamanan.', 'Memastikan keamanan lingkungan kerja.'] }
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
              { title: 'Sarjana Teknik Komputer', institution: 'Universitas XYZ', date: '2015 - 2019', details: ['IPK: 3.8/4.0', 'Fokus pada pengembangan web.', 'Aktif di organisasi mahasiswa.'] },
              { title: 'Proyek Skripsi', institution: 'Sistem Manajemen Inventaris Berbasis Web', date: '2018 - 2019', details: ['Membangun sistem inventaris.', 'Fitur manajemen stok dan laporan.'] }
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
              { title: 'E-commerce Platform', description: 'Platform e-commerce dengan fitur lengkap.', image: '/images/project1.jpg' },
              { title: 'Blog Platform', description: 'Platform blog dengan fitur multi-user.', image: '/images/project2.jpg' },
              { title: 'Task Management App', description: 'Aplikasi manajemen tugas dengan fitur kolaborasi.', image: '/images/project3.jpg' }
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
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent mb-8">Let's Connect!</h2>
          <p className="text-lg text-gray-400 mb-8">Tertarik bekerja sama atau sekedar ngobrol? Jangan ragu untuk menghubungi saya!</p>
          <div className="flex justify-center gap-6">
            {['youremail@example.com', 'https://linkedin.com/in/yourprofile', 'https://github.com/yourprofile'].map((link, index) => (
              <a key={index} href={link} className="text-blue-400 hover:text-blue-300">{index === 0 ? '📧 Email' : index === 1 ? '🔗 LinkedIn' : '🐱 GitHub'}</a>
            ))}
          </div>
        </div>
      </section>

      <footer className="p-8 text-center text-gray-400">
        <p>© 2024 [Your Name]. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;