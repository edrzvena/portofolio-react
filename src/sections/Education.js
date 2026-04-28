import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Education = () => {
  const { isDarkMode } = useTheme();
  return (
    <section id="education" className="py-12 px-4 sm:px-8 lg:px-16 mb-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent mb-8 text-center">Education</h2>
        <div className="flex flex-col gap-6">
          {[
            {
              title: 'Sarjana Teknik Komputer',
              institution: 'Universitas Buddhi Dharma',
              date: '2020 - 2024',
              details: ['IPK: 3.51.', 'Fokus pada pengembangan web menggunakan framework React.', 'Pengembangan NLP, Data Mining dan Text Mining.']
            },
            {
              title: 'Proyek Skripsi',
              institution: 'Implementasi sentimen emosi pada lirik lagu menggunakan Bot Discord dengan metode analisis sentimen berbasis leksikon',
              date: '2023 - 2024',
              details: ['Mengembangkan Bot Discord untuk memutar lagu.', 'Mengembangkan Bot Discord untuk menganalisis sentimen emosi lagu.', 'Mengembangkan sistem kontrol Next, Previous, Pause, Shut Down, dan Show Lyric pada Bot Discord.']
            }
          ].map(edu => (
            <div key={edu.title} className={`${isDarkMode ? 'bg-white bg-opacity-10' : 'bg-gray-800 bg-opacity-10'} backdrop-blur-lg rounded-lg border ${isDarkMode ? 'border-white border-opacity-20' : 'border-gray-300'} p-6 transition-transform duration-300 hover:scale-[1.01]`}>
              <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{edu.title}</h3>
              <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-3`}>{edu.institution}</p>
              <ul className={`list-disc ml-5 mt-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} space-y-2`}>
                {edu.details.map(detail => <li key={detail}>{detail}</li>)}
              </ul>
              <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} mt-3 block`}>{edu.date}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
