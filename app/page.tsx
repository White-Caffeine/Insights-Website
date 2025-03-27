'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ConstellationBackground from './components/ConstellationBackground';
import { FaArrowRight, FaCode, FaPaintBrush, FaMobileAlt, FaSearch, FaRocket, FaCog, FaQuoteRight, FaEnvelope, FaCalendar, FaUser } from 'react-icons/fa';
import { SiNextdotjs, SiReact, SiTailwindcss, SiTypescript, SiFigma, SiAdobexd } from 'react-icons/si';
import ProjectCTA from './components/ProjectCTA';

const stats = [
  { id: 1, value: '150+', label: 'Projects Completed' },
  { id: 2, value: '50+', label: 'Happy Clients' },
  { id: 3, value: '5+', label: 'Years Experience' },
  { id: 4, value: '24/7', label: 'Support Available' },
];

const services = [
  {
    id: 1,
    icon: <FaCode className="w-6 h-6" />,
    title: 'Web Development',
    description: 'Building responsive and performant web applications using modern technologies.'
  },
  {
    id: 2,
    icon: <FaPaintBrush className="w-6 h-6" />,
    title: 'UI/UX Design',
    description: 'Creating intuitive and beautiful user interfaces that engage and delight.'
  },
  {
    id: 3,
    icon: <FaMobileAlt className="w-6 h-6" />,
    title: 'Mobile Development',
    description: 'Developing cross-platform mobile applications that work seamlessly.'
  },
  {
    id: 4,
    icon: <FaSearch className="w-6 h-6" />,
    title: 'SEO Optimization',
    description: 'Improving your online presence and search engine rankings.'
  },
  {
    id: 5,
    icon: <FaRocket className="w-6 h-6" />,
    title: 'Performance',
    description: 'Optimizing applications for speed and efficiency.'
  },
  {
    id: 6,
    icon: <FaCog className="w-6 h-6" />,
    title: 'Maintenance',
    description: 'Providing ongoing support and updates for your applications.'
  }
];

const featuredProjects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2089&q=80'
  },
  {
    id: 2,
    title: 'Mobile Banking App',
    category: 'Mobile Development',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
  },
  {
    id: 3,
    title: 'Portfolio Website',
    category: 'UI/UX Design',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80'
  }
];

const technologies = [
  { id: 1, icon: <SiNextdotjs className="w-8 h-8" />, name: 'Next.js' },
  { id: 2, icon: <SiReact className="w-8 h-8" />, name: 'React' },
  { id: 3, icon: <SiTailwindcss className="w-8 h-8" />, name: 'Tailwind CSS' },
  { id: 4, icon: <SiTypescript className="w-8 h-8" />, name: 'TypeScript' },
  { id: 5, icon: <SiFigma className="w-8 h-8" />, name: 'Figma' },
  { id: 6, icon: <SiAdobexd className="w-8 h-8" />, name: 'Adobe XD' }
];

