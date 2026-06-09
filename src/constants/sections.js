// Satu sumber kebenaran untuk daftar section.
// Dipakai oleh Navbar (label menu) dan useScrollEffects (deteksi section aktif).
// Urutannya harus sama dengan urutan render di pages/Home.js.
export const SECTIONS = [
  'About',
  'Skills',
  'Experience',
  'Education',
  'Certificates',
  'Projects',
  'Contact',
];

// Versi id (lowercase) yang dipakai sebagai id elemen <section> & target scroll.
export const SECTION_IDS = SECTIONS.map((section) => section.toLowerCase());
