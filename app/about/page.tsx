'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import { FaEnvelope, FaStore, FaSearch, FaHistory, FaAward, FaHandshake, FaLightbulb, FaUsers, FaRocket } from 'react-icons/fa';
import Footer from '../components/Footer';
import ConstellationBackground from '../components/ConstellationBackground';
import ProjectCTA from '../components/ProjectCTA';

const processSteps = [
  { id: 1, title: 'Empathize', row: 1, col: 1 },
  { id: 2, title: 'Define', row: 2, col: 1 },
  { id: 3, title: 'Ideate', row: 1, col: 2 },
  { id: 4, title: 'Prototype', row: 2, col: 2 },
  { id: 5, title: 'Qualitative test', row: 1, col: 3 },
  { id: 6, title: 'Quantitative test', row: 2, col: 3 }
];

const ProcessStep = ({ step, index }: { step: typeof processSteps[0], index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="relative"
    >
      {/* Diamond Shape */}
      <div className="relative w-32 sm:w-40 h-32 sm:h-40 rotate-45 border border-zinc-800 bg-black group hover:border-blue-600/50 transition-all duration-300">
        {/* Step Number */}
        <div className="absolute -top-8 -left-8 w-8 h-8 bg-blue-600/10 rounded-full flex items-center justify-center -rotate-45">
          <span className="text-blue-600 text-sm">{index + 1}</span>
        </div>
        
        {/* Content (Rotated back to normal) */}
        <div className="absolute inset-0 -rotate-45 flex items-center justify-center">
          <h3 className="text-base sm:text-xl font-light text-white group-hover:text-blue-600 transition-colors">
            {step.title}
          </h3>
        </div>
        
        {/* Dashed Border */}
        <div className="absolute inset-0 -m-1 rotate-0 border border-dashed border-zinc-800 group-hover:border-blue-600/50 transition-colors" />
      </div>

      {/* Arrows */}
      {step.row === 1 && step.col < 3 && (
        <>
          {/* Diagonal Arrow Down */}
          <div className="absolute bottom-0 right-0 translate-x-[80%] translate-y-[80%] w-24 h-24">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <defs>
                <linearGradient id="arrow-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#2563eb" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="#2563eb" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.3" />
                </linearGradient>
              </defs>
              <path
                d="M10 10 L90 90"
                stroke="url(#arrow-gradient)"
                strokeWidth="2"
                fill="none"
                className="group-hover:stroke-blue-600/50"
              />
              <path
                d="M90 90 L70 85 M90 90 L85 70"
                stroke="url(#arrow-gradient)"
                strokeWidth="2"
                fill="none"
                className="group-hover:stroke-blue-600/50"
              />
            </svg>
          </div>
          
          {/* Horizontal Arrow */}
          <div className="absolute top-1/2 right-0 translate-x-full -translate-y-1/2 w-24">
            <div className="h-0.5 w-full bg-gradient-to-r from-blue-600/50 to-purple-600/50">
              <div className="absolute right-0 -mt-1 border-t-[6px] border-r-[6px] border-b-[6px] border-l-0 border-t-transparent border-r-purple-600/50 border-b-transparent" />
            </div>
          </div>
        </>
      )}
      
      {step.row === 2 && step.col < 3 && (
        <>
          {/* Diagonal Arrow Up */}
          <div className="absolute top-0 right-0 translate-x-[80%] -translate-y-[80%] w-24 h-24">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <path
                d="M10 90 L90 10"
                stroke="url(#arrow-gradient)"
                strokeWidth="2"
                fill="none"
                className="group-hover:stroke-blue-600/50"
              />
              <path
                d="M90 10 L85 30 M90 10 L70 15"
                stroke="url(#arrow-gradient)"
                strokeWidth="2"
                fill="none"
                className="group-hover:stroke-blue-600/50"
              />
            </svg>
          </div>
          
          {/* Horizontal Arrow */}
          <div className="absolute top-1/2 right-0 translate-x-full -translate-y-1/2 w-24">
            <div className="h-0.5 w-full bg-gradient-to-r from-blue-600/50 to-purple-600/50">
              <div className="absolute right-0 -mt-1 border-t-[6px] border-r-[6px] border-b-[6px] border-l-0 border-t-transparent border-r-purple-600/50 border-b-transparent" />
            </div>
          </div>
        </>
      )}
    </motion.div>
  );
};

