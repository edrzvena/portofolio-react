import { useEffect, useRef } from 'react';

// Memanggil `onEscape` saat tombol Escape ditekan, hanya selama `active` bernilai true.
// Handler terbaru disimpan di ref, jadi listener tidak perlu dipasang ulang setiap render.
const useEscapeKey = (active, onEscape) => {
  const handlerRef = useRef(onEscape);

  useEffect(() => {
    handlerRef.current = onEscape;
  }, [onEscape]);

  useEffect(() => {
    if (!active) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') handlerRef.current();
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [active]);
};

export default useEscapeKey;
