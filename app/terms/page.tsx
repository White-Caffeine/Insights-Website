'use client';

import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ConstellationBackground from '../components/ConstellationBackground';
import ProjectCTA from '../components/ProjectCTA';

export default function Terms() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <ConstellationBackground />
      
      <div className="relative" style={{ zIndex: 1 }}>
        <Navbar />

        {/* Terms of Service Content */}
        <section className="pt-32 pb-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <h1 className="text-4xl sm:text-5xl font-light mb-8">
                Terms of <span className="text-blue-600">Service</span>
              </h1>

              <div className="space-y-8 text-gray-300">
                <section>
                  <h2 className="text-2xl font-light mb-4">1. Acceptance of Terms</h2>
                  <p>
                    By accessing and using the Team Insights website and services, you agree to be bound
                    by these Terms of Service. If you do not agree with any part of these terms, please
                    do not use our services.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-light mb-4">2. Services Description</h2>
                  <p>
                    Team Insights provides web development, UI/UX design, mobile development, and digital
                    marketing services. We reserve the right to modify, suspend, or discontinue any part
                    of our services at any time.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-light mb-4">3. Client Responsibilities</h2>
                  <p>
                    As a client, you agree to:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li>Provide accurate and complete information</li>
                    <li>Maintain the security of your account</li>
                    <li>Comply with all applicable laws and regulations</li>
                    <li>Pay for services as agreed upon</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-light mb-4">4. Intellectual Property</h2>
                  <p>
                    All content, designs, and materials created by Team Insights remain our intellectual
                    property until full payment is received. Upon payment, clients receive a license to
                    use the delivered work as specified in the project agreement.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-light mb-4">5. Payment Terms</h2>
                  <p>
                    Payment terms are as follows:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li>50% deposit required to start work</li>
                    <li>Remaining 50% due upon project completion</li>
                    <li>All payments are non-refundable</li>
                    <li>Late payments may incur additional fees</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-light mb-4">6. Project Timeline</h2>
                  <p>
                    Project timelines will be established in the project agreement. Delays caused by
                    client feedback or additional requirements may extend the timeline accordingly.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-light mb-4">7. Limitation of Liability</h2>
                  <p>
                    Team Insights shall not be liable for any indirect, incidental, special,
                    consequential, or punitive damages resulting from your use of our services.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-light mb-4">8. Termination</h2>
                  <p>
                    Either party may terminate services with written notice. Upon termination:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li>Client pays for work completed to date</li>
                    <li>Team Insights delivers completed work</li>
                    <li>Both parties maintain confidentiality obligations</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-light mb-4">9. Changes to Terms</h2>
                  <p>
                    We reserve the right to modify these terms at any time. Continued use of our
                    services after changes constitutes acceptance of the new terms.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-light mb-4">10. Contact Information</h2>
                  <p>
                    For questions about these terms, please contact us at:
                  </p>
                  <p className="mt-2">
                    Email: legal@insights.com<br />
                    Address: 123 Business Street, City, Country
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