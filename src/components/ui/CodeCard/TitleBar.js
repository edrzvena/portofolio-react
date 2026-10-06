import React from 'react';
import {
  VscChromeMinimize,
  VscChromeMaximize,
  VscChromeRestore,
  VscChromeClose,
  VscClose,
} from 'react-icons/vsc';

const WindowButton = ({ label, onClick, danger = false, children }) => (
  <button
    type="button"
    aria-label={label}
    title={label}
    onClick={onClick}
    className={`flex w-11 items-center justify-center transition-colors duration-200 [&>svg]:h-4 [&>svg]:w-4 ${
      danger ? 'hover:bg-red-600 hover:text-white' : 'hover:bg-white/10 hover:text-slate-100'
    }`}
  >
    {children}
  </button>
);

// Title bar gaya VS Code di Windows: tab file aktif di kiri, tombol jendela di kanan.
// `isMaximized` mengganti tombol Maximize menjadi Restore.
const TitleBar = ({ isMaximized, onMinimize, onToggleMaximize, onClose }) => (
  <div className="flex items-stretch border-b border-white/10 bg-black/25">
    <div className="flex items-center gap-2 border-r border-t-2 border-r-white/10 border-t-accent bg-code py-2 pl-4 pr-2">
      <span aria-hidden="true" className="font-mono text-[10px] font-bold text-yellow-300">JS</span>
      <span className="font-mono text-xs text-slate-200">developer.js</span>
      <button
        type="button"
        aria-label="Close developer.js tab"
        title="Close"
        onClick={onClose}
        className="ml-1 flex h-5 w-5 items-center justify-center rounded text-slate-400 transition-colors duration-200 hover:bg-white/10 hover:text-slate-100"
      >
        <VscClose className="h-3.5 w-3.5" />
      </button>
    </div>
    <div className="ml-auto flex text-slate-400">
      <WindowButton label="Minimize" onClick={onMinimize}>
        <VscChromeMinimize />
      </WindowButton>
      <WindowButton label={isMaximized ? 'Restore' : 'Maximize'} onClick={onToggleMaximize}>
        {isMaximized ? <VscChromeRestore /> : <VscChromeMaximize />}
      </WindowButton>
      <WindowButton label="Close" onClick={onClose} danger>
        <VscChromeClose />
      </WindowButton>
    </div>
  </div>
);

export default TitleBar;
