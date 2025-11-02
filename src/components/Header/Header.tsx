'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { usePathname } from 'next/navigation';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { href: '/about', label: 'About' },
    { href: '/members', label: 'Members' },
    { href: '/join', label: 'Join' },
    { href: '/resources', label: 'Resources' },
    { href: '/events', label: 'Events' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/news', label: 'News' },
    { href: '/discord', label: 'Discord' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname?.startsWith(href || '');
  };

  return (
    <header className="bg-norway-blue shadow fixed w-full z-50 border-b-4 border-norway-red">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.35 }}>
            <Link href="/" className="text-2xl font-bold text-norway-white hover:text-norway-red transition-colors">IGFV</Link>
          </motion.div>

          {/* Desktop */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-norway-white hover:text-norway-red transition-colors ${isActive(item.href) ? 'underline' : ''}`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile toggle */}
          <div className="md:hidden">
            <button aria-label="Toggle menu" onClick={() => setIsOpen(!isOpen)} className="text-norway-white">
              {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.25 }} className="md:hidden mt-3">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md text-norway-white hover:bg-norway-red/10 hover:text-norway-red ${isActive(item.href) ? 'bg-norway-red/10' : ''}`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
};