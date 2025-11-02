'use client';

import { FaCalendarAlt, FaRocket, FaUsers, FaClock, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function EventsPage() {
  const upcomingEvents = [
    {
      id: 1,
      title: 'Fleet Carrier Jump to LHS 20',
      date: '2025-11-15',
      time: '19:00 UTC',
      type: 'Carrier Jump',
      description: 'Valhall relocates to support mining operations.',
      participants: '50+',
      icon: FaRocket,
    },
    {
      id: 2,
      title: 'Mining Operation - Pristine Metallic',
      date: '2025-11-17',
      time: '20:00 UTC',
      type: 'Mining',
      description: 'Coordinated mining wing. Beginners welcome!',
      participants: '15+',
      icon: FaUsers,
    },
    {
      id: 3,
      title: 'Combat Training Exercise',
      date: '2025-11-22',
      time: '18:00 UTC',
      type: 'PvE Combat',
      description: 'Wing training against Anacondas in HGE. Loadout help available.',
      participants: '10+',
      icon: FaUsers,
    },
    {
      id: 4,
      title: 'Colonia Expedition Launch',
      date: '2025-12-01',
      time: 'All Day',
      type: 'Expedition',
      description: 'Squadron-wide expedition to Colonia (22,000 LY). Sign up in Discord!',
      participants: '50+',
      icon: FaRocket,
    },
  ];

  const rules = [
    'All events are optional but encouraged',
    'Check Discord #events for voice channel coordinates',
    'Beginners welcome—ask for help in chat',
    'Prepare your ship accordingly (loadouts listed pre-event)',
    'Report any griefing to leadership immediately',
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
              <FaCalendarAlt className="text-4xl md:text-5xl text-norway-red" />
              <h1 className="text-4xl md:text-5xl font-bold text-white">Events & Calendar</h1>
            </div>
            <p className="text-lg text-gray-300">Squadron operations, community events, and fleet carrier schedule.</p>
          </div>
        </motion.div>

        {/* Upcoming Events */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8">Upcoming Events</h2>
          <div className="space-y-6">
            {upcomingEvents.map((event, idx) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.05 * idx }}
                className="bg-dark/50 backdrop-blur-sm rounded-lg overflow-hidden shadow-glow border border-norway-red/20 hover:border-norway-red/60 transition-all"
              >
                <div className="bg-gradient-to-r from-norway-red/20 to-transparent p-6 border-b border-norway-red/20 md:flex md:items-center md:justify-between">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{event.title}</h3>
                    <p className="text-gray-400 mb-3 md:mb-0">{event.description}</p>
                  </div>
                  <span className="inline-block px-4 py-2 bg-norway-red/20 text-norway-red text-sm font-bold rounded-lg whitespace-nowrap">
                    {event.type}
                  </span>
                </div>

                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="flex items-center gap-3">
                      <FaCalendarAlt className="text-norway-red text-xl flex-shrink-0" />
                      <div>
                        <p className="text-gray-400 text-sm">Date</p>
                        <p className="text-white font-semibold">{new Date(event.date).toLocaleDateString()}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <FaClock className="text-norway-red text-xl flex-shrink-0" />
                      <div>
                        <p className="text-gray-400 text-sm">Time</p>
                        <p className="text-white font-semibold">{event.time}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <FaUsers className="text-norway-red text-xl flex-shrink-0" />
                      <div>
                        <p className="text-gray-400 text-sm">Estimated Participants</p>
                        <p className="text-white font-semibold">{event.participants}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Event Guidelines */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
        >
          <div className="bg-dark/50 backdrop-blur-sm rounded-lg p-8 shadow-glow border border-norway-blue/20">
            <div className="flex items-center gap-3 mb-6">
              <FaCheckCircle className="text-norway-blue text-2xl" />
              <h3 className="text-2xl font-bold text-white">Event Guidelines</h3>
            </div>
            <ul className="space-y-3">
              {rules.map((rule, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-300">
                  <span className="text-norway-red flex-shrink-0 mt-1">→</span>
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-dark/50 backdrop-blur-sm rounded-lg p-8 shadow-glow border border-norway-red/20">
            <div className="flex items-center gap-3 mb-6">
              <FaMapMarkerAlt className="text-norway-red text-2xl" />
              <h3 className="text-2xl font-bold text-white">How to Join</h3>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-norway-red font-bold text-sm mb-1">STEP 1</p>
                <p className="text-gray-300">Check Discord #events channel 24 hours before event.</p>
              </div>
              <div>
                <p className="text-norway-red font-bold text-sm mb-1">STEP 2</p>
                <p className="text-gray-300">Prepare your ship with suggested loadout (posted in event thread).</p>
              </div>
              <div>
                <p className="text-norway-red font-bold text-sm mb-1">STEP 3</p>
                <p className="text-gray-300">Join Discord voice channel at event time and follow wing commander.</p>
              </div>
              <div>
                <p className="text-norway-red font-bold text-sm mb-1">STEP 4</p>
                <p className="text-gray-300">Enjoy! Ask questions in voice if needed.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Important Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-norway-blue/10 border border-norway-blue/30 rounded-lg p-6"
        >
          <p className="text-gray-300 text-center">
            📅 <strong>Full Event Calendar:</strong> Visit Discord #events channel for comprehensive calendar, sign-ups, and real-time updates.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
