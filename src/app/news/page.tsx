'use client';

import { FaNewspaper, FaFire, FaTrophy, FaRocket, FaClock, FaUser } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function NewsPage() {
  const newsItems = [
    {
      id: 1,
      title: 'Valhall Reaches 100 Members!',
      category: 'Milestone',
      date: '2025-11-02',
      author: 'Skalfinn',
      excerpt: 'Today we celebrate reaching 100 active squadron members! This is a huge achievement for IGFV.',
      content: "We've grown from a small group to a thriving community of 100+ Commanders. Thanks to everyone who joined us on this journey. Our next goal: 150 members by Q1 2026!",
      icon: FaTrophy,
      color: 'border-green-500',
    },
    {
      id: 2,
      title: 'Waungaze BGS Operation Update',
      category: 'Operations',
      date: '2025-10-30',
      author: 'Valhall Command',
      excerpt: "BGS influence now at 78%. We're on track to reach control status within 2 weeks.",
      content: 'Current faction influence is growing steadily. Members have completed 250+ faction missions. At this pace, we should achieve full control by mid-November. Keep up the excellent work!',
      icon: FaRocket,
      color: 'border-blue-500',
    },
    {
      id: 3,
      title: 'Fleet Carrier Services Expanded',
      category: 'Fleet Carrier',
      date: '2025-10-28',
      author: 'Valhall Command',
      excerpt: "We've added new outfitting and repair services to Valhall. Ship customization is now available.",
      content: 'Thanks to upgrades on the Valhall, we can now provide full ship outfitting and advanced repairs. Visit the Fleet Carrier page for service availability and docking procedures.',
      icon: FaFire,
      color: 'border-orange-500',
    },
    {
      id: 4,
      title: 'Mining Operation - LHS 20 Success!',
      category: 'Operations',
      date: '2025-10-25',
      author: 'RedMiner',
      excerpt: 'Mining wing collected 500+ tons of platinum ore. Profits exceeded 150 million credits.',
      content: 'Excellent coordination from the mining wing! We discovered 3 pristine metallic rings and executed flawless extractions. Total profit: 154M credits. Next mining op scheduled for November 15.',
      icon: FaFire,
      color: 'border-yellow-500',
    },
    {
      id: 5,
      title: 'Discord Bot Now Live',
      category: 'Community',
      date: '2025-10-20',
      author: 'TechTeam',
      excerpt: 'New Discord bot with member stats, operation tracking, and event reminders deployed.',
      content: 'The Valhall Bot is now active in our Discord server. Features include: live member counter, operation notifications, event calendar, and member profile lookups. Type /help for commands.',
      icon: FaRocket,
      color: 'border-purple-500',
    },
    {
      id: 6,
      title: 'Colonia Expedition Announced',
      category: 'Expedition',
      date: '2025-10-18',
      author: 'Expedition Command',
      excerpt: 'December 1st: We launch our first squadron-wide expedition to Colonia. Sign-ups open now!',
      content: 'Join 50+ Commanders as we journey 22,000 LY to Colonia. The Valhall will serve as our mobile base. This is a once-in-a-lifetime exploration opportunity. See #expeditions channel to register.',
      icon: FaRocket,
      color: 'border-indigo-500',
    },
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Milestone':
        return FaTrophy;
      case 'Operations':
        return FaRocket;
      case 'Fleet Carrier':
        return FaFire;
      case 'Community':
        return FaTrophy;
      case 'Expedition':
        return FaRocket;
      default:
        return FaNewspaper;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Milestone':
        return 'bg-green-500/20 text-green-400';
      case 'Operations':
        return 'bg-blue-500/20 text-blue-400';
      case 'Fleet Carrier':
        return 'bg-orange-500/20 text-orange-400';
      case 'Community':
        return 'bg-purple-500/20 text-purple-400';
      case 'Expedition':
        return 'bg-indigo-500/20 text-indigo-400';
      default:
        return 'bg-gray-500/20 text-gray-400';
    }
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 flex items-center gap-3">
            <FaNewspaper className="text-norway-red" />
            Squadron News
          </h1>
          <p className="text-gray-300 text-lg">
            Latest updates from Interstellar Goodfellas. Check Discord for real-time announcements.
          </p>
        </motion.div>

        {/* News Feed */}
        <div className="space-y-6">
          {newsItems.map((item, index) => {
            const IconComponent = getCategoryIcon(item.category);
            return (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.05 * index }}
                className="bg-dark/50 backdrop-blur-sm rounded-lg overflow-hidden shadow-glow hover:shadow-glow-hover transition-all border-l-4 border-norway-red"
              >
                <div className="p-6 md:p-8">
                  {/* Header */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-start gap-3 flex-1">
                      <IconComponent className="text-norway-red text-xl flex-shrink-0 mt-1" />
                      <div className="flex-1">
                        <h2 className="text-2xl font-bold text-white mb-2">{item.title}</h2>
                        <div className="flex flex-wrap items-center gap-3 text-sm">
                          <span className={`px-3 py-1 rounded-full font-semibold ${getCategoryColor(item.category)}`}>
                            {item.category}
                          </span>
                          <span className="flex items-center gap-1 text-gray-400">
                            <FaClock className="text-xs" />
                            {new Date(item.date).toLocaleDateString()}
                          </span>
                          <span className="flex items-center gap-1 text-gray-400">
                            <FaUser className="text-xs" />
                            {item.author}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Excerpt */}
                  <p className="text-gray-300 mb-4">{item.excerpt}</p>

                  {/* Content */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{item.content}</p>

                  {/* Discord Link */}
                  <Link
                    href="https://discord.gg/igfv"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 bg-norway-red/20 text-norway-red hover:bg-norway-red hover:text-white transition-all rounded-lg text-sm font-semibold"
                  >
                    Discuss in Discord →
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Info Banner */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 p-6 bg-norway-blue/10 border border-norway-blue/30 rounded-lg"
        >
          <p className="text-gray-300 text-center">
            📢 For real-time updates and breaking news, join our{' '}
            <Link href="https://discord.gg/igfv" target="_blank" rel="noopener noreferrer" className="text-norway-red hover:underline font-semibold">
              Discord server
            </Link>
            . News is posted daily in #announcements channel.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
