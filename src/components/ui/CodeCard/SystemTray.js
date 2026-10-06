import React from 'react';
import { FiBatteryCharging, FiChevronUp, FiVolume2, FiWifi } from 'react-icons/fi';
import useClock from '../../../hooks/useClock';
import { useLanguage } from '../../../context/LanguageContext';
import TaskbarItem from './TaskbarItem';

// Indikator bahasa input & format jam/tanggal mengikuti bahasa web yang aktif.
const INPUT_LANGUAGE = {
  en: ['ENG', 'US'],
  id: ['IND', 'ID'],
  ja: ['JPN', 'JP'],
};
const DATE_LOCALE = {
  en: 'en-US',
  id: 'id-ID',
  ja: 'ja-JP',
};

// Pojok kanan taskbar Windows 11: panah ikon tersembunyi, bahasa input, wifi/volume/baterai,
// lalu jam di atas tanggal (berjalan sungguhan). Semuanya hiasan tanpa aksi.
// Bahasa input hanya muncul bila ruangnya cukup (sm sampai md satu kolom, xl ke atas).
const SystemTray = () => {
  const now = useClock();
  const { language } = useLanguage();
  const locale = DATE_LOCALE[language];
  const [inputLanguage, inputRegion] = INPUT_LANGUAGE[language];

  return (
    <div className="flex shrink-0 items-center text-slate-200">
      <TaskbarItem className="hidden h-10 w-6 justify-center rounded-md sm:flex">
        <FiChevronUp className="h-3.5 w-3.5" />
      </TaskbarItem>

      <TaskbarItem className="hidden h-10 flex-col justify-center rounded-md px-1.5 text-[10px] leading-tight sm:flex lg:hidden xl:flex">
        <span>{inputLanguage}</span>
        <span>{inputRegion}</span>
      </TaskbarItem>

      <TaskbarItem className="hidden h-10 gap-2 rounded-md px-2 sm:flex">
        <FiWifi className="h-3.5 w-3.5" />
        <FiVolume2 className="h-3.5 w-3.5" />
        <FiBatteryCharging className="h-3.5 w-3.5" />
      </TaskbarItem>

      <TaskbarItem className="flex h-10 flex-col items-end justify-center rounded-md px-2 text-[11px] leading-tight">
        <span>{now.toLocaleTimeString(locale, { hour: 'numeric', minute: '2-digit' })}</span>
        <span>{now.toLocaleDateString(locale)}</span>
      </TaskbarItem>
    </div>
  );
};

export default SystemTray;
