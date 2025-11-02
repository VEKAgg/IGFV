'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { 
  FaUser, 
  FaCog, 
  FaSignOutAlt, 
  FaUserCircle, 
  FaChevronDown, 
  FaSun, 
  FaMoon, 
  FaGlobe 
} from 'react-icons/fa';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [currentLang, setCurrentLang] = useState('EN');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const langDropdownRef = useRef<HTMLDivElement>(null);
  const { data: session, status } = useSession();
  const pathname = usePathname();

  const languages = [
    { code: 'EN', label: 'English', flag: '🇬🇧' },
    { code: 'AR', label: 'العربية', flag: '🇸🇦' },
    { code: 'HI', label: 'हिंदी', flag: '🇮🇳' },
    { code: 'JA', label: '日本語', flag: '🇯🇵' }
  ];

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
      if (langDropdownRef.current && !langDropdownRef.current.contains(event.target as Node)) {
        setIsLangDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Debug log
  useEffect(() => {
    console.log('Auth Status:', status);
    console.log('Session:', session);
  }, [status, session]);

  const menuItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { 
      href: '/blog', 
      label: 'Blog',
      subLabel: 'News',
    },
    { 
      href: '/igfv', 
      label: 'IGFV',
      subLabel: 'Squadron',
    },
    { 
      href: '/events', 
      label: 'Events',
      subLabel: 'Livestreams',
      devOnly: true,
    },
    { 
      href: '/marketplace', 
      label: 'Marketplace',
      subLabel: 'Shop',
      devOnly: true,
    },
    { 
      href: '/community/media', 
      label: 'Community',
      subLabel: 'Gallery',
      devOnly: true,
    },
    { 
      href: '/dashboard', 
      label: 'Dashboard',
      subLabel: 'Discord Bot',
      requireAuth: true,
      devOnly: true,
    },
  ];

  const handleSignOut = () => {
    signOut({ callbackUrl: '/' });
    setIsDropdownOpen(false);
  };

  // Function to check if a link is active
  const isLinkActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="bg-dark-lighter shadow-lg fixed w-full z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
          <Link href="/" className="text-2xl font-bold text-primary">
            VEKA
          </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => {
              // Check if the current link is active
              const active = isLinkActive(item.href);
              
              return (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {(!item.requireAuth || session) && (
                    <Link
                      href={item.href}
                      className={`text-gray-300 hover:text-primary transition-colors group ${
                        active ? 'text-primary' : ''
                      }`}
                    >
                      <div className="relative py-1">
                        <span>{item.label}</span>
                        {item.subLabel && (
                          <span className={`text-xs block transition-colors ${
                            active ? 'text-primary-light' : 'text-gray-500 group-hover:text-primary-light'
                          }`}>
                            ({item.subLabel})
                          </span>
                        )}
                        
                        {active && (
                          <motion.div 
                            className="absolute bottom-[-4px] left-0 h-[2px] bg-primary rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: '100%' }}
                            transition={{ duration: 0.3 }}
                          />
                        )}
                      </div>
                    </Link>
                  )}
                </motion.div>
              );
            })}

            {/* Theme Toggle */}
            <motion.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: menuItems.length * 0.1 }}
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-lg hover:bg-dark/50 transition-colors"
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <FaSun className="text-gray-400 hover:text-gray-200 w-5 h-5" />
              ) : (
                <FaMoon className="text-gray-400 hover:text-gray-200 w-5 h-5" />
              )}
            </motion.button>

            {/* Language Dropdown */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (menuItems.length + 1) * 0.1 }}
              className="relative"
              ref={langDropdownRef}
            >
              <button
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                className="flex items-center gap-2 p-2 rounded-lg hover:bg-dark/50 transition-colors text-gray-400 hover:text-gray-200"
              >
                <FaGlobe className="w-5 h-5" />
                <span className="flex items-center gap-1">
                  {languages.find(lang => lang.code === currentLang)?.flag}
                  {currentLang}
                </span>
                <FaChevronDown className={`transition-transform ${isLangDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isLangDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute right-0 mt-2 w-48 bg-dark-lighter rounded-lg shadow-lg py-2"
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setCurrentLang(lang.code);
                        setIsLangDropdownOpen(false);
                      }}
                      className="w-full flex items-center gap-2 px-4 py-2 text-gray-400 hover:bg-dark/50 hover:text-gray-200 transition-colors text-left"
                    >
                      <span className="text-lg">{lang.flag}</span>
                      <span>{lang.label}</span>
                      {currentLang === lang.code && (
                        <span className="ml-auto text-primary">✓</span>
                      )}
                    </button>
                  ))}
                </motion.div>
              )}
            </motion.div>

            {/* Login/User Profile */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: menuItems.length * 0.1 }}
              className="ml-4 relative"
              ref={dropdownRef}
            >
              {status === 'authenticated' && session ? (
                <div className="relative">
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary-dark text-white rounded-lg transition-colors"
                  >
                    {session.user?.image ? (
                      <Image
                        src={session.user.image}
                        alt={session.user.name || 'User'}
                        width={24}
                        height={24}
                        className="rounded-full"
                      />
                    ) : (
                      <FaUserCircle className="w-6 h-6" />
                    )}
                    <span>{session.user?.name}</span>
                    <FaChevronDown className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {/* Dropdown Menu */}
                  {isDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute right-0 mt-2 w-48 bg-dark-lighter rounded-lg shadow-lg py-2"
                    >
                      <Link
                        href="/profile"
                        className="flex items-center gap-2 px-4 py-2 text-gray-300 hover:bg-dark hover:text-primary transition-colors"
                      >
                        <FaUser className="w-4 h-4" />
                        Profile
            </Link>
                      <Link
                        href="/settings"
                        className="flex items-center gap-2 px-4 py-2 text-gray-300 hover:bg-dark hover:text-primary transition-colors"
                      >
                        <FaCog className="w-4 h-4" />
                        Settings
            </Link>
                      <button
                        onClick={handleSignOut}
                        className="w-full flex items-center gap-2 px-4 py-2 text-gray-300 hover:bg-dark hover:text-primary transition-colors"
                      >
                        <FaSignOutAlt className="w-4 h-4" />
                        Sign Out
                      </button>
                    </motion.div>
                  )}
                </div>
              ) : status === 'unauthenticated' ? (
                <Link 
                  href="/auth/signin" 
                  className="px-4 py-2 bg-primary hover:bg-primary-dark text-white rounded-lg transition-colors"
                >
                  Sign In
            </Link>
              ) : (
                <div className="w-24 h-8 bg-dark-lighter animate-pulse rounded-lg" />
              )}
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
          <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
          </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4 pb-4"
          >
            <div className="flex flex-col space-y-3">
              {menuItems.map((item) => {
                // Check if the current link is active
                const active = isLinkActive(item.href);
                
                return (!item.requireAuth || session) ? (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative text-gray-300 hover:text-primary transition-colors py-2 px-4 rounded-lg hover:bg-dark/50 ${
                      active ? 'text-primary' : ''
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="flex items-center">
                      {active && (
                        <motion.div 
                          className="absolute left-0 top-0 bottom-0 w-[3px] bg-primary rounded-r-full"
                          initial={{ height: 0 }}
                          animate={{ height: '100%' }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                      <div className="pl-1">
                        <span>{item.label}</span>
                        {item.subLabel && (
                          <span className={`text-xs block ${
                            active ? 'text-primary-light' : 'text-gray-500'
                          }`}>
                            ({item.subLabel})
                          </span>
                        )}
                      </div>
                    </div>
                  </Link>
                ) : null;
              })}

              {/* Mobile Theme and Language Controls */}
              <div className="flex items-center justify-between gap-4 pt-4 border-t border-dark-lighter">
                <button
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  className="flex items-center gap-2 px-4 py-2 text-gray-400 hover:text-gray-200 transition-colors rounded-lg"
                >
                  {isDarkMode ? (
                    <>
                      <FaSun className="w-4 h-4" />
                      <span>Light Mode</span>
                    </>
                  ) : (
                    <>
                      <FaMoon className="w-4 h-4" />
                      <span>Dark Mode</span>
                    </>
                  )}
                </button>

                <div className="relative">
                  <button
                    onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                    className="flex items-center gap-2 px-4 py-2 text-gray-400 hover:text-gray-200 transition-colors rounded-lg"
                  >
                    <FaGlobe className="w-4 h-4" />
                    <span className="flex items-center gap-1">
                      {languages.find(lang => lang.code === currentLang)?.flag}
                      {currentLang}
                    </span>
                    <FaChevronDown className={`transition-transform ${isLangDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isLangDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute right-0 mt-2 w-48 bg-dark-lighter rounded-lg shadow-lg py-2"
                    >
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => {
                            setCurrentLang(lang.code);
                            setIsLangDropdownOpen(false);
                          }}
                          className="w-full flex items-center gap-2 px-4 py-2 text-gray-400 hover:bg-dark/50 hover:text-gray-200 transition-colors text-left"
                        >
                          <span className="text-lg">{lang.flag}</span>
                          <span>{lang.label}</span>
                          {currentLang === lang.code && (
                            <span className="ml-auto text-primary">✓</span>
                          )}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </div>
              </div>

              {/* Mobile Login/User Profile */}
              <div className="pt-4 border-t border-dark-lighter">
                {session ? (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        {session.user?.image && (
                          <div className="relative w-8 h-8 rounded-full overflow-hidden">
                            <Image
                              src={session.user.image}
                              alt={session.user.name || ''}
                              fill
                              className="object-cover"
                            />
                          </div>
                        )}
                        <span className="text-gray-300">{session.user?.name}</span>
                      </div>
                    </div>
                    <div className="flex flex-col space-y-2">
                      <Link
                        href="/profile"
                        className="flex items-center gap-2 px-4 py-2 text-gray-300 hover:bg-dark hover:text-primary transition-colors rounded-lg"
                        onClick={() => setIsOpen(false)}
                      >
                        <FaUser className="w-4 h-4" />
                        Profile
              </Link>
                      <Link
                        href="/settings"
                        className="flex items-center gap-2 px-4 py-2 text-gray-300 hover:bg-dark hover:text-primary transition-colors rounded-lg"
                        onClick={() => setIsOpen(false)}
                      >
                        <FaCog className="w-4 h-4" />
                        Settings
              </Link>
                      <button
                        onClick={() => {
                          handleSignOut();
                          setIsOpen(false);
                        }}
                        className="flex items-center gap-2 px-4 py-2 text-gray-300 hover:bg-dark hover:text-primary transition-colors rounded-lg w-full text-left"
                      >
                        <FaSignOutAlt className="w-4 h-4" />
                        Sign Out
                      </button>
                    </div>
                  </div>
                ) : (
                  <Link 
                    href="/auth/signin" 
                    className="block w-full px-6 py-2 bg-primary hover:bg-primary-dark text-white rounded-lg transition-colors shadow-glow hover:shadow-glow-hover text-center"
                    onClick={() => setIsOpen(false)}
                  >
                    Login / Signup
              </Link>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
}; 