const specialties = [
  {
    id: 1,
    title: 'Email marketing',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
    icon: <FaEnvelope className="w-8 h-8" />,
    iconColor: 'text-purple-500'
  },
  {
    id: 2,
    title: 'Market analysis',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
    icon: <FaStore className="w-8 h-8" />,
    iconColor: 'text-cyan-500'
  },
  {
    id: 3,
    title: 'Keyword research',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
    icon: <FaSearch className="w-8 h-8" />,
    iconColor: 'text-blue-500'
  }
];

const SpecialtyCard = ({ specialty, index }: { specialty: typeof specialties[0], index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="relative p-6 sm:p-8 bg-zinc-900/30 rounded-2xl group hover:bg-zinc-900/50 transition-all duration-300"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,0.2)_50%,transparent_75%)] opacity-20 rounded-2xl" />

      {/* Icon */}
      <div className="relative mb-4 sm:mb-6">
        <div className={`w-12 sm:w-16 h-12 sm:h-16 flex items-center justify-center ${specialty.iconColor}`}>
          {specialty.icon}
        </div>
      </div>

      {/* Content */}
      <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 relative">
        {specialty.title}
        <div className="h-1 w-8 bg-blue-600 mt-2" />
      </h3>
      <p className="text-gray-400 leading-relaxed relative text-sm sm:text-base">
        {specialty.description}
      </p>
    </motion.div>
  );
};

const teamMembers = [
  {
    id: 1,
    name: 'John Doe',
    role: 'Web Developer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.'
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    role: 'UI & UX Design',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.'
  },
  {
    id: 3,
    name: 'Michael Smith',
    role: 'Video Editor',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.'
  },
  {
    id: 4,
    name: 'Robert Wilson',
    role: 'Social Media Manager',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.'
  }
];

const TeamMemberCard = ({ member, index }: { member: typeof teamMembers[0], index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="group relative"
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-zinc-900">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover grayscale transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-60" />
        
        {/* Background Shape */}
        <div className="absolute -bottom-2 -right-2 w-4/5 h-4/5 bg-zinc-800/50 rounded-2xl -z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1" />
      </div>

      {/* Content */}
      <div className="mt-4 sm:mt-6">
        <h3 className="text-xl sm:text-2xl font-light">{member.role}</h3>
        <p className="mt-3 sm:mt-4 text-gray-400 text-sm sm:text-base">
          {member.description}
        </p>
      </div>
    </motion.div>
  );
};

const timeline = [
  {
    id: 1,
    year: "2019",
    title: "Company Founded",
    description: "Team Insights was established with a vision to transform digital experiences."
  },
  {
    id: 2,
    year: "2020",
    title: "First Major Project",
    description: "Successfully delivered our first enterprise-level web application."
  },
  {
    id: 3,
    year: "2021",
    title: "Team Expansion",
    description: "Grew our team and opened new office locations to serve more clients."
  },
  {
    id: 4,
    year: "2022",
    title: "Innovation Award",
    description: "Recognized for our innovative approach to digital solutions."
  },
  {
    id: 5,
    year: "2023",
    title: "Global Reach",
    description: "Expanded our services to international markets and diverse industries."
  }
];

const coreValues = [
  {
    id: 1,
    icon: <FaHandshake className="w-8 h-8" />,
    title: "Trust & Integrity",
    description: "Building lasting relationships through transparency and honesty."
  },
  {
    id: 2,
    icon: <FaLightbulb className="w-8 h-8" />,
    title: "Innovation",
    description: "Constantly pushing boundaries and embracing new technologies."
  },
  {
    id: 3,
    icon: <FaUsers className="w-8 h-8" />,
    title: "Collaboration",
    description: "Working together to achieve exceptional results."
  },
  {
    id: 4,
    icon: <FaRocket className="w-8 h-8" />,
    title: "Excellence",
    description: "Delivering the highest quality in everything we do."
  }
];

const achievements = [
  {
    id: 1,
    metric: "500+",
    label: "Projects Completed",
    description: "Successfully delivered projects across various industries"
  },
  {
    id: 2,
    metric: "50M+",
    label: "User Interactions",
    description: "Engaging users through our digital solutions"
  },
  {
    id: 3,
    metric: "15+",
    label: "Industry Awards",
    description: "Recognition for excellence and innovation"
  },
  {
    id: 4,
    metric: "99%",
    label: "Client Satisfaction",
    description: "Consistently exceeding client expectations"
  }
];

