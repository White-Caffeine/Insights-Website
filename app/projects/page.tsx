'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ConstellationBackground from '../components/ConstellationBackground';
import ProjectCTA from '../components/ProjectCTA';
import { FaCode, FaPaintBrush, FaMobileAlt, FaShoppingCart, FaChartLine, FaQuoteRight } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    title: 'Choose Your Winter Campaign',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    category: 'Marketing'
  },
  {
    id: 2,
    title: 'Make & Work Together',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    category: 'Collaboration'
  },
  {
    id: 3,
    title: 'Improve your skills with Oopix',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    category: 'Education'
  },
  {
    id: 4,
    title: 'Business Solutions Platform',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    category: 'Business'
  },
  {
    id: 5,
    title: 'Think. Make. Solve.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    category: 'Innovation'
  },
  {
    id: 6,
    title: 'Creative Development',
    image: 'https://images.unsplash.com/photo-1522070114585-3894dc2bcbaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    category: 'Development'
  }
];

const ProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="group relative overflow-hidden rounded-2xl bg-zinc-900"
    >
      {/* Project Image */}
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
          className="h-full w-full"
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        </motion.div>
        {/* Overlay */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"
        />
      </div>

      {/* Content */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileHover={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="absolute bottom-0 left-0 right-0 p-6"
      >
        <motion.span 
          initial={{ opacity: 0, x: -20 }}
          whileHover={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="text-blue-500 text-sm font-medium mb-2 block"
        >
          {project.category}
        </motion.span>
        <motion.h3 
          initial={{ opacity: 0, x: -20 }}
          whileHover={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="text-xl font-semibold text-white"
        >
          {project.title}
        </motion.h3>
      </motion.div>
    </motion.div>
  );
};

const categories = [
  {
    id: 1,
    icon: <FaCode className="w-8 h-8" />,
    name: "Web Development",
    count: 45,
    description: "Custom websites and web applications"
  },
  {
    id: 2,
    icon: <FaPaintBrush className="w-8 h-8" />,
    name: "UI/UX Design",
    count: 38,
    description: "User interface and experience design"
  },
  {
    id: 3,
    icon: <FaMobileAlt className="w-8 h-8" />,
    name: "Mobile Apps",
    count: 27,
    description: "iOS and Android applications"
  },
  {
    id: 4,
    icon: <FaShoppingCart className="w-8 h-8" />,
    name: "E-commerce",
    count: 31,
    description: "Online store development"
  },
  {
    id: 5,
    icon: <FaChartLine className="w-8 h-8" />,
    name: "Digital Marketing",
    count: 23,
    description: "Marketing and growth solutions"
  }
];

const statistics = [
  { id: 1, value: "250+", label: "Projects Completed" },
  { id: 2, value: "95%", label: "Client Satisfaction" },
  { id: 3, value: "15+", label: "Industry Awards" },
  { id: 4, value: "10+", label: "Years Experience" }
];

const testimonials = [
  {
    id: 1,
    content: "The team delivered an exceptional website that perfectly captures our brand identity. Their attention to detail and creative approach exceeded our expectations.",
    author: "Sarah Johnson",
    role: "CEO, TechStart",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    content: "Working with this team was a game-changer for our business. They understood our needs and delivered a solution that helped us grow significantly.",
    author: "Michael Chen",
    role: "Founder, GrowthLabs",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  }
];

export default function Projects() {
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
              OUR WORK
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl font-light mb-6"
            >
              Featured <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-blue-600"
              >
                Projects
              </motion.span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-400 max-w-2xl mx-auto"
            >
              Explore our portfolio of successful projects and see how we've helped
              businesses achieve their digital goals.
            </motion.p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          {/* View All Projects Button */}
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Link
                href="/projects/all"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white rounded-full py-3 sm:py-4 px-6 sm:px-8 transition-colors text-sm sm:text-base"
              >
                View all Projects
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Project Categories */}
        <section className="py-20 bg-zinc-900/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl sm:text-4xl font-light mb-4"
              >
                Project <span className="text-blue-600">Categories</span>
              </motion.h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Explore our diverse range of expertise across different domains.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-zinc-900/50 p-6 rounded-2xl hover:bg-zinc-900/70 transition-colors group"
                >
                  <div className="w-16 h-16 bg-blue-600/10 rounded-2xl flex items-center justify-center mb-6 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    {category.icon}
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-light">{category.name}</h3>
                    <span className="text-blue-600 text-sm">{category.count} Projects</span>
                  </div>
                  <p className="text-gray-400 text-sm">{category.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {statistics.map((stat, index) => (
                <motion.div
                  key={stat.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl sm:text-5xl font-light text-blue-600 mb-4">
                    {stat.value}
                  </div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Client Testimonials */}
        <section className="py-20 bg-zinc-900/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl sm:text-4xl font-light mb-4"
              >
                Client <span className="text-blue-600">Testimonials</span>
              </motion.h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                What our clients say about working with us.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-zinc-900/50 p-8 rounded-2xl relative"
                >
                  <div className="absolute top-8 right-8 text-blue-600">
                    <FaQuoteRight className="w-8 h-8 opacity-50" />
                  </div>
                  <p className="text-gray-300 mb-8 text-lg">
                    {testimonial.content}
                  </p>
                  <div className="flex items-center gap-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      width={48}
                      height={48}
                      className="rounded-full"
                    />
                    <div>
                      <h3 className="font-medium">{testimonial.author}</h3>
                      <p className="text-gray-400 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Project CTA Section */}
        <ProjectCTA />
      </div>

      <div className="pointer-events-auto relative" style={{ zIndex: 1 }}>
        <Footer />
      </div>
    </main>
  );
} 