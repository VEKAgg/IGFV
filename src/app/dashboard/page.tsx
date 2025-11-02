'use client';

import { MotionDiv } from '@/components/Motion/MotionDiv';
import { AnimatedBackground } from '@/components/ui/AnimatedBackground';
import { 
  FaGamepad, 
  FaUsers, 
  FaTrophy, 
  FaChartLine,
  FaBell,
  FaCog,
  FaCalendar
} from 'react-icons/fa';

// Dummy data
const stats = [
  { label: 'Active Games', value: '12', icon: FaGamepad, change: '+2' },
  { label: 'Community Members', value: '1.2k', icon: FaUsers, change: '+150' },
  { label: 'Achievements', value: '48', icon: FaTrophy, change: '+5' },
  { label: 'Game Score', value: '2,847', icon: FaChartLine, change: '+234' },
];

const recentActivities = [
  {
    id: 1,
    type: 'achievement',
    title: 'New Achievement Unlocked',
    description: 'Completed 100 matches in ranked mode',
    time: '2 hours ago',
    icon: FaTrophy,
  },
  {
    id: 2,
    type: 'community',
    title: 'New Community Member',
    description: 'Welcome to the VEKA family!',
    time: '3 hours ago',
    icon: FaUsers,
  },
  {
    id: 3,
    type: 'game',
    title: 'Game Completed',
    description: 'Won a competitive match',
    time: '5 hours ago',
    icon: FaGamepad,
  },
];

const upcomingEvents = [
  {
    id: 1,
    title: 'Community Tournament',
    date: '2024-03-15',
    time: '18:00 UTC',
    participants: 64,
    prize: '$1,000',
  },
  {
    id: 2,
    title: 'Game Night',
    date: '2024-03-20',
    time: '20:00 UTC',
    participants: 32,
    prize: 'Community Points',
  },
];

export default function Dashboard() {
  return (
    <AnimatedBackground>
      <div className="container mx-auto py-24 px-6">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto"
        >
          {/* Header */}
          <div className="flex justify-between items-center mb-12">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                Dashboard
              </h1>
              <p className="text-gray-400">
                Welcome back! Here&apos;s what&apos;s happening in your gaming world.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2 text-gray-400 hover:text-primary transition-colors relative">
                <FaBell />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">
                  3
                </span>
              </button>
              <button className="p-2 text-gray-400 hover:text-primary transition-colors">
                <FaCog />
              </button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {stats.map((stat, index) => (
              <MotionDiv
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-dark-lighter/50 backdrop-blur-sm rounded-lg p-6"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <stat.icon className="text-primary text-xl" />
                  </div>
                  <span className="text-green-500 text-sm">{stat.change}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">{stat.value}</h3>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </MotionDiv>
            ))}
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Recent Activities */}
            <div className="lg:col-span-2">
              <div className="bg-dark-lighter/50 backdrop-blur-sm rounded-lg p-6">
                <h2 className="text-xl font-semibold text-white mb-6">Recent Activities</h2>
                <div className="space-y-6">
                  {recentActivities.map((activity) => (
                    <div key={activity.id} className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <activity.icon className="text-primary" />
                      </div>
                      <div>
                        <h3 className="text-white font-medium">{activity.title}</h3>
                        <p className="text-gray-400 text-sm">{activity.description}</p>
                        <span className="text-gray-500 text-xs">{activity.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Upcoming Events */}
            <div>
              <div className="bg-dark-lighter/50 backdrop-blur-sm rounded-lg p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-white">Upcoming Events</h2>
                  <FaCalendar className="text-primary" />
                </div>
                <div className="space-y-6">
                  {upcomingEvents.map((event) => (
                    <div key={event.id} className="border-l-2 border-primary pl-4">
                      <h3 className="text-white font-medium">{event.title}</h3>
                      <div className="text-sm text-gray-400">
                        <p>Date: {event.date}</p>
                        <p>Time: {event.time}</p>
                        <p>Participants: {event.participants}</p>
                        <p>Prize Pool: {event.prize}</p>
                      </div>
                      <button className="mt-2 text-primary hover:text-primary-light text-sm">
                        Register Now
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </MotionDiv>
      </div>
    </AnimatedBackground>
  );
} 