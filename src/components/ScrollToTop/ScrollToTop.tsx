"use client";

import React, { useEffect, useState } from 'react';
import { FaChevronUp } from 'react-icons/fa';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed right-4 bottom-6 z-50 w-12 h-12 rounded-full bg-norway-blue text-white shadow-lg flex items-center justify-center hover:scale-105 transition-transform"
    >
      <FaChevronUp />
    </button>
  );
}
