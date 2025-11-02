'use client';

import { useState, useMemo } from 'react';
import { MotionDiv } from '@/components/Motion/MotionDiv';
import { AnimatedBackground } from '@/components/ui/AnimatedBackground';
import { BlogCard } from '@/components/Blog/BlogCard';
import { useBlogPosts } from '@/hooks/useBlogPosts';
import { FaSearch, FaTags, FaGamepad, FaCode, FaKeyboard, FaLaptopCode } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

export default function BlogPage() {
  // State for the search input field
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState('');
  
  // Fetch all blog posts once
  const { data, isLoading } = useBlogPosts();
  
  // Client-side filtering for blog posts
  const filteredPosts = useMemo(() => {
    if (!data?.posts) return [];
    
    return data.posts.filter(post => {
      // Filter by search query (case insensitive)
      const matchesSearch = searchQuery === '' || 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.content.toLowerCase().includes(searchQuery.toLowerCase());
      
      // Filter by tag
      const matchesTag = selectedTag === '' || 
        (post.tags && post.tags.includes(selectedTag));
      
      return matchesSearch && matchesTag;
    });
  }, [data?.posts, searchQuery, selectedTag]);

  // Handle search form submission (not needed for client-side filtering but kept for UX)
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Client-side filtering happens automatically via the filteredPosts memo
  };

  // Handle tag selection
  const handleTagClick = (tag: string) => {
    setSelectedTag(tag === selectedTag ? '' : tag);
  };

  // Clear all filters
  const clearSearch = () => {
    setSearchQuery('');
    setSelectedTag('');
  };

  // Extract all unique tags from all blog posts
  const allTags = useMemo(() => {
    if (!data?.posts) return [];
    return Array.from(new Set(data.posts.flatMap(post => post.tags || [])));
  }, [data?.posts]);

  const hasNoBlogs = !data?.posts || data.posts.length === 0;
  const hasNoSearchResults = filteredPosts.length === 0 && (searchQuery !== '' || selectedTag !== '');

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4"></div>
          <div className="text-primary text-xl font-bold">Loading...</div>
          <div className="text-gray-400 mt-2">Fetching awesome content</div>
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
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              Blog
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Stay updated with the latest gaming news, community updates, and technical insights
            </p>
          </div>

          {/* Search and Filters */}
          <div className="mb-12">
            <form onSubmit={handleSearch} className="flex gap-4 mb-6">
              <div className="flex-1 relative">
                <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-12 py-3 bg-dark-lighter/50 rounded-lg border border-dark focus:outline-none focus:border-primary text-gray-300"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={clearSearch}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary"
                    aria-label="Clear search"
                  >
                    ×
                  </button>
                )}
              </div>
              <button
                type="submit"
                className="px-8 py-3 bg-primary hover:bg-primary-dark text-white rounded-lg transition-colors shadow-glow hover:shadow-glow-hover"
              >
                Search
              </button>
            </form>

            {/* Tags */}
            {allTags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                <FaTags className="text-primary mt-1" />
                {allTags.map(tag => (
                  <button
                    key={tag}
                    onClick={() => handleTagClick(tag)}
                    className={`px-3 py-1 rounded-full text-sm transition-colors ${
                      selectedTag === tag
                        ? 'bg-primary text-white'
                        : 'bg-dark-lighter/50 backdrop-blur-sm text-gray-400 hover:text-primary'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Content Area with AnimatePresence for smooth transitions */}
          <AnimatePresence mode="wait">
            {/* No Blogs State - Only show when there are no blogs at all AND no search is active */}
            {hasNoBlogs && !searchQuery && !selectedTag && (
              <motion.div 
                key="no-blogs"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-dark-lighter rounded-xl p-8 shadow-glow border border-dark text-center"
              >
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <FaGamepad className="text-6xl text-primary animate-pulse" />
                    <FaCode className="text-4xl text-accent absolute -bottom-2 -right-2" />
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-white mb-4">Level Loading...</h2>
                <p className="text-gray-400 mb-6 max-w-lg mx-auto">
                  Our developers are still coding awesome blog content. Check back soon for epic gaming and development insights!
                </p>
                <div className="w-full max-w-md mx-auto h-4 bg-dark rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-primary to-accent"
                    initial={{ width: "0%" }}
                    animate={{ width: "70%" }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                  />
                </div>
                <p className="text-xs text-gray-500 mt-2">70% complete</p>
              </motion.div>
            )}

            {/* No Search Results State */}
            {hasNoSearchResults && (
              <motion.div 
                key="no-results"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-dark-lighter rounded-xl p-8 shadow-glow border border-dark text-center"
              >
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <FaLaptopCode className="text-6xl text-primary" />
                    <FaKeyboard className="text-3xl text-accent absolute -bottom-3 -right-3" />
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-white mb-4">404: Content Not Found</h2>
                <p className="text-gray-400 mb-6 max-w-lg mx-auto">
                  {searchQuery ? (
                    <>Your search for &ldquo;<span className="text-primary">{searchQuery}</span>&rdquo; didn&apos;t match any articles.</>
                  ) : (
                    <>No articles found with the tag &ldquo;<span className="text-primary">{selectedTag}</span>&rdquo;.</>
                  )}
                </p>
                <button
                  onClick={clearSearch}
                  className="px-6 py-2 bg-primary hover:bg-primary-dark text-white rounded-lg transition-colors shadow-glow hover:shadow-glow-hover"
                >
                  Clear Filters
                </button>
              </motion.div>
            )}

            {/* Blog Posts Grid */}
            {!hasNoBlogs && !hasNoSearchResults && (
              <motion.div
                key="blog-grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredPosts.map((post, index) => (
                    <BlogCard 
                      key={post.slug} 
                      post={post} 
                      priority={index < 6} 
                    />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </MotionDiv>
      </div>
    </AnimatedBackground>
  );
} 