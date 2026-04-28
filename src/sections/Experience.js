import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Experience = () => {
  const { isDarkMode } = useTheme();
  return (
    <section id="experience" className="py-12 px-4 sm:px-8 lg:px-16 mb-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent mb-8 text-center">Experience</h2>
        <div className="flex flex-col gap-6">
          {[
            {
              "title": "Administrasi",
              "company": "Toko Purnama",
              "date": "2019 - 2020",
              "tasks": [
                "Mengelola operasional toko agar kegiatan penjualan berjalan lancar.",
                "Memberikan pelayanan kepada pelanggan selama proses pembelian.",
                "Mengelola dan memantau stok barang di gudang."
              ]
            },
            {
              "title": "Administrasi",
              "company": "PT. Usaha Inti Bersama",
              "date": "2020 - 2022",
              "tasks": [
                "Mengelola operasional toko online dan proses penjualan.",
                "Membuat konten digital untuk promosi produk.",
                "Menganalisis tren pasar untuk meningkatkan penjualan."
              ]
            },
            {
              "title": "IT Support",
              "company": "PT. GFC Terpadu",
              "date": "2022 - present",
              "tasks": [
                "Maintenance dan troubleshooting sistem CCTV.",
                "Konfigurasi sistem CCTV sesuai kebutuhan operasional.",
                "Dukungan teknis untuk memastikan sistem berjalan optimal."
              ]
            }
          ].map(exp => (
            <div key={exp.title} className={`${isDarkMode ? 'bg-white bg-opacity-10' : 'bg-gray-800 bg-opacity-10'} backdrop-blur-lg rounded-lg border ${isDarkMode ? 'border-white border-opacity-20' : 'border-gray-300'} p-6 transition-transform duration-300 hover:scale-[1.01]`}>
              <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{exp.title}</h3>
              <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-3`}>{exp.company}</p>
              <ul className={`list-disc ml-5 mt-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} space-y-2`}>
                {exp.tasks.map(task => <li key={task}>{task}</li>)}
              </ul>
              <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} mt-3 block`}>{exp.date}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
