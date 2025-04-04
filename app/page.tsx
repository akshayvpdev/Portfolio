'use client'

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import MagneticButton from "@/components/ui/magnetic-button";
import FloatingText from "@/components/ui/floating-text";
import GlowCard from "@/components/ui/glow-card";
import PerspectiveCard from "@/components/ui/perspective-card";
import GradientText from "@/components/ui/gradient-text";
import ScrollProgress from "@/components/ui/scroll-progress";
import Projects from './projects/page';
import Blog from './blog/page';
import Docs from './docs/page';
import Contact from './contact/page';
import About from "./about/page";

const Typewriter = dynamic(() => import("@/components/ui/typewriter"), {
  ssr: false,
});

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const sections = document.querySelectorAll('section[id]');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            if (id) window.history.replaceState({}, "", `#${id}`);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, [isMounted]);

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="min-h-screen bg-black perspective-1000 overflow-hidden">
      <ScrollProgress />
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Gradient mesh background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-80" />
        
        {/* Animated circuit lines */}
        <div className="absolute inset-0">
          <div className="absolute w-full h-full">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute h-[2px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"
                style={{
                  width: '100%',
                  top: `${20 * i}%`,
                  left: 0,
                }}
                animate={{
                  x: [-1000, 1000],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: 'linear',
                }}
              />
            ))}
          </div>
        </div>

        {/* Glowing orbs */}
        <div className="absolute inset-0">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-32 h-32 rounded-full"
              style={{
                background: `radial-gradient(circle, ${['rgba(59,130,246,0.15)', 'rgba(147,51,234,0.15)', 'rgba(236,72,153,0.15)'][i]} 0%, transparent 70%)`,
                filter: 'blur(10px)',
              }}
              animate={{
                x: ['0%', '100%', '0%'],
                y: ['0%', '100%', '0%'],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                delay: i * 5,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>

        {/* Grid overlay */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      {isMounted && (
        <motion.section 
          id="hero" 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1 }} 
          className="relative text-center min-h-screen flex flex-col justify-center items-center py-20 px-4"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-8"
          >
            <GradientText className="text-6xl md:text-8xl font-bold tracking-tighter">
              Hey <span className="inline-block animate-wave">👋</span>
            </GradientText>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="space-y-6 max-w-2xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">John Doe</span>
            </h2>
            <h3 className="text-2xl md:text-3xl font-semibold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Full Stack Developer</span>
            </h3>
            <div className="h-20 flex items-center justify-center">
              <p className="text-xl text-gray-300">
                <Typewriter text="Crafting digital experiences that inspire and innovate." />
              </p>
            </div>
            <div className="flex gap-4 justify-center mt-8">
              <MagneticButton
                className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contact Me
              </MagneticButton>
              <MagneticButton
                className="px-8 py-3 rounded-full bg-white/10 text-white font-semibold hover:bg-white/20 backdrop-blur-sm transition-all duration-300"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Work
              </MagneticButton>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <div className="animate-bounce">
              <svg 
                className="w-6 h-6 text-gray-400"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </div>
          </motion.div>
        </motion.section>
      )}

      <AnimatePresence>
        {isMounted && (
          <div className="space-y-24">
            <motion.section 
              id="about" 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5 }} 
              className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
            >
              <div className="max-w-7xl w-full space-y-8 mx-auto">
                <motion.div 
                  className="relative overflow-hidden backdrop-blur-xl bg-gradient-to-br from-gray-900/80 to-black/90 p-8 rounded-3xl border border-white/10 shadow-2xl hover:border-white/20 transition-all duration-300"
                  whileHover={{
                    boxShadow: '0 25px 50px -12px rgba(59, 130, 246, 0.25)',
                    scale: 1.02,
                    y: -5
                  }}
                  initial={{ 
                    boxShadow: '0 0 0px rgba(59, 130, 246, 0)',
                    y: 0
                  }}
                  transition={{ 
                    duration: 0.4,
                    ease: 'easeOut'
                  }}
                >
                  <div className="relative z-10">
                    <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 mb-8 inline-block">About Me</h2>
                    <About />
                  </div>
                </motion.div>
              </div>
            </motion.section>

            <motion.section 
              id="projects" 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5 }} 
              className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
            >
              <div className="max-w-7xl w-full space-y-8 mx-auto">
                <motion.div 
                  className="relative overflow-hidden backdrop-blur-xl bg-gradient-to-br from-gray-900/80 to-black/90 p-8 rounded-3xl border border-white/10 shadow-2xl hover:border-white/20 transition-all duration-300"
                  whileHover={{
                    boxShadow: '0 25px 50px -12px rgba(59, 130, 246, 0.25)',
                    scale: 1.02,
                    y: -5
                  }}
                  initial={{ 
                    boxShadow: '0 0 0px rgba(59, 130, 246, 0)',
                    y: 0
                  }}
                  transition={{ 
                    duration: 0.4,
                    ease: 'easeOut'
                  }}
                >
                  <div className="absolute inset-0">
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                      animate={{
                        x: ['-200%', '200%'],
                        opacity: [0, 0.5, 0]
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />
                    <motion.div
                      className="absolute inset-0 opacity-30"
                      style={{
                        background: 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
                      }}
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.3, 0.2, 0.3]
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: 'easeInOut'
                      }}
                    />
                    
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGgtNnYxMmgtNnYtNmgtNnYxMmgxOHYtNmgtNnYtNnptLTYtNnYtNmg2djZoLTZ6IiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-5" />
                    
                    <motion.div 
                      className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-transparent rounded-full blur-2xl"
                      animate={{
                        opacity: [0.2, 0.4, 0.2],
                        scale: [1, 1.2, 1]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />
                    <motion.div 
                      className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-purple-500/20 to-transparent rounded-full blur-2xl"
                      animate={{
                        opacity: [0.2, 0.4, 0.2],
                        scale: [1, 1.2, 1]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 2,
                      }}
                    />
                  </div>
                  <div className="relative z-10">
                    <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-600 mb-8 inline-block">Projects</h2>
                    <Projects />
                  </div>
                </motion.div>
              </div>
            </motion.section>

            <motion.section 
              id="blog" 
              initial={{ opacity: 0, y: 50 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8 }} 
              className="min-h-screen flex flex-col items-center justify-center p-10"
            >
              <div className="max-w-7xl w-full space-y-8 mx-auto">
                <motion.div 
                  className="relative overflow-hidden backdrop-blur-xl bg-gradient-to-br from-gray-900/80 to-black/90 p-8 rounded-3xl border border-white/10 shadow-2xl hover:border-white/20 transition-all duration-300"
                  whileHover={{
                    boxShadow: '0 25px 50px -12px rgba(59, 130, 246, 0.25)',
                    scale: 1.02,
                    y: -5
                  }}
                  initial={{ 
                    boxShadow: '0 0 0px rgba(59, 130, 246, 0)',
                    y: 0
                  }}
                  transition={{ 
                    duration: 0.4,
                    ease: 'easeOut'
                  }}
                >
                  <div className="absolute inset-0">
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                      animate={{
                        x: ['-200%', '200%'],
                        opacity: [0, 0.5, 0]
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />
                    <motion.div
                      className="absolute inset-0 opacity-30"
                      style={{
                        background: 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
                      }}
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.3, 0.2, 0.3]
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: 'easeInOut'
                      }}
                    />
                    
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGgtNnYxMmgtNnYtNmgtNnYxMmgxOHYtNmgtNnYtNnptLTYtNnYtNmg2djZoLTZ6IiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiIHN0cm9rZS13aWR0aD0iMiIvPjwvZz48L3N2Zz4=')] opacity-10 mix-blend-soft-light" />
                    
                    <motion.div 
                      className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-transparent rounded-full blur-2xl"
                      animate={{
                        opacity: [0.2, 0.4, 0.2],
                        scale: [1, 1.2, 1]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />
                    <motion.div 
                      className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-purple-500/20 to-transparent rounded-full blur-2xl"
                      animate={{
                        opacity: [0.2, 0.4, 0.2],
                        scale: [1, 1.2, 1]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 2,
                      }}
                    />
                  </div>
                  <div className="relative z-10">
                    <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-600 mb-8 inline-block">Blog</h2>
                    <Blog />
                  </div>
                </motion.div>
              </div>
            </motion.section>

            <motion.section 
              id="docs" 
              initial={{ opacity: 0, y: 50 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8 }} 
              className="min-h-screen flex flex-col items-center justify-center p-10"
            >
              <div className="max-w-7xl w-full space-y-8 mx-auto">
                <motion.div 
                  className="relative overflow-hidden backdrop-blur-xl bg-gradient-to-br from-gray-900/80 to-black/90 p-8 rounded-3xl border border-white/10 shadow-2xl hover:border-white/20 transition-all duration-300"
                  whileHover={{
                    boxShadow: '0 25px 50px -12px rgba(59, 130, 246, 0.25)',
                    scale: 1.02,
                    y: -5
                  }}
                  initial={{ 
                    boxShadow: '0 0 0px rgba(59, 130, 246, 0)',
                    y: 0
                  }}
                  transition={{ 
                    duration: 0.4,
                    ease: 'easeOut'
                  }}
                >
                  <div className="absolute inset-0">
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                      animate={{
                        x: ['-200%', '200%'],
                        opacity: [0, 0.5, 0]
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />
                    <motion.div
                      className="absolute inset-0 opacity-30"
                      style={{
                        background: 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
                      }}
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.3, 0.2, 0.3]
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: 'easeInOut'
                      }}
                    />
                    
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGgtNnYxMmgtNnYtNmgtNnYxMmgxOHYtNmgtNnYtNnptLTYtNnYtNmg2djZoLTZ6IiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiIHN0cm9rZS13aWR0aD0iMiIvPjwvZz48L3N2Zz4=')] opacity-10 mix-blend-soft-light" />
                    
                    <motion.div 
                      className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-transparent rounded-full blur-2xl"
                      animate={{
                        opacity: [0.2, 0.4, 0.2],
                        scale: [1, 1.2, 1]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />
                    <motion.div 
                      className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-purple-500/20 to-transparent rounded-full blur-2xl"
                      animate={{
                        opacity: [0.2, 0.4, 0.2],
                        scale: [1, 1.2, 1]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 2,
                      }}
                    />
                  </div>
                  <div className="relative z-10">
                    <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-emerald-600 mb-8 inline-block">Documentation</h2>
                    <Docs />
                  </div>
                </motion.div>
              </div>
            </motion.section>

            <motion.section 
              id="contact" 
              initial={{ opacity: 0, y: 50 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8 }} 
              className="min-h-screen flex flex-col items-center justify-center p-10"
            >
              <div className="max-w-7xl w-full space-y-8 mx-auto">
                <motion.div 
                  className="relative overflow-hidden backdrop-blur-xl bg-gradient-to-br from-gray-900/80 to-black/90 p-8 rounded-3xl border border-white/10 shadow-2xl hover:border-white/20 transition-all duration-300"
                  whileHover={{
                    boxShadow: '0 25px 50px -12px rgba(59, 130, 246, 0.25)',
                    scale: 1.02,
                    y: -5
                  }}
                  initial={{ 
                    boxShadow: '0 0 0px rgba(59, 130, 246, 0)',
                    y: 0
                  }}
                  transition={{ 
                    duration: 0.4,
                    ease: 'easeOut'
                  }}
                >
                  <div className="absolute inset-0">
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                      animate={{
                        x: ['-200%', '200%'],
                        opacity: [0, 0.5, 0]
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />
                    <motion.div
                      className="absolute inset-0 opacity-30"
                      style={{
                        background: 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
                      }}
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.3, 0.2, 0.3]
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: 'easeInOut'
                      }}
                    />
                    
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGgtNnYxMmgtNnYtNmgtNnYxMmgxOHYtNmgtNnYtNnptLTYtNnYtNmg2djZoLTZ6IiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiIHN0cm9rZS13aWR0aD0iMiIvPjwvZz48L3N2Zz4=')] opacity-10 mix-blend-soft-light" />
                    
                    <motion.div 
                      className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-transparent rounded-full blur-2xl"
                      animate={{
                        opacity: [0.2, 0.4, 0.2],
                        scale: [1, 1.2, 1]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />
                    <motion.div 
                      className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-purple-500/20 to-transparent rounded-full blur-2xl"
                      animate={{
                        opacity: [0.2, 0.4, 0.2],
                        scale: [1, 1.2, 1]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 2,
                      }}
                    />
                  </div>
                  <div className="relative z-10">
                    <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-red-600 mb-8 inline-block">Contact</h2>
                    <Contact />
                  </div>
                </motion.div>
              </div>
            </motion.section>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}