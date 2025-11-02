'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useAnimation, useInView } from 'framer-motion';
import { FaSpaceShuttle, FaDiscord, FaExternalLinkAlt, FaUsers, FaHandsHelping, FaStar, FaQuestionCircle, FaComments, FaRocket, FaChevronDown, FaCheck, FaMoon, FaGlobeAmericas, FaSatellite } from 'react-icons/fa';
import { IoIosPlanet, IoMdRocket } from 'react-icons/io';
import { RiSpaceShipFill } from 'react-icons/ri';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

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
      className="bg-dark/50 backdrop-blur-sm rounded-lg overflow-hidden cursor-pointer shadow-glow hover:shadow-glow-hover transition-all"
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
          <FaQuestionCircle className="text-primary text-xl flex-shrink-0 mt-1" />
          <h3 className="text-white font-bold text-lg">{question}</h3>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-primary"
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

// Update key motion components to avoid unnecessary animations
function MotionSection({ 
  children, 
  className, 
  delay = 0 
}: { 
  children: React.ReactNode; 
  className?: string; 
  delay?: number 
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay }}
      className={`py-24 relative ${className || ''}`}
    >
      {children}
    </motion.section>
  );
}

// GridBackground component based on Marketplace
function GridBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Grid Lines - Same as Marketplace */}
      <div className="absolute inset-0" style={{
        backgroundImage: `
          linear-gradient(to right, rgba(255,107,0,0.1) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255,107,0,0.1) 1px, transparent 1px)
        `,
        backgroundSize: '4rem 4rem',
      }} />
      
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
  const opacityProgress = useTransform(scrollYProgress, [0.8, 1], [1, 0]);

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
          <section className="h-screen flex flex-col items-center justify-center px-4">
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
                  className="px-8 py-3 bg-primary hover:bg-primary-dark text-white rounded-lg transition-colors shadow-glow hover:shadow-glow-hover flex items-center justify-center gap-2 group"
                >
                  <FaDiscord className="text-xl group-hover:scale-110 transition-transform" />
                  <span>Join Our Community</span>
                </a>
                <a 
                  href="https://inara.cz/elite/squadron/9569/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 bg-dark hover:bg-dark-light text-white rounded-lg border border-primary transition-colors flex items-center justify-center gap-2 group"
                >
                  <FaExternalLinkAlt className="text-lg group-hover:scale-110 transition-transform" />
                  <span>Squadron Profile</span>
                </a>
              </motion.div>
            </motion.div>
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
                
                <div className="bg-dark/50 backdrop-blur-sm rounded-lg p-8 shadow-glow mb-12">
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

            {/* Community Guidelines Section - Wider */}
            <MotionSection className="will-change-transform">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-12 text-center">
                Community Guidelines & Best Practices
              </h2>
              
              <div className="w-full">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-dark/50 backdrop-blur-sm rounded-lg p-8 shadow-glow"
                >
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <FaCheck className="text-primary mt-1 flex-shrink-0" />
                      <span className="text-base md:text-lg text-gray-300">Keep your Inara profile updated to help plan future routes and events.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FaCheck className="text-primary mt-1 flex-shrink-0" />
                      <span className="text-base md:text-lg text-gray-300">Follow the accepted PvP code (refer to galaxy-intel for details); when engaging in BGS activities, switch to the open channel.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FaCheck className="text-primary mt-1 flex-shrink-0" />
                      <span className="text-base md:text-lg text-gray-300">New pilots should secure the recommended ships in order: Cobra Mk3, Python, then Anaconda—refer to ship-builds for more information.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FaCheck className="text-primary mt-1 flex-shrink-0" />
                      <span className="text-base md:text-lg text-gray-300">Do not share the server invite without permission from Rear Admirals, Vice Admirals, or the Admiral to maintain our community&apos;s integrity.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FaCheck className="text-primary mt-1 flex-shrink-0" />
                      <span className="text-base md:text-lg text-gray-300">Ensure your Discord name reflects your in-game identity for consistency.</span>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </MotionSection>

            {/* Mission & Values Section */}
            <section className="py-24 relative">
              <motion.h2 
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-12 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Mission & Values
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
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
                    transition={{ delay: index * 0.2 }}
                    className="bg-dark/50 backdrop-blur-sm rounded-lg p-6 shadow-glow hover:shadow-glow-hover transition-all"
                  >
                    <div className="text-primary mb-4">{value.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                    <p className="text-base md:text-lg text-gray-400">{value.description}</p>
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

            {/* Community Section */}
            <section className="py-24 relative">
              <motion.div 
                style={{ opacity: opacityProgress }}
                className="w-full"
              >
                <motion.h2 
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  Our Community
                </motion.h2>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="bg-dark/50 backdrop-blur-sm rounded-lg p-8 shadow-glow mb-12"
                >
                  <p className="text-base md:text-lg text-gray-300 mb-6">
                    Our squadron brings together commanders from all walks of life - university students exploring between classes, 
                    working professionals unwinding after hours, and retired veterans sharing their wisdom of the cosmos.
                  </p>

                  <p className="text-base md:text-lg text-gray-300 mb-6">
                    We celebrate this diversity, as it enriches our community and brings unique perspectives to our shared adventures. 
                    Whether you have 15 minutes or 5 hours to play, there&apos;s always a place for you in our squadron.
                  </p>

                  <p className="text-base md:text-lg text-gray-300 mb-8">
                    Join regular community events, from exploration expeditions to trading convoys, or simply enjoy casual flights 
                    with fellow commanders. Our fleet carrier Valhall serves as both our home base and a symbol of our collaborative spirit.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a 
                      href="https://discord.gg/igfv"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-4 bg-primary hover:bg-primary-dark text-white rounded-lg transition-colors shadow-glow hover:shadow-glow-hover flex items-center justify-center gap-2 group"
                    >
                      <FaDiscord className="text-2xl group-hover:scale-110 transition-transform" />
                      <span className="text-lg">Join Our Discord</span>
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            </section>

            {/* Getting Started Section */}
            <section className="py-24 relative">
              <motion.h2 
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-16 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Getting Started with IGFV
              </motion.h2>

              <div className="w-full relative">
                {/* Connection Line */}
                <div className="absolute top-1/2 left-0 right-0 h-1 bg-primary/30 -translate-y-1/2 hidden md:block" />
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  {[
                    {
                      title: "1. Join Discord",
                      content: "Connect with our community and find mentors",
                      highlight: "First stop",
                      icon: <FaDiscord className="w-8 h-8" />
                    },
                    {
                      title: "2. Meet Mentor",
                      content: "Get paired with an experienced guide",
                      highlight: "Personal guidance",
                      icon: <FaHandsHelping className="w-8 h-8" />
                    },
                    {
                      title: "3. Choose Path",
                      content: "Select your preferred career path",
                      highlight: "Your journey",
                      icon: <FaRocket className="w-8 h-8" />
                    },
                    {
                      title: "4. Start Flying",
                      content: "Join squadron activities and events",
                      highlight: "Take off",
                      icon: <FaSpaceShuttle className="w-8 h-8" />
                    }
                  ].map((step, index) => (
                    <motion.div
                      key={step.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-dark/50 backdrop-blur-sm rounded-lg p-6 relative shadow-glow hover:shadow-glow-hover"
                    >
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-dark rounded-full border-4 border-primary flex items-center justify-center text-primary">
                        {step.icon}
                      </div>
                      <div className="bg-dark/30 rounded-lg p-4 mt-4">
                        <h3 className="text-white font-bold text-xl mb-2 text-center">{step.title}</h3>
                        <p className="text-base md:text-lg text-gray-300 text-center mb-3">{step.content}</p>
                        <div className="text-primary text-sm bg-primary/10 text-center px-3 py-1 rounded-full">
                          {step.highlight}
                        </div>
                      </div>
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
                Commander Reviews
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                {[
                  {
                    text: "Found my home among the stars with IGFV. The mentorship program helped me grow from a rookie to a confident explorer.",
                    author: "CMDR StarSeeker",
                    role: "Explorer"
                  },
                  {
                    text: "Great community that understands real-life commitments. Whether you have 30 minutes or 3 hours, you&apos;ll always find someone to fly with.",
                    author: "CMDR NightRaven",
                    role: "Trader"
                  },
                  {
                    text: "The fleet carrier Valhall has become my second home. IGFV&apos;s peaceful approach to expansion aligns perfectly with my playstyle.",
                    author: "CMDR VoidWanderer",
                    role: "Colonist"
                  }
                ].map((review, index) => (
                  <motion.div
                    key={review.author}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="bg-dark/50 backdrop-blur-sm rounded-lg p-6 shadow-glow hover:shadow-glow-hover transition-all"
                  >
                    <FaComments className="text-primary text-2xl mb-4" />
                    <p className="text-base md:text-lg text-gray-300 mb-4 italic">&quot;{review.text}&quot;</p>
                    <div className="text-white font-bold">{review.author}</div>
                    <div className="text-primary text-sm">{review.role}</div>
                  </motion.div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </ParallaxProvider>
  );
} 