'use client';

import { FaRocket, FaGlobeAmericas, FaCheckCircle, FaClock, FaFire, FaBook, FaToolbox, FaChartLine, FaShoppingCart, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function GuidesPage() {
  const operations = [
    {
      id: 1,
      title: 'Waungaze BGS Control',
      type: 'BGS',
      status: 'Active',
      progress: 78,
      description: 'Working to increase faction influence in Waungaze system.',
      objectives: [
        'Mission stacking for faction rep',
        'Trade runs between stations',
        'Influence monitoring',
      ],
      commander: 'Skalfinn',
      start: '2025-10-15',
      daysLeft: 12,
    },
    {
      id: 2,
      title: 'Colonia Expedition Prep',
      type: 'Exploration',
      status: 'Planning',
      progress: 35,
      description: 'Preparing fleet for long-range Colonia expedition in December.',
      objectives: [
        'Gather exploration supplies',
        'Plot jump routes',
        'Coordinate team assignments',
        'Test carrier jump mechanics',
      ],
      commander: 'Valhall Command',
      start: '2025-11-01',
      daysLeft: 30,
    },
    {
      id: 3,
      title: 'Mining Operation - LHS 20',
      type: 'Mining',
      status: 'Active',
      progress: 56,
      description: 'Resource gathering mission targeting high-value asteroids.',
      objectives: [
        'Locate pristine metallic rings',
        'Coordinate mining wing',
        'Transport ore to carrier',
        'Process and sell commodities',
      ],
      commander: 'RedMiner',
      start: '2025-10-28',
      daysLeft: 7,
    },
  ];

  const resourceCategories = [
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

  const statusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-green-500/20 text-green-400 border-green-500/40';
      case 'Planning':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/40';
      case 'Ongoing':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/40';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/40';
    }
  };

  const typeIcon = (type: string) => {
    switch (type) {
      case 'BGS':
        return <FaGlobeAmericas className="text-xl" />;
      case 'Exploration':
        return <FaRocket className="text-xl" />;
      case 'Mining':
        return <FaShoppingCart className="text-xl" />;
      default:
        return <FaFire className="text-xl" />;
    }
  };

  return (
    <div className="min-h-screen py-16 px-4 pt-28">
      <div className="container mx-auto max-w-7xl">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center items-center gap-4 mb-4">
            <FaBook className="text-5xl text-primary-main" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Guides & Operations
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Active operations, community guides, and resources to enhance your Elite Dangerous experience.
          </p>
        </motion.div>

        {/* Active Operations Section */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <FaRocket className="text-3xl text-primary-main" />
              <h2 className="text-3xl font-bold text-white">Active Operations</h2>
            </div>
            <p className="text-gray-400 text-lg">
              Current squadron operations and missions. Join us in these coordinated efforts!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-6 mb-12">
            {operations.map((op, index) => (
              <motion.div
                key={op.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-dark/50 backdrop-blur-sm border border-primary-main/20 rounded-lg p-6 shadow-glow hover:shadow-glow-hover hover:border-primary-main/60 transition-all group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="text-primary-main group-hover:text-white transition-colors">{typeIcon(op.type)}</div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{op.title}</h3>
                      <p className="text-sm text-gray-400">Led by {op.commander}</p>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${statusColor(op.status)}`}>
                    {op.status}
                  </span>
                </div>

                <p className="text-gray-400 mb-4">{op.description}</p>

                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-400">Progress</span>
                    <span className="text-primary-light font-semibold">{op.progress}%</span>
                  </div>
                  <div className="w-full bg-dark-slate3 rounded-full h-2">
                    <div
                      className="bg-primary-main h-2 rounded-full transition-all"
                      style={{ width: `${op.progress}%` }}
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-primary-light mb-2">Objectives:</h4>
                  <ul className="space-y-1">
                    {op.objectives.map((obj, idx) => (
                      <li key={idx} className="text-gray-400 text-sm flex items-start">
                        <FaCheckCircle className="text-primary-main mr-2 mt-1 flex-shrink-0" />
                        {obj}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <FaClock />
                  <span>{op.daysLeft === 999 ? 'Ongoing' : `${op.daysLeft} days left`}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Resource Guides Section */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <FaBook className="text-3xl text-primary-main" />
              <h2 className="text-3xl font-bold text-white">Community Guides</h2>
            </div>
            <p className="text-gray-400 text-lg">
              Curated guides and tips to help you succeed in the galaxy.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {resourceCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-dark/50 backdrop-blur-sm border border-primary-main/20 rounded-lg p-6 shadow-glow hover:shadow-glow-hover hover:border-primary-main/60 transition-all group"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <IconComponent className="text-3xl text-primary-main group-hover:text-white flex-shrink-0 transition-colors" />
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{category.title}</h3>
                      <p className="text-sm text-gray-400">{category.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="text-gray-400 text-sm flex items-start">
                        <span className="text-primary-main mr-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* External Resources Section */}
        <section>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <FaExternalLinkAlt className="text-3xl text-primary-main" />
              <h2 className="text-3xl font-bold text-white">External Resources</h2>
            </div>
            <p className="text-gray-400 text-lg">
              Essential third-party tools and databases for Elite Dangerous.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {externalResources.map((resource, index) => (
              <motion.a
                key={index}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-dark/50 backdrop-blur-sm border border-primary-main/20 rounded-lg p-6 shadow-glow hover:shadow-glow-hover hover:border-primary-main/60 transition-all group"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-bold text-white group-hover:text-primary-light transition-colors">
                    {resource.name}
                  </h3>
                  <FaExternalLinkAlt className="text-primary-main group-hover:text-white transition-colors" />
                </div>
                <p className="text-gray-400 text-sm">{resource.description}</p>
              </motion.a>
            ))}
          </div>
        </section>

        {/* Join Discord CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 text-center bg-dark/50 backdrop-blur-sm border border-primary-main/20 rounded-lg p-8 shadow-glow"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Want to participate?</h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Join our Discord to get involved in squadron operations and access exclusive guides.
          </p>
          <a
            href="https://discord.gg/invite/Jvrgy6EEQn"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-primary-main hover:bg-primary-darkest text-white rounded-md font-semibold transition-colors"
          >
            Join Discord
          </a>
        </motion.div>
      </div>
    </div>
  );
}
