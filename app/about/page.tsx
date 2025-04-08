"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

export default function About() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.1 });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  
  return (
    <motion.div 
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative max-w-6xl mx-auto px-4 py-12"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          style={{ y: backgroundY }}
          className="absolute inset-0"
        >
          {/* Floating circles */}
          <div className="absolute top-0 -right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
          <div className="absolute top-1/3 -left-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse" style={{ animationDelay: "2s" }}></div>
          <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse" style={{ animationDelay: "4s" }}></div>
          
          {/* Light grid */}
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        </motion.div>
      </div>

      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center"
      >
        <h1 className="relative inline-block text-5xl font-bold tracking-tight">
          <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
            About Me
          </span>
          <div className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-blue-500/40 via-purple-500/40 to-pink-500/40 blur-md"></div>
        </h1>
      </motion.div>

      <div className="relative space-y-16">
        {/* Professional Journey */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 40 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="backdrop-blur-md bg-gradient-to-br from-white/10 to-white/5 p-10 rounded-3xl border border-white/10 shadow-[0_0_25px_rgba(0,0,0,0.2)] hover:shadow-[0_0_35px_rgba(100,100,255,0.15)] transition-all duration-500"
        >
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/3">
              <div className="w-24 h-24 mx-auto md:mx-0 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
            </div>
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Professional Journey
              </h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-lg text-gray-300 leading-relaxed">
                  With over 5 years of experience in web development, I specialize in building scalable and performant applications using modern technologies like React, Next.js, and Node.js.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed mt-4">
                  I'm passionate about creating intuitive user experiences and writing clean, maintainable code that makes a difference.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Skills & Technologies */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -40 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="backdrop-blur-md bg-gradient-to-br from-white/10 to-white/5 p-10 rounded-3xl border border-white/10 shadow-[0_0_25px_rgba(0,0,0,0.2)] hover:shadow-[0_0_35px_rgba(100,100,255,0.15)] transition-all duration-500 group"
          >
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Skills & Technologies
              </h3>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {[
                { name: 'React', level: 90 },
                { name: 'Next.js', level: 85 },
                { name: 'TypeScript', level: 80 },
                { name: 'Node.js', level: 85 },
                { name: 'AWS', level: 75 },
                { name: 'UI/UX', level: 80 },
              ].map((skill, index) => (
                <motion.div 
                  key={skill.name} 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                  transition={{ duration: 0.4, delay: 0.5 + (index * 0.1) }}
                  className="p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-lg font-medium text-white">{skill.name}</span>
                    <span className="text-sm font-semibold px-3 py-1 rounded-full bg-white/10 text-blue-300">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-700/50 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: isInView ? `${skill.level}%` : 0 }}
                      transition={{ duration: 1, delay: 0.7 + (index * 0.15) }}
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education & Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 40 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="backdrop-blur-md bg-gradient-to-br from-white/10 to-white/5 p-10 rounded-3xl border border-white/10 shadow-[0_0_25px_rgba(0,0,0,0.2)] hover:shadow-[0_0_35px_rgba(100,100,255,0.15)] transition-all duration-500"
          >
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Education & Certifications
              </h3>
            </div>
            <div className="space-y-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="relative pl-10"
              >
                <div className="absolute left-0 top-2 w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div className="absolute left-3 top-8 w-px h-20 bg-gradient-to-b from-purple-500 to-transparent"></div>
                <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm">
                  <h4 className="text-xl font-semibold text-white">Master's in Computer Science</h4>
                  <p className="text-blue-300 font-medium mt-1">Stanford University</p>
                  <div className="flex items-center mt-2 text-sm text-gray-400">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    <span>2018 - 2020</span>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="relative pl-10"
              >
                <div className="absolute left-0 top-2 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm">
                  <h4 className="text-xl font-semibold text-white">Bachelor's in Software Engineering</h4>
                  <p className="text-blue-300 font-medium mt-1">MIT</p>
                  <div className="flex items-center mt-2 text-sm text-gray-400">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    <span>2014 - 2018</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Interests & Hobbies */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 40 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="backdrop-blur-md bg-gradient-to-br from-white/10 to-white/5 p-10 rounded-3xl border border-white/10 shadow-[0_0_25px_rgba(0,0,0,0.2)] hover:shadow-[0_0_35px_rgba(100,100,255,0.15)] transition-all duration-500"
        >
          <div className="flex items-center mb-10">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg mr-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Interests & Hobbies
            </h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                icon: '🌟',
                name: 'Open Source', 
                desc: 'Contributing to community',
                color: 'from-blue-600 to-cyan-400'
              },
              { 
                icon: '✍️', 
                name: 'Tech Writing', 
                desc: 'Sharing knowledge',
                color: 'from-purple-600 to-pink-400'
              },
              { 
                icon: '👥', 
                name: 'Mentoring', 
                desc: 'Helping others grow',
                color: 'from-amber-600 to-orange-400' 
              },
              { 
                icon: '🎨', 
                name: 'UI/UX Design', 
                desc: 'Creating experiences',
                color: 'from-emerald-600 to-lime-400'
              },
            ].map((interest, index) => (
              <motion.div
                key={interest.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: isInView ? 1 : 0, 
                  scale: isInView ? 1 : 0.8 
                }}
                transition={{ duration: 0.5, delay: 0.8 + (index * 0.1) }}
                className="group relative bg-white/5 rounded-2xl p-6 hover:bg-white/10 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-br opacity-10 group-hover:opacity-20 transition-opacity duration-300"
                  style={{ background: `linear-gradient(to bottom right, ${interest.color.split(' ')[0].replace('from-', '')}, ${interest.color.split(' ')[1].replace('to-', '')})` }}
                ></div>
                
                <div className="relative z-10">
                  <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">{interest.icon}</div>
                  <h4 className="text-xl font-semibold text-white mb-2">{interest.name}</h4>
                  <p className="text-gray-400">{interest.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}