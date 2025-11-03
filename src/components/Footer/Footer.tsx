'use client';

import { FaDiscord, FaXTwitter, FaFacebook } from 'react-icons/fa6';

export const Footer = () => {
  const currentYear = new Date().getFullYear();


  const socials = [
    { href: 'https://discord.gg/invite/Jvrgy6EEQn', label: 'Discord', icon: FaDiscord },
    { href: 'https://x.com/intrstlrgdfelas', label: 'X (Twitter)', icon: FaXTwitter },
    { href: 'https://www.facebook.com/interstellargoodfella', label: 'Facebook', icon: FaFacebook },
  ];

  return (
    <footer className="bg-dark-navy py-6 border-t-4 border-primary-main">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <div className="text-white text-sm text-left">© {currentYear} Interstellar Goodfellas - IGFV. All rights reserved.</div>

          <div className="flex items-center space-x-4">
            {socials.map((s) => (
              <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="text-white hover:text-primary-light transition-colors">
                <s.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};