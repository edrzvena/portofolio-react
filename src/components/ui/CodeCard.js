import React from 'react';
import { VscChromeMinimize, VscChromeMaximize, VscChromeClose, VscClose } from 'react-icons/vsc';

// Kartu snippet kode statis bergaya editor — satu-satunya elemen gelap di situs,
// sebagai aksen visual "developer" di Hero. Murni dekoratif; tidak ada logika.
// Role dijaga sinkron dengan Hero.
const CodeCard = () => {
  return (
    <div className="overflow-hidden rounded-lg border border-line-strong/40 bg-code shadow-air">
      {/* Title bar gaya VS Code di Windows: tab file aktif di kiri, tombol window di kanan (dekoratif) */}
      <div className="flex items-stretch border-b border-white/10 bg-black/25" aria-hidden="true">
        <div className="flex items-center gap-2 border-r border-t-2 border-r-white/10 border-t-accent bg-code px-4 py-2">
          <span className="font-mono text-[10px] font-bold text-yellow-300">JS</span>
          <span className="font-mono text-xs text-slate-200">developer.js</span>
          <VscClose className="ml-2 h-3.5 w-3.5 text-slate-400" />
        </div>
        <div className="ml-auto flex text-slate-400">
          <span className="flex w-11 items-center justify-center"><VscChromeMinimize className="h-4 w-4" /></span>
          <span className="flex w-11 items-center justify-center"><VscChromeMaximize className="h-4 w-4" /></span>
          <span className="flex w-11 items-center justify-center transition-colors duration-200 hover:bg-red-600 hover:text-white"><VscChromeClose className="h-4 w-4" /></span>
        </div>
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
          <span className="text-emerald-300">'Web Developer'</span>
          <span className="text-slate-400">,</span>
          {'\n'}
          {'  '}<span className="text-slate-300">stack</span>
          <span className="text-slate-400">: [</span>
          {'\n'}
          {'    '}<span className="text-emerald-300">'JavaScript'</span>
          <span className="text-slate-400">,</span>{' '}
          <span className="text-emerald-300">'TypeScript'</span>
          <span className="text-slate-400">,</span>{' '}
          <span className="text-emerald-300">'C#'</span>
          <span className="text-slate-400">,</span>{' '}
          <span className="text-emerald-300">'.NET'</span>
          <span className="text-slate-400">,</span>
          {'\n'}
          {'    '}<span className="text-emerald-300">'React'</span>
          <span className="text-slate-400">,</span>{' '}
          <span className="text-emerald-300">'Express'</span>
          <span className="text-slate-400">,</span>{' '}
          <span className="text-emerald-300">'Tailwind'</span>
          <span className="text-slate-400">,</span>{' '}
          <span className="text-emerald-300">'Bootstrap'</span>
          <span className="text-slate-400">,</span>
          {'\n'}
          {'    '}<span className="text-emerald-300">'PostgreSQL'</span>
          <span className="text-slate-400">,</span>{' '}
          <span className="text-emerald-300">'SQL Server'</span>
          <span className="text-slate-400">,</span>
          {'\n'}
          {'  '}<span className="text-slate-400">],</span>
          {'\n'}
          <span className="text-slate-400">{'}'}</span>
          <span className="text-slate-400">;</span>
        </code>
      </pre>
    </div>
  );
};

export default CodeCard;
