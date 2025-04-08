"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function BlogPage() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0.1, 0.3, 0.8, 1], [0, 1, 1, 0]);

  const posts = [
    {
      id: 1,
      featured: true,
      title: "Building Scalable Web Applications with Next.js",
      excerpt: "Learn how to build and deploy enterprise-grade applications using Next.js, React Server Components, and modern deployment strategies.",
      date: "March 15, 2025",
      tags: ["Next.js", "React", "Performance"],
      image: "/api/placeholder/800/400",
      readTime: "8 min read"
    },
    {
      id: 2,
      title: "Understanding TypeScript Generics",
      excerpt: "A deep dive into TypeScript generics and how they can make your code more reusable and type-safe.",
      date: "February 28, 2025",
      tags: ["TypeScript", "Programming"],
      readTime: "6 min read"
    },
    {
      id: 3,
      title: "Modern CSS Techniques",
      excerpt: "Exploring the latest CSS features and how they're changing the way we style web applications.",
      date: "February 15, 2025",
      tags: ["CSS", "Web Design"],
      readTime: "5 min read"
    },
    {
      id: 4,
      title: "React Performance Optimization",
      excerpt: "Tips and tricks for optimizing React applications for better performance and user experience.",
      date: "January 30, 2025",
      tags: ["React", "Performance"],
      readTime: "7 min read"
    },
    {
      id: 5,
      title: "Getting Started with Web3",
      excerpt: "An introduction to Web3 development and building decentralized applications.",
      date: "January 15, 2025",
      tags: ["Web3", "Blockchain"],
      readTime: "9 min read"
    },
    {
      id: 6,
      title: "The Future of AI in Web Development",
      excerpt: "How artificial intelligence is transforming the way we build and interact with web applications.",
      date: "December 20, 2024",
      tags: ["AI", "Web Development"],
      readTime: "10 min read"
    }
  ];

  const featuredPost = posts.find(post => post.featured);
  const regularPosts = posts.filter(post => !post.featured);

  return (
    <motion.div 
      ref={containerRef}
      className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <motion.div 
          style={{ y: backgroundY, opacity }}
          className="absolute inset-0"
        >
          {/* Floating gradient circles */}
          <div className="absolute top-0 -right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
          <div className="absolute top-1/3 -left-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: "2s" }}></div>
          <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: "4s" }}></div>
          
          {/* Light grid */}
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        </motion.div>
      </div>

      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <h1 className="relative inline-block text-5xl md:text-6xl font-bold tracking-tight">
          <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
            Blog & Articles
          </span>
          <div className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-blue-500/40 via-purple-500/40 to-pink-500/40 blur-md"></div>
        </h1>
        <p className="mt-6 text-xl text-gray-400 max-w-3xl mx-auto">
          Thoughts, tutorials, and insights on modern web development, design, and technology.
        </p>
      </motion.div>

      {/* Featured Post */}
      {featuredPost && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-20 group"
        >
          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            {/* Featured post image */}
            <div className="relative h-96 overflow-hidden">
              <img 
                src={featuredPost.image} 
                alt={featuredPost.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
            </div>
            
            {/* Featured post content */}
            <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12">
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <span className="px-4 py-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-medium text-white shadow-lg">
                  Featured
                </span>
                <span className="text-gray-300">{featuredPost.date}</span>
                <span className="text-gray-300">•</span>
                <span className="text-gray-300">{featuredPost.readTime}</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
                {featuredPost.title}
              </h2>
              
              <p className="text-lg text-gray-300 mb-6 max-w-3xl">
                {featuredPost.excerpt}
              </p>
              
              <div className="flex flex-wrap gap-3 mb-6">
                {featuredPost.tags.map((tag, index) => (
                  <motion.span 
                    key={index}
                    className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300 backdrop-blur-sm"
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: "rgba(255, 255, 255, 0.2)"
                    }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
              
              <motion.a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-gray-900 font-medium hover:bg-gray-100 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Read Full Article
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </motion.a>
            </div>
          </div>
        </motion.div>
      )}

      {/* Regular Posts Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {regularPosts.map((post, index) => (
          <motion.div
            key={post.id}
            className="group"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 * index }}
            viewport={{ once: true }}
          >
            <div className="relative h-full bg-gradient-to-br from-white/5 to-white/10 rounded-2xl overflow-hidden border border-white/10 backdrop-blur-sm transition-all duration-500 group-hover:border-white/20 group-hover:shadow-xl group-hover:shadow-blue-500/10">
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 transition-all duration-500">
                  {post.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <motion.span 
                      key={index}
                      className="px-3 py-1 bg-white/5 rounded-full text-sm text-gray-300 backdrop-blur-sm"
                      whileHover={{ 
                        scale: 1.05,
                        backgroundColor: "rgba(255, 255, 255, 0.1)"
                      }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
                
                <motion.a
                  href="#"
                  className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  Continue reading
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Newsletter CTA */}
      <motion.div
        className="mt-24 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <div className="relative max-w-3xl mx-auto bg-gradient-to-br from-white/5 to-white/10 p-8 sm:p-10 rounded-2xl border border-white/10 backdrop-blur-sm">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Stay updated with my latest articles
          </h3>
          <p className="text-xl text-gray-400 mb-8">
            Subscribe to my newsletter to receive new posts directly in your inbox.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <motion.button
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Subscribe
            </motion.button>
          </div>
          
          <p className="mt-4 text-sm text-gray-500">
            No spam, unsubscribe anytime.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}