'use client';

import { FaSpaceShuttle, FaMapMarkerAlt, FaClock, FaShoppingCart, FaUsers, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function FleetCarrierPage() {
  // Fleet Carrier data
  const carrier = {
    name: 'Valhall',
    callsign: 'Goodfellas Valhall',
    type: 'Drake-Class',
    systemName: 'Waungaze',
    bodyName: 'Waungaze A 3 A',
    coordinates: { x: -1, y: 2, z: 3 }, // Placeholder
    ownerCmdr: 'Skalfinn',
    population: 45000,
    inaraUrl: 'https://inara.cz/cmdr-fleet-carrier/9569',
  };

  const services = [
    {
      icon: FaShoppingCart,
      title: 'Commodity Market',
      description: 'Buy and sell commodities. Check current stock before trading.',
      status: 'Active',
    },
    {
      icon: FaUsers,
      title: 'Crew Quarters',
      description: 'Housing for 100+ crew members. Comfortable accommodations for long voyages.',
      status: 'Active',
    },
    {
      icon: FaSpaceShuttle,
      title: 'Repair/Rearm',
      description: 'Full ship repair and ammunition restock. Outfitting services available.',
      status: 'Active',
    },
    {
      icon: FaClock,
      title: 'Fuel Depot',
      description: 'Fuel rats welcome. We carry fuel rammers and limpets for emergency refueling.',
      status: 'Active',
    },
  ];

  const jumpSchedule = [
    {
      date: '2025-11-15',
      destination: 'LHS 20',
      reason: 'Supply run and mining op',
      status: 'Scheduled',
    },
    {
      date: '2025-12-01',
      destination: 'Colonia',
      reason: 'Long range expedition',
      status: 'Planned',
    },
    {
      date: '2025-12-15',
      destination: 'The Void',
      reason: 'Deep space exploration',
      status: 'Planned',
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
              <FaSpaceShuttle className="text-4xl md:text-5xl text-norway-red" />
              <h1 className="text-4xl md:text-5xl font-bold text-white">{carrier.name}</h1>
            </div>
            <p className="text-lg text-gray-300 mb-4">{carrier.callsign}</p>
            <p className="text-gray-400">The flagship of Interstellar Goodfellas, operated by CMDR {carrier.ownerCmdr}</p>
          </div>
        </motion.div>

        {/* Quick Info Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
        >
          {/* Location Card */}
          <div className="bg-dark/50 backdrop-blur-sm rounded-lg p-6 shadow-glow border border-norway-red/20">
            <div className="flex items-center gap-3 mb-4">
              <FaMapMarkerAlt className="text-norway-red text-2xl" />
              <h2 className="text-2xl font-bold text-white">Current Location</h2>
            </div>
            <div className="space-y-3 text-gray-300">
              <p>
                <span className="text-white font-semibold">System:</span> {carrier.systemName}
              </p>
              <p>
                <span className="text-white font-semibold">Body:</span> {carrier.bodyName}
              </p>
              <p>
                <span className="text-white font-semibold">Population:</span> {carrier.population.toLocaleString()}
              </p>
              <a
                href={carrier.inaraUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-norway-red text-white rounded-lg hover:bg-norway-red/80 transition-colors"
              >
                View on Inara <FaExternalLinkAlt className="text-sm" />
              </a>
            </div>
          </div>

          {/* Key Stats Card */}
          <div className="bg-dark/50 backdrop-blur-sm rounded-lg p-6 shadow-glow border border-norway-blue/20">
            <div className="flex items-center gap-3 mb-4">
              <FaSpaceShuttle className="text-norway-blue text-2xl" />
              <h2 className="text-2xl font-bold text-white">Carrier Info</h2>
            </div>
            <div className="space-y-3 text-gray-300">
              <p>
                <span className="text-white font-semibold">Class:</span> {carrier.type}
              </p>
              <p>
                <span className="text-white font-semibold">Crew Capacity:</span> 500+
              </p>
              <p>
                <span className="text-white font-semibold">Jump Range:</span> 500 LY per jump
              </p>
              <p className="text-sm text-gray-400 mt-4">
                ℹ️ Fleet Carriers are capital ships that serve as mobile bases for exploration,
                trading, and exploration operations.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Services Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 flex items-center gap-3">
            <FaShoppingCart className="text-norway-red" />
            Available Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="bg-dark/50 backdrop-blur-sm rounded-lg p-6 shadow-glow hover:shadow-glow-hover transition-all border border-norway-red/10"
                >
                  <div className="flex items-start gap-4 mb-3">
                    <IconComponent className="text-norway-red text-2xl flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white">{service.title}</h3>
                      <span className="inline-block mt-1 px-2 py-1 bg-green-500/20 text-green-400 text-xs font-semibold rounded">
                        {service.status}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-400">{service.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Jump Schedule Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 flex items-center gap-3">
            <FaClock className="text-norway-blue" />
            Upcoming Jumps
          </h2>
          <div className="space-y-4">
            {jumpSchedule.map((jump, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="bg-dark/50 backdrop-blur-sm rounded-lg p-6 shadow-glow border-l-4 border-norway-red"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">{jump.destination}</h3>
                    <p className="text-gray-400 text-sm mt-1">{jump.reason}</p>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="text-right">
                      <p className="text-gray-400 text-sm">Scheduled Date</p>
                      <p className="text-white font-semibold">{new Date(jump.date).toLocaleDateString()}</p>
                    </div>
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm font-semibold rounded whitespace-nowrap">
                      {jump.status}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <p className="text-gray-400 text-sm mt-6 p-4 bg-dark/50 rounded-lg">
            ℹ️ Jump dates are subject to change based on operational needs. Check Discord for updates.
          </p>
        </motion.div>

        {/* Rules & Guidelines Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-dark/50 backdrop-blur-sm rounded-lg p-8 shadow-glow border border-norway-blue/20"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Using the Fleet Carrier</h2>
          <div className="space-y-4 text-gray-300">
            <p>
              <span className="text-norway-red font-semibold">✓ Do:</span> Contribute to squadron operations,
              participate in jump planning, respect carrier rules, coordinate with crew.
            </p>
            <p>
              <span className="text-norway-red font-semibold">✗ Don&apos;t:</span> Dock griefers, store combat ships
              in restricted bays, refuse to follow flight rules, leave the carrier without permission during
              critical operations.
            </p>
            <p className="text-sm text-gray-400 mt-6">
              Questions about the carrier? Ask the crew in{' '}
              <Link href="https://discord.gg/igfv" target="_blank" className="text-norway-red hover:underline">
                Discord #fleet-carrier
              </Link>{' '}
              channel.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
