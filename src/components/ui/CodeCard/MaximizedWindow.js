import React, { useRef } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import useEscapeKey from '../../../hooks/useEscapeKey';
import useFocusOnOpen from '../../../hooks/useFocusOnOpen';
import useScrollLock from '../../../hooks/useScrollLock';
import { DEVELOPER_CODE_FULL } from '../../../constants/developerCode';
import CodeBlock from './CodeBlock';
import TitleBar from './TitleBar';
import { RUN_ON_MAIN_THREAD, backdropVariants, overlayVariants, panelVariants } from './motion';

// Pop up jendela yang di-maximize, berisi developer.js versi lengkap.
// Ditutup lewat Restore, klik backdrop, atau Esc. Selama terbuka: scroll halaman dikunci dan fokus
// pindah ke pop up (dikembalikan saat ditutup). Di-portal ke <body> supaya position:fixed tidak
// terpengaruh transform elemen leluhur.
const MaximizedWindow = ({ isOpen, onRestore, onMinimize, onClose }) => {
  const panelRef = useRef(null);

  useEscapeKey(isOpen, onRestore);
  useScrollLock(isOpen);
  useFocusOnOpen(panelRef, isOpen);

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="maximized-window"
          variants={overlayVariants}
          initial="hidden"
          animate="shown"
          exit="hidden"
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-8"
        >
          <motion.div
            aria-hidden="true"
            variants={backdropVariants}
            onClick={onRestore}
            className="absolute inset-0"
          ></motion.div>
          <motion.div
            ref={panelRef}
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            aria-label="developer.js (maximized)"
            variants={panelVariants}
            onUpdate={RUN_ON_MAIN_THREAD}
            className="relative w-full max-w-4xl overflow-hidden rounded-xl border border-white/10 bg-code shadow-2xl outline-none will-change-transform"
          >
            <TitleBar isMaximized onMinimize={onMinimize} onToggleMaximize={onRestore} onClose={onClose} />
            <CodeBlock lines={DEVELOPER_CODE_FULL} className="max-h-[75vh] overflow-y-auto text-[13px] sm:text-sm" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default MaximizedWindow;
