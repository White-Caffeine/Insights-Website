'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ConstellationBackground from '../../components/ConstellationBackground';
import ProjectCTA from '../../components/ProjectCTA';
import { FaCalendar, FaUser, FaTags, FaArrowLeft } from 'react-icons/fa';
import '../../styles/blog.css';

// This would typically come from a database or CMS
const blogPosts = [
  {
    id: 1,
    title: "The Future of Web Development: Trends to Watch in 2024",
    content: `
      <p class="lead">As we move further into 2024, the web development landscape continues to evolve at a rapid pace. Here are the key trends that are shaping the future of web development.</p>

      <h2>1. AI Integration in Web Development</h2>
      <p>Artificial Intelligence is no longer just a buzzword. It's becoming an integral part of web development, from automated testing to intelligent content generation. Developers are increasingly leveraging AI tools to:</p>
      <ul>
        <li><strong>Code Generation:</strong> Generate code snippets and boilerplate automatically</li>
        <li><strong>Performance Optimization:</strong> Optimize performance automatically</li>
        <li><strong>User Experience:</strong> Create personalized user experiences</li>
        <li><strong>Security:</strong> Enhance security measures</li>
      </ul>

      <h2>2. WebAssembly (Wasm)</h2>
      <p>WebAssembly continues to gain traction as it enables high-performance applications to run in the browser. This technology is particularly useful for:</p>
      <ul>
        <li><strong>Complex Calculations:</strong> Handle complex calculations and data processing</li>
        <li><strong>Game Development:</strong> Enable cross-platform game development</li>
        <li><strong>Media Applications:</strong> Power video and audio editing applications</li>
        <li><strong>3D Modeling:</strong> Support CAD and 3D modeling tools</li>
      </ul>

      <h2>3. Progressive Web Apps (PWAs)</h2>
      <p>PWAs are becoming increasingly sophisticated and are now considered a standard approach for web applications. Key improvements include:</p>
      <ul>
        <li><strong>Offline Capabilities:</strong> Better offline functionality</li>
        <li><strong>Performance:</strong> Enhanced performance metrics</li>
        <li><strong>User Experience:</strong> Improved user experience</li>
        <li><strong>Compatibility:</strong> Cross-platform compatibility</li>
      </ul>

      <blockquote>
        "The future of web development lies in creating experiences that are not just functional but also sustainable and accessible."
      </blockquote>

      <h2>4. Edge Computing</h2>
      <p>Edge computing is revolutionizing how web applications are delivered and processed. Benefits include:</p>
      <ul>
        <li><strong>Latency:</strong> Reduced latency for better performance</li>
        <li><strong>Scalability:</strong> Improved scalability</li>
        <li><strong>Security:</strong> Better security measures</li>
        <li><strong>Cost:</strong> Optimized cost management</li>
      </ul>

      <h2>5. Sustainable Web Development</h2>
      <p>As environmental concerns grow, sustainable web development practices are gaining importance. This includes:</p>
      <ul>
        <li><strong>Energy Efficiency:</strong> Optimizing energy consumption</li>
        <li><strong>Carbon Footprint:</strong> Reducing carbon footprint</li>
        <li><strong>Green Hosting:</strong> Implementing green hosting solutions</li>
        <li><strong>Resource Management:</strong> Optimizing resource usage</li>
      </ul>

      <p>These trends are not just passing fads but represent fundamental shifts in how we approach web development. Staying current with these developments is crucial for developers who want to remain competitive in the industry.</p>

      <div class="mt-8 p-4 bg-zinc-900/50 rounded-xl border border-zinc-800">
        <h3>Key Takeaways</h3>
        <ul>
          <li>AI is becoming integral to web development</li>
          <li>WebAssembly enables high-performance applications</li>
          <li>PWAs are now a standard approach</li>
          <li>Edge computing improves performance and security</li>
          <li>Sustainable development is gaining importance</li>
        </ul>
      </div>
    `,
    image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    date: "March 15, 2024",
    author: "Sarah Johnson",
    category: "Web Development",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "Digital Marketing Strategies for 2024",
    content: `
      <p>Digital marketing continues to evolve, and 2024 brings new opportunities and challenges. Here's a comprehensive guide to the most effective digital marketing strategies:</p>

      <h2>1. AI-Powered Marketing</h2>
      <p>Artificial Intelligence is transforming how we approach marketing:</p>
      <ul>
        <li>Personalized content recommendations</li>
        <li>Predictive analytics for customer behavior</li>
        <li>Automated content generation</li>
        <li>Smart targeting and segmentation</li>
      </ul>

      <h2>2. Video Marketing</h2>
      <p>Video content continues to dominate social media and marketing channels:</p>
      <ul>
        <li>Short-form video content</li>
        <li>Live streaming events</li>
        <li>Interactive video experiences</li>
        <li>Video SEO optimization</li>
      </ul>

      <h2>3. Voice Search Optimization</h2>
      <p>As voice assistants become more prevalent, optimizing for voice search is crucial:</p>
      <ul>
        <li>Natural language optimization</li>
        <li>Featured snippets optimization</li>
        <li>Local SEO focus</li>
        <li>Mobile-first approach</li>
      </ul>

      <h2>4. Social Commerce</h2>
      <p>The integration of shopping features in social media platforms is growing:</p>
      <ul>
        <li>Instagram Shopping</li>
        <li>Facebook Marketplace</li>
        <li>Social media ads</li>
        <li>Influencer partnerships</li>
      </ul>

      <h2>5. Privacy-First Marketing</h2>
      <p>With increasing privacy concerns, marketers need to adapt:</p>
      <ul>
        <li>First-party data collection</li>
        <li>Transparent data practices</li>
        <li>Consent-based marketing</li>
        <li>Privacy-compliant tracking</li>
      </ul>

      <p>These strategies represent the future of digital marketing. Success in 2024 will require a balanced approach that combines technology with authentic human connection.</p>
    `,
    image: "https://images.unsplash.com/photo-1587440871875-191322ee64b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    date: "March 14, 2024",
    author: "Michael Smith",
    category: "Digital Marketing",
    readTime: "4 min read"
  },
  {
    id: 3,
    title: "UI/UX Design Principles for Better User Experience",
    content: `
      <p>Creating exceptional user experiences requires a deep understanding of UI/UX design principles. Here's a comprehensive guide to designing better digital experiences:</p>

      <h2>1. User-Centered Design</h2>
      <p>The foundation of great UX design starts with understanding your users:</p>
      <ul>
        <li>User research and personas</li>
        <li>User journey mapping</li>
        <li>Usability testing</li>
        <li>Feedback integration</li>
      </ul>

      <h2>2. Visual Hierarchy</h2>
      <p>Effective visual hierarchy guides users through your interface:</p>
      <ul>
        <li>Clear typography scale</li>
        <li>Strategic use of color</li>
        <li>Whitespace management</li>
        <li>Content organization</li>
      </ul>

      <h2>3. Accessibility</h2>
      <p>Designing for accessibility ensures your product is usable by everyone:</p>
      <ul>
        <li>WCAG compliance</li>
        <li>Color contrast</li>
        <li>Screen reader support</li>
        <li>Keyboard navigation</li>
      </ul>

      <h2>4. Responsive Design</h2>
      <p>Modern interfaces must work seamlessly across all devices:</p>
      <ul>
        <li>Mobile-first approach</li>
        <li>Flexible layouts</li>
        <li>Touch-friendly interfaces</li>
        <li>Performance optimization</li>
      </ul>

      <h2>5. Microinteractions</h2>
      <p>Small details that make a big difference:</p>
      <ul>
        <li>Button states</li>
        <li>Loading animations</li>
        <li>Success/error feedback</li>
        <li>Transition effects</li>
      </ul>

      <p>These principles form the foundation of effective UI/UX design. Remember that great design is invisible - users should focus on their tasks, not the interface.</p>
    `,
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    date: "March 13, 2024",
    author: "Robert Wilson",
    category: "UI/UX Design",
    readTime: "6 min read"
  },
  {
    id: 4,
    title: "Data Analytics: Making Sense of Big Data",
    content: `
      <p>In today's data-driven world, understanding and leveraging data analytics is crucial for business success. Here's a comprehensive guide to making sense of big data:</p>

      <h2>1. Data Collection and Management</h2>
      <p>Effective data analytics starts with proper data collection:</p>
      <ul>
        <li>Data sources identification</li>
        <li>Data quality assurance</li>
        <li>Data storage solutions</li>
        <li>Data governance</li>
      </ul>

      <h2>2. Data Analysis Techniques</h2>
      <p>Various methods to analyze your data effectively:</p>
      <ul>
        <li>Descriptive analytics</li>
        <li>Predictive modeling</li>
        <li>Prescriptive analytics</li>
        <li>Machine learning applications</li>
      </ul>

      <h2>3. Data Visualization</h2>
      <p>Making data accessible through effective visualization:</p>
      <ul>
        <li>Chart selection</li>
        <li>Dashboard design</li>
        <li>Interactive visualizations</li>
        <li>Storytelling with data</li>
      </ul>

      <h2>4. Business Intelligence</h2>
      <p>Turning data into actionable insights:</p>
      <ul>
        <li>KPI tracking</li>
        <li>Performance monitoring</li>
        <li>Trend analysis</li>
        <li>Decision support</li>
      </ul>

      <h2>5. Data Security and Privacy</h2>
      <p>Protecting your data assets:</p>
      <ul>
        <li>Data encryption</li>
        <li>Access control</li>
        <li>Compliance requirements</li>
        <li>Privacy protection</li>
      </ul>

      <p>Effective data analytics can transform your business by providing insights that drive better decision-making and improved outcomes.</p>
    `,
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    date: "March 12, 2024",
    author: "John Doe",
    category: "Data Analytics",
    readTime: "7 min read"
  },
  {
    id: 5,
    title: "Social Media Marketing: Building Your Brand",
    content: `
      <p>Social media has become an essential part of modern marketing strategies. Here's how to effectively build your brand on social media:</p>

      <h2>1. Platform Selection</h2>
      <p>Choosing the right platforms for your brand:</p>
      <ul>
        <li>Audience demographics</li>
        <li>Platform features</li>
        <li>Content type suitability</li>
        <li>Resource allocation</li>
      </ul>

      <h2>2. Content Strategy</h2>
      <p>Creating engaging content that resonates:</p>
      <ul>
        <li>Content mix planning</li>
        <li>Visual content creation</li>
        <li>Storytelling techniques</li>
        <li>Engagement tactics</li>
      </ul>

      <h2>3. Community Management</h2>
      <p>Building and maintaining an active community:</p>
      <ul>
        <li>Response management</li>
        <li>Community guidelines</li>
        <li>User-generated content</li>
        <li>Crisis management</li>
      </ul>

      <h2>4. Analytics and Optimization</h2>
      <p>Measuring and improving performance:</p>
      <ul>
        <li>Performance metrics</li>
        <li>Data analysis</li>
        <li>Strategy adjustment</li>
        <li>ROI measurement</li>
      </ul>

      <h2>5. Paid Social Advertising</h2>
      <p>Maximizing reach through paid campaigns:</p>
      <ul>
        <li>Ad targeting</li>
        <li>Budget management</li>
        <li>Creative optimization</li>
        <li>Campaign tracking</li>
      </ul>

      <p>Successful social media marketing requires a strategic approach that combines creativity with data-driven decision-making.</p>
    `,
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    date: "March 11, 2024",
    author: "Sarah Johnson",
    category: "Social Media",
    readTime: "5 min read"
  },
  {
    id: 6,
    title: "Mobile App Development: Best Practices",
    content: `
      <p>Creating successful mobile applications requires following established best practices. Here's a comprehensive guide to mobile app development:</p>

      <h2>1. Planning and Strategy</h2>
      <p>Setting the foundation for success:</p>
      <ul>
        <li>Market research</li>
        <li>User needs analysis</li>
        <li>Feature prioritization</li>
        <li>Technical requirements</li>
      </ul>

      <h2>2. Design Principles</h2>
      <p>Creating intuitive and engaging interfaces:</p>
      <ul>
        <li>Mobile-first design</li>
        <li>Touch-friendly interfaces</li>
        <li>Platform guidelines</li>
        <li>Accessibility considerations</li>
      </ul>

      <h2>3. Development Approach</h2>
      <p>Choosing the right development strategy:</p>
      <ul>
        <li>Native vs. cross-platform</li>
        <li>Framework selection</li>
        <li>Code organization</li>
        <li>Testing strategies</li>
      </ul>

      <h2>4. Performance Optimization</h2>
      <p>Ensuring smooth app performance:</p>
      <ul>
        <li>Load time optimization</li>
        <li>Memory management</li>
        <li>Battery efficiency</li>
        <li>Network optimization</li>
      </ul>

      <h2>5. Security Measures</h2>
      <p>Protecting user data and app integrity:</p>
      <ul>
        <li>Data encryption</li>
        <li>Authentication methods</li>
        <li>API security</li>
        <li>Regular updates</li>
      </ul>

      <p>Following these best practices helps ensure your mobile app is successful, maintainable, and provides a great user experience.</p>
    `,
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    date: "March 10, 2024",
    author: "Michael Smith",
    category: "Mobile Development",
    readTime: "6 min read"
  },
  {
    id: 7,
    title: "Content Marketing: Creating Engaging Content",
    content: `
      <p>Content marketing remains a cornerstone of digital marketing success. Here's how to create content that engages and converts:</p>

      <h2>1. Content Strategy</h2>
      <p>Planning your content approach:</p>
      <ul>
        <li>Audience research</li>
        <li>Content goals</li>
        <li>Content calendar</li>
        <li>Resource allocation</li>
      </ul>

      <h2>2. Content Types</h2>
      <p>Diversifying your content mix:</p>
      <ul>
        <li>Blog posts</li>
        <li>Video content</li>
        <li>Infographics</li>
        <li>Case studies</li>
      </ul>

      <h2>3. Writing Techniques</h2>
      <p>Creating compelling content:</p>
      <ul>
        <li>Storytelling</li>
        <li>SEO optimization</li>
        <li>Readability</li>
        <li>Call-to-action</li>
      </ul>

      <h2>4. Content Distribution</h2>
      <p>Getting your content seen:</p>
      <ul>
        <li>Channel selection</li>
        <li>Timing optimization</li>
        <li>Promotion strategies</li>
        <li>Community engagement</li>
      </ul>

      <h2>5. Performance Measurement</h2>
      <p>Tracking content success:</p>
      <ul>
        <li>Analytics tracking</li>
        <li>ROI measurement</li>
        <li>Content optimization</li>
        <li>Strategy adjustment</li>
      </ul>

      <p>Effective content marketing requires a strategic approach that combines creativity with data-driven insights.</p>
    `,
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    date: "March 9, 2024",
    author: "Robert Wilson",
    category: "Content Marketing",
    readTime: "4 min read"
  },
  {
    id: 8,
    title: "SEO Optimization: Improving Your Rankings",
    content: `
      <p>Search Engine Optimization is crucial for online visibility. Here's a comprehensive guide to improving your website's rankings:</p>

      <h2>1. Technical SEO</h2>
      <p>Optimizing your website's technical aspects:</p>
      <ul>
        <li>Site speed</li>
        <li>Mobile responsiveness</li>
        <li>Site structure</li>
        <li>Schema markup</li>
      </ul>

      <h2>2. On-Page SEO</h2>
      <p>Optimizing your content for search engines:</p>
      <ul>
        <li>Keyword research</li>
        <li>Content optimization</li>
        <li>Meta tags</li>
        <li>Internal linking</li>
      </ul>

      <h2>3. Off-Page SEO</h2>
      <p>Building your website's authority:</p>
      <ul>
        <li>Link building</li>
        <li>Social signals</li>
        <li>Brand mentions</li>
        <li>Local SEO</li>
      </ul>

      <h2>4. Content Strategy</h2>
      <p>Creating SEO-friendly content:</p>
      <ul>
        <li>Topic research</li>
        <li>Content planning</li>
        <li>Quality guidelines</li>
        <li>Regular updates</li>
      </ul>

      <h2>5. Analytics and Monitoring</h2>
      <p>Tracking and improving performance:</p>
      <ul>
        <li>Rank tracking</li>
        <li>Traffic analysis</li>
        <li>Conversion tracking</li>
        <li>Competitor analysis</li>
      </ul>

      <p>Effective SEO requires a comprehensive approach that combines technical optimization with quality content creation.</p>
    `,
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    date: "March 8, 2024",
    author: "John Doe",
    category: "SEO",
    readTime: "5 min read"
  }
];

