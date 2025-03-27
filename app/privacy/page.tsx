'use client';

import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ConstellationBackground from '../components/ConstellationBackground';
import ProjectCTA from '../components/ProjectCTA';

export default function Privacy() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <ConstellationBackground />
      
      <div className="relative" style={{ zIndex: 1 }}>
        <Navbar />

        {/* Privacy Policy Content */}
        <section className="pt-32 pb-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <h1 className="text-4xl sm:text-5xl font-light mb-8">
                Privacy <span className="text-blue-600">Policy</span>
              </h1>

              <div className="space-y-8 text-gray-300">
                <section>
                  <h2 className="text-2xl font-light mb-4">1. Introduction</h2>
                  <p>
                    At Team Insights, we take your privacy seriously. This Privacy Policy explains how we collect,
                    use, disclose, and safeguard your information when you visit our website or use our services.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-light mb-4">2. Information We Collect</h2>
                  <p>
                    We collect information that you provide directly to us, including but not limited to:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li>Name and contact information</li>
                    <li>Email address</li>
                    <li>Phone number</li>
                    <li>Project details and requirements</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-light mb-4">3. How We Use Your Information</h2>
                  <p>
                    We use the information we collect to:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li>Provide and maintain our services</li>
                    <li>Communicate with you about our services</li>
                    <li>Improve and personalize your experience</li>
                    <li>Send you marketing communications (with your consent)</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-light mb-4">4. Information Sharing</h2>
                  <p>
                    We do not sell or rent your personal information to third parties. We may share your
                    information with:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li>Service providers who assist in our operations</li>
                    <li>Business partners with your consent</li>
                    <li>Law enforcement when required by law</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-light mb-4">5. Data Security</h2>
                  <p>
                    We implement appropriate security measures to protect your personal information from
                    unauthorized access, alteration, disclosure, or destruction.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-light mb-4">6. Your Rights</h2>
                  <p>
                    You have the right to:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li>Access your personal information</li>
                    <li>Correct inaccurate information</li>
                    <li>Request deletion of your information</li>
                    <li>Opt-out of marketing communications</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-light mb-4">7. Contact Us</h2>
                  <p>
                    If you have any questions about this Privacy Policy, please contact us at:
                  </p>
                  <p className="mt-2">
                    Email: privacy@insights.com<br />
                    Address: 123 Business Street, City, Country
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-light mb-4">8. Updates to This Policy</h2>
                  <p>
                    We may update this Privacy Policy from time to time. We will notify you of any changes
                    by posting the new Privacy Policy on this page and updating the "Last Updated" date.
                  </p>
                </section>
              </div>

              <div className="mt-12 text-sm text-gray-400">
                Last Updated: March 15, 2024
              </div>
            </motion.div>
          </div>
        </section>

        {/* Project CTA Section */}
        <ProjectCTA />

        <Footer />
      </div>
    </main>
  );
} 