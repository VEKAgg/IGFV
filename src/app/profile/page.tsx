'use client';

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { MotionDiv } from '@/components/Motion/MotionDiv';
import Image from 'next/image';
import { 
  FaGamepad, 
  FaCog, 
  FaDiscord, 
  FaTrophy, 
  FaUsers, 
  FaChartLine,
  FaUserFriends,
  FaImages,
  FaSteam,
  FaGithub,
  FaLinkedin
} from 'react-icons/fa';
import Link from 'next/link';
import { AnimatedBackground } from '@/components/ui/AnimatedBackground';

// Extended user type to include custom properties
interface ExtendedUser {
  name?: string | null;
  email?: string | null;
  image?: string | null;
  id?: string;
  discord?: {
    id: string;
    username?: string;
  };
}

const defaultBio = 'Professional gamer and content creator. Love to compete and share gaming experiences.';

const tabs = [
  { id: 'overview', label: 'Overview', icon: FaChartLine },
  { id: 'gaming', label: 'Gaming', icon: FaGamepad },
  { id: 'social', label: 'Social', icon: FaUsers },
  { id: 'media', label: 'Media', icon: FaImages },
  { id: 'achievements', label: 'Achievements', icon: FaTrophy },
  { id: 'friends', label: 'Friends', icon: FaUserFriends },
];

const platformLinks = [
  { id: 'discord', label: 'Discord', icon: FaDiscord, color: '#5865F2', isLinked: true },
  { id: 'steam', label: 'Steam', icon: FaSteam, color: '#1b2838', isLinked: false },
  { id: 'github', label: 'GitHub', icon: FaGithub, color: '#333', isLinked: false },
  { id: 'linkedin', label: 'LinkedIn', icon: FaLinkedin, color: '#0A66C2', isLinked: false },
];

