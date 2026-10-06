import { useEffect } from 'react';

// Saat `active` menjadi true, fokus dipindah ke elemen `ref` (mis. panel dialog);
// saat kembali false, fokus dikembalikan ke elemen yang fokus sebelumnya (mis. tombol pembuka).
// Elemen target perlu bisa difokus, mis. dengan tabIndex={-1}.
const useFocusOnOpen = (ref, active) => {
  useEffect(() => {
    if (!active) return undefined;

    const previouslyFocused = document.activeElement;
    ref.current?.focus();

    return () => previouslyFocused?.focus?.();
  }, [ref, active]);
};

export default useFocusOnOpen;
