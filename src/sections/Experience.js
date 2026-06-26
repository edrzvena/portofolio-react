import React from 'react';

const experiences = [
  {
    title: "IT Support",
    company: "PT. GFC Terpadu",
    date: "Nov 2022 - present",
    tasks: [
      "Maintenance dan troubleshooting sistem CCTV.",
      "Konfigurasi sistem CCTV sesuai kebutuhan operasional.",
      "Dukungan teknis untuk memastikan sistem berjalan optimal."
    ]
  },
  {
    title: "Administrasi",
    company: "PT. Usaha Inti Bersama",
    date: "Nov 2020 - Mar 2022",
    tasks: [
      "Mengelola operasional toko online dan proses penjualan.",
      "Membuat konten digital untuk promosi produk.",
      "Menganalisis tren pasar untuk meningkatkan penjualan."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-4 sm:px-8 lg:px-16">
      <div className="mx-auto max-w-4xl">
        <p className="mb-3 text-center font-mono text-sm text-accent">{'// 03 — journey'}</p>
        <h2 className="mb-12 text-center text-3xl font-semibold tracking-tight text-ink">Experience</h2>

        <div className="relative ml-2 border-l border-line pl-8 sm:ml-4">
          <div className="flex flex-col gap-10">
            {experiences.map(exp => (
              <div key={exp.title} className="relative">
                {/* node dot */}
                <span className="absolute -left-[42px] top-1.5 h-3 w-3 rounded-full border-2 border-white bg-accent ring-1 ring-line sm:-left-[42px]"></span>
                <p className="mb-1 font-mono text-sm text-muted">{exp.date}</p>
                <h3 className="text-xl font-semibold text-ink">{exp.title}</h3>
                <p className="mb-3 text-muted">{exp.company}</p>
                <ul className="ml-5 list-disc space-y-2 text-muted">
                  {exp.tasks.map(task => <li key={task}>{task}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
