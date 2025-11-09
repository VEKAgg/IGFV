'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useAnimation, useInView } from 'framer-motion';
import { FaSpaceShuttle, FaDiscord, FaExternalLinkAlt, FaUsers, FaHandsHelping, FaStar, FaQuestionCircle, FaComments, FaRocket, FaChevronDown, FaMoon, FaGlobeAmericas, FaSatellite } from 'react-icons/fa';
import { IoIosPlanet, IoMdRocket } from 'react-icons/io';
import { RiSpaceShipFill } from 'react-icons/ri';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import ScrollDown from '@/components/ScrollDown/ScrollDown';

// Animated ship component that oscillates horizontally
function AnimatedShip() {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false });
  const { scrollYProgress } = useScroll();
  
  // Simplify animation to improve performance
  const x = useTransform(scrollYProgress, [0, 1], [0, 50]);
  
  useEffect(() => {
    if (isInView) {
      controls.start({
        x: [0, 10, 0, -10, 0], // Reduced oscillation range
        transition: {
          duration: 5, // Slower animation
          ease: "easeInOut",
          repeat: Infinity,
        }
      });
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      style={{ x }}
      className="inline-block text-primary will-change-transform"
    >
      <FaSpaceShuttle className="text-4xl md:text-6xl lg:text-7xl" />
    </motion.div>
  );
}

// Update FAQItem component for better performance and consistent styling
function FAQItem({ question, answer, isOpen, onToggle, onClose }: { 
  question: string; 
  answer: string; 
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}) {
  return (
    <motion.div
      className="bg-gradient-to-r from-primary-main/20 to-transparent border border-primary-main/30 rounded-lg overflow-hidden cursor-pointer shadow-glow hover:shadow-glow-hover transition-all hover:border-primary-main/60"
      onClick={() => {
        if (isOpen) {
          onClose();
        } else {
          onToggle();
        }
      }}
      whileHover={{ scale: 1.01 }}
      layout="position"
      layoutDependency={isOpen}
      transition={{ layout: { duration: 0.2 } }}
    >
      <div className="p-6 flex items-start justify-between gap-4">
        <div className="flex items-start gap-4 flex-1">
          <FaQuestionCircle className="text-primary-light text-xl flex-shrink-0 mt-1" />
          <h3 className="text-white font-bold text-lg">{question}</h3>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-primary-light"
        >
          <FaChevronDown />
        </motion.div>
      </div>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="p-6 pt-0 pl-16">
          <p className="text-base md:text-lg text-gray-300">{answer}</p>
        </div>
      </div>
    </motion.div>
  );
}

// GridBackground component with red cursor effect
function GridBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Single Grid Lines - Red around cursor */}
      <div 
        className="absolute inset-0" 
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(169, 11, 43, 0.12) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(169, 11, 43, 0.12) 1px, transparent 1px)
          `,
          backgroundSize: '4rem 4rem',
          position: 'relative',
        }}
      />
      
      {/* Red glow effect around cursor - visible only on grid */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          x: mousePosition.x - 120,
          y: mousePosition.y - 120,
          width: '240px',
          height: '240px',
          background: 'radial-gradient(circle, rgba(169, 11, 43, 0.4) 0%, rgba(169, 11, 43, 0.2) 40%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(30px)',
          mixBlendMode: 'screen',
        }}
      />
      
      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-20 w-32 h-32 bg-primary/5 rounded-full blur-xl"
        animate={{
          opacity: [0.5, 0.8, 0.5],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute bottom-40 right-20 w-40 h-40 bg-primary/5 rounded-full blur-xl"
        animate={{
          opacity: [0.5, 0.8, 0.5],
          scale: [1.2, 1, 1.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      
      <motion.div
        className="absolute top-40 right-40 w-24 h-24 bg-primary/5 rounded-full blur-xl"
        animate={{
          opacity: [0.5, 0.8, 0.5],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      />
    </div>
  );
}

// Space elements with parallax effects using library icons
function SpaceElements() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Planet with rings */}
      <Parallax translateY={[-50, 50]} className="absolute top-[10%] right-[15%]">
        <IoIosPlanet className="w-32 h-32 text-primary/50" />
      </Parallax>
      
      {/* Moon */}
      <Parallax translateY={[20, -20]} className="absolute top-[35%] left-[5%]">
        <FaMoon className="w-16 h-16 text-gray-400/50" />
      </Parallax>
      
      {/* Spaceship */}
      <Parallax translateX={[30, -30]} translateY={[20, -20]} className="absolute top-[20%] left-[30%]">
        <RiSpaceShipFill className="w-16 h-16 text-primary/50 rotate-45" />
      </Parallax>
      
      {/* Space Station */}
      <Parallax translateY={[-30, 30]} className="absolute bottom-[35%] right-[20%]">
        <FaSatellite className="w-24 h-24 text-gray-400/50" />
      </Parallax>
      
      {/* Rocket */}
      <Parallax translateY={[60, -60]} className="absolute bottom-[25%] left-[15%]">
        <IoMdRocket className="w-20 h-20 text-primary/50 rotate-45" />
      </Parallax>
      
      {/* Another planet */}
      <Parallax translateY={[40, -40]} className="absolute top-[55%] right-[30%]">
        <FaGlobeAmericas className="w-24 h-24 text-blue-400/50" />
      </Parallax>
      
      {/* Add more space elements spread across the screen */}
      <Parallax translateY={[-20, 20]} className="absolute top-[70%] left-[40%]">
        <IoIosPlanet className="w-20 h-20 text-blue-300/50" />
      </Parallax>
      
      <Parallax translateY={[30, -30]} className="absolute top-[15%] left-[60%]">
        <FaSatellite className="w-16 h-16 text-gray-400/50 rotate-45" />
      </Parallax>
      
      <Parallax translateY={[-40, 40]} className="absolute bottom-[15%] right-[5%]">
        <IoMdRocket className="w-16 h-16 text-primary/50 rotate-12" />
      </Parallax>
    </div>
  );
}

export default function IGFVPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // FAQ state
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  // Use lighter animations with lower performance impact
  const headerParallax = useTransform(scrollYProgress, [0, 0.5], [0, -100]);

  return (
    <ParallaxProvider>
      <div ref={containerRef} className="relative min-h-screen bg-dark">
        {/* Marketplace-style background */}
        <GridBackground />
        
        {/* Space elements with parallax */}
        <SpaceElements />

        {/* Main Content - increase z-index to ensure it's above background */}
        <div className="relative z-20">
          {/* Hero Section - Centered */}
          <section className="h-screen flex flex-col items-center justify-center px-4 relative">
            <motion.div 
              className="text-center hardware-accelerated"
              style={{ y: headerParallax }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className="flex items-center justify-center gap-4 text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                <span>Interstellar</span>
                <AnimatedShip />
                <span>Goodfellas</span>
              </h1>
              
              <motion.p 
                className="text-gray-300 text-xl md:text-2xl max-w-4xl mx-auto mb-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                Charting Peaceful Frontiers in Elite: Dangerous
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <a 
                  href="https://discord.gg/igfv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 bg-primary-main hover:bg-primary-darkest text-white rounded-lg transition-colors shadow-glow hover:shadow-glow-hover flex items-center justify-center gap-2 group"
                >
                  <FaDiscord className="text-xl group-hover:scale-110 transition-transform" />
                  <span>Join Our Community</span>
                </a>
                <a 
                  href="https://inara.cz/elite/squadron/9569/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 bg-dark-navy hover:bg-dark-slate1 text-white rounded-lg border border-primary-main transition-colors flex items-center justify-center gap-2 group"
                >
                  <FaExternalLinkAlt className="text-lg group-hover:scale-110 transition-transform" />
                  <span>Squadron Profile</span>
                </a>
              </motion.div>
            </motion.div>
            
            {/* Scroll Down Indicator */}
            <ScrollDown />
          </section>

          {/* Live Strip: Quick Links + Discord Embed */}
          <section className="py-12 border-t border-b border-primary-main/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h3 className="text-white font-bold text-2xl mb-6 flex items-center gap-3">
                <div className="w-1 h-8 bg-primary-main rounded" />
                Quick Navigation
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <motion.a 
                  href="/about" 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="group bg-gradient-to-r from-primary-main/20 to-transparent border border-primary-main/30 rounded-lg p-6 transition-all shadow-glow hover:shadow-glow-hover hover:border-primary-main/60"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-4xl font-bold text-primary-main opacity-20">01</div>
                    <div className="text-primary-light group-hover:text-white transition-colors">
                      <FaUsers className="w-8 h-8" />
                    </div>
                  </div>
                  <h4 className="text-white font-bold text-lg mb-2">About</h4>
                  <p className="text-gray-400 text-sm">Our story & mission</p>
                </motion.a>
                
                <motion.a 
                  href="/fleet-carrier"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="group bg-gradient-to-r from-primary-main/20 to-transparent border border-primary-main/30 rounded-lg p-6 transition-all shadow-glow hover:shadow-glow-hover hover:border-primary-main/60"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-4xl font-bold text-primary-main opacity-20">02</div>
                    <div className="text-primary-light group-hover:text-white transition-colors">
                      <FaRocket className="w-8 h-8" />
                    </div>
                  </div>
                  <h4 className="text-white font-bold text-lg mb-2">Fleet Carrier</h4>
                  <p className="text-gray-400 text-sm">Valhall details</p>
                </motion.a>
                
                <motion.a 
                  href="/events" 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="group bg-gradient-to-r from-primary-main/20 to-transparent border border-primary-main/30 rounded-lg p-6 transition-all shadow-glow hover:shadow-glow-hover hover:border-primary-main/60"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-4xl font-bold text-primary-main opacity-20">03</div>
                    <div className="text-primary-light group-hover:text-white transition-colors">
                      <FaStar className="w-8 h-8" />
                    </div>
                  </div>
                  <h4 className="text-white font-bold text-lg mb-2">Events</h4>
                  <p className="text-gray-400 text-sm">Upcoming ops</p>
                </motion.a>
                
                <motion.a 
                  href="/gallery" 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="group bg-gradient-to-r from-primary-main/20 to-transparent border border-primary-main/30 rounded-lg p-6 transition-all shadow-glow hover:shadow-glow-hover hover:border-primary-main/60"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-4xl font-bold text-primary-main opacity-20">04</div>
                    <div className="text-primary-light group-hover:text-white transition-colors">
                      <FaComments className="w-8 h-8" />
                    </div>
                  </div>
                  <h4 className="text-white font-bold text-lg mb-2">Gallery</h4>
                  <p className="text-gray-400 text-sm">Screenshots</p>
                </motion.a>
              </div>
            </div>
          </section>

          {/* Consistent max width container for all content */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 hardware-accelerated">
            {/* Introduction Section - Consistent text size */}
            <section className="py-24 relative">
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full hardware-accelerated"
              >
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">Who We Are</h2>
                
                <div className="bg-gradient-to-r from-primary-main/20 to-transparent border border-primary-main/30 rounded-lg p-8 shadow-glow mb-12">
                  <p className="text-base md:text-lg text-gray-300 mb-6">
                    Welcome to Interstellar Goodfellas, a peaceful squadron dedicated to exploration and colonization in Elite: Dangerous. 
                    Our community is a melting pot of pilots—from bright-eyed newcomers to battle-hardened veterans—united by a passion 
                    for discovery, mutual support, and strategic innovation.
                  </p>
                  
                  <p className="text-base md:text-lg text-gray-300 mb-6">
                    We are committed to building an inclusive haven where every pilot can thrive. Our mission is to guide you through 
                    the complexities of space exploration with a focus on peaceful colonization. Whether you&apos;re charting unexplored 
                    systems or returning to the stars, we stand together to advance in a universe defined by endless opportunity and 
                    evolving challenges.
                  </p>
                  
                  <p className="text-base md:text-lg text-gray-300">
                    Our collective strength is built on shared experience and disciplined strategy. Keep your Inara profile updated to 
                    help plan future routes and events. Follow our established PvP code (details available in our galaxy-intel channel) 
                    and always coordinate with senior leadership before sharing server invites.
                  </p>
                </div>
              </motion.div>
            </section>

            {/* Squadron Stats Section */}
            <section className="py-24 relative">
              <motion.h2 
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-12 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Squadron Overview
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { label: 'Active Members', value: '100+', icon: '👥' },
                  { label: 'Systems Explored', value: '1,247', icon: '🌍' },
                  { label: 'Total Credits Earned', value: '2.3B', icon: '💰' },
                  { label: 'Faction Status', value: 'Growing', icon: '📈' },
                ].map((stat, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-gradient-to-br from-norway-red/10 to-norway-blue/10 border border-norway-red/30 rounded-lg p-6 text-center hover:border-norway-red/60 transition-all"
                  >
                    <div className="text-4xl mb-3">{stat.icon}</div>
                    <p className="text-gray-400 text-sm uppercase tracking-wider mb-2">{stat.label}</p>
                    <p className="text-3xl font-bold text-norway-red">{stat.value}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 relative">
              <motion.h2 
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-12 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Frequently Asked Questions
              </motion.h2>

              <div className="w-full space-y-4">
                {[
                  {
                    question: "What are the requirements to join IGFV?",
                    answer: "We welcome commanders of all experience levels! The only requirements are a positive attitude, respect for fellow pilots, and a desire to contribute to our peaceful community."
                  },
                  {
                    question: "Where is the squadron based?",
                    answer: "Our home base is the fleet carrier Valhall, which serves as our mobile operations center. We also maintain presence in several key systems for trade and exploration."
                  },
                  {
                    question: "What activities does IGFV focus on?",
                    answer: "We specialize in exploration, trading, and peaceful expansion. Regular activities include exploration expeditions, trading convoys, mining operations, and community events."
                  },
                  {
                    question: "How active do I need to be?",
                    answer: "We understand that real life comes first. There are no minimum activity requirements - participate as much or as little as your schedule allows."
                  },
                  {
                    question: "Do you offer training for new players?",
                    answer: "Yes! Our mentorship program pairs new commanders with experienced pilots who provide personalized guidance on everything from basic flight controls to advanced exploration techniques."
                  },
                  {
                    question: "What platforms do you support?",
                    answer: "We welcome commanders from all platforms - PC, PlayStation, and Xbox. Our Discord server serves as the central hub for cross-platform coordination."
                  }
                ].map((faq, index) => (
                  <FAQItem 
                    key={faq.question} 
                    question={faq.question} 
                    answer={faq.answer}
                    isOpen={openFAQ === index}
                    onToggle={() => setOpenFAQ(index)}
                    onClose={() => setOpenFAQ(null)}
                  />
                ))}
              </div>
            </section>

            {/* Getting Started Section */}
            <section className="py-24 relative">
              <motion.h2 
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-16 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Your Journey With Us
              </motion.h2>

              <div className="w-full relative">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  {[
                    {
                      number: "01",
                      title: "Join Discord",
                      description: "Connect with our community and find experienced mentors ready to guide you",
                      icon: <FaDiscord className="w-8 h-8" />
                    },
                    {
                      number: "02",
                      title: "Meet Your Mentor",
                      description: "Get paired with an experienced pilot who understands your playstyle",
                      icon: <FaHandsHelping className="w-8 h-8" />
                    },
                    {
                      number: "03",
                      title: "Choose Your Path",
                      description: "Select from exploration, trading, mining, or combat careers",
                      icon: <FaRocket className="w-8 h-8" />
                    },
                    {
                      number: "04",
                      title: "Start Flying",
                      description: "Join operations, expeditions, and events with fellow commanders",
                      icon: <FaSpaceShuttle className="w-8 h-8" />
                    }
                  ].map((step, index) => (
                    <motion.div
                      key={step.number}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-gradient-to-r from-primary-main/20 to-transparent border border-primary-main/30 rounded-lg p-6 shadow-glow hover:shadow-glow-hover hover:border-primary-main/60 transition-all group"
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <div className="text-4xl font-bold text-primary-main opacity-20">{step.number}</div>
                        <div className="text-primary-light group-hover:text-white transition-colors">
                          {step.icon}
                        </div>
                      </div>
                      <h3 className="text-white font-bold text-lg mb-2">{step.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* Reviews Section */}
            <section className="py-16 relative">
              <motion.h2 
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-12 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Join Us Today
              </motion.h2>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://discord.gg/invite/Jvrgy6EEQn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-primary-main hover:bg-primary-darkest text-white rounded-lg transition-colors shadow-glow hover:shadow-glow-hover flex items-center justify-center gap-2 group"
                >
                  <FaDiscord className="text-2xl group-hover:scale-110 transition-transform" />
                  <span className="text-lg">Join Our Discord</span>
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </ParallaxProvider>
  );
} 