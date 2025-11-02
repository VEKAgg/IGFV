'use client';

import { FaDiscord, FaTwitter } from 'react-icons/fa';

export const Footer = () => {
  const currentYear = new Date().getFullYear();


  const socials = [
    { href: 'https://discord.gg/igfv', label: 'Discord', icon: FaDiscord },
    { href: 'https://twitter.com/igfv_ed', label: 'Twitter', icon: FaTwitter },
  ];

  return (
    <footer className="bg-norway-blue py-6 border-t-4 border-norway-red">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <div className="text-norway-white text-sm text-left">© {currentYear} Interstellar Goodfellas - IGFV. All rights reserved.</div>

          <div className="flex items-center space-x-4">
            {socials.map((s) => (
              <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="text-norway-white hover:text-norway-red transition-colors">
                <s.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};