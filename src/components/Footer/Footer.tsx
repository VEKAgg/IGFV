'use client';

import Link from 'next/link';
import { FaDiscord, FaTwitter } from 'react-icons/fa';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: 'About', href: '/about' },
    { label: 'Join Us', href: '/join' },
    { label: 'Rules', href: '/rules' },
    { label: 'Discord', href: '/discord' },
    { label: 'Events', href: '/events' },
    { label: 'Fleet Carrier', href: '/carrier' }
  ];

  const socials = [
    { href: 'https://discord.gg/igfv', label: 'Discord', icon: FaDiscord },
    { href: 'https://twitter.com/igfv_ed', label: 'Twitter', icon: FaTwitter },
  ];

  return (
    <footer className="bg-norway-blue py-8 border-t-4 border-norway-red">
      <div className="container mx-auto px-6">
        <div className="flex justify-center mb-6">
          <div className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-norway-white hover:text-norway-red transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex justify-center space-x-6 mb-6">
          {socials.map((s) => (
            <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="text-norway-white hover:text-norway-red transition-colors">
              <s.icon className="h-5 w-5" />
            </a>
          ))}
        </div>

        <div className="text-center">
          <div className="text-norway-white text-sm">© {currentYear} Interstellar Goodfellas - IGFV. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
};