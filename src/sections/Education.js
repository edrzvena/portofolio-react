import React from 'react';

const education = [
  {
    title: 'Sarjana Teknik Komputer',
    institution: 'Universitas Buddhi Dharma',
    date: '2020 - 2024',
    details: ['IPK: 3.51.', 'Fokus pada pengembangan web modern menggunakan React dan PostgreSQL.', 'Pengembangan NLP, Data Mining dan Text Mining.']
  },
  {
    title: 'Proyek Skripsi',
    institution: 'Implementasi sentimen emosi pada lirik lagu menggunakan Bot Discord dengan metode analisis sentimen berbasis leksikon',
    date: '2023 - 2024',
    details: ['Mengembangkan Bot Discord untuk memutar lagu.', 'Mengembangkan Bot Discord untuk menganalisis sentimen emosi lagu.', 'Mengembangkan sistem kontrol Next, Previous, Pause, Shut Down, dan Show Lyric pada Bot Discord.']
  }
];

const Education = () => {
  return (
    <section id="education" className="bg-band py-24 px-4 sm:px-8 lg:px-16">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-12 text-center text-3xl font-semibold tracking-tight text-ink">Education</h2>

        <div className="relative ml-2 border-l border-line pl-8 sm:ml-4">
          <div className="flex flex-col gap-10">
            {education.map(edu => (
              <div key={edu.title} className="relative">
                {/* node dot */}
                <span className="absolute -left-[42px] top-1.5 h-3 w-3 rounded-full border-2 border-band bg-accent ring-1 ring-line"></span>
                <p className="mb-1 font-mono text-sm text-muted">{edu.date}</p>
                <h3 className="text-xl font-semibold text-ink">{edu.title}</h3>
                <p className="mb-3 text-muted">{edu.institution}</p>
                <ul className="ml-5 list-disc space-y-2 text-muted">
                  {edu.details.map(detail => <li key={detail}>{detail}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
