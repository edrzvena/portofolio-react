import { useCallback, useState } from 'react';

// State jendela aplikasi ala Windows untuk CodeCard.
// - status: 'open' (tampil) | 'minimized' (tersembunyi, masih jalan di taskbar) | 'closed' (ditutup).
// - isMaximized: pop up maximize sedang terbuka. Minimize/close otomatis keluar dari maximize.
// Semua aksi stabil (useCallback) sehingga aman dioper ke komponen anak.
const useAppWindow = () => {
  const [status, setStatus] = useState('open');
  const [isMaximized, setIsMaximized] = useState(false);

  const minimize = useCallback(() => {
    setIsMaximized(false);
    setStatus('minimized');
  }, []);

  const close = useCallback(() => {
    setIsMaximized(false);
    setStatus('closed');
  }, []);

  const maximize = useCallback(() => setIsMaximized(true), []);
  const restore = useCallback(() => setIsMaximized(false), []);

  // Klik ikon taskbar: jendela terbuka → minimize; diminimize/ditutup → buka lagi.
  const toggleFromTaskbar = useCallback(() => {
    setIsMaximized(false);
    setStatus((current) => (current === 'open' ? 'minimized' : 'open'));
  }, []);

  return { status, isMaximized, minimize, close, maximize, restore, toggleFromTaskbar };
};

export default useAppWindow;
