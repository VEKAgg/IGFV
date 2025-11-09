'use client';

import { 
  FaHistory, 
  FaUsers, 
  FaSpaceShuttle, 
  FaGlobeAmericas, 
  FaRocket, 
  FaClock, 
  FaHandshake,
  FaShieldAlt,
  FaStar,
  FaHandsHelping,
  FaCheck,
  FaChartLine,
  FaCompass,
  FaHammer
} from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function AboutPage() {
  const leadership = [
    { 
      rank: 'Admiral', 
      name: 'Don Samen', 
      role: 'Founder', 
      description: 'Squadron founder and strategic leader',
      image: '🎖️'
    },
    { 
      rank: 'Vice Admiral', 
      name: 'Twisted VorteK', 
      role: 'Manager', 
      description: 'Operations manager and community coordinator',
      image: '⭐'
    },
  ];

  const coreValues = [
    {
      icon: FaUsers,
      title: 'Community First',
      description: 'We prioritize friendly onboarding, mutual support, and creating an inclusive environment where every commander can contribute and grow.',
    },
    {
      icon: FaGlobeAmericas,
      title: 'Peaceful Expansion',
      description: 'Focus on exploration, trade, and peaceful development of new colonial outposts through cooperative BGS efforts.',
    },
    {
      icon: FaSpaceShuttle,
      title: 'Diverse Playstyles',
      description: 'Explorers, traders, miners, combat pilots—all playstyles are welcome, valued, and supported.',
    },
    {
      icon: FaClock,
      title: 'Timezone Coverage',
      description: 'We maintain active operations across multiple timezones globally, ensuring there\'s always someone online to fly with.',
    },
  ];

  const activities = [
    {
      icon: FaCompass,
      title: 'Deep Space Exploration',
      description: 'Charting unknown systems and discovering new frontiers in the galaxy.',
    },
    {
      icon: FaChartLine,
      title: 'Trade & Mining',
      description: 'Profitable trading routes and efficient mining operations to fund squadron activities.',
    },
    {
      icon: FaShieldAlt,
      title: 'BGS Operations',
      description: 'Strategic Background Simulation work to expand our influence peacefully.',
    },
    {
      icon: FaHammer,
      title: 'Engineering & Combat',
      description: 'Ship engineering guidance and cooperative combat training for those who seek it.',
    },
  ];

  return (
    <div className="min-h-screen py-12 pt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-primary-main/20 to-primary-main/5 border border-primary-main/30 rounded-lg p-8 md:p-12 shadow-glow">
            <div className="flex items-center gap-4 mb-4">
              <FaHistory className="text-4xl md:text-5xl text-primary-main" />
              <h1 className="text-4xl md:text-5xl font-bold text-white">About IGFV</h1>
            </div>
            <p className="text-lg text-gray-400">
              Interstellar Goodfellas - A peaceful squadron dedicated to exploration, colonization, and community since 2019.
            </p>
          </div>
        </motion.div>

        {/* Squadron Overview */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-6">Squadron Overview</h2>
          <div className="bg-gradient-to-r from-primary-main/20 to-primary-main/5 border border-primary-main/30 rounded-lg p-8 shadow-glow">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Welcome to <span className="text-primary-main font-bold">Interstellar Goodfellas</span>, a peaceful squadron dedicated to exploration and colonization in Elite: Dangerous. 
              Our community is a melting pot of pilots—from bright-eyed newcomers to battle-hardened veterans—united by a passion 
              for discovery, mutual support, and strategic innovation.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              We operate the fleet carrier <span className="text-primary-main font-bold">Goodfellas Valhall</span> as a mobile hub for exploration, trading, mining, and Background Simulation operations. Our focus is on community building, peaceful expansion, and providing a welcoming environment for commanders of all experience levels.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              What makes IGFV unique is our commitment to building an inclusive haven where every pilot can thrive. Whether you&apos;re charting unexplored 
              systems or returning to the stars after a break, we stand together to advance in a universe defined by endless opportunity and 
              evolving challenges.
            </p>
          </div>
        </motion.section>

        {/* Founding History */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <FaRocket className="text-primary-main" />
            Founding History
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-r from-primary-main/20 to-primary-main/5 border border-primary-main/30 rounded-lg p-6 shadow-glow">
              <div className="text-4xl font-bold text-primary-main mb-4">2019</div>
              <h3 className="text-xl font-bold text-white mb-2">Squadron Founded</h3>
              <p className="text-gray-400">
                CMDR Don Samen established Interstellar Goodfellas with a vision of peaceful expansion and community-first gameplay.
              </p>
            </div>
            <div className="bg-gradient-to-r from-primary-main/20 to-primary-main/5 border border-primary-main/30 rounded-lg p-6 shadow-glow">
              <div className="text-4xl font-bold text-primary-main mb-4">2021</div>
              <h3 className="text-xl font-bold text-white mb-2">Fleet Carrier Acquired</h3>
              <p className="text-gray-400">
                Goodfellas Valhall joins the fleet, becoming our mobile operations center and home base for deep space missions.
              </p>
            </div>
            <div className="bg-gradient-to-r from-primary-main/20 to-primary-main/5 border border-primary-main/30 rounded-lg p-6 shadow-glow">
              <div className="text-4xl font-bold text-primary-main mb-4">2025</div>
              <h3 className="text-xl font-bold text-white mb-2">Growing Strong</h3>
              <p className="text-gray-400">
                Active community of 100+ members, with ongoing BGS operations and regular exploration expeditions across the galaxy.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Core Values */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-6">Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {coreValues.map((value, idx) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * idx }}
                  className="bg-gradient-to-r from-primary-main/20 to-primary-main/5 border border-primary-main/30 rounded-lg p-6 shadow-glow hover:shadow-glow-hover hover:border-primary-main/60 transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <Icon className="text-primary-main group-hover:text-white text-3xl flex-shrink-0 mt-1 transition-colors" />
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                      <p className="text-gray-400">{value.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* Leadership Team */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <FaUsers className="text-primary-main" />
            Leadership Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {leadership.map((leader, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * idx }}
                className="bg-gradient-to-r from-primary-main/20 to-primary-main/5 border border-primary-main/30 rounded-lg p-8 shadow-glow hover:shadow-glow-hover hover:border-primary-main/60 transition-all group"
              >
                <div className="flex items-start gap-6">
                  <div className="text-6xl">{leader.image}</div>
                  <div className="flex-1">
                    <span className="inline-block px-3 py-1 bg-primary-main/20 border border-primary-main/40 text-primary-light text-sm font-semibold rounded-full mb-3">
                      {leader.rank}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-1">CMDR {leader.name}</h3>
                    <p className="text-primary-light font-semibold mb-2">{leader.role}</p>
                    <p className="text-gray-400 text-sm">{leader.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Primary Activities */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-6">Primary Activities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activities.map((activity, idx) => {
              const Icon = activity.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * idx }}
                  className="bg-gradient-to-r from-primary-main/20 to-primary-main/5 border border-primary-main/30 rounded-lg p-6 shadow-glow hover:shadow-glow-hover hover:border-primary-main/60 transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <Icon className="text-primary-main group-hover:text-white text-2xl flex-shrink-0 mt-1 transition-colors" />
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{activity.title}</h3>
                      <p className="text-gray-400">{activity.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* Playstyle & Culture */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-6">Playstyle & Culture</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-r from-primary-main/20 to-primary-main/5 border border-primary-main/30 rounded-lg p-6 shadow-glow">
              <FaHandshake className="text-primary-main text-3xl mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">PvE Focus</h3>
              <p className="text-gray-400">
                We specialize in PvE content with a peaceful approach to gameplay. While we respect all playstyles, our operations focus on cooperative activities and exploration.
              </p>
            </div>
            <div className="bg-gradient-to-r from-primary-main/20 to-primary-main/5 border border-primary-main/30 rounded-lg p-6 shadow-glow">
              <FaClock className="text-primary-main text-3xl mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">No Activity Requirements</h3>
              <p className="text-gray-400">
                Real life comes first. We understand that everyone has different schedules and commitments. Participate as much or as little as you like—there&apos;s no pressure.
              </p>
            </div>
            <div className="bg-gradient-to-r from-primary-main/20 to-primary-main/5 border border-primary-main/30 rounded-lg p-6 shadow-glow">
              <FaGlobeAmericas className="text-primary-main text-3xl mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">All Timezones Welcome</h3>
              <p className="text-gray-400">
                With members spanning multiple continents, you&apos;ll always find fellow commanders online regardless of your timezone.
              </p>
            </div>
            <div className="bg-gradient-to-r from-primary-main/20 to-primary-main/5 border border-primary-main/30 rounded-lg p-6 shadow-glow">
              <FaHandsHelping className="text-primary-main text-3xl mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Mentorship for New Players</h3>
              <p className="text-gray-400">
                New to Elite Dangerous? Our experienced commanders offer personalized guidance to help you master the game and find your path in the galaxy.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Mission & Values (from homepage) */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-6">Mission & Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Supporting New Pilots",
                description: "Dedicated mentorship program and resources to help new commanders find their path in the galaxy",
                icon: <FaHandsHelping className="w-8 h-8" />
              },
              {
                title: "Peaceful Expansion",
                description: "Focus on exploration, trade, and peaceful development of new colonial outposts",
                icon: <FaStar className="w-8 h-8" />
              },
              {
                title: "Community First",
                description: "Creating an inclusive environment where every commander can contribute and grow",
                icon: <FaUsers className="w-8 h-8" />
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-r from-primary-main/20 to-primary-main/5 border border-primary-main/30 rounded-lg p-6 shadow-glow hover:shadow-glow-hover hover:border-primary-main/60 transition-all"
              >
                <div className="text-primary-light mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Code of Conduct / Community Guidelines */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <FaShieldAlt className="text-primary-main" />
            Code of Conduct & Community Guidelines
          </h2>
          <div className="bg-gradient-to-r from-primary-main/20 to-primary-main/5 border border-primary-main/30 rounded-lg p-8 shadow-glow">
            <p className="text-gray-300 mb-6">
              Our community thrives on mutual respect and cooperation. All members are expected to follow these guidelines:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FaCheck className="text-primary-main mt-1 flex-shrink-0" />
                <span className="text-gray-300">Keep your Inara profile updated to help plan future routes and events.</span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheck className="text-primary-main mt-1 flex-shrink-0" />
                <span className="text-gray-300">Follow the accepted PvP code (refer to galaxy-intel for details); when engaging in BGS activities, switch to the open channel.</span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheck className="text-primary-main mt-1 flex-shrink-0" />
                <span className="text-gray-300">New pilots should secure the recommended ships in order: Cobra Mk3, Python, then Anaconda—refer to ship-builds for more information.</span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheck className="text-primary-main mt-1 flex-shrink-0" />
                <span className="text-gray-300">Do not share the server invite without permission from Rear Admirals, Vice Admirals, or the Admiral to maintain our community&apos;s integrity.</span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheck className="text-primary-main mt-1 flex-shrink-0" />
                <span className="text-gray-300">Ensure your Discord name reflects your in-game identity for consistency.</span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheck className="text-primary-main mt-1 flex-shrink-0" />
                <span className="text-gray-300">Treat all members with respect regardless of experience level, timezone, or playstyle preferences.</span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheck className="text-primary-main mt-1 flex-shrink-0" />
                <span className="text-gray-300">Anti-griefing policy: We do not engage in or tolerate griefing behavior. Focus on cooperative gameplay and community building.</span>
              </li>
            </ul>
          </div>
        </motion.section>

        {/* Join CTA */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary-main/20 to-primary-main/5 border border-primary-main/30 rounded-lg p-8 md:p-12 shadow-glow">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Join Us?</h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto text-lg">
              Whether you&apos;re a seasoned commander or just starting your journey, there&apos;s a place for you among the Goodfellas.
            </p>
            <a
              href="https://discord.gg/invite/Jvrgy6EEQn"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-primary-main hover:bg-primary-darkest text-white rounded-md font-semibold transition-colors shadow-glow hover:shadow-glow-hover text-lg"
            >
              Join Our Discord
            </a>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
