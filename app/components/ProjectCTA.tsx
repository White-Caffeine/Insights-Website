'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function ProjectCTA() {
  return (
    <section className="relative bg-black overflow-hidden">
      {/* Full-width image with transparency */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative w-screen h-auto"
      >
        <div className="absolute inset-0 bg-black opacity-30" /> {/* Overlay for transparency */}
        <Image
          src="/assets/images/Frame 12313.png"
          alt="Full Width Banner"
          width={1900}
          height={200}
          className="w-full h-auto object-cover opacity-80"
          priority
        />

        {/* Contact Us Button - Positioned in the middle-right */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="absolute top-1/2 right-10 transform -translate-y-1/2"
        >
          <Link
            href="/contact"
            className="px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors text-sm md:text-base"
          >
            Contact Us
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
