'use client';

import { useState, useEffect } from 'react';
import { MotionDiv } from '@/components/Motion/MotionDiv';
import { AnimatedBackground } from '@/components/ui/AnimatedBackground';
import { FaArrowDown, FaArrowUp, FaDiscord, FaGamepad, FaCar, FaSkull, FaTwitter, FaInstagram } from 'react-icons/fa';
import { SiThreads } from 'react-icons/si';
import { motion } from 'framer-motion';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const stats = [
  { label: 'Active Players', value: '10K+' },
  { label: 'Communities', value: '500+' },
  { label: 'Daily Events', value: '50+' },
  { label: 'Total Rewards', value: '100K+' },
] as const;

// Mock partners data
const partners = [
  { name: 'Corsair Gaming', logo: '/partners/corsair.png', url: '#' },
  { name: 'SteelSeries', logo: '/partners/steelseries.png', url: '#' },
  { name: 'Razer', logo: '/partners/razer.png', url: '#' },
  { name: 'ASUS ROG', logo: '/partners/asus.png', url: '#' },
  { name: 'Logitech G', logo: '/partners/logitech.png', url: '#' },
  { name: 'MSI', logo: '/partners/msi.png', url: '#' },
  { name: 'NVIDIA', logo: '/partners/nvidia.png', url: '#' },
  { name: 'AMD', logo: '/partners/amd.png', url: '#' },
];

// Type for server status
type ServerStatus = 'online' | 'degraded' | 'offline';

// Mock server status data
const serverStatus = [
  { 
    name: 'Discord Bot', 
    icon: <FaDiscord />, 
    status: 'online' as ServerStatus, 
    uptime: '99.8%',
    responseTime: '120ms',
    history: [98, 99, 100, 99, 100, 98, 99, 100, 100, 99, 98, 97, 99, 100]
  },
  { 
    name: 'Minecraft Server', 
    icon: <FaGamepad />, 
    status: 'online' as ServerStatus, 
    uptime: '98.2%',
    responseTime: '150ms',
    history: [100, 99, 98, 97, 96, 98, 99, 100, 99, 98, 97, 98, 99, 100]
  },
  { 
    name: 'Assetto Corsa Server', 
    icon: <FaCar />, 
    status: 'degraded' as ServerStatus, 
    uptime: '95.4%',
    responseTime: '210ms',
    history: [100, 98, 95, 92, 90, 88, 92, 95, 98, 97, 94, 92, 95, 97]
  },
  { 
    name: 'Rust Server', 
    icon: <FaSkull />, 
    status: 'online' as ServerStatus, 
    uptime: '97.9%',
    responseTime: '180ms',
    history: [99, 98, 97, 96, 97, 98, 99, 97, 96, 97, 98, 99, 100, 99]
  },
];

// Mock social media posts
const socialPosts = {
  twitter: [
    { id: 1, username: 'VEKAOfficial', handle: '@veka_gaming', content: 'Excited to announce our upcoming tournament with prize pools exceeding $10,000! Registration opens next week. #VEKAGaming', likes: 245, retweets: 89, time: '2h ago', image: '/social/twitter-post1.jpg' },
    { id: 2, username: 'VEKAOfficial', handle: '@veka_gaming', content: 'Our Discord community just reached 10,000 members! Thanks to everyone who makes this community amazing. #MilestoneAchieved', likes: 412, retweets: 156, time: '1d ago', image: '' },
    { id: 3, username: 'VEKAOfficial', handle: '@veka_gaming', content: 'The new server update is live! Check out the improved performance and new features. Let us know what you think! #ServerUpdate', likes: 189, retweets: 45, time: '3d ago', image: '/social/twitter-post3.jpg' },
  ],
  instagram: [
    { id: 1, username: 'veka_official', content: 'Community game night was a blast! Swipe to see more photos. #gamingcommunity', likes: 542, comments: 32, time: '5h ago', images: ['/social/insta-post1.jpg', '/social/insta-post1-2.jpg'] },
    { id: 2, username: 'veka_official', content: 'Behind the scenes at our new studio setup. #gamingsetup #streamerlife', likes: 876, comments: 67, time: '2d ago', images: ['/social/insta-post2.jpg'] },
    { id: 3, username: 'veka_official', content: 'Meet our newest team member! @gamer_pro will be helping coordinate community events. #welcomeaboard', likes: 723, comments: 45, time: '4d ago', images: ['/social/insta-post3.jpg'] },
  ],
  threads: [
    { id: 1, username: 'VEKA', handle: '@veka_official', content: "We've been thinking about the future of gaming communities. Here's our vision for the next generation of social gaming experiences...", replies: 56, likes: 312, time: '3h ago' },
    { id: 2, username: 'VEKA', handle: '@veka_official', content: "Question for our community: What features would you like to see in our next platform update? We're listening!", replies: 89, likes: 267, time: '1d ago' },
    { id: 3, username: 'VEKA', handle: '@veka_official', content: 'Gaming tip of the day: Remember to take short breaks every hour to protect your eyes and prevent strain. Your health matters!', replies: 23, likes: 198, time: '2d ago' },
  ]
};

