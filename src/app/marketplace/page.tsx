'use client';

import { useState } from 'react';
import { MotionDiv } from '@/components/Motion/MotionDiv';
import { AnimatedBackground } from '@/components/ui/AnimatedBackground';
import { 
  FaSearch, 
  FaStar, 
  FaShoppingCart, 
  FaHeart,
  FaSort
} from 'react-icons/fa';
import Image from 'next/image';

// Sample data - replace with real data later
const sampleProducts = [
  {
    id: 1,
    name: 'Premium Gaming Package',
    description: 'Unlock exclusive in-game items and perks',
    price: 49.99,
    rating: 4.8,
    reviews: 128,
    image: '/images/marketplace/premium-package.jpg',
    category: 'Packages',
    tags: ['Premium', 'Bundle', 'Limited'],
  },
  // ... more products
];

const categories = [
  'All',
  'Packages',
  'Items',
  'Cosmetics',
  'Boosters',
  'Merchandise',
];

export default function Marketplace() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('popular');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search logic
  };

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
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              Marketplace
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Discover exclusive gaming packages, items, and merchandise
            </p>
          </div>

          {/* Search and Filters */}
          <div className="mb-12">
            <form onSubmit={handleSearch} className="flex gap-4 mb-8">
              <div className="flex-1 relative">
                <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search items..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-dark-lighter/50 backdrop-blur-sm rounded-lg border border-dark focus:outline-none focus:border-primary text-gray-300"
                />
              </div>
              <button
                type="submit"
                className="px-8 py-3 bg-primary hover:bg-primary-dark text-white rounded-lg transition-colors shadow-glow hover:shadow-glow-hover"
              >
                Search
              </button>
            </form>

            {/* Categories */}
            <div className="flex flex-wrap gap-4 mb-8">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                    selectedCategory === category
                      ? 'bg-primary text-white'
                      : 'bg-dark-lighter/50 backdrop-blur-sm text-gray-400 hover:text-primary'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Sort Options */}
            <div className="flex items-center gap-4">
              <FaSort className="text-primary" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-dark-lighter/50 backdrop-blur-sm text-gray-400 rounded-lg px-4 py-2 border border-dark focus:outline-none focus:border-primary"
              >
                <option value="popular">Most Popular</option>
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {sampleProducts.map(product => (
              <MotionDiv
                key={product.id}
                whileHover={{ y: -5 }}
                className="bg-dark-lighter/50 backdrop-blur-sm rounded-lg overflow-hidden"
              >
                <div className="relative h-48">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                  <button className="absolute top-4 right-4 text-gray-400 hover:text-primary transition-colors">
                    <FaHeart />
                  </button>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-semibold text-white">{product.name}</h3>
                    <span className="text-primary font-bold">${product.price}</span>
                  </div>

                  <p className="text-gray-400 text-sm mb-4">{product.description}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <FaStar className="text-yellow-500" />
                      <span className="text-gray-400">{product.rating}</span>
                      <span className="text-gray-500">({product.reviews})</span>
                    </div>
                    <button className="text-primary hover:text-primary-light transition-colors">
                      <FaShoppingCart />
                    </button>
                  </div>
                </div>
              </MotionDiv>
            ))}
          </div>
        </MotionDiv>
      </div>
    </AnimatedBackground>
  );
} 