import React from 'react';
import { useTheme } from '../context/ThemeContext';
import Card from '../components/ui/Card';
import music_discord from "../assets/images/music-discord.png";
import sentiment from "../assets/images/sentiment.jpeg";
import pos from "../assets/images/pos.png";
import code_explainer from "../assets/images/code_explainer.jpg";
import daily_standup from "../assets/images/daily_standup.jpg";

const Projects = () => {
  const { isDarkMode } = useTheme();
  return (
    <section id="projects" className="py-12 px-4 sm:px-8 lg:px-16 mb-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent mb-8 text-center">Projects</h2>
        <div className="grid grid-cols-1 gap-6">
          {[
            {
              title: 'Daily Standup',
              description: 'Aplikasi web yang membantu developer membuat laporan standup harian secara instan, pengguna cukup mengetik apa yang dikerjakan dengan bahasa sehari-hari, lalu aplikasi otomatis mengubahnya menjadi laporan yang rapi dan siap dibagikan ke tim.',
              image: daily_standup,
              link: 'https://github.com/edrzvena/daily-standup'
            },
            {
              title: 'Code Explainer',
              description: 'Web app yang bisa jelasin syntax code pakai model Claude AI, pilih bahasanya, dapat penjelasan per blok logika dalam bahasa Indonesia.',
              image: code_explainer,
              link: 'https://github.com/edrzvena/code-explainer'
            },
            {
              title: 'POS Cashier — Point of Sale Web App',
              description: 'Membangun aplikasi kasir (Point of Sale) berbasis web untuk mendukung operasional transaksi penjualan harian pada bisnis cafe/retail menggunakan teknologi React dan Supabase.',
              image: pos,
              link: 'https://kasir-nya.vercel.app/'
            },
            {
              title: 'Bot Discord',
              description: 'Bot untuk memutar Musik di Platform Discord.',
              image: music_discord,
              link: 'https://discord.com/oauth2/authorize?client_id=1223985141144092794'
            },
            {
              title: 'Implementation Of Text Mining For Emotion Detection',
              description: 'Mendeteksi sentimen emosi dari teks menggunakan teknik text mining untuk menganalisis dan mengidentifikasi emosi yang terkandung dalam kalimat.',
              image: sentiment,
              link: 'https://text-emotion-analyzer-pedro.vercel.app/'
            },
          ].map(project => (
            <Card key={project.title} className="group">
              <div className="overflow-hidden rounded-lg mb-4">
                <img src={project.image} alt={project.title} className="rounded-lg w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{project.title}</h3>
              <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-4`}>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-all duration-300 group-hover:translate-x-2 text-sm sm:text-base">
                <span>View Project</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