const testimonials = [
  {
    id: 1,
    name: "John Smith",
    role: "CEO at TechCorp",
    content: "Working with Team Insights was a game-changer for our business. Their expertise and dedication delivered exceptional results.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Marketing Director",
    content: "The attention to detail and creative solutions provided by Team Insights exceeded our expectations.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Product Manager",
    content: "Their innovative approach and technical expertise helped us launch our product ahead of schedule.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  }
];

const blogPosts = [
  {
    id: 1,
    title: "The Future of Web Development: Trends to Watch in 2024",
    excerpt: "Explore the latest trends shaping the future of web development, from AI integration to advanced frameworks.",
    image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    date: "March 15, 2024",
    author: "Sarah Johnson",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "Designing for Accessibility: A Comprehensive Guide",
    excerpt: "Learn how to create inclusive digital experiences that work for everyone, regardless of ability.",
    image: "https://images.unsplash.com/photo-1587440871875-191322ee64b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    date: "March 12, 2024",
    author: "Michael Chen",
    readTime: "7 min read"
  },
  {
    id: 3,
    title: "Digital Marketing Strategies for 2024",
    excerpt: "Discover the most effective digital marketing strategies to grow your business in the current landscape.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    date: "March 10, 2024",
    author: "Emily Davis",
    readTime: "6 min read"
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      <ConstellationBackground />
      
      <div className="relative" style={{ zIndex: 2 }}>
        <Navbar />

        {/* Original Hero Section */}
        <section className="relative container mx-auto px-6 pt-40 pb-20">
          {/* Main Content */}
          <div className="relative max-w-2xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl sm:text-7xl font-light mb-6 sm:mb-8 leading-tight"
            >
              This is
              <br />
              <span className="text-white">Team </span>
              <span className="text-blue-600">Insights</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-400 text-base sm:text-lg mb-8 sm:mb-10 leading-relaxed"
            >
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
              Velit officia consequat duis enim velit mollit. Exercitation veniam consequat
              sunt nostrud amet.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-6 sm:gap-8"
            >
              <Link
                href="/contact"
                className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300 text-sm font-medium"
              >
                Discuss for Projects
              </Link>
              
              <Link
                href="/projects"
                className="flex items-center gap-2 sm:gap-3 text-white hover:text-blue-600 transition-colors group text-sm sm:text-base"
              >
                View Portfolios
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          {/* Skill Badge */}
          <motion.div
            className="absolute bottom-20 sm:bottom-32 right-1/4 sm:right-1/3 flex items-center justify-center w-24 sm:w-32 h-24 sm:h-32"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute inset-0">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <defs>
                  <path
                    id="circle"
                    d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  />
                </defs>
                <text fontSize="8" fill="white">
                  <textPath href="#circle" startOffset="0%">
                    100% skilled in Design • 100% skilled in Design •
                  </textPath>
                </text>
              </svg>
            </div>
            <div className="w-2 h-2 bg-white transform rotate-45" />
          </motion.div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-zinc-900/30">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl sm:text-4xl font-light text-blue-600 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl sm:text-4xl font-light mb-4"
              >
                Our <span className="text-blue-600">Services</span>
              </motion.h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                We offer a comprehensive range of digital services to help your business
                thrive in the modern digital landscape.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 bg-zinc-900/30 rounded-2xl hover:bg-zinc-900/50 transition-colors group"
                >
                  <div className="w-12 h-12 bg-blue-600/10 rounded-xl flex items-center justify-center mb-4 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-light mb-2">{service.title}</h3>
                  <p className="text-gray-400">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="py-20 bg-zinc-900/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl sm:text-4xl font-light mb-4"
              >
                Featured <span className="text-blue-600">Projects</span>
              </motion.h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Take a look at some of our recent work that showcases our expertise
                and attention to detail.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-2xl"
                >
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-60" />
                  </div>
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <div className="text-sm text-blue-400 mb-2">{project.category}</div>
                    <h3 className="text-xl font-light">{project.title}</h3>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-500 transition-colors"
              >
                View All Projects
                <FaArrowRight className="text-sm" />
              </Link>
            </div>
          </div>
        </section>

        {/* Technology Stack Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl sm:text-4xl font-light mb-4"
              >
                Our <span className="text-blue-600">Tech Stack</span>
              </motion.h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                We use cutting-edge technologies to build modern and scalable solutions.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-zinc-900/30 transition-colors group"
                >
                  <div className="text-gray-400 group-hover:text-blue-600 transition-colors">
                    {tech.icon}
                  </div>
                  <div className="text-sm text-gray-400 group-hover:text-white transition-colors">
                    {tech.name}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
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
                Don't just take our word for it. Here's what our clients have to say about working with us.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-zinc-900/50 p-6 rounded-2xl relative"
                >
                  <div className="absolute top-6 right-6 text-blue-600">
                    <FaQuoteRight className="w-6 h-6 opacity-50" />
                  </div>
                  <div className="flex items-center gap-4 mb-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="rounded-full"
                    />
                    <div>
                      <h3 className="font-medium">{testimonial.name}</h3>
                      <p className="text-sm text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-300">{testimonial.content}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Preview Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl sm:text-4xl font-light mb-4"
              >
                Latest <span className="text-blue-600">Insights</span>
              </motion.h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Stay updated with our latest articles, tutorials, and industry insights.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {blogPosts.slice(0, 3).map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-zinc-900/50 rounded-2xl overflow-hidden group"
                >
                  <div className="relative h-48">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                      <span className="flex items-center gap-2">
                        <FaCalendar className="w-4 h-4" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-2">
                        <FaUser className="w-4 h-4" />
                        {post.author}
                      </span>
                    </div>
                    <h2 className="text-xl font-light mb-3 group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-400 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">{post.readTime}</span>
                      <Link
                        href={`/blog/${post.id}`}
                        className="text-blue-600 hover:text-blue-500 transition-colors"
                      >
                        Read More →
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-500 transition-colors"
              >
                View All Articles
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 bg-zinc-900/30">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-8"
              >
                <h2 className="text-3xl sm:text-4xl font-light mb-4">
                  Stay <span className="text-blue-600">Updated</span>
                </h2>
                <p className="text-gray-400">
                  Subscribe to our newsletter for the latest insights, articles, and resources.
                </p>
              </motion.div>

              <motion.form
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto"
              >
                <div className="flex-1 relative">
                  <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full pl-12 pr-4 py-3 bg-black/30 border border-zinc-800 rounded-full focus:outline-none focus:border-blue-600 transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                >
                  Subscribe
                </button>
              </motion.form>
            </div>
          </div>
        </section>

        {/* Project CTA Section */}
        <ProjectCTA />

        <div className="relative" style={{ zIndex: 2 }}>
          <Footer />
        </div>
      </div>
    </main>
  );
} 