// Variant & kurva animasi framer-motion untuk CodeCard.

// Masuk pakai spring (memantul halus), keluar pakai ease yang mempercepat di akhir.
export const SPRING = { type: 'spring', stiffness: 300, damping: 28, mass: 0.9 };
const EASE_IN = [0.4, 0, 1, 1];
// Minimize ala Windows: langsung bergerak cepat begitu diklik, lalu melambat halus saat masuk ke ikon.
const EASE_OUT_QUICK = [0.2, 0, 0, 1];
const FADE_IN = { duration: 0.2, ease: 'easeOut' };

// Pasang sebagai prop `onUpdate` pada motion element untuk menjalankan animasinya di main thread.
// Alasan: animasi opacity/transform yang dijalankan framer-motion lewat GPU (Web Animations API)
// dibatalkan di akhir sebelum nilai akhirnya sempat ditulis, sehingga elemen sempat tampil satu frame
// dengan nilai awalnya (jendela "berkedip" penuh di akhir animasi minimize). Framer otomatis tidak
// memakai GPU bila elemen punya `onUpdate`, dan di main thread nilainya ditulis langsung tiap frame.
export const RUN_ON_MAIN_THREAD = () => {};

// Satu variant per status jendela (lihat hooks/useAppWindow). visibility:hidden dipasang setelah
// animasi keluar selesai, sehingga jendela tak bisa diklik tapi tetap memakan ruang di layout
// (taskbar di bawahnya tidak bergeser).
//
// `minimized` menerima `custom` berupa fungsi yang mengukur jarak dari tepi bawah-tengah jendela ke
// ikon aplikasi di taskbar (diukur saat animasi dimulai), sehingga jendela mengecil masuk ke ikonnya
// seperti di Windows. Saat dibuka lagi, `open` membawanya kembali dari posisi ikon tersebut.
export const windowVariants = {
  open: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    visibility: 'visible',
    transition: { ...SPRING, opacity: FADE_IN },
  },
  minimized: (measureOffsetToTaskbarIcon) => ({
    opacity: 0,
    ...measureOffsetToTaskbarIcon(),
    scale: 0.1,
    transition: {
      duration: 0.3,
      ease: EASE_OUT_QUICK,
      // Memudar di paruh akhir, saat jendela sudah kecil dan hampir sampai di ikon.
      opacity: { duration: 0.16, delay: 0.12, ease: 'easeIn' },
    },
    transitionEnd: { visibility: 'hidden' },
  }),
  closed: {
    opacity: 0,
    scale: 0.94,
    transition: { duration: 0.18, ease: EASE_IN },
    transitionEnd: { visibility: 'hidden' },
  },
};

// Pop up maximize. Pembungkus hanya menunggu anak-anaknya selesai keluar sebelum dilepas dari DOM.
export const overlayVariants = {
  hidden: { transition: { when: 'afterChildren' } },
  shown: {},
};

// Backdrop SENGAJA tidak dianimasikan lewat `opacity`: framer-motion menjalankan opacity di compositor
// (Web Animations API), dan selama animasi itu berjalan Chrome tidak merender backdrop-filter, sehingga
// blur muncul/hilang mendadak di awal & akhir animasi (foto di Hero terlihat "glitch").
// Yang dianimasikan langsung besar blur dan gelapnya warna latar, sehingga keduanya memudar bersamaan.
const BACKDROP_BLUR = 'blur(4px)';
const NO_BLUR = 'blur(0px)';

export const backdropVariants = {
  hidden: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    backdropFilter: NO_BLUR,
    WebkitBackdropFilter: NO_BLUR,
    transition: { duration: 0.2, ease: 'easeOut' },
  },
  shown: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    backdropFilter: BACKDROP_BLUR,
    WebkitBackdropFilter: BACKDROP_BLUR,
    transition: { duration: 0.25, ease: 'easeOut' },
  },
};

export const panelVariants = {
  hidden: { opacity: 0, scale: 0.96, y: 16, transition: { duration: 0.16, ease: EASE_IN } },
  shown: { opacity: 1, scale: 1, y: 0, transition: { ...SPRING, opacity: FADE_IN } },
};
