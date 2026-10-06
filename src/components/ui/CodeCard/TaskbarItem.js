import React from 'react';
import { motion } from 'framer-motion';
import { SPRING } from './motion';

// Item taskbar hiasan (Start, Search, Task View, tray, jam): bisa disorot & diklik dengan animasi
// tekan seperti Windows 11, tapi tidak membuka apa pun. Disembunyikan dari pembaca layar dan tidak
// masuk urutan Tab karena tidak punya fungsi.
// `className` wajib menyertakan display-nya sendiri (mis. "flex" atau "hidden sm:flex").
const TaskbarItem = ({ tapScale = 0.9, className = '', children }) => (
  <motion.div
    aria-hidden="true"
    whileTap={{ scale: tapScale }}
    transition={SPRING}
    className={`cursor-default select-none items-center transition-colors duration-200 hover:bg-white/10 ${className}`}
  >
    {children}
  </motion.div>
);

export default TaskbarItem;
