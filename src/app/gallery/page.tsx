'use client';

import { FaImages, FaUser, FaCalendarAlt, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function GalleryPage() {
  const galleries = [
    {
      title: 'Fleet Carrier Valhall',
      description: 'Exterior and interior shots of our flagship carrier.',
      images: 6,
      color: 'from-norway-red/20',
    },
    {
      title: 'Exploration Highlights',
      description: 'Breathtaking discoveries and deep space views.',
      images: 8,
      color: 'from-norway-blue/20',
    },
    {
      title: 'Mining Operations',
      description: 'Wing mining activities and impressive asteroid finds.',
      images: 5,
      color: 'from-yellow-500/20',
    },
    {
      title: 'Community Events',
      description: 'Squadron members participating in operations.',
      images: 12,
      color: 'from-green-500/20',
    },
    {
      title: 'Ship Collections',
      description: 'Showcase of member ships and configurations.',
      images: 7,
      color: 'from-purple-500/20',
    },
    {
      title: 'BGS Operations',
      description: 'Control stations and faction warfare moments.',
      images: 4,
      color: 'from-orange-500/20',
    },
  ];

  const recentUploads = [
    {
      title: 'Valhall at Waungaze Station',
      author: 'CMDR Skalfinn',
      date: '2025-11-02',
      category: 'Fleet Carrier',
    },
    {
      title: 'Mining Wing in Pristine Ring',
      author: 'CMDR RedMiner',
      date: '2025-10-31',
      category: 'Mining',
    },
    {
      title: 'Distant Star System Discovery',
      author: 'CMDR Explorer42',
      date: '2025-10-29',
      category: 'Exploration',
    },
    {
      title: 'Squadron Formation Flyby',
      author: 'CMDR FleetLeader',
      date: '2025-10-27',
      category: 'Community',
    },
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
              <FaImages className="text-4xl md:text-5xl text-norway-red" />
              <h1 className="text-4xl md:text-5xl font-bold text-white">Gallery</h1>
            </div>
            <p className="text-lg text-gray-300">Screenshots and photos from squadron operations, exploration, and community events.</p>
          </div>
        </motion.div>

        {/* Gallery Categories */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8">Image Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleries.map((gallery, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.05 * idx }}
                className="group cursor-pointer"
              >
                <div className={`bg-gradient-to-br ${gallery.color} to-dark/50 border border-norway-red/20 rounded-lg p-6 h-full shadow-glow hover:shadow-glow-hover hover:border-norway-red/60 transition-all`}>
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-white flex-1">{gallery.title}</h3>
                    <span className="ml-2 px-3 py-1 bg-norway-red/20 text-norway-red text-sm font-bold rounded-lg whitespace-nowrap">
                      {gallery.images} photos
                    </span>
                  </div>
                  <p className="text-gray-400 mb-4 text-sm">{gallery.description}</p>
                  <div className="flex items-center gap-2 text-norway-red text-sm font-semibold group-hover:gap-3 transition-all">
                    <span>View Collection</span>
                    <FaExternalLinkAlt className="text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Recent Uploads */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-8">Recent Uploads</h2>
          <div className="space-y-4">
            {recentUploads.map((upload, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.05 * idx }}
                className="bg-dark/50 backdrop-blur-sm rounded-lg p-6 shadow-glow border border-norway-red/20 hover:border-norway-red/60 transition-all hover:bg-dark/60"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-2">{upload.title}</h3>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-gray-400">
                      <span className="flex items-center gap-1">
                        <FaUser className="text-norway-red" />
                        CMDR {upload.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaCalendarAlt className="text-norway-red" />
                        {new Date(upload.date).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-norway-blue/20 text-norway-blue text-xs font-semibold rounded-lg whitespace-nowrap">
                    {upload.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Upload Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-dark/50 backdrop-blur-sm rounded-lg p-8 shadow-glow border border-norway-blue/20"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Submit Your Screenshots</h2>
          <p className="text-gray-300 mb-6">
            Have amazing screenshots from your Elite Dangerous adventures? Share them with the community!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div>
              <h3 className="text-white font-bold mb-2">1. Screenshot</h3>
              <p className="text-gray-400 text-sm">Take a screenshot in-game or import existing images.</p>
            </div>
            <div>
              <h3 className="text-white font-bold mb-2">2. Upload</h3>
              <p className="text-gray-400 text-sm">Join Discord and visit #gallery channel to upload.</p>
            </div>
            <div>
              <h3 className="text-white font-bold mb-2">3. Share</h3>
              <p className="text-gray-400 text-sm">Your submission appears in community gallery instantly!</p>
            </div>
          </div>
          <div className="p-4 bg-norway-red/10 rounded-lg border border-norway-red/30">
            <p className="text-gray-300 text-sm">
              📸 <strong>Guidelines:</strong> High-res screenshots (1080p+), no real-world content, credit original photographers.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
