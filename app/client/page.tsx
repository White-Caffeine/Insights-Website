'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ConstellationBackground from '../components/ConstellationBackground';
import ProjectCTA from '../components/ProjectCTA';

const testimonials = [
  {
    id: 1,
    quote: "Service is good and I recommend",
    content: [
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
      "Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
      "Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint."
    ],
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    signature: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  }
  // Add more testimonials here if needed
];

const TestimonialCard = ({ testimonial, index }: { testimonial: typeof testimonials[0], index: number }) => {
  return (
    <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
      {/* Client Image */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        className="relative"
      >
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src={testimonial.image}
              alt={`Client ${testimonial.id}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
        className="relative px-4 sm:px-0"
      >
        {/* Decorative Star */}
        <motion.div 
          className="absolute -bottom-4 sm:-bottom-8 -right-4 sm:-right-8 w-12 sm:w-16 h-12 sm:h-16 text-blue-600"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0L14.645 9.355L24 12L14.645 14.645L12 24L9.355 14.645L0 12L9.355 9.355L12 0Z" />
          </svg>
        </motion.div>

        {/* Quote */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
          className="text-2xl sm:text-3xl font-light mb-6 sm:mb-8"
        >
          "{testimonial.quote}"
        </motion.h2>

        {/* Testimonial Content */}
        <div className="space-y-4 sm:space-y-6">
          {testimonial.content.map((paragraph, pIndex) => (
            <motion.p 
              key={pIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 + 0.4 + (pIndex * 0.1) }}
              className="text-gray-400 leading-relaxed text-sm sm:text-base"
            >
              {paragraph}
            </motion.p>
          ))}
        </div>

        {/* Signature */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
          className="mt-6 sm:mt-8"
        >
          <Image
            src={testimonial.signature}
            alt="Signature"
            width={120}
            height={48}
            className="opacity-90 sm:w-[150px] sm:h-[60px]"
            sizes="(max-width: 768px) 120px, 150px"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default function Client() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <ConstellationBackground />
      
      <div className="relative" style={{ zIndex: 1 }}>
        <div className="pointer-events-auto">
          <Navbar />
        </div>
        
        <section className="container mx-auto px-4 pt-32 pb-20">
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-gray-400 uppercase tracking-wider mb-4"
            >
              TESTIMONIALS
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-5xl font-light mb-6"
            >
              What Our <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-blue-600"
              >
                Clients Say
              </motion.span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-400 max-w-2xl mx-auto"
            >
              Discover what our clients have to say about their experience working with us
              and the results we've delivered.
            </motion.p>
          </div>

          {/* Testimonials */}
          <div className="space-y-20 sm:space-y-32">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
            ))}
          </div>
        </section>

        {/* Project CTA Section */}
        <ProjectCTA />
      </div>

      <div className="relative" style={{ zIndex: 1 }}>
        <Footer />
      </div>
    </main>
  );
} 