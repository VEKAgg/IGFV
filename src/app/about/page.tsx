'use client';

import { FaHistory, FaUsers, FaSpaceShuttle, FaGlobeAmericas, FaRocket, FaClock } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface SquadronData {
  memberCount?: number;
  allyCount?: number;
  enemyCount?: number;
  allegiance?: string;
}

export default function AboutPage() {
  const [squadData, setSquadData] = useState<SquadronData | null>(null);

  useEffect(() => {
    // Fetch squadron data from Inara via our API
    const fetchSquadData = async () => {
      try {
        const response = await fetch('/api/inara/proxy', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            header: {
              appName: 'IGFV-Website',
              appVersion: '1.0',
            },
            events: [
              {
                eventName: 'getSquadron',
                eventTimestamp: new Date().toISOString(),
                eventData: { squadronID: 9569 }, // IGFV Squadron ID
              },
            ],
          }),
        });

        const data = await response.json();
        if (data.events?.[0]?.eventData) {
          setSquadData(data.events[0].eventData as SquadronData);
        }
      } catch (error) {
        console.error('Failed to fetch squadron data:', error);
      }
    };

    fetchSquadData();
  }, []);

  const leadership = [
    { rank: 'Commander', name: 'Skalfinn', role: 'Founder & Leader' },
    { rank: 'Vice Admiral', name: 'Don Samen', role: 'Operations Director' },
    { rank: 'Rear Admiral', name: 'Twisted VorteK', role: 'Community Manager' },
  ];

  const values = [
    {
      icon: FaUsers,
      title: 'Community First',
      description: 'We prioritize friendly onboarding and mutual support over competitive rankings.',
    },
    {
      icon: FaGlobeAmericas,
      title: 'Peaceful Expansion',
      description: 'Exploration, colonization, and cooperative BGS efforts in harmony.',
    },
    {
      icon: FaSpaceShuttle,
      title: 'Diverse Playstyles',
      description: 'Explorers, traders, miners, combat pilots—all welcome and valued.',
    },
    {
      icon: FaClock,
      title: 'Timezone Coverage',
      description: 'We maintain operations across multiple timezones globally.',
    },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="bg-gradient-to-r from-norway-red/20 to-norway-blue/20 border border-norway-red/30 rounded-lg p-8 md:p-12">
            <div className="flex items-center gap-4 mb-4">
              <FaHistory className="text-4xl md:text-5xl text-norway-red" />
              <h1 className="text-4xl md:text-5xl font-bold text-white">About IGFV</h1>
            </div>
            <p className="text-lg text-gray-300">Founded in 2019, Interstellar Goodfellas is focused on community, colonization, and peaceful cooperation.</p>
          </div>
        </motion.div>

        {/* Core Mission */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <div className="bg-dark/50 backdrop-blur-sm rounded-lg p-8 shadow-glow border border-norway-blue/20 mb-8">
            <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              We operate the fleet carrier <span className="text-norway-red font-bold">Goodfellas Valhall</span> as a mobile hub for exploration, trading, mining, and Background Simulation operations. Our focus is on community building, peaceful expansion, and providing a welcoming environment for commanders of all experience levels.
            </p>
          </div>
        </motion.div>

        {/* Values Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-8">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.05 * idx }}
                  className="bg-dark/50 backdrop-blur-sm rounded-lg p-6 shadow-glow hover:shadow-glow-hover transition-all border border-norway-red/10"
                >
                  <div className="flex items-start gap-4">
                    <Icon className="text-norway-red text-2xl flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                      <p className="text-gray-400">{value.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Leadership */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <FaUsers className="text-norway-red" />
            Leadership
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {leadership.map((leader, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.1 * idx }}
                className="bg-dark/50 backdrop-blur-sm rounded-lg p-6 shadow-glow border-l-4 border-norway-red text-center"
              >
                <span className="inline-block px-3 py-1 bg-norway-red/20 text-norway-red text-sm font-semibold rounded-full mb-3">
                  {leader.rank}
                </span>
                <h3 className="text-xl font-bold text-white mb-1">CMDR {leader.name}</h3>
                <p className="text-gray-400 text-sm">{leader.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* History & Activity */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="bg-dark/50 backdrop-blur-sm rounded-lg p-8 shadow-glow border border-norway-blue/20">
            <div className="flex items-center gap-3 mb-4">
              <FaRocket className="text-norway-red text-2xl" />
              <h3 className="text-2xl font-bold text-white">Focus Areas</h3>
            </div>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center gap-2">
                <span className="text-norway-red">→</span> Deep space exploration
              </li>
              <li className="flex items-center gap-2">
                <span className="text-norway-red">→</span> Colonization efforts
              </li>
              <li className="flex items-center gap-2">
                <span className="text-norway-red">→</span> Trade & mining operations
              </li>
              <li className="flex items-center gap-2">
                <span className="text-norway-red">→</span> Cooperative BGS play
              </li>
              <li className="flex items-center gap-2">
                <span className="text-norway-red">→</span> Background Simulation strategy
              </li>
            </ul>
          </div>

          <div className="bg-dark/50 backdrop-blur-sm rounded-lg p-8 shadow-glow border border-norway-red/20">
            <div className="flex items-center gap-3 mb-4">
              <FaClock className="text-norway-blue text-2xl" />
              <h3 className="text-2xl font-bold text-white">Activity</h3>
            </div>
            <div className="space-y-3 text-gray-300">
              <p>
                <span className="text-norway-red font-semibold">Founded:</span> 2019
              </p>
              <p>
                <span className="text-norway-red font-semibold">Members:</span> {squadData?.memberCount ? `${squadData.memberCount} active Commanders` : '100+ active Commanders'}
              </p>
              <p>
                <span className="text-norway-red font-semibold">Allies:</span> {squadData?.allyCount || '50+'}
              </p>
              <p>
                <span className="text-norway-red font-semibold">Fleet Carrier:</span> Goodfellas Valhall
              </p>
              <p>
                <span className="text-norway-red font-semibold">Timezones:</span> Global coverage (EU, NA, AU)
              </p>
              <p className="text-sm text-gray-400 mt-4">
                💡 Most active during evenings (UTC+0 / UTC+1 timezone)
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