// Type definition for StatusIndicator
interface StatusProps {
  status: 'online' | 'degraded' | 'offline';
}

// Type definition for ServerStatusGraph
interface GraphProps {
  history: number[];
}

const StatusIndicator = ({ status }: StatusProps) => {
  const statusColors = {
    online: 'bg-green-500',
    degraded: 'bg-yellow-500',
    offline: 'bg-red-500',
  };

  return (
    <div className="flex items-center">
      <div className={`w-3 h-3 rounded-full ${statusColors[status]} mr-2`}></div>
      <span className="capitalize">{status}</span>
    </div>
  );
};

const ServerStatusGraph = ({ history }: GraphProps) => {
  const points = history.map((value, index) => {
    const x = (index / (history.length - 1)) * 100;
    const y = 100 - value;
    return `${x},${y}`;
  }).join(' ');

  return (
    <div className="w-full h-12 relative">
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <polyline
          points={points}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-primary"
        />
      </svg>
    </div>
  );
};

export default function Home() {
  const [showScrollUp, setShowScrollUp] = useState(false);
  const [cookieConsent, setCookieConsent] = useState<boolean | null>(null);
  
  useEffect(() => {
    // Check if user has already given cookie consent
    const savedConsent = localStorage.getItem('cookieConsent');
    if (savedConsent) {
      setCookieConsent(savedConsent === 'true');
    }

    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setShowScrollUp(true);
      } else {
        setShowScrollUp(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  const handleAcceptCookies = () => {
    setCookieConsent(true);
    localStorage.setItem('cookieConsent', 'true');
  };

  const handleManageCookies = () => {
    // This could open a more detailed cookie settings modal
    setCookieConsent(true);
    localStorage.setItem('cookieConsent', 'true');
  };

  return (
    <AnimatedBackground>
      {/* Hero Section with Video Background */}
      <section className="h-screen flex items-center justify-center px-6 relative overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            {/* <source src="/videos/hero-background.mp4" type="video/mp4" /> */}
            <source src="https://media.istockphoto.com/id/1393551364/video/successful-young-female-gamer-putting-on-headphones-and-winning-in-a-video-game-on-personal.mp4?s=mp4-640x640-is&k=20&c=h21xGIQBoDuEnklnqFInmJcjAG1yvyKk7V1-dDB9N6Q=" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-dark/70"></div>
          
          {/* Gradient fade for smooth transition to content */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark to-transparent"></div>
        </div>

        <MotionDiv 
          className="text-center relative z-10"
          initial={fadeIn.initial}
          animate={fadeIn.animate}
          transition={fadeIn.transition}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            Welcome to VEKA
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            A dynamic community platform built for gamers, by gamers
          </p>
          <div className="flex justify-center space-x-4">
            <MotionDiv 
              whileHover={{ scale: 1.05 }}
              className="bg-primary hover:bg-primary-dark px-8 py-3 rounded-lg shadow-glow hover:shadow-glow-hover transition-all cursor-pointer"
            >
              Join Community
            </MotionDiv>
            <MotionDiv 
              whileHover={{ scale: 1.05 }}
              className="bg-dark-lighter hover:bg-dark-light px-8 py-3 rounded-lg border border-primary/20 hover:border-primary/40 transition-all cursor-pointer"
            >
              Learn More
            </MotionDiv>
          </div>
        </MotionDiv>

        {/* Bouncing Down Arrow */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white cursor-pointer z-10"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          onClick={scrollToContent}
        >
          <FaArrowDown className="text-3xl text-primary" />
        </motion.div>
      </section>

      {/* Features Section - Add top padding for navbar clearance */}
      <section className="py-24 px-6 pt-28">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Connect', 'Share', 'Grow'].map(feature => (
              <MotionDiv 
                key={feature}
                className="p-6 bg-dark-lighter/50 backdrop-blur-sm rounded-lg shadow-glow hover:shadow-glow-hover transition-shadow"
                whileHover={{ y: -5 }}
              >
                <h3 className="text-xl font-semibold mb-4 text-primary">{feature}</h3>
                <p className="text-gray-400">
                  {feature === 'Connect' && 'Join a thriving community of like-minded gamers and tech enthusiasts.'}
                  {feature === 'Share' && 'Share your gaming experiences and technical knowledge with others.'}
                  {feature === 'Grow' && 'Level up your skills with community support and resources.'}
                </p>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section - Add top padding for navbar clearance */}
      <section className="py-12 px-6 pt-28 bg-dark-lighter/30">
        <div className="container mx-auto mb-8">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Our Partners</h2>
          <div className="overflow-hidden">
            <motion.div 
              className="flex space-x-8"
              animate={{ x: [0, -1800] }}
              transition={{ 
                repeat: Infinity, 
                duration: 30, 
                ease: "linear",
                repeatType: "loop"
              }}
            >
              {/* Double the partners to create a seamless loop */}
              {[...partners, ...partners].map((partner, index) => (
                <div key={`${partner.name}-${index}`} className="flex-shrink-0 w-48 h-24 bg-dark-lighter rounded-lg flex items-center justify-center p-4">
                  <div className="w-full h-full bg-gradient-to-br from-dark to-dark-lighter flex items-center justify-center">
                    {/* If you have actual partner logos, use Image component here */}
                    <span className="text-primary text-center font-medium">{partner.name}</span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-6 pt-28">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <MotionDiv
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-dark-lighter/50 backdrop-blur-sm rounded-lg"
              >
                <h4 className="text-3xl font-bold text-primary mb-2">{stat.value}</h4>
                <p className="text-gray-400">{stat.label}</p>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Feed Section */}
      <section className="py-24 px-6 pt-28 bg-dark-lighter/10">
        <div className="container mx-auto">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              Community Feed
            </h2>
            <p className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto">
              Stay connected with our latest updates across social media
            </p>
          </MotionDiv>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Twitter Feed */}
            <div className="space-y-6">
              <div className="flex items-center justify-center mb-6">
                <FaTwitter className="text-[#1DA1F2] text-2xl mr-3" />
                <h3 className="text-xl font-semibold text-white">Twitter</h3>
              </div>
              
              {socialPosts.twitter.map(post => (
                <MotionDiv
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-dark-lighter/50 backdrop-blur-sm p-5 rounded-lg"
                >
                  <div className="flex items-start mb-3">
                    <div className="w-10 h-10 rounded-full bg-dark-lighter flex-shrink-0 mr-3 flex items-center justify-center text-primary">
                      V
                    </div>
                    <div>
                      <div className="flex items-center">
                        <span className="font-medium text-white">{post.username}</span>
                        <span className="text-gray-400 text-sm ml-2">{post.handle}</span>
                      </div>
                      <span className="text-xs text-gray-400">{post.time}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-3">{post.content}</p>
                  
                  {post.image && (
                    <div className="rounded-lg overflow-hidden mb-3 bg-dark-lighter h-40 flex items-center justify-center">
                      <span className="text-gray-500 text-sm">Image: {post.image}</span>
                    </div>
                  )}
                  
                  <div className="flex text-gray-400 text-sm">
                    <span className="mr-4">{post.likes} Likes</span>
                    <span>{post.retweets} Retweets</span>
                  </div>
                </MotionDiv>
              ))}
            </div>
            
            {/* Instagram Feed */}
            <div className="space-y-6">
              <div className="flex items-center justify-center mb-6">
                <FaInstagram className="text-[#E1306C] text-2xl mr-3" />
                <h3 className="text-xl font-semibold text-white">Instagram</h3>
              </div>
              
              {socialPosts.instagram.map(post => (
                <MotionDiv
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-dark-lighter/50 backdrop-blur-sm p-5 rounded-lg"
                >
                  <div className="flex items-start mb-3">
                    <div className="w-10 h-10 rounded-full bg-dark-lighter flex-shrink-0 mr-3 flex items-center justify-center text-primary">
                      V
                    </div>
                    <div>
                      <div className="flex items-center">
                        <span className="font-medium text-white">{post.username}</span>
                      </div>
                      <span className="text-xs text-gray-400">{post.time}</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-2 mb-3">
                    {post.images.map((img, idx) => (
                      <div key={idx} className="rounded-lg overflow-hidden bg-dark-lighter h-40 flex items-center justify-center">
                        <span className="text-gray-500 text-sm">Image: {img}</span>
                      </div>
                    ))}
                  </div>
                  
                  <p className="text-gray-300 mb-3">{post.content}</p>
                  
                  <div className="flex text-gray-400 text-sm">
                    <span className="mr-4">{post.likes} Likes</span>
                    <span>{post.comments} Comments</span>
                  </div>
                </MotionDiv>
              ))}
            </div>
            
            {/* Threads Feed */}
            <div className="space-y-6">
              <div className="flex items-center justify-center mb-6">
                <SiThreads className="text-white text-2xl mr-3" />
                <h3 className="text-xl font-semibold text-white">Threads</h3>
              </div>
              
              {socialPosts.threads.map(post => (
                <MotionDiv
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-dark-lighter/50 backdrop-blur-sm p-5 rounded-lg"
                >
                  <div className="flex items-start mb-3">
                    <div className="w-10 h-10 rounded-full bg-dark-lighter flex-shrink-0 mr-3 flex items-center justify-center text-primary">
                      V
                    </div>
                    <div>
                      <div className="flex items-center">
                        <span className="font-medium text-white">{post.username}</span>
                        <span className="text-gray-400 text-sm ml-2">{post.handle}</span>
                      </div>
                      <span className="text-xs text-gray-400">{post.time}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-3">{post.content}</p>
                  
                  <div className="flex text-gray-400 text-sm">
                    <span className="mr-4">{post.replies} Replies</span>
                    <span>{post.likes} Likes</span>
                  </div>
                </MotionDiv>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Server Status Section */}
      <section className="py-24 px-6 pt-28 bg-dark-lighter/20">
        <div className="container mx-auto">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              Service Status
            </h2>
            <p className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto">
              Real-time monitoring of our community servers and services
            </p>
          </MotionDiv>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serverStatus.map((server, index) => (
              <MotionDiv
                key={server.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-dark-lighter/50 backdrop-blur-sm p-6 rounded-lg"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <span className="text-primary text-xl mr-3">{server.icon}</span>
                    <h3 className="font-medium">{server.name}</h3>
                  </div>
                  <StatusIndicator status={server.status} />
                </div>
                
                <ServerStatusGraph history={server.history} />
                
                <div className="flex justify-between mt-4 text-sm text-gray-400">
                  <div>Uptime: {server.uptime}</div>
                  <div>Response: {server.responseTime}</div>
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Discord Community Widget */}
      <section className="py-24 px-6 pt-28 bg-dark-lighter/30">
        <div className="container mx-auto">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              Join Our Discord Community
            </h2>
            <p className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto">
              Connect with players, participate in events, and stay updated with the latest news
            </p>
          </MotionDiv>

          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            <div className="w-full md:w-1/2 lg:w-1/3">
              <div className="bg-dark-lighter/50 backdrop-blur-sm p-6 rounded-lg shadow-glow">
                <h3 className="text-xl font-bold text-white mb-4">Why Join Our Discord?</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Exclusive gaming events and tournaments</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Connect with a friendly community of gamers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Get the latest news and updates</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Share gameplay moments and strategies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Voice chat while gaming with friends</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <a
                    href="https://discord.gg/veka"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center bg-primary hover:bg-primary-dark px-6 py-3 rounded-lg shadow-glow hover:shadow-glow-hover transition-all"
                  >
                    Join Discord Server
                  </a>
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-1/2 lg:w-auto flex justify-center">
              <iframe 
                src="https://discord.com/widget?id=792556339359907871&theme=dark" 
                width="350" 
                height="500" 
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture" 
                frameBorder="0" 
                sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
                className="shadow-glow rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll to top button */}
      {showScrollUp && (
        <motion.button
          className="fixed bottom-8 right-8 z-50 bg-primary p-3 rounded-full shadow-glow hover:shadow-glow-hover transition-all"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
        >
          <FaArrowUp className="text-white text-xl" />
        </motion.button>
      )}

      {/* Cookie Banner */}
      {cookieConsent === null && (
        <motion.div 
          className="fixed bottom-0 left-0 right-0 bg-dark-lighter/90 backdrop-blur-md p-4 shadow-lg z-50 border-t border-primary/20"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0 md:mr-8">
              <p className="text-gray-300 text-sm md:text-base">
                We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
              </p>
            </div>
            <div className="flex space-x-4">
              <button 
                onClick={handleManageCookies}
                className="px-4 py-2 text-sm border border-primary/50 text-gray-300 rounded hover:bg-dark-light transition-colors"
              >
                Manage Preferences
              </button>
              <button 
                onClick={handleAcceptCookies}
                className="px-4 py-2 text-sm bg-primary hover:bg-primary-dark text-white rounded transition-colors"
              >
                Accept All
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatedBackground>
  );
}
