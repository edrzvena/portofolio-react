import { useEffect } from 'react';

// Mengunci scroll halaman selama `active` bernilai true (mis. saat modal terbuka).
// Mengunci scroll menghilangkan scrollbar (±15px di Windows) sehingga halaman melebar dan bergeser;
// lebarnya dicatat di variabel CSS --scroll-lock-gap, yang dipakai sebagai padding kanan body
// dan navbar (lihat index.css & Navbar.js) supaya konten tetap di tempat.
const useScrollLock = (active) => {
  useEffect(() => {
    if (!active) return undefined;

    const root = document.documentElement;
    const { body } = document;
    const previousOverflow = body.style.overflow;
    const scrollbarWidth = Math.max(0, window.innerWidth - root.clientWidth);

    root.style.setProperty('--scroll-lock-gap', `${scrollbarWidth}px`);
    body.style.overflow = 'hidden';

    return () => {
      body.style.overflow = previousOverflow;
      root.style.removeProperty('--scroll-lock-gap');
    };
  }, [active]);
};

export default useScrollLock;
