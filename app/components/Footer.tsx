'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaLinkedin, FaFacebook, FaTwitter, FaYoutube, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const WHATSAPP_LINK = 'https://wa.me/YOUR_WHATSAPP_NUMBER'; // Replace with actual WhatsApp number

export default function Footer() {
  return (
    <footer className="relative bg-black text-white">
      {/* Footer Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Image
                src="/images/logo.svg"
                alt="Logo"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className="text-xl font-semibold">Insights</span>
            </Link>
            <p className="text-gray-400 mb-4">
              We are a team of passionate designers and developers dedicated to creating
              exceptional digital experiences.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaLinkedin className="text-xl" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaFacebook className="text-xl" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaTwitter className="text-xl" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaYoutube className="text-xl" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/service" className="text-gray-400 hover:text-white transition-colors">
                  Service
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-400 hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/client" className="text-gray-400 hover:text-white transition-colors">
                  Client
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="mailto:contact@insights.com"
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center">
                    <FaEnvelope className="text-sm" />
                  </div>
                  <span>contact@insights.com</span>
                </Link>
              </li>
              <li>
                <Link
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center">
                    <FaWhatsapp className="text-sm" />
                  </div>
                  <span>+1 234 567 890</span>
                </Link>
              </li>
              <li>
                <div className="flex items-center gap-3 text-gray-400">
                  <div className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center">
                    <FaMapMarkerAlt className="text-sm" />
                  </div>
                  <span>123 Business Street, City, Country</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Important</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/sitemap" className="text-gray-400 hover:text-white transition-colors">
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-zinc-800 mt-12 pt-8 text-center text-gray-400">
          <p>© 2024 Insights. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 