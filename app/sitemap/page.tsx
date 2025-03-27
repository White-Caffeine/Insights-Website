'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ConstellationBackground from '../components/ConstellationBackground';
import ProjectCTA from '../components/ProjectCTA';

const sitemapData = [
  {
    title: 'Main Pages',
    links: [
      { name: 'Home', href: '/' },
      { name: 'About Us', href: '/about' },
      { name: 'Services', href: '/service' },
      { name: 'Projects', href: '/projects' },
      { name: 'Blog', href: '/blog' },
      { name: 'Client', href: '/client' },
      { name: 'Contact', href: '/contact' }
    ]
  },
  {
    title: 'Legal',
    links: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Sitemap', href: '/sitemap' }
    ]
  },
  {
    title: 'Services',
    links: [
      { name: 'Web Development', href: '/service#web-development' },
      { name: 'UI/UX Design', href: '/service#ui-ux-design' },
      { name: 'Mobile Development', href: '/service#mobile-development' },
      { name: 'Digital Marketing', href: '/service#digital-marketing' }
    ]
  }
];

export default function Sitemap() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <ConstellationBackground />
      
      <div className="relative" style={{ zIndex: 1 }}>
        <Navbar />

        {/* Sitemap Content */}
        <section className="pt-32 pb-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <h1 className="text-4xl sm:text-5xl font-light mb-8">
                Website <span className="text-blue-600">Sitemap</span>
              </h1>

              <div className="space-y-12">
                {sitemapData.map((section, index) => (
                  <motion.div
                    key={section.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <h2 className="text-2xl font-light mb-6">{section.title}</h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {section.links.map((link) => (
                        <li key={link.href}>
                          <Link
                            href={link.href}
                            className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                          >
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                            {link.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
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