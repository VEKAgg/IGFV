'use client';

import { FaUsers, FaMedal, FaTrophy, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function MembersPage() {
  const leaders = [
    {
      name: 'Skalfinn',
      rank: 'Commander',
      title: 'Founder & Leader',
      focus: 'Exploration & Operations',
      tz: 'UTC+1',
      inaraUrl: 'https://inara.cz/cmdr/skalfinn/',
    },
    {
      name: 'Don Samen',
      rank: 'Vice Admiral',
      title: 'Operations Director',
      focus: 'BGS & Mining',
      tz: 'UTC+1',
      inaraUrl: 'https://inara.cz/cmdr/don%20samen/',
    },
    {
      name: 'Twisted VorteK',
      rank: 'Rear Admiral',
      title: 'Community Manager',
      focus: 'Community & Events',
      tz: 'UTC-5',
      inaraUrl: 'https://inara.cz/cmdr/twisted%20vortec/',
    },
  ];

  const sampleMembers = [
    { name: 'Nova', rank: 'Veteran', focus: 'Exploration', specialty: 'Elite Explorer', tz: 'UTC+0' },
    { name: 'RedMiner', rank: 'Officer', focus: 'Mining', specialty: 'Master Miner', tz: 'UTC+2' },
    { name: 'FleetLeader', rank: 'Officer', focus: 'Combat', specialty: 'Wing Specialist', tz: 'UTC-5' },
    { name: 'TradeKing', rank: 'Member', focus: 'Trading', specialty: 'Tycoon', tz: 'UTC+0' },
    { name: 'Explorer42', rank: 'Member', focus: 'Exploration', specialty: 'Pathfinder', tz: 'UTC+8' },
    { name: 'CombatPilot', rank: 'Member', focus: 'Combat', specialty: 'Expert', tz: 'UTC-3' },
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
              <FaUsers className="text-4xl md:text-5xl text-norway-red" />
              <h1 className="text-4xl md:text-5xl font-bold text-white">Squadron Members</h1>
            </div>
            <p className="text-lg text-gray-300">100+ Commanders across multiple timezones united in exploration and cooperation.</p>
          </div>
        </motion.div>

        {/* Leadership Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <FaMedal className="text-norway-red" />
            Leadership
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {leaders.map((leader, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.1 * idx }}
                className="bg-gradient-to-br from-norway-red/20 to-dark/50 backdrop-blur-sm rounded-lg p-6 shadow-glow border-2 border-norway-red/40"
              >
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-norway-red/30 text-norway-red text-sm font-bold rounded-full mb-3">
                    {leader.rank}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-1">CMDR {leader.name}</h3>
                  <p className="text-norway-red font-semibold text-sm">{leader.title}</p>
                </div>

                <div className="space-y-2 mb-4 text-gray-300 text-sm">
                  <p>
                    <span className="text-norway-red">Focus:</span> {leader.focus}
                  </p>
                  <p>
                    <span className="text-norway-red">Timezone:</span> {leader.tz}
                  </p>
                </div>

                <a
                  href={leader.inaraUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-norway-red hover:text-norway-white bg-norway-red/10 hover:bg-norway-red transition-all px-3 py-2 rounded text-sm font-semibold"
                >
                  View on Inara <FaExternalLinkAlt className="text-xs" />
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Active Members */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <FaTrophy className="text-norway-red" />
            Active Members
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sampleMembers.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.05 * idx }}
                className="bg-dark/50 backdrop-blur-sm rounded-lg p-5 shadow-glow border border-norway-red/20 hover:border-norway-red/60 transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-white">CMDR {member.name}</h3>
                    <p className="text-gray-400 text-sm">{member.rank}</p>
                  </div>
                  <span className="px-2 py-1 bg-norway-red/20 text-norway-red text-xs font-bold rounded">
                    {member.tz}
                  </span>
                </div>

                <div className="space-y-1 text-gray-300 text-sm mb-4">
                  <p>
                    <span className="text-norway-red">Focus:</span> {member.focus}
                  </p>
                  <p>
                    <span className="text-norway-red">Specialty:</span> {member.specialty}
                  </p>
                </div>

                <div className="pt-3 border-t border-norway-red/10">
                  <p className="text-xs text-gray-500">Click on name to view Inara profile</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats & Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          <div className="bg-dark/50 backdrop-blur-sm rounded-lg p-6 shadow-glow border border-norway-blue/20">
            <p className="text-gray-400 text-sm uppercase tracking-wider mb-2">Total Members</p>
            <p className="text-4xl font-bold text-norway-red">100+</p>
            <p className="text-gray-500 text-xs mt-2">And growing every month</p>
          </div>

          <div className="bg-dark/50 backdrop-blur-sm rounded-lg p-6 shadow-glow border border-norway-blue/20">
            <p className="text-gray-400 text-sm uppercase tracking-wider mb-2">Timezones</p>
            <p className="text-4xl font-bold text-norway-red">6+</p>
            <p className="text-gray-500 text-xs mt-2">Global coverage</p>
          </div>

          <div className="bg-dark/50 backdrop-blur-sm rounded-lg p-6 shadow-glow border border-norway-blue/20">
            <p className="text-gray-400 text-sm uppercase tracking-wider mb-2">Avg Experience</p>
            <p className="text-4xl font-bold text-norway-red">5+ yrs</p>
            <p className="text-gray-500 text-xs mt-2">Per commander</p>
          </div>
        </motion.div>

        {/* Join CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-norway-red/20 to-norway-blue/20 border border-norway-red/30 rounded-lg p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Interested in Joining?</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            We welcome experienced commanders and newcomers alike. All playstyles are valued in IGFV.
          </p>
          <Link
            href="/join"
            className="inline-block px-8 py-3 bg-norway-red hover:bg-norway-red/80 text-white font-bold rounded-lg transition-colors"
          >
            Apply to Join
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
