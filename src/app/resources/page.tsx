'use client';

import { FaBook, FaRocket, FaToolbox, FaChartLine, FaShoppingCart, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function ResourcesPage() {
  const categories = [
    {
      icon: FaRocket,
      title: 'Ship Builds & Progression',
      description: 'Starter ships to endgame builds',
      items: [
        'Cobra Mk3 → Python → Anaconda progression',
        'Exploration ships: DBX, AspX, Anaconda',
        'Mining setups: Python, Cutter, Type-10',
        'Combat builds: Vulture, Chieftain, Vette',
        'Trading: Python, T9, Cutter',
      ],
    },
    {
      icon: FaToolbox,
      title: 'Engineering & Materials',
      description: 'Maximize your ship performance',
      items: [
        'G5 engineering priorities by role',
        'Material farming locations',
        'Blueprint efficiency guide',
        'Engineer unlock requirements',
        'Experimental effects explained',
      ],
    },
    {
      icon: FaChartLine,
      title: 'Trading & Economy',
      description: 'Profit-making guide',
      items: [
        'High-profit trade routes',
        'Commodity market analysis',
        'Station types and benefits',
        'BGS influence mechanics',
        'Market data resources (EDDB, Inara)',
      ],
    },
    {
      icon: FaShoppingCart,
      title: 'Mining & Resources',
      description: 'Resource gathering strategies',
      items: [
        'Pristine metallic ring locations',
        'Laser vs core mining comparison',
        'Material values and demand',
        'LTD vs platinum profit analysis',
        'Mining hotspot guide',
      ],
    },
  ];

  const externalResources = [
    {
      name: 'EDDB (Elite Dangerous Database)',
      url: 'https://eddb.io',
      description: 'Station data, trade routes, commodities',
    },
    {
      name: 'Inara.Cz',
      url: 'https://inara.cz',
      description: 'Commander profiles, squadron stats, FC registry',
    },
    {
      name: 'EDSM (Elite Dangerous Star Map)',
      url: 'https://edsm.net',
      description: 'Exploration data, system information',
    },
    {
      name: 'Coriolis.io',
      url: 'https://coriolis.io',
      description: 'Ship builder and cost calculator',
    },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="bg-gradient-to-r from-norway-red/20 to-norway-blue/20 border border-norway-red/30 rounded-lg p-8 md:p-12">
            <div className="flex items-center gap-4 mb-4">
              <FaBook className="text-4xl md:text-5xl text-norway-red" />
              <h1 className="text-4xl md:text-5xl font-bold text-white">Resources & Guides</h1>
            </div>
            <p className="text-lg text-gray-300">Community-curated guides for ship building, engineering, trading, and exploration.</p>
          </div>
        </motion.div>

        {/* Resource Categories */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8">Learning Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {categories.map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.05 * idx }}
                  className="bg-dark/50 backdrop-blur-sm rounded-lg overflow-hidden shadow-glow border border-norway-red/20"
                >
                  <div className="bg-gradient-to-r from-norway-red/20 to-transparent p-6 border-b border-norway-red/20">
                    <div className="flex items-center gap-3 mb-2">
                      <Icon className="text-norway-red text-2xl" />
                      <h3 className="text-xl font-bold text-white">{cat.title}</h3>
                    </div>
                    <p className="text-gray-400 text-sm">{cat.description}</p>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-2">
                      {cat.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                          <span className="text-norway-red flex-shrink-0 mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* External Resources */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-8">External Tools & Databases</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {externalResources.map((resource, idx) => (
              <motion.a
                key={idx}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.05 * idx }}
                className="bg-dark/50 backdrop-blur-sm rounded-lg p-6 shadow-glow hover:shadow-glow-hover transition-all border border-norway-blue/20 hover:border-norway-blue/60 cursor-pointer group"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-white group-hover:text-norway-red transition-colors">{resource.name}</h3>
                  <FaExternalLinkAlt className="text-norway-red flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-gray-400">{resource.description}</p>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Getting Help */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-dark/50 backdrop-blur-sm rounded-lg p-8 shadow-glow border border-norway-red/20"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Need Help?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-white font-bold mb-2">Discord #guides</h3>
              <p className="text-gray-400 text-sm">Ask questions and get real-time help from experienced pilots.</p>
            </div>
            <div>
              <h3 className="text-white font-bold mb-2">Community Builds</h3>
              <p className="text-gray-400 text-sm">Check Discord pins for curated ship builds and loadouts.</p>
            </div>
            <div>
              <h3 className="text-white font-bold mb-2">Mentor Program</h3>
              <p className="text-gray-400 text-sm">New commanders can request mentors in #recruitment channel.</p>
            </div>
          </div>
          <div className="mt-6 p-4 bg-norway-blue/10 rounded-lg border border-norway-blue/30">
            <p className="text-gray-300 text-sm">
              💡 <strong>Pro Tip:</strong> Most resources are maintained on our Discord server. Check pinned messages in each channel for the latest guides!
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
