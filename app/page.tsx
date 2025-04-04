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

const BackgroundBlob = ({ className }: { className?: string }) => (
  <motion.div
    className={`absolute bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20 blur-3xl ${className}`}
    animate={{
      scale: [1, 1.2, 1],
      rotate: [0, 90, 180, 270, 360],
      borderRadius: ["60% 40% 30% 70%", "30% 60% 70% 40%", "60% 40% 30% 70%"],
    }}
    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
  />
);

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
    <div className="min-h-screen bg-black perspective-1000">
      <ScrollProgress />
      
      {/* 3D Background Grid */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-grid-white/10 bg-grid-16 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        <motion.div 
          className="absolute inset-0"
          style={{ opacity }}
        >
          <BackgroundBlob className="w-[500px] h-[500px] -top-[100px] -right-[100px]" />
          <BackgroundBlob className="w-[600px] h-[600px] -bottom-[150px] -left-[150px]" />
          <BackgroundBlob className="w-[400px] h-[400px] top-[30%] left-[20%]" />
        </motion.div>
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
            {/* <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1 ring-1 ring-white/20 animate-gradient">
              <div className="rounded-full p-2 bg-black">
                <img 
                  src="/your-photo.jpg" 
                  alt="Profile" 
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div> */}
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
          <>
            <motion.section 
              id="about" 
              initial={{ opacity: 0, y: 50 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8 }} 
              className="min-h-screen flex flex-col justify-center p-10"
            >
              <PerspectiveCard className="max-w-4xl mx-auto transform-gpu">
                <div className="glass-card p-8 rounded-2xl border border-white/10 backdrop-blur-xl">
                  <GradientText className="text-3xl font-semibold mb-8">About Me</GradientText>
                  <About/>
                </div>
              </PerspectiveCard>
            </motion.section>

            <motion.section 
              id="projects" 
              initial={{ opacity: 0, y: 50 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8 }} 
              className="min-h-screen flex flex-col justify-center p-10"
            >
              <PerspectiveCard className="max-w-4xl mx-auto transform-gpu">
                <div className="glass-card p-8 rounded-2xl border border-white/10 backdrop-blur-xl">
                  <GradientText className="text-3xl font-semibold mb-8">Projects</GradientText>
                  <Projects />
                </div>
              </PerspectiveCard>
            </motion.section>

            <motion.section 
              id="blog" 
              initial={{ opacity: 0, y: 50 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8 }} 
              className="min-h-screen flex flex-col justify-center p-10"
            >
              <PerspectiveCard className="max-w-4xl mx-auto transform-gpu">
                <div className="glass-card p-8 rounded-2xl border border-white/10 backdrop-blur-xl">
                  <GradientText className="text-3xl font-semibold mb-8">Blog</GradientText>
                  <Blog />
                </div>
              </PerspectiveCard>
            </motion.section>

            <motion.section 
              id="docs" 
              initial={{ opacity: 0, y: 50 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8 }} 
              className="min-h-screen flex flex-col justify-center p-10"
            >
              <PerspectiveCard className="max-w-4xl mx-auto transform-gpu">
                <div className="glass-card p-8 rounded-2xl border border-white/10 backdrop-blur-xl">
                  <GradientText className="text-3xl font-semibold mb-8">Documentation</GradientText>
                  <Docs />
                </div>
              </PerspectiveCard>
            </motion.section>

            <motion.section 
              id="contact" 
              initial={{ opacity: 0, y: 50 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8 }} 
              className="min-h-screen flex flex-col justify-center p-10"
            >
              <PerspectiveCard className="max-w-4xl mx-auto transform-gpu">
                <div className="glass-card p-8 rounded-2xl border border-white/10 backdrop-blur-xl">
                  <GradientText className="text-3xl font-semibold mb-8">Contact</GradientText>
                  <Contact />
                </div>
              </PerspectiveCard>
            </motion.section>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
