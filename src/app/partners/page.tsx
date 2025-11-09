'use client';

import { motion } from 'framer-motion';
import { FaHandshake, FaUsers, FaRocket, FaShieldAlt, FaHeart } from 'react-icons/fa';
import { RiSpaceShipFill } from 'react-icons/ri';

interface SquadronPartner {
  name: string;
  description: string;
  specialty: string;
  events?: string[];
  discord?: string;
  icon: React.ReactNode;
}

interface SupportingPartner {
  name: string;
  logo: string;
  website?: string;
}

const squadronPartners: SquadronPartner[] = [
  {
    name: 'Example Squadron Alpha',
    description: 'A veteran squadron focused on exploration and deep space discovery.',
    specialty: 'Exploration & Cartography',
    events: [
      'Joint Expedition to Colonia (2024)',
      'Guardian Site Survey Mission (2023)',
    ],
    discord: 'https://discord.gg/example',
    icon: <FaRocket />,
  },
  {
    name: 'Example Squadron Beta',
    description: 'Combat-oriented squadron specializing in anti-Thargoid operations.',
    specialty: 'Combat & AX Operations',
    events: [
      'Thargoid Defense Initiative (2024)',
      'Wing Combat Training Program',
    ],
    discord: 'https://discord.gg/example',
    icon: <FaShieldAlt />,
  },
  {
    name: 'Example Squadron Gamma',
    description: 'Trading and mining focused group supporting the galactic economy.',
    specialty: 'Trade & Mining',
    events: [
      'Community Mining Event (2024)',
      'Trade Route Establishment Program',
    ],
    discord: 'https://discord.gg/example',
    icon: <FaUsers />,
  },
];

const supportingPartners: SupportingPartner[] = [
  {
    name: 'Example Tech Partner',
    logo: '🚀',
    website: 'https://example.com',
  },
  {
    name: 'Example Content Creator',
    logo: '🎮',
    website: 'https://example.com',
  },
  {
    name: 'Example Media Partner',
    logo: '📺',
    website: 'https://example.com',
  },
];

function SquadronPartnerRow({ partner }: { partner: SquadronPartner }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-r from-primary-main/20 to-primary-main/5 border border-primary-main/30 rounded-lg p-6 shadow-glow hover:shadow-glow-hover hover:border-primary-main/60 transition-all group"
    >
      <div className="flex items-start gap-6">
        <div className="text-primary-main group-hover:text-white text-4xl flex-shrink-0 transition-colors mt-1">
          {partner.icon}
        </div>
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <h3 className="text-2xl font-bold text-white">{partner.name}</h3>
            <span className="inline-block bg-primary-main/20 border border-primary-main/40 text-primary-light px-3 py-1 rounded-full text-sm font-semibold">
              {partner.specialty}
            </span>
          </div>
          <p className="text-gray-400 mb-4">{partner.description}</p>
          
          {partner.events && partner.events.length > 0 && (
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-primary-light mb-2">Collaborated Events:</h4>
              <ul className="space-y-1">
                {partner.events.map((event, index) => (
                  <li key={index} className="text-gray-400 text-sm flex items-start">
                    <span className="text-primary-main mr-2">•</span>
                    {event}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {partner.discord && (
            <a
              href={partner.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-primary-main/20 hover:bg-primary-main text-white rounded-md text-sm font-semibold transition-colors"
            >
              Visit Discord
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function SupportingPartnerCard({ partner }: { partner: SupportingPartner }) {
  const content = (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-r from-primary-main/20 to-primary-main/5 border border-primary-main/30 rounded-lg p-8 shadow-glow hover:shadow-glow-hover hover:border-primary-main/60 transition-all group flex flex-col items-center justify-center text-center h-full"
    >
      <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
        {partner.logo}
      </div>
      <h3 className="text-lg font-bold text-white group-hover:text-primary-light transition-colors">
        {partner.name}
      </h3>
    </motion.div>
  );

  if (partner.website) {
    return (
      <a href={partner.website} target="_blank" rel="noopener noreferrer" className="block">
        {content}
      </a>
    );
  }

  return content;
}

export default function PartnersPage() {
  return (
    <div className="min-h-screen py-16 px-4 pt-28">
      <div className="container mx-auto max-w-6xl">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center items-center gap-4 mb-4">
            <FaHandshake className="text-5xl text-primary-main" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Our Partners
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Working together with squadrons and organizations to create amazing experiences
            in Elite Dangerous and beyond.
          </p>
        </motion.div>

        {/* Squadron Partners Section */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <RiSpaceShipFill className="text-3xl text-primary-main" />
              <h2 className="text-3xl font-bold text-white">Squadron Partners</h2>
            </div>
            <p className="text-gray-400 text-lg">
              Elite Dangerous squadrons we collaborate with for events, operations, and community initiatives.
            </p>
          </motion.div>

          <div className="space-y-4">
            {squadronPartners.map((partner, index) => (
              <SquadronPartnerRow key={index} partner={partner} />
            ))}
          </div>
        </section>

        {/* Supporting Partners Section */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <FaHeart className="text-3xl text-primary-main" />
              <h2 className="text-3xl font-bold text-white">Supporting Partners</h2>
            </div>
            <p className="text-gray-400 text-lg">
              Organizations and creators supporting our community.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {supportingPartners.map((partner, index) => (
              <SupportingPartnerCard key={index} partner={partner} />
            ))}
          </div>
        </section>

        {/* Become a Partner CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center bg-gradient-to-r from-primary-main/20 to-primary-main/5 border border-primary-main/30 rounded-lg p-8 shadow-glow"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Interested in Partnering?</h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            We&apos;re always looking to collaborate with like-minded squadrons and organizations.
            Reach out to us on Discord to discuss partnership opportunities.
          </p>
          <a
            href="https://discord.gg/invite/Jvrgy6EEQn"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-primary-main hover:bg-primary-darkest text-white rounded-md font-semibold transition-colors"
          >
            Contact Us on Discord
          </a>
        </motion.div>
      </div>
    </div>
  );
}