export default function About() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      <ConstellationBackground />
      
      <div className="relative" style={{ zIndex: 2 }}>
        <div className="pointer-events-auto">
          <Navbar />
        </div>

        {/* Hero Section */}
        <section className="relative container mx-auto px-6 pt-40 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-5xl font-light mb-6"
            >
              About Us
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-gray-400 text-lg mb-8"
            >
              We are a team of passionate designers and developers dedicated to creating
              exceptional digital experiences.
            </motion.p>
          </motion.div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-12 mt-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-900/50 p-8 rounded-2xl backdrop-blur-sm"
            >
              <h2 className="text-2xl font-light mb-4">Our Mission</h2>
              <p className="text-gray-400">
                To deliver innovative and high-quality digital solutions that help businesses
                thrive in the modern digital landscape.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gray-900/50 p-8 rounded-2xl backdrop-blur-sm"
            >
              <h2 className="text-2xl font-light mb-4">Our Vision</h2>
              <p className="text-gray-400">
                To be the leading force in digital innovation, setting new standards in
                design and development excellence.
              </p>
            </motion.div>
          </div>

          {/* Process Steps */}
          <div className="mt-32">
            <div className="text-center mb-16">
              <p className="text-gray-400 uppercase tracking-wider mb-4">ABOUT US</p>
              <h2 className="text-4xl font-light">
                Our <span className="text-blue-600">work process</span>
              </h2>
              <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                Our systematic approach ensures quality and efficiency in every project
              </p>
            </div>

            <div className="grid grid-cols-3 gap-y-32 gap-x-16 max-w-6xl mx-auto px-6">
              {processSteps.map((step, index) => (
                <div
                  key={step.id}
                  style={{
                    gridRow: step.row,
                    gridColumn: step.col,
                  }}
                  className="flex justify-center"
                >
                  <ProcessStep step={step} index={index} />
                </div>
              ))}
            </div>
          </div>

          {/* Specialties */}
          <div className="mt-32">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-light text-center mb-16"
            >
              Our Specialties
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {specialties.map((specialty, index) => (
                <SpecialtyCard key={specialty.id} specialty={specialty} index={index} />
              ))}
            </div>
          </div>

          {/* Team Members */}
          <div className="mt-32">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-light text-center mb-16"
            >
              Meet Our Team
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <TeamMemberCard key={member.id} member={member} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Company History Timeline */}
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
                Our <span className="text-blue-600">Journey</span>
              </motion.h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                A timeline of our growth and achievements since inception.
              </p>
            </div>

            <div className="relative max-w-4xl mx-auto">
              {/* Timeline Line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-zinc-800 transform -translate-x-1/2" />

              {/* Timeline Items */}
              {timeline.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "justify-end" : ""
                  } mb-12 last:mb-0`}
                >
                  <div
                    className={`w-1/2 ${
                      index % 2 === 0 ? "pr-12 text-right" : "pl-12"
                    }`}
                  >
                    <div className="bg-zinc-900/50 p-6 rounded-2xl hover:bg-zinc-900/70 transition-colors">
                      <div className="text-blue-600 text-xl mb-2">{item.year}</div>
                      <h3 className="text-xl font-light mb-2">{item.title}</h3>
                      <p className="text-gray-400 text-sm">{item.description}</p>
                    </div>
                  </div>
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 w-4 h-4 bg-blue-600 rounded-full transform -translate-x-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Values */}
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
                Our Core <span className="text-blue-600">Values</span>
              </motion.h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                The principles that guide our work and relationships.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {coreValues.map((value, index) => (
                <motion.div
                  key={value.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-zinc-900/30 p-6 rounded-2xl hover:bg-zinc-900/50 transition-colors group"
                >
                  <div className="w-16 h-16 bg-blue-600/10 rounded-2xl flex items-center justify-center mb-6 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-light mb-3">{value.title}</h3>
                  <p className="text-gray-400 text-sm">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements */}
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
                Our <span className="text-blue-600">Achievements</span>
              </motion.h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Milestones that mark our success and growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center p-6"
                >
                  <div className="text-4xl sm:text-5xl font-light text-blue-600 mb-4">
                    {achievement.metric}
                  </div>
                  <h3 className="text-xl font-light mb-2">{achievement.label}</h3>
                  <p className="text-gray-400 text-sm">{achievement.description}</p>
                </motion.div>
              ))}
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