import { useEffect, useState } from 'react';

// Waktu sekarang yang diperbarui tiap pergantian menit (cukup untuk jam tanpa detik).
// Timer pertama diselaraskan ke awal menit berikutnya, lalu berulang tiap 60 detik.
const useClock = () => {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    let intervalId;
    const tick = () => setNow(new Date());
    const msUntilNextMinute = 60000 - (Date.now() % 60000);

    const timeoutId = setTimeout(() => {
      tick();
      intervalId = setInterval(tick, 60000);
    }, msUntilNextMinute);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, []);

  return now;
};

export default useClock;
