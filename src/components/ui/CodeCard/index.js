import React from 'react';
import { MotionConfig, motion } from 'framer-motion';
import useAppWindow from '../../../hooks/useAppWindow';
import { DEVELOPER_CODE_SHORT } from '../../../constants/developerCode';
import CodeBlock from './CodeBlock';
import MaximizedWindow from './MaximizedWindow';
import Taskbar from './Taskbar';
import TitleBar from './TitleBar';
import { windowVariants } from './motion';

// Kartu snippet kode bergaya jendela VS Code di Windows (dipakai di Hero), plus taskbar mini.
// - Minimize: jendela turun ke taskbar; indikator taskbar tetap ada (aplikasi masih jalan).
// - Close / tutup tab: jendela hilang; indikator taskbar hilang (aplikasi ditutup).
// - Ikon taskbar: buka/restore jendela, atau minimize kalau sedang terbuka.
// - Maximize: pop up berisi developer.js versi lengkap.
// Jendela yang disembunyikan tetap terpasang (tak terlihat, aria-hidden, inert) supaya ruangnya
// tidak hilang dan posisi taskbar tidak bergeser.
const CodeCard = () => {
  const { status, isMaximized, minimize, close, maximize, restore, toggleFromTaskbar } = useAppWindow();
  const isHidden = status !== 'open';

  return (
    // reducedMotion="user": animasi transform dimatikan otomatis bila pengunjung memilih "reduce motion".
    <MotionConfig reducedMotion="user">
      <motion.div
        role="group"
        aria-label="developer.js editor"
        aria-hidden={isHidden ? 'true' : undefined}
        inert={isHidden}
        variants={windowVariants}
        initial={false}
        animate={status}
        style={{ transformOrigin: '50% 100%' }}
        className="overflow-hidden rounded-lg border border-line-strong/40 bg-code shadow-air will-change-transform"
      >
        <TitleBar isMaximized={false} onMinimize={minimize} onToggleMaximize={maximize} onClose={close} />
        <CodeBlock lines={DEVELOPER_CODE_SHORT} className="text-[13px]" />
      </motion.div>

      <Taskbar status={status} onAppClick={toggleFromTaskbar} />

      <MaximizedWindow isOpen={isMaximized} onRestore={restore} onMinimize={minimize} onClose={close} />
    </MotionConfig>
  );
};

export default CodeCard;