export default function Profile() {
  const { data: session, status } = useSession();
  const [activeTab, setActiveTab] = useState('overview');
  
  // Cast user to extended type
  const user = session?.user as ExtendedUser | undefined;

  // Show loading state while checking authentication
  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-dark">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4"></div>
          <div className="text-primary text-xl font-bold">Loading...</div>
        </div>
      </div>
    );
  }

  // Show sign-in prompt if not authenticated
  if (status === 'unauthenticated' || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-dark">
        <div className="text-center p-8 bg-dark-lighter/50 backdrop-blur-sm rounded-lg max-w-md">
          <h2 className="text-2xl font-bold text-white mb-4">Authentication Required</h2>
          <p className="text-gray-400 mb-6">Please sign in to view your profile.</p>
          <Link 
            href="/auth/signin" 
            className="px-6 py-3 bg-primary hover:bg-primary-dark text-white rounded-lg transition-colors shadow-glow hover:shadow-glow-hover inline-block"
          >
            Sign In
          </Link>
        </div>
      </div>
    );
  }

  return (
    <AnimatedBackground>
      <div className="container mx-auto py-24 px-6">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto"
        >
          {/* Main Profile Panel */}
          <div className="bg-dark-lighter/50 backdrop-blur-sm rounded-lg p-8 mb-8">
            <div className="flex flex-col md:flex-row items-start gap-8">
              {/* Left Side - Avatar and Basic Info */}
              <div className="flex flex-col items-center space-y-4">
                <div className="relative w-32 h-32">
                  <Image
                    src={user.image || '/images/marketing/profile-default.jpg'}
                    alt={user.name || ''}
                    fill
                    className="rounded-full object-cover"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-primary text-white text-sm px-2 py-1 rounded-full">
                    Lvl 42
                  </div>
                </div>
              </div>

              {/* Middle - User Info */}
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-white mb-2">{user.name}</h1>
                <p className="text-gray-400 mb-4">#{user.id?.slice(0, 8) || '00000000'}</p>
                <p className="text-gray-300 max-w-2xl">{defaultBio}</p>
              </div>

              {/* Right Side - Social Links */}
              <div className="flex flex-col space-y-4">
                <Link
                  href="/settings"
                  className="px-4 py-2 bg-dark/50 hover:bg-dark text-white rounded-lg transition-colors flex items-center gap-2"
                >
                  <FaCog />
                  <span>Settings</span>
                </Link>
                <div className="flex gap-3">
                  {user.discord && (
                    <a href={`https://discord.com/users/${user.discord.id}`} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                      <FaDiscord size={24} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Tabs Navigation - Updated for better mobile experience */}
          <div className="bg-dark-lighter/50 backdrop-blur-sm rounded-lg mb-8">
            {/* Mobile Dropdown for Tabs */}
            <div className="md:hidden p-4">
              <select 
                value={activeTab}
                onChange={(e) => setActiveTab(e.target.value)}
                className="w-full bg-dark/50 text-white rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-primary"
              >
                {tabs.map(tab => (
                  <option key={tab.id} value={tab.id}>
                    {tab.label}
                  </option>
                ))}
              </select>
            </div>
            
            {/* Desktop Tabs */}
            <div className="hidden md:block p-4 overflow-x-auto">
              <div className="flex space-x-4 min-w-max">
                {tabs.map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                      activeTab === tab.id
                        ? 'bg-primary text-white'
                        : 'text-gray-400 hover:text-white hover:bg-dark/50'
                    }`}
                  >
                    <tab.icon className="text-lg" />
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Tab Content */}
          <div className="space-y-8">
            {activeTab === 'overview' && (
              <div className="bg-dark-lighter/50 backdrop-blur-sm rounded-lg p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Overview</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  <MotionDiv
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="p-6 bg-dark/50 backdrop-blur-sm rounded-lg"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <FaGamepad className="text-primary text-xl" />
                      </div>
                      <span className="text-green-500 text-sm">+2</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-1">12</h3>
                    <p className="text-gray-400 text-sm">Active Games</p>
                  </MotionDiv>

                  <MotionDiv
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="p-6 bg-dark/50 backdrop-blur-sm rounded-lg"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <FaUsers className="text-primary text-xl" />
                      </div>
                      <span className="text-green-500 text-sm">+150</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-1">1.2k</h3>
                    <p className="text-gray-400 text-sm">Community Members</p>
                  </MotionDiv>

                  <MotionDiv
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="p-6 bg-dark/50 backdrop-blur-sm rounded-lg"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <FaTrophy className="text-primary text-xl" />
                      </div>
                      <span className="text-green-500 text-sm">+5</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-1">48</h3>
                    <p className="text-gray-400 text-sm">Achievements</p>
                  </MotionDiv>

                  <MotionDiv
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="p-6 bg-dark/50 backdrop-blur-sm rounded-lg"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <FaChartLine className="text-primary text-xl" />
                      </div>
                      <span className="text-green-500 text-sm">+234</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-1">2,847</h3>
                    <p className="text-gray-400 text-sm">Game Score</p>
                  </MotionDiv>
                </div>
              </div>
            )}

            {activeTab === 'gaming' && (
              <div className="bg-dark-lighter/50 backdrop-blur-sm rounded-lg p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Gaming Activity</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-dark/50 backdrop-blur-sm rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-white mb-4">Active Games</h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <FaGamepad className="text-primary text-xl" />
                        </div>
                        <div>
                          <h4 className="text-white font-medium">Valorant</h4>
                          <p className="text-gray-400 text-sm">Last played: 2 hours ago</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-dark/50 backdrop-blur-sm rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-white mb-4">Game Stats</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Total Games</span>
                        <span className="text-white font-medium">248</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Win Rate</span>
                        <span className="text-white font-medium">64%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'social' && (
              <div className="bg-dark-lighter/50 backdrop-blur-sm rounded-lg p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Social Activity</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-dark/50 backdrop-blur-sm rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-white mb-4">Recent Activity</h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <FaTrophy className="text-primary text-xl" />
                        </div>
                        <div>
                          <h4 className="text-white font-medium">Won a tournament</h4>
                          <p className="text-gray-400 text-sm">2 days ago</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Platform Linking Section */}
                  <div className="bg-dark/50 backdrop-blur-sm rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-white mb-4">Link Platforms</h3>
                    <div className="space-y-3">
                      {platformLinks.map(platform => (
                        <div key={platform.id} className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <platform.icon style={{ color: platform.color }} className="text-xl" />
                            <span className="text-white">{platform.label}</span>
                          </div>
                          <button 
                            className={`px-3 py-1 rounded-md text-sm ${
                              platform.isLinked 
                                ? 'bg-green-500/20 text-green-400'
                                : 'bg-primary/20 text-primary hover:bg-primary/30'
                            }`}
                          >
                            {platform.isLinked ? 'Linked' : 'Link'}
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'media' && (
              <div className="bg-dark-lighter/50 backdrop-blur-sm rounded-lg p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Media Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-dark/50 backdrop-blur-sm rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-white mb-4">Latest Streams</h3>
                    <div className="aspect-video bg-dark rounded-lg"></div>
                  </div>
                  <div className="bg-dark/50 backdrop-blur-sm rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-white mb-4">YouTube</h3>
                    <div className="aspect-video bg-dark rounded-lg"></div>
                  </div>
                  <div className="bg-dark/50 backdrop-blur-sm rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-white mb-4">Instagram</h3>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="aspect-square bg-dark rounded-lg"></div>
                      <div className="aspect-square bg-dark rounded-lg"></div>
                      <div className="aspect-square bg-dark rounded-lg"></div>
                      <div className="aspect-square bg-dark rounded-lg"></div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'achievements' && (
              <div className="bg-dark-lighter/50 backdrop-blur-sm rounded-lg p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Achievements</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[1, 2, 3].map((_, index) => (
                    <div key={index} className="bg-dark/50 backdrop-blur-sm rounded-lg p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <FaTrophy className="text-primary text-xl" />
                        </div>
                        <div>
                          <h4 className="text-white font-medium">Tournament Winner</h4>
                          <p className="text-gray-400 text-sm">Earned 2 days ago</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'friends' && (
              <div className="bg-dark-lighter/50 backdrop-blur-sm rounded-lg p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Friends</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[1, 2, 3].map((_, index) => (
                    <div key={index} className="bg-dark/50 backdrop-blur-sm rounded-lg p-6 flex items-center gap-4">
                      <div className="w-12 h-12 bg-gray-700 rounded-full"></div>
                      <div>
                        <h4 className="text-white font-medium">Player {index + 1}</h4>
                        <p className="text-gray-400 text-sm">Online</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </MotionDiv>
      </div>
    </AnimatedBackground>
  );
} 