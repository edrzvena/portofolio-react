import React from 'react';

// Merender baris-baris kode bertoken warna (format: constants/developerCode.js) di dalam <pre>.
// Baris kepanjangan di-scroll horizontal di dalam blok, bukan melebarkan halaman.
const CodeBlock = ({ lines, className = '' }) => (
  <pre className={`overflow-x-auto px-5 py-4 font-mono leading-relaxed ${className}`}>
    <code>
      {lines.map((tokens, lineIndex) => (
        <React.Fragment key={lineIndex}>
          {tokens.map(([colorClass, text], tokenIndex) =>
            colorClass ? <span key={tokenIndex} className={colorClass}>{text}</span> : text
          )}
          {lineIndex < lines.length - 1 && '\n'}
        </React.Fragment>
      ))}
    </code>
  </pre>
);

export default CodeBlock;
