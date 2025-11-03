'use client';

import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

export default function ScrollDown() {
  const handleScroll = () => {
    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <motion.button
      onClick={handleScroll}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 focus:outline-none focus:ring-2 focus:ring-primary-light rounded-lg"
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
      aria-label="Scroll down to see more content"
    >
      <span className="text-white text-sm font-semibold uppercase tracking-widest">Scroll</span>
      <motion.div
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="text-primary-light"
      >
        <FaChevronDown className="text-2xl" />
      </motion.div>
    </motion.button>
  );
}
