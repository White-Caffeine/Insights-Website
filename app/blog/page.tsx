'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ConstellationBackground from '../components/ConstellationBackground';
import ProjectCTA from '../components/ProjectCTA';
import { FaSearch, FaCalendar, FaUser, FaComments, FaTags } from 'react-icons/fa';

const blogPosts = [
  {
    id: 1,
    title: "The Future of Web Development: Trends to Watch in 2024",
    excerpt: "Explore the latest trends shaping the future of web development, from AI integration to sustainable practices.",
    image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Web Development",
    date: "March 15, 2024",
    author: "Sarah Johnson",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "Digital Marketing Strategies for 2024",
    excerpt: "Discover the most effective digital marketing strategies that will help your business grow in 2024.",
    image: "https://images.unsplash.com/photo-1587440871875-191322ee64b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Digital Marketing",
    date: "March 14, 2024",
    author: "Michael Smith",
    readTime: "4 min read"
  },
  {
    id: 3,
    title: "UI/UX Design Principles for Better User Experience",
    excerpt: "Learn the essential UI/UX design principles that can transform your digital products and services.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "UI/UX Design",
    date: "March 13, 2024",
    author: "Robert Wilson",
    readTime: "6 min read"
  },
  {
    id: 4,
    title: "Data Analytics: Making Sense of Big Data",
    excerpt: "A comprehensive guide to understanding and leveraging data analytics for business growth.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Data Analytics",
    date: "March 12, 2024",
    author: "John Doe",
    readTime: "7 min read"
  },
  {
    id: 5,
    title: "Social Media Marketing: Building Your Brand",
    excerpt: "Effective strategies for building and maintaining a strong brand presence on social media platforms.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Social Media",
    date: "March 11, 2024",
    author: "Sarah Johnson",
    readTime: "5 min read"
  },
  {
    id: 6,
    title: "Mobile App Development: Best Practices",
    excerpt: "Essential best practices for developing successful mobile applications in 2024.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Mobile Development",
    date: "March 10, 2024",
    author: "Michael Smith",
    readTime: "6 min read"
  },
  {
    id: 7,
    title: "Content Marketing: Creating Engaging Content",
    excerpt: "Learn how to create compelling content that resonates with your target audience.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Content Marketing",
    date: "March 9, 2024",
    author: "Robert Wilson",
    readTime: "4 min read"
  },
  {
    id: 8,
    title: "SEO Optimization: Improving Your Rankings",
    excerpt: "Effective SEO strategies to improve your website's visibility and rankings.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "SEO",
    date: "March 8, 2024",
    author: "John Doe",
    readTime: "5 min read"
  }
];

const blogCategories = [
  { name: "All", count: 8 },
  { name: "Web Development", count: 1 },
  { name: "Digital Marketing", count: 1 },
  { name: "UI/UX Design", count: 1 },
  { name: "Data Analytics", count: 1 },
  { name: "Social Media", count: 1 },
  { name: "Mobile Development", count: 1 },
  { name: "Content Marketing", count: 1 },
  { name: "SEO", count: 1 }
];

export default function Blog() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <ConstellationBackground />
      
      <div className="relative" style={{ zIndex: 1 }}>
        <div className="pointer-events-auto">
          <Navbar />
        </div>

        {/* Hero Section */}
        <section className="pt-32 pb-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl sm:text-5xl font-light mb-6">
                Our <span className="text-blue-600">Blog</span>
              </h1>
              <p className="text-gray-400 text-lg mb-8">
                Insights, tutorials, and industry updates from our team of experts.
              </p>
            </motion.div>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-2xl mx-auto"
            >
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full bg-zinc-900/50 border border-zinc-800 rounded-2xl pl-12 pr-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-blue-600"
                />
                <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-10 border-t border-zinc-800">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap gap-4 justify-center">
              {blogCategories.map((category, index) => (
                <motion.button
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="px-6 py-2 rounded-full bg-zinc-900/50 text-gray-400 hover:bg-blue-600 hover:text-white transition-colors"
                >
                  {category.name}
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogPosts.map((post, index) => (
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
                      <span className="flex items-center gap-2">
                        <FaTags className="w-4 h-4" />
                        {post.category}
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
          </div>
        </section>

        {/* Project CTA Section */}
        <ProjectCTA />

        <div className="pointer-events-auto relative" style={{ zIndex: 1 }}>
          <Footer />
        </div>
      </div>
    </main>
  );
} 