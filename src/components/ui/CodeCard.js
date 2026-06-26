import React from 'react';

// Kartu snippet kode statis bergaya editor — satu-satunya elemen gelap di situs,
// sebagai aksen visual "developer" di Hero (meniru jendela kode pada mockup).
// Murni dekoratif; tidak ada logika.
const CodeCard = () => {
  return (
    <div className="overflow-hidden rounded-xl border border-line-strong/40 bg-code shadow-air">
      {/* Title bar */}
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-400/80"></span>
        <span className="h-3 w-3 rounded-full bg-yellow-400/80"></span>
        <span className="h-3 w-3 rounded-full bg-green-400/80"></span>
        <span className="ml-2 font-mono text-xs text-slate-400">developer.js</span>
      </div>

      {/* Code body */}
      <pre className="overflow-x-auto px-5 py-4 font-mono text-[13px] leading-relaxed">
        <code>
          <span className="text-violet-400">const</span>{' '}
          <span className="text-sky-300">developer</span>{' '}
          <span className="text-slate-400">=</span>{' '}
          <span className="text-slate-400">{'{'}</span>
          {'\n'}
          {'  '}<span className="text-slate-300">name</span>
          <span className="text-slate-400">:</span>{' '}
          <span className="text-emerald-300">'Pedro Widya'</span>
          <span className="text-slate-400">,</span>
          {'\n'}
          {'  '}<span className="text-slate-300">role</span>
          <span className="text-slate-400">:</span>{' '}
          <span className="text-emerald-300">'Full-Stack Developer'</span>
          <span className="text-slate-400">,</span>
          {'\n'}
          {'  '}<span className="text-slate-300">stack</span>
          <span className="text-slate-400">:</span>{' '}
          <span className="text-slate-400">[</span>
          <span className="text-emerald-300">'TypeScript'</span>
          <span className="text-slate-400">,</span>{' '}
          <span className="text-emerald-300">'React'</span>
          <span className="text-slate-400">,</span>{' '}
          <span className="text-emerald-300">'Node'</span>
          <span className="text-slate-400">],</span>
          {'\n'}
          {'  '}<span className="text-slate-300">focus</span>
          <span className="text-slate-400">:</span>{' '}
          <span className="text-emerald-300">'clean, scalable web apps'</span>
          <span className="text-slate-400">,</span>
          {'\n'}
          {'  '}<span className="text-sky-300">build</span>
          <span className="text-slate-400">:</span>{' '}
          <span className="text-violet-400">() =&gt;</span>{' '}
          <span className="text-emerald-300">'ship it ✦'</span>
          <span className="text-slate-400">,</span>
          {'\n'}
          <span className="text-slate-400">{'}'}</span>
          <span className="text-slate-400">;</span>
        </code>
      </pre>
    </div>
  );
};

export default CodeCard;
