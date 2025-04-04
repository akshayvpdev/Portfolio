"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

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
      }
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
      }
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
      }
    }
  ];

  const openSourceContributions = [
    {
      id: 1,
      title: "React Component Library",
      description: "Contributed 15+ reusable components and improved documentation.",
      link: "#"
    },
    {
      id: 2,
      title: "TypeScript Utility Package",
      description: "Created a collection of TypeScript utilities with 100% test coverage.",
      link: "#"
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
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-12">
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="bg-default-50 rounded-xl overflow-hidden shadow-lg border border-white/10 backdrop-blur-sm transition-all duration-300"
            variants={itemVariants}
            whileHover={{ 
              y: -10,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              transition: { duration: 0.3 }
            }}
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className="relative h-48 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                <div className="flex gap-2">
                  <a href={project.links.github} className="text-white bg-black/50 hover:bg-black/70 p-2 rounded-full transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </a>
                  <a href={project.links.live} className="text-white bg-black/50 hover:bg-black/70 p-2 rounded-full transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-bold text-primary">{project.title}</h3>
              <p className="text-default-700">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span key={index} className="px-3 py-1 bg-primary/20 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div 
        className="mt-12 bg-default-50 p-8 rounded-xl shadow-lg border border-white/10 backdrop-blur-sm"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h3 
          className="text-2xl font-bold text-primary mb-6"
          variants={itemVariants}
        >
          Open Source Contributions
        </motion.h3>
        <div className="space-y-4">
          {openSourceContributions.map((contrib) => (
            <motion.div 
              key={contrib.id}
              className="p-4 bg-default-100 rounded-lg hover:bg-default-200 transition-colors duration-300"
              variants={itemVariants}
            >
              <h4 className="font-semibold text-lg mb-2">{contrib.title}</h4>
              <p className="text-default-700 mb-2">{contrib.description}</p>
              <a 
                href={contrib.link} 
                className="text-primary hover:underline inline-flex items-center gap-1 transition-transform duration-300 hover:translate-x-1"
              >
                View on GitHub
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}