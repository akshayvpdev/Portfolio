"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function DocsPage() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0.1, 0.3, 0.8, 1], [0, 1, 1, 0]);

  const categories = [
    {
      title: "Getting Started",
      icon: "🚀",
      items: [
        {
          title: "Installation Guide",
          description: "Step-by-step setup instructions for all platforms",
          icon: "📦",
          color: "from-blue-500 to-cyan-500"
        },
        {
          title: "Quick Start Tutorial",
          description: "Build your first application in 15 minutes",
          icon: "⚡",
          color: "from-purple-500 to-pink-500"
        },
        {
          title: "Basic Concepts",
          description: "Core principles and fundamentals explained",
          icon: "🧠",
          color: "from-amber-500 to-orange-500"
        }
      ]
    },
    {
      title: "API Reference",
      icon: "🔌",
      items: [
        {
          title: "REST API",
          description: "Complete API documentation with examples",
          icon: "🔄",
          color: "from-green-500 to-emerald-500"
        },
        {
          title: "GraphQL Schema",
          description: "Query and mutation references",
          icon: "📊",
          color: "from-pink-500 to-rose-500"
        },
        {
          title: "WebSocket Events",
          description: "Real-time communication guide",
          icon: "⚡",
          color: "from-indigo-500 to-violet-500"
        }
      ]
    },
    {
      title: "Examples",
      icon: "📚",
      items: [
        {
          title: "Authentication",
          description: "OAuth and JWT implementation samples",
          icon: "🔐",
          color: "from-blue-600 to-indigo-600"
        },
        {
          title: "File Upload",
          description: "Handling file uploads securely",
          icon: "📁",
          color: "from-purple-600 to-fuchsia-600"
        },
        {
          title: "Database Integration",
          description: "Working with SQL and NoSQL databases",
          icon: "🗃️",
          color: "from-amber-600 to-yellow-600"
        }
      ]
    },
    {
      title: "Best Practices",
      icon: "🏆",
      items: [
        {
          title: "Security Guidelines",
          description: "Securing your application properly",
          icon: "🛡️",
          color: "from-red-500 to-orange-500"
        },
        {
          title: "Performance Tips",
          description: "Optimization techniques for production",
          icon: "⚡",
          color: "from-green-600 to-teal-600"
        },
        {
          title: "Testing Strategies",
          description: "Comprehensive testing approaches",
          icon: "🧪",
          color: "from-violet-600 to-purple-600"
        }
      ]
    }
  ];

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
        className="mb-16"
      >
        <div className="backdrop-blur-md bg-gradient-to-br from-white/10 to-white/5 p-8 rounded-3xl border border-white/10 shadow-[0_0_25px_rgba(0,0,0,0.2)]">
          <h1 className="relative text-4xl md:text-5xl font-bold tracking-tight mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
              Documentation & Guides
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Comprehensive resources to help you get the most out of our tools and technologies. 
            From quick start guides to advanced API references.
          </p>
          
          <div className="mt-6">
            <motion.a
              href="#search"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-gray-900 font-medium hover:bg-gray-100 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              Search Documentation
            </motion.a>
          </div>
        </div>
      </motion.div>

      {/* Documentation Categories */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {categories.map((category, catIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 * catIndex }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="relative h-full bg-gradient-to-br from-white/5 to-white/10 rounded-2xl overflow-hidden border border-white/10 backdrop-blur-sm transition-all duration-500 group-hover:border-white/20 group-hover:shadow-xl group-hover:shadow-blue-500/10">
              <div className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-3xl">{category.icon}</div>
                  <h2 className="text-2xl font-bold text-white">{category.title}</h2>
                </div>
                
                <ul className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <motion.li
                      key={item.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 * itemIndex + 0.2 }}
                      viewport={{ once: true }}
                    >
                      <motion.a
                        href="#"
                        className="block p-4 rounded-xl hover:bg-white/5 transition-all duration-300"
                        whileHover={{ x: 5 }}
                      >
                        <div className="flex items-start gap-4">
                          <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${item.color} flex items-center justify-center text-xl mt-1 flex-shrink-0`}>
                            {item.icon}
                          </div>
                          <div>
                            <h3 className="font-semibold text-white">{item.title}</h3>
                            <p className="text-sm text-gray-400">{item.description}</p>
                          </div>
                        </div>
                      </motion.a>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Additional Resources */}
      <motion.div
        className="mt-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <div className="backdrop-blur-md bg-gradient-to-br from-white/10 to-white/5 p-8 rounded-3xl border border-white/10 shadow-[0_0_25px_rgba(0,0,0,0.2)]">
          <h2 className="text-2xl font-bold text-white mb-6">Additional Resources</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.a
              href="#"
              className="p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 group"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                  </svg>
                </div>
                <h3 className="font-semibold text-white">API Changelog</h3>
              </div>
              <p className="text-gray-400">Track changes and updates to our APIs</p>
            </motion.a>
            
            <motion.a
              href="#"
              className="p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 group"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-white">Troubleshooting</h3>
              </div>
              <p className="text-gray-400">Solutions to common problems</p>
            </motion.a>
            
            <motion.a
              href="#"
              className="p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 group"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-white">Community Forum</h3>
              </div>
              <p className="text-gray-400">Get help from our active community</p>
            </motion.a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}