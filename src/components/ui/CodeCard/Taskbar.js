import React from 'react';
import { motion } from 'framer-motion';
import { FcFolder } from 'react-icons/fc';
import { VscSearch, VscVscode } from 'react-icons/vsc';
import { SPRING } from './motion';
import SystemTray from './SystemTray';
import TaskbarItem from './TaskbarItem';
import { SearchHighlight, TaskViewIcon, WindowsLogo } from './TaskbarIcons';

// Label tombol aplikasi mengikuti aksi yang akan terjadi saat diklik.
const BUTTON_LABEL = {
  open: 'Minimize developer.js',
  minimized: 'Restore developer.js',
  closed: 'Open developer.js',
};

// Indikator pill ala Windows 11: panjang = aktif, pendek = diminimize (masih jalan), kosong = ditutup.
const INDICATOR_CLASS = {
  open: 'w-4 bg-sky-400',
  minimized: 'w-1.5 bg-slate-300',
  closed: 'w-0',
};

// Seperti Windows 11: ikon aplikasi memantul turun saat jendelanya diminimize dan naik saat dibuka lagi.
const ICON_BOUNCE = {
  open: { y: [0, -5, 0] },
  minimized: { y: [0, 5, 0] },
  closed: { y: 0 },
};

// Satu-satunya item taskbar yang berfungsi: membuka/me-restore/meminimize jendela developer.js.
const AppButton = ({ status, onClick }) => (
  <motion.button
    type="button"
    aria-label={BUTTON_LABEL[status]}
    title={BUTTON_LABEL[status]}
    onClick={onClick}
    whileTap={{ scale: 0.88 }}
    transition={SPRING}
    className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-md transition-colors duration-200 hover:bg-white/10"
  >
    <motion.span
      aria-hidden="true"
      initial={false}
      animate={ICON_BOUNCE[status]}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="flex"
    >
      <VscVscode className="h-5 w-5 text-sky-400" />
    </motion.span>
    <span
      aria-hidden="true"
      className={`absolute bottom-0.5 left-1/2 h-[3px] -translate-x-1/2 rounded-full transition-[width,background-color] duration-300 ease-out ${INDICATOR_CLASS[status]}`}
    ></span>
  </motion.button>
);

// Taskbar ala Windows 11 selebar jendela CodeCard: ikon di tengah (Start, Search, Task View,
// File Explorer, VS Code) dan system tray di kanan. Kotak Search menyusut bila ruangnya sempit
// (minimal tetap muat ikon, tulisan "Search" & ilustrasi). Task View, File Explorer & bahasa input
// disembunyikan di HP dan di layar lg (kolom CodeCard cuma ±424px), tampil lagi di xl.
const Taskbar = ({ status, onAppClick }) => (
  <div className="mt-3 flex h-12 items-center rounded-lg border border-white/10 bg-code px-1.5 shadow-air">
    <div className="flex-1"></div>

    <div className="flex min-w-0 items-center gap-1">
      <TaskbarItem tapScale={0.8} className="flex h-10 w-10 shrink-0 justify-center rounded-md">
        <WindowsLogo className="h-[18px] w-[18px] fill-sky-400" />
      </TaskbarItem>

      <TaskbarItem
        tapScale={0.97}
        className="flex h-8 w-44 min-w-[7.75rem] shrink gap-2 rounded-full border border-white/10 bg-white/[0.06] pl-3 pr-1"
      >
        <VscSearch className="h-4 w-4 shrink-0 text-slate-300" />
        <span className="min-w-0 truncate text-[13px] text-slate-400">Search</span>
        <SearchHighlight className="ml-auto h-[18px] w-[30px] shrink-0" />
      </TaskbarItem>

      <TaskbarItem className="hidden h-10 w-10 shrink-0 justify-center rounded-md text-slate-200 sm:flex lg:hidden xl:flex">
        <TaskViewIcon className="h-[18px] w-[18px]" />
      </TaskbarItem>

      <TaskbarItem className="hidden h-10 w-10 shrink-0 justify-center rounded-md sm:flex lg:hidden xl:flex">
        <FcFolder className="h-5 w-5" />
      </TaskbarItem>

      <AppButton status={status} onClick={onAppClick} />
    </div>

    <div className="flex flex-1 justify-end">
      <SystemTray />
    </div>
  </div>
);

export default Taskbar;
