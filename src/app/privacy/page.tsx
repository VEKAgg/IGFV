'use client';

import { MotionDiv } from '@/components/Motion/MotionDiv';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-dark py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            Privacy Policy
          </h1>

          <div className="prose prose-invert prose-primary max-w-none">
            <p className="text-gray-300 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-white">1. Information We Collect</h2>
              <p className="text-gray-300">
                We collect information you provide directly to us when you:
              </p>
              <ul className="list-disc pl-6 mt-4 text-gray-300">
                <li>Create an account</li>
                <li>Use our services</li>
                <li>Communicate with us</li>
                <li>Subscribe to our newsletters</li>
                <li>Participate in our events or promotions</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-white">2. How We Use Your Information</h2>
              <p className="text-gray-300">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 mt-4 text-gray-300">
                <li>Provide and maintain our services</li>
                <li>Process your transactions</li>
                <li>Send you technical notices and support messages</li>
                <li>Communicate with you about products, services, and events</li>
                <li>Monitor and analyze trends and usage</li>
                <li>Prevent fraud and abuse</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-white">3. Information Sharing</h2>
              <p className="text-gray-300">
                We do not sell your personal information. We may share your information with:
              </p>
              <ul className="list-disc pl-6 mt-4 text-gray-300">
                <li>Service providers who assist in our operations</li>
                <li>Professional advisors</li>
                <li>Law enforcement when required by law</li>
                <li>Other users when you choose to share content publicly</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-white">4. Data Security</h2>
              <p className="text-gray-300">
                We implement appropriate technical and organizational measures to protect your personal information. However, no security system is impenetrable.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-white">5. Your Rights</h2>
              <p className="text-gray-300">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 mt-4 text-gray-300">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Object to processing of your information</li>
                <li>Request data portability</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-white">6. Cookies and Tracking</h2>
              <p className="text-gray-300">
                We use cookies and similar tracking technologies to collect information about your browsing activities. You can control cookies through your browser settings.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-white">7. Children&apos;s Privacy</h2>
              <p className="text-gray-300">
                Our services are not intended for children under 13. We do not knowingly collect information from children under 13.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-white">8. Changes to Privacy Policy</h2>
              <p className="text-gray-300">
                We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">9. Contact Us</h2>
              <p className="text-gray-300">
                If you have questions about this Privacy Policy, please contact us at privacy@veka.gg
              </p>
            </section>
          </div>
        </MotionDiv>
      </div>
    </div>
  );
} 
