'use client';

import Link from 'next/link';
import { FaDiscord, FaTwitter, FaInstagram, FaTwitch, FaYoutube } from 'react-icons/fa';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Careers', href: '/careers' },
        { label: 'Press Kit', href: '/press' },
        { label: 'Contact', href: '/contact' },
      ],
    },
    {
      title: 'Community',
      links: [
        { label: 'Discord Server', href: '/discord' },
        { label: 'Events', href: '/events' },
        { label: 'Support', href: '/support' },
        { label: 'Merchandise', href: '/marketplace' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Documentation', href: '/docs' },
        { label: 'Guides', href: '/guides' },
        { label: 'API', href: '/api-docs' },
        { label: 'Status', href: '/status' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Terms of Service', href: '/terms' },
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Cookie Policy', href: '/cookies' },
        { label: 'Licenses', href: '/licenses' },
      ],
    },
  ];

  const socialLinks = [
    { icon: FaDiscord, href: 'https://discord.gg/pPEBmuytFU', label: 'Discord' },
    { icon: FaTwitter, href: 'https://x.com/vekagg', label: 'Twitter' },
    { icon: FaInstagram, href: 'https://www.instagram.com/joinveka/', label: 'Instagram' },
    { icon: FaTwitch, href: 'https://www.twitch.tv/joinveka', label: 'Twitch' },
    { icon: FaYoutube, href: 'https://www.youtube.com/channel/UCdOYu7G13kpA30GPv9-6ukg', label: 'YouTube' },
  ];

  return (
    <footer className="bg-dark-lighter">
      <div className="container mx-auto px-6 py-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-semibold mb-3 text-sm">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-primary transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="border-t border-dark pt-4 mb-4">
          <div className="flex justify-center space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="text-gray-400 hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-dark pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <div className="text-gray-400 mb-2 md:mb-0">
              © {currentYear} VEKA. All rights reserved.
            </div>
            <div className="flex space-x-4">
              <Link href="/terms" className="text-gray-400 hover:text-primary transition-colors">
                Terms
              </Link>
              <Link href="/privacy" className="text-gray-400 hover:text-primary transition-colors">
                Privacy
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-primary transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}; 