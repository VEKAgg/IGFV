'use client';

import { useState } from 'react';
import { MotionDiv } from '@/components/Motion/MotionDiv';

export function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <section className="bg-dark-lighter">
      <div className="container mx-auto px-6 py-12">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            Join Our Newsletter
          </h2>
          <p className="text-gray-400 mb-8">
            Stay updated with the latest gaming news and community events.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="px-6 py-3 bg-dark border border-dark-lighter rounded-lg focus:outline-none focus:border-primary text-gray-300 w-full sm:w-auto"
              required
            />
            <MotionDiv
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3 bg-primary hover:bg-primary-dark text-white rounded-lg transition-colors shadow-glow hover:shadow-glow-hover"
              >
                Subscribe
              </button>
            </MotionDiv>
          </form>
        </MotionDiv>
      </div>
    </section>
  );
} 