export default function BlogPost({ params }: { params: { id: string } }) {
  const post = blogPosts.find(p => p.id === parseInt(params.id));

  if (!post) {
    return (
      <main className="min-h-screen bg-black text-white overflow-hidden">
        <ConstellationBackground />
        <div className="relative" style={{ zIndex: 1 }}>
          <Navbar />
          <div className="container mx-auto px-6 pt-32 pb-20">
            <div className="text-center">
              <h1 className="text-4xl font-light mb-4">Post Not Found</h1>
              <Link href="/blog" className="text-blue-600 hover:text-blue-500">
                Return to Blog
              </Link>
            </div>
          </div>
          <Footer />
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <ConstellationBackground />
      
      <div className="relative" style={{ zIndex: 1 }}>
        <Navbar />

        {/* Blog Post Content */}
        <article className="pt-32 pb-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              {/* Back to Blog Link */}
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
              >
                <FaArrowLeft className="w-4 h-4" />
                Back to Blog
              </Link>

              {/* Featured Image */}
              <div className="relative w-full h-[400px] rounded-2xl overflow-hidden mb-8">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Post Header */}
              <div className="mb-8">
                <h1 className="text-4xl sm:text-5xl font-light mb-6">
                  {post.title}
                </h1>
                <div className="flex flex-wrap items-center gap-6 text-gray-400">
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
                  <span>{post.readTime}</span>
                </div>
              </div>

              {/* Post Content */}
              <div
                className="prose prose-invert max-w-none prose-headings:text-white prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl prose-p:text-gray-300 prose-li:text-gray-300 prose-strong:text-white prose-a:text-blue-500 prose-a:no-underline hover:prose-a:underline prose-blockquote:text-gray-400 prose-blockquote:border-l-blue-600 prose-code:text-blue-400 prose-pre:bg-zinc-900/50 prose-pre:border prose-pre:border-zinc-800 prose-hr:border-zinc-800 prose-img:rounded-xl prose-img:border prose-img:border-zinc-800"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </motion.div>
          </div>
        </article>

        {/* Project CTA Section */}
        <ProjectCTA />

        <Footer />
      </div>
    </main>
  );
} 