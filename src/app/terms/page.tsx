'use client';

import { MotionDiv } from '@/components/Motion/MotionDiv';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-dark py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            Terms of Service
          </h1>

          <div className="prose prose-invert prose-primary max-w-none">
            <p className="text-gray-300 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-white">1. Agreement to Terms</h2>
              <p className="text-gray-300">
                By accessing and using VEKA, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-white">2. User Accounts</h2>
              <p className="text-gray-300">
                When you create an account with us, you must provide accurate and complete information. You are responsible for maintaining the security of your account and password.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-white">3. Acceptable Use</h2>
              <p className="text-gray-300">
                You agree not to:
              </p>
              <ul className="list-disc pl-6 mt-4 text-gray-300">
                <li>Use the service for any illegal purposes</li>
                <li>Post unauthorized commercial communications</li>
                <li>Engage in harassment or hate speech</li>
                <li>Upload malicious content</li>
                <li>Attempt to access accounts or data not belonging to you</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-white">4. Content Guidelines</h2>
              <p className="text-gray-300">
                Users are responsible for the content they post. Content must not violate any applicable laws or infringe on intellectual property rights.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-white">5. Intellectual Property</h2>
              <p className="text-gray-300">
                The service and its original content, features, and functionality are owned by VEKA and are protected by international copyright, trademark, and other intellectual property laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-white">6. Termination</h2>
              <p className="text-gray-300">
                We may terminate or suspend your account and access to the service immediately, without prior notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-white">7. Limitation of Liability</h2>
              <p className="text-gray-300">
                VEKA shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-white">8. Changes to Terms</h2>
              <p className="text-gray-300">
                We reserve the right to modify or replace these terms at any time. We will provide notice of any significant changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">9. Contact Us</h2>
              <p className="text-gray-300">
                If you have any questions about these Terms, please contact us at support@veka.gg
              </p>
            </section>
          </div>
        </MotionDiv>
      </div>
    </div>
  );
} 