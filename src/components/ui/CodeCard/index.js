import React, { useCallback, useRef } from 'react';
import { MotionConfig, motion } from 'framer-motion';
import useAppWindow from '../../../hooks/useAppWindow';
import { DEVELOPER_CODE_SHORT } from '../../../constants/developerCode';
import CodeBlock from './CodeBlock';
import MaximizedWindow from './MaximizedWindow';
import Taskbar from './Taskbar';
import TitleBar from './TitleBar';
import { RUN_ON_MAIN_THREAD, windowVariants } from './motion';

// Kartu snippet kode bergaya jendela VS Code di Windows (dipakai di Hero), plus taskbar mini.
// - Minimize: jendela mengecil masuk ke ikon VS Code di taskbar; indikatornya tetap ada (masih jalan).
// - Close / tutup tab: jendela hilang; indikator taskbar hilang (aplikasi ditutup).
// - Ikon taskbar: buka/restore jendela, atau minimize kalau sedang terbuka.
// - Maximize: pop up berisi developer.js versi lengkap.
// Jendela yang disembunyikan tetap terpasang (tak terlihat, aria-hidden, inert) supaya ruangnya
// tidak hilang dan posisi taskbar tidak bergeser.
const CodeCard = () => {
  const { status, isMaximized, minimize, close, maximize, restore, toggleFromTaskbar } = useAppWindow();
  const isHidden = status !== 'open';
  const windowSlotRef = useRef(null);
  const appButtonRef = useRef(null);

  // Jarak dari tepi bawah-tengah jendela ke tengah ikon VS Code, dipakai animasi minimize.
  // Diukur dari slot pembungkus (tanpa transform) supaya tetap akurat walau jendela sedang beranimasi.
  const measureOffsetToTaskbarIcon = useCallback(() => {
    const slot = windowSlotRef.current?.getBoundingClientRect();
    const icon = appButtonRef.current?.getBoundingClientRect();
    if (!slot || !icon) return { x: 0, y: 0 };
    return {
      x: icon.left + icon.width / 2 - (slot.left + slot.width / 2),
      y: icon.top + icon.height / 2 - slot.bottom,
    };
  }, []);

  return (
    // reducedMotion="user": animasi transform dimatikan otomatis bila pengunjung memilih "reduce motion".
    <MotionConfig reducedMotion="user">
      <div ref={windowSlotRef}>
        <motion.div
          role="group"
          aria-label="developer.js editor"
          aria-hidden={isHidden ? 'true' : undefined}
          inert={isHidden}
          variants={windowVariants}
          custom={measureOffsetToTaskbarIcon}
          initial={false}
          animate={status}
          onUpdate={RUN_ON_MAIN_THREAD}
          style={{ transformOrigin: '50% 100%' }}
          className="overflow-hidden rounded-lg border border-line-strong/40 bg-code shadow-air will-change-transform"
        >
          <TitleBar isMaximized={false} onMinimize={minimize} onToggleMaximize={maximize} onClose={close} />
          <CodeBlock lines={DEVELOPER_CODE_SHORT} className="text-[13px]" />
        </motion.div>
      </div>

      <Taskbar status={status} onAppClick={toggleFromTaskbar} appButtonRef={appButtonRef} />

      <MaximizedWindow isOpen={isMaximized} onRestore={restore} onMinimize={minimize} onClose={close} />
    </MotionConfig>
  );
};

export default CodeCard;
