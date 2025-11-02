'use client';

import { FaRocket, FaGlobeAmericas, FaCheckCircle, FaClock, FaFire } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function OperationsPage() {
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
    {
      id: 4,
      title: 'Combat Training Exercises',
      type: 'PvE Combat',
      status: 'Ongoing',
      progress: 42,
      description: 'Weekly combat wing training against AI opponents.',
      objectives: [
        'Practice wing tactics',
        'Master fixed weapon loadouts',
        'High-grade signal source farming',
        'Coalition building',
      ],
      commander: 'Valhall Combat Wing',
      start: '2025-09-15',
      daysLeft: 999, // Ongoing
    },
  ];

  const upcomingJumps = [
    { date: '2025-11-15', destination: 'LHS 20', purpose: 'Mining supply run' },
    { date: '2025-12-01', destination: 'Colonia', purpose: 'Expedition launch' },
    { date: '2025-12-15', destination: 'The Void', purpose: 'Deep space exploration' },
  ];

  const statusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-green-500/20 text-green-400';
      case 'Planning':
        return 'bg-yellow-500/20 text-yellow-400';
      case 'Ongoing':
        return 'bg-blue-500/20 text-blue-400';
      default:
        return 'bg-gray-500/20 text-gray-400';
    }
  };

  const typeIcon = (type: string) => {
    switch (type) {
      case 'BGS':
        return <FaGlobeAmericas className="text-xl" />;
      case 'Exploration':
        return <FaRocket className="text-xl" />;
      case 'Mining':
        return <FaFire className="text-xl" />;
      case 'PvE Combat':
        return <FaFire className="text-xl" />;
      default:
        return <FaCheckCircle className="text-xl" />;
    }
  };

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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 flex items-center gap-3">
            <FaRocket className="text-norway-red" />
            Operations Board
          </h1>
          <p className="text-gray-300 text-lg">
            Current squadro activities, missions, and operational objectives.
          </p>
        </motion.div>

        {/* Active Operations */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Active Operations</h2>
          <div className="space-y-6">
            {operations.map((op, index) => (
              <motion.div
                key={op.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.05 * index }}
                className="bg-dark/50 backdrop-blur-sm rounded-lg overflow-hidden shadow-glow border border-norway-red/20 hover:border-norway-red/50 transition-all"
              >
                {/* Header */}
                <div className="bg-gradient-to-r from-norway-blue/20 to-transparent p-6 border-b border-norway-blue/20">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="text-norway-red mt-1">{typeIcon(op.type)}</div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white">{op.title}</h3>
                        <p className="text-gray-400 text-sm mt-1">{op.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className={`px-3 py-1 rounded-lg text-sm font-semibold ${statusColor(op.status)}`}>
                        {op.status}
                      </span>
                      {op.daysLeft !== 999 && (
                        <div className="flex items-center gap-1 text-gray-400 text-sm">
                          <FaClock />
                          <span>{op.daysLeft}d</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="px-6 py-4 bg-dark/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-400">Progress</span>
                    <span className="text-sm font-semibold text-norway-red">{op.progress}%</span>
                  </div>
                  <div className="w-full bg-dark/50 rounded-full h-2 overflow-hidden border border-norway-red/20">
                    <div
                      className="bg-gradient-to-r from-norway-red to-norway-red/50 h-full rounded-full transition-all duration-500"
                      style={{ width: `${op.progress}%` }}
                    />
                  </div>
                </div>

                {/* Objectives */}
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-white font-bold mb-3 text-sm uppercase tracking-wider">Objectives</h4>
                      <ul className="space-y-2">
                        {op.objectives.map((obj, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-300 text-sm">
                            <FaCheckCircle className="text-norway-red flex-shrink-0 mt-1" />
                            <span>{obj}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-3 text-sm uppercase tracking-wider">Details</h4>
                      <div className="space-y-2 text-sm text-gray-300">
                        <p>
                          <span className="text-norway-red font-semibold">Lead Commander:</span> {op.commander}
                        </p>
                        <p>
                          <span className="text-norway-red font-semibold">Started:</span> {new Date(op.start).toLocaleDateString()}
                        </p>
                        <p className="text-gray-400 text-xs mt-3">
                          Questions? Ask in Discord #operations channel or message the lead commander.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Upcoming Fleet Jumps */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-dark/50 backdrop-blur-sm rounded-lg p-8 shadow-glow border border-norway-blue/20 mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Fleet Carrier Jump Schedule</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingJumps.map((jump, idx) => (
              <div
                key={idx}
                className="bg-dark/50 rounded-lg p-4 border-l-4 border-norway-red hover:bg-dark/70 transition-colors"
              >
                <p className="text-gray-400 text-sm">Jump Date</p>
                <p className="text-white font-bold text-lg">{new Date(jump.date).toLocaleDateString()}</p>
                <p className="text-gray-400 text-sm mt-3">Destination</p>
                <p className="text-norway-red font-bold text-lg">{jump.destination}</p>
                <p className="text-gray-300 text-sm mt-3">📍 {jump.purpose}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* How to Participate */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-dark/50 backdrop-blur-sm rounded-lg p-8 shadow-glow border border-norway-red/20"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">How to Participate</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="text-3xl text-norway-red font-bold mb-3">1</div>
              <h3 className="text-white font-bold mb-2">Join Discord</h3>
              <p className="text-gray-400 text-sm">
                Sign up to our Discord server and verify your role in #verify channel.
              </p>
            </div>
            <div>
              <div className="text-3xl text-norway-red font-bold mb-3">2</div>
              <h3 className="text-white font-bold mb-2">Check Operations</h3>
              <p className="text-gray-400 text-sm">
                Review this board and the #operations channel to find activities that match your playstyle.
              </p>
            </div>
            <div>
              <div className="text-3xl text-norway-red font-bold mb-3">3</div>
              <h3 className="text-white font-bold mb-2">Sign Up & Engage</h3>
              <p className="text-gray-400 text-sm">
                Message a lead commander or react to operation posts to join an active wing.
              </p>
            </div>
          </div>
          <div className="mt-8 p-4 bg-norway-blue/10 rounded-lg border border-norway-blue/30">
            <p className="text-gray-300 text-sm">
              💡 <strong>Tip:</strong> Not sure which operation to join? Start with the BGS control operation
              or the mining run—they&apos;re beginner-friendly and great for learning squadron dynamics.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
