import React from 'react';
import { motion } from 'framer-motion';

// Animasi reveal halus saat elemen masuk viewport (sekali saja).
// Dipakai untuk membungkus konten tiap section.
const Reveal = ({ children, className = '', delay = 0 }) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
