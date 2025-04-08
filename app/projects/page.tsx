"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0.1, 0.3, 0.8, 1], [0, 1, 1, 0]);

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with real-time inventory management and payment processing.",
      image: "/api/placeholder/400/200",
      tags: ["React", "Node.js", "MongoDB"],
      links: {
        github: "#",
        live: "#"
      },
      accentColor: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "AI Task Manager",
      description: "Smart task management app with AI-powered prioritization and time estimation.",
      image: "/api/placeholder/400/200",
      tags: ["Next.js", "Python", "TensorFlow"],
      links: {
        github: "#",
        live: "#"
      },
      accentColor: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      title: "Social Media Analytics",
      description: "Real-time social media analytics dashboard with sentiment analysis and trend prediction.",
      image: "/api/placeholder/400/200",
      tags: ["Vue.js", "FastAPI", "PostgreSQL"],
      links: {
        github: "#",
        live: "#"
      },
      accentColor: "from-amber-500 to-orange-500"
    }
  ];

  const openSourceContributions = [
    {
      id: 1,
      title: "React Component Library",
      description: "Contributed 15+ reusable components and improved documentation.",
      link: "#",
      stars: "1.2k"
    },
    {
      id: 2,
      title: "TypeScript Utility Package",
      description: "Created a collection of TypeScript utilities with 100% test coverage.",
      link: "#",
      stars: "850"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1] 
      }
    }
  };

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

      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <h1 className="relative inline-block text-5xl md:text-6xl font-bold tracking-tight">
          <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
            My Projects
          </span>
          <div className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-blue-500/40 via-purple-500/40 to-pink-500/40 blur-md"></div>
        </h1>
        <p className="mt-6 text-xl text-gray-400 max-w-3xl mx-auto">
          Here are some of my featured projects. Each one represents a unique challenge and learning opportunity.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="relative group"
            variants={itemVariants}
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-all duration-500"></div>
            
            <div className="relative h-full bg-gradient-to-br from-white/5 to-white/10 rounded-2xl overflow-hidden border border-white/10 backdrop-blur-sm transition-all duration-500 group-hover:border-white/20">
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-100 transition-opacity duration-300 flex items-end justify-between p-6">
                  <div className="flex gap-2">
                    <motion.a 
                      href={project.links.github} 
                      className="text-white bg-black/50 p-2 rounded-full transition-all duration-300 hover:bg-black/80 hover:scale-110"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </motion.a>
                    <motion.a 
                      href={project.links.live} 
                      className="text-white bg-black/50 p-2 rounded-full transition-all duration-300 hover:bg-black/80 hover:scale-110"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </motion.a>
                  </div>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                    {project.title}
                  </h3>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ 
                      scale: hoveredProject === project.id ? 1 : 0,
                      transition: { type: "spring", stiffness: 300, damping: 20 }
                    }}
                    className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                  />
                </div>
                
                <p className="text-gray-400 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
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
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Open Source Section */}
      <motion.div 
        className="mt-24"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-all duration-500"></div>
          
          <div className="relative bg-gradient-to-br from-white/5 to-white/10 p-8 sm:p-10 rounded-2xl border border-white/10 backdrop-blur-sm">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
              <div>
                <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                  Open Source Contributions
                </h2>
                <p className="mt-2 text-gray-400 max-w-2xl">
                  I believe in giving back to the community. Here are some of my notable open source contributions.
                </p>
              </div>
              
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View All on GitHub
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </motion.a>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {openSourceContributions.map((contrib) => (
                <motion.div
                  key={contrib.id}
                  className="p-6 bg-white/5 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 group"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white">{contrib.title}</h3>
                      <p className="mt-2 text-gray-400">{contrib.description}</p>
                    </div>
                    
                    <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-white/10 text-sm">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                      </svg>
                      <span>{contrib.stars}</span>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <motion.a
                      href={contrib.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-purple-400 hover:text-purple-300 transition-colors duration-300"
                      whileHover={{ x: 5 }}
                    >
                      View Contribution
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </motion.a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        className="mt-24 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
          Have a project in mind?
        </h3>
        <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
        </p>
        <motion.a
          href="#contact"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Let's Talk
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </motion.a>
      </motion.div>
    </motion.div>
  );
}