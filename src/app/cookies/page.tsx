'use client';

import { MotionDiv } from '@/components/Motion/MotionDiv';

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-dark py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            Cookie Policy
          </h1>

          <div className="prose prose-invert prose-primary max-w-none">
            <p className="text-gray-300 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-white">1. What Are Cookies</h2>
              <p className="text-gray-300">
                Cookies are small text files that are stored on your computer or mobile device when you visit our website. They help us make your experience better by:
              </p>
              <ul className="list-disc pl-6 mt-4 text-gray-300">
                <li>Remembering your preferences</li>
                <li>Keeping you signed in</li>
                <li>Understanding how you use our website</li>
                <li>Improving our services based on your behavior</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-white">2. Types of Cookies We Use</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Essential Cookies</h3>
                  <p className="text-gray-300">
                    Required for the website to function properly. They enable basic features like page navigation and access to secure areas.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Functionality Cookies</h3>
                  <p className="text-gray-300">
                    Help us remember your preferences and personalize your experience.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Analytics Cookies</h3>
                  <p className="text-gray-300">
                    Help us understand how visitors interact with our website by collecting and reporting information anonymously.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-white">3. Managing Cookies</h2>
              <p className="text-gray-300">
                You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed. However, if you do this, you may have to manually adjust some preferences every time you visit a site and some services and functionalities may not work.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-white">4. Third-Party Cookies</h2>
              <p className="text-gray-300">
                We use some third-party services that may set cookies on your device. These include:
              </p>
              <ul className="list-disc pl-6 mt-4 text-gray-300">
                <li>Google Analytics for website analytics</li>
                <li>Discord for authentication</li>
                <li>Social media platforms for content sharing</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-white">5. Updates to This Policy</h2>
              <p className="text-gray-300">
                We may update this Cookie Policy from time to time. We encourage you to periodically review this page for the latest information on our cookie practices.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">6. Contact Us</h2>
              <p className="text-gray-300">
                If you have any questions about our use of cookies, please contact us at privacy@veka.gg
              </p>
            </section>
          </div>
        </MotionDiv>
      </div>
    </div>
  );
} 