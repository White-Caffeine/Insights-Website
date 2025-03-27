'use client';

import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import { FaArrowRight, FaPalette, FaLightbulb, FaInstagram, FaChartBar, FaDesktop, FaCode, FaCheck, FaQuestionCircle } from 'react-icons/fa';
import Footer from '../components/Footer';
import ConstellationBackground from '../components/ConstellationBackground';
import ProjectCTA from '../components/ProjectCTA';

const services = [
  {
    icon: <FaPalette className="w-8 h-8" />,
    title: 'Digital branding',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.'
  },
  {
    icon: <FaLightbulb className="w-8 h-8" />,
    title: 'Creative solutions',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.'
  },
  {
    icon: <FaInstagram className="w-8 h-8" />,
    title: 'Social Media Management',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.'
  },
  {
    icon: <FaChartBar className="w-8 h-8" />,
    title: 'Business analytics',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.'
  },
  {
    icon: <FaDesktop className="w-8 h-8" />,
    title: 'UI & UX Design',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.'
  },
  {
    icon: <FaCode className="w-8 h-8" />,
    title: 'Web Development',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.'
  }
];

const pricingPlans = [
  {
    id: 1,
    name: "Basic",
    price: "$499",
    description: "Perfect for small businesses and startups",
    features: [
      "5 Pages Website",
      "Basic SEO Setup",
      "Mobile Responsive",
      "Social Media Integration",
      "Contact Form"
    ],
    isPopular: false
  },
  {
    id: 2,
    name: "Professional",
    price: "$999",
    description: "Ideal for growing businesses",
    features: [
      "10 Pages Website",
      "Advanced SEO Setup",
      "Mobile Responsive",
      "Social Media Integration",
      "Contact Form",
      "Custom Animations",
      "Analytics Dashboard",
      "Priority Support"
    ],
    isPopular: true
  },
  {
    id: 3,
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations with specific needs",
    features: [
      "Unlimited Pages",
      "Enterprise SEO",
      "Custom Features",
      "Dedicated Support",
      "Custom Integrations",
      "Performance Optimization",
      "Security Features",
      "Regular Updates"
    ],
    isPopular: false
  }
];

const processSteps = [
  {
    id: 1,
    title: "Discovery",
    description: "We start by understanding your business goals and requirements.",
    icon: "01"
  },
  {
    id: 2,
    title: "Planning",
    description: "Creating a detailed roadmap and strategy for your project.",
    icon: "02"
  },
  {
    id: 3,
    title: "Design",
    description: "Crafting beautiful and functional designs that align with your brand.",
    icon: "03"
  },
  {
    id: 4,
    title: "Development",
    description: "Building your solution using the latest technologies.",
    icon: "04"
  },
  {
    id: 5,
    title: "Testing",
    description: "Rigorous testing to ensure everything works perfectly.",
    icon: "05"
  },
  {
    id: 6,
    title: "Launch",
    description: "Deploying your project and providing ongoing support.",
    icon: "06"
  }
];

const faqs = [
  {
    id: 1,
    question: "What services do you offer?",
    answer: "We offer a comprehensive range of digital services including web development, UI/UX design, digital branding, and social media management."
  },
  {
    id: 2,
    question: "How long does a typical project take?",
    answer: "Project timelines vary depending on complexity. A typical website project takes 4-8 weeks, while larger projects may take 3-6 months."
  },
  {
    id: 3,
    question: "Do you offer ongoing support?",
    answer: "Yes, we provide ongoing support and maintenance services to ensure your digital solutions continue to perform optimally."
  },
  {
    id: 4,
    question: "What is your pricing structure?",
    answer: "We offer flexible pricing options based on project scope and requirements. Contact us for a custom quote."
  }
];

const ServiceCard = ({ service, index }: { service: typeof services[0], index: number }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="relative bg-zinc-900/50 p-8 rounded-2xl overflow-hidden group"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,0.2)_50%,transparent_75%)] opacity-20" />
      
      {/* Icon Container */}
      <motion.div 
        className="relative z-10 mb-6"
        whileHover={{ rotate: [0, -10, 10, -10, 0] }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-16 h-16 rounded-full border-2 border-blue-600 flex items-center justify-center text-blue-600 transition-all duration-300 group-hover:border-opacity-100 group-hover:shadow-lg group-hover:shadow-blue-600/20">
          {service.icon}
        </div>
      </motion.div>

      {/* Content */}
      <motion.h3 
        className="text-xl font-semibold mb-4 relative z-10"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
      >
        {service.title}
      </motion.h3>
      <motion.p 
        className="text-gray-400 mb-6 relative z-10"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
      >
        {service.description}
      </motion.p>

      {/* CTA Button */}
      <motion.button 
        className="flex items-center gap-2 text-blue-600 hover:text-blue-500 transition-colors relative z-10"
        whileHover={{ x: 5 }}
        transition={{ duration: 0.2 }}
      >
        Discuss for Projects
        <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
      </motion.button>
    </motion.div>
  );
};

export default function Services() {
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
              SERVICES
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl font-light mb-6"
            >
              Our <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-blue-600"
              >
                services
              </motion.span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-400 max-w-2xl mx-auto"
            >
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
              Velit officia consequat duis enim velit mollit.
            </motion.p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>
        </section>

        {/* Pricing Section */}
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
                Pricing <span className="text-blue-600">Plans</span>
              </motion.h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Choose the perfect plan for your business needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`bg-zinc-900/50 rounded-2xl p-8 relative ${
                    plan.isPopular ? "border-2 border-blue-600" : ""
                  }`}
                >
                  {plan.isPopular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-light mb-2">{plan.name}</h3>
                    <div className="text-4xl font-light text-blue-600 mb-4">
                      {plan.price}
                    </div>
                    <p className="text-gray-400 text-sm">{plan.description}</p>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <FaCheck className="text-blue-600 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="w-full py-3 px-6 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors text-white">
                    Get Started
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
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
                Our <span className="text-blue-600">Process</span>
              </motion.h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                A streamlined approach to delivering exceptional results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative p-6 bg-zinc-900/30 rounded-2xl group hover:bg-zinc-900/50 transition-colors"
                >
                  <div className="text-6xl font-bold text-blue-600/10 absolute top-4 right-4">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-light mb-4 relative z-10">{step.title}</h3>
                  <p className="text-gray-400 text-sm relative z-10">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
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
                Frequently Asked <span className="text-blue-600">Questions</span>
              </motion.h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Find answers to common questions about our services.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              {faqs.map((faq, index) => (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="mb-6 last:mb-0"
                >
                  <div className="flex items-start gap-4 p-6 bg-zinc-900/50 rounded-2xl">
                    <FaQuestionCircle className="text-blue-600 text-xl flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-light mb-2">{faq.question}</h3>
                      <p className="text-gray-400 text-sm">{faq.answer}</p>
                    </div>
                  </div>
                </motion.div>
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