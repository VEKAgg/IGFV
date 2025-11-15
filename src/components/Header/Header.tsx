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
    { href: '/fleet-carrier', label: 'Fleet Carrier' },
    { href: '/operations', label: 'Operations' },
    { href: '/news', label: 'News' },
    { href: '/resources', label: 'Resources' },
    { href: '/events', label: 'Events' },
    { href: '/gallery', label: 'Gallery' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname?.startsWith(href || '');
  };

  return (
    <header className="bg-dark-navy shadow fixed w-full z-50 border-b-4 border-primary-main">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.35 }}>
            <Link href="/" className="text-2xl font-bold text-white hover:text-primary-light transition-colors">IGFV</Link>
          </motion.div>

          {/* Desktop */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-white hover:text-primary-light transition-colors ${isActive(item.href) ? 'underline underline-offset-2' : ''}`}
              >
                {item.label}
              </Link>
            ))}

            {/* Discord CTA */}
            <a
              href="https://discord.gg/invite/Jvrgy6EEQn"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-4 py-2 bg-primary-main text-white rounded-md font-semibold hover:bg-primary-darkest transition"
            >
              Discord
            </a>
          </div>

          {/* Mobile toggle */}
          <div className="md:hidden">
            <button aria-label="Toggle menu" onClick={() => setIsOpen(!isOpen)} className="text-white">
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
                  className={`block px-3 py-2 rounded-md text-white hover:bg-primary-main/20 hover:text-primary-light ${isActive(item.href) ? 'bg-primary-main/20' : ''}`}
                >
                  {item.label}
                </Link>
              ))}

              {/* Mobile Discord CTA */}
              <a
                href="https://discord.gg/invite/Jvrgy6EEQn"
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-2 px-3 py-2 rounded-md bg-primary-main text-white text-center font-semibold hover:bg-primary-darkest"
                onClick={() => setIsOpen(false)}
              >
                Join Discord
              </a>
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
};