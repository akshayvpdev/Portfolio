"use client";

import { useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import dynamic from "next/dynamic";

import MagneticButton from "@/components/ui/magnetic-button";
import GradientText from "@/components/ui/gradient-text";
import ScrollProgress from "@/components/ui/scroll-progress";

import Projects from "./projects/page";
import Blog from "./blog/page";
import Docs from "./docs/page";
import Contact from "./contact/page";
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

    const sections = document.querySelectorAll("section[id]");

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
        threshold: 0.3,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [isMounted]);

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="min-h-screen bg-black perspective-1000 overflow-hidden">
      <ScrollProgress />
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-80" />
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`h-line-${i}`}
            className="absolute h-[1px] w-full bg-gradient-to-r from-transparent via-blue-500/40 to-transparent"
            style={{ top: `${20 * i}%`, left: 0 }}
            initial={{ x: -1000, opacity: 0 }}
            animate={{
              x: 1000,
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.4,
              ease: "linear",
            }}
          />
        ))}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`v-line-${i}`}
            className="absolute w-[1px] h-full bg-gradient-to-b from-transparent via-purple-500/40 to-transparent"
            style={{ left: `${20 * i}%`, top: 0 }}
            initial={{ y: -1000, opacity: 0 }}
            animate={{
              y: 1000,
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.4 + 0.2,
              ease: "linear",
            }}
          />
        ))}
        {[...Array(3)].map((_, i) => {
          const colors = [
            "rgba(59,130,246,0.2)",
            "rgba(147,51,234,0.2)",
            "rgba(236,72,153,0.2)",
          ];
          return (
            <motion.div
              key={`blob-${i}`}
              className="absolute w-32 h-32 rounded-full blur-lg"
              style={{
                background: `radial-gradient(circle, ${colors[i]} 0%, transparent 70%)`,
              }}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{
                x: ["0%", "20%", "0%", "-20%", "0%"],
                y: ["0%", "15%", "30%", "15%", "0%"],
                scale: [0.8, 1, 1.2, 1, 0.8],
                opacity: [0, 0.8, 0.5, 0.8, 0],
              }}
              transition={{
                duration: 12 + i * 3,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            />
          );
        })}

        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      {isMounted && (
        <motion.section
          id="hero"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="relative text-center min-h-screen flex flex-col justify-center items-center py-20 px-4">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-8">
            <GradientText className="text-6xl md:text-8xl font-bold tracking-tighter">
              Hey <span className="inline-block animate-wave">👋</span>
            </GradientText>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="space-y-6 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              I'm
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Akshay vp
              </span>
            </h2>
            <h3 className="text-2xl md:text-3xl font-semibold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                Full Stack Developer
              </span>
            </h3>
            <div className="h-20 flex items-center justify-center">
              <p className="text-xl text-gray-300">
                <Typewriter text="Crafting digital experiences that inspire and innovate." />
              </p>
            </div>
            <div className="flex gap-4 justify-center mt-8">
              <MagneticButton
                className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold transition-all duration-300"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }>
                Contact Me
              </MagneticButton>
              <MagneticButton
                className="px-8 py-3 rounded-full bg-white/10 text-white font-semibold backdrop-blur-sm transition-all duration-300"
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }>
                View Work
              </MagneticButton>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
            <div className="animate-bounce">
              <svg
                className="w-6 h-6 text-gray-400"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </div>
          </motion.div>
        </motion.section>
      )}
      <AnimatePresence>
        {isMounted && (
          <div className="space-y-24">
            <Section id="about">
              <About />
            </Section>
            <Section id="projects">
              <Projects />
            </Section>
            <Section id="blog">
              <Blog />
            </Section>
            <Section id="docs">
              <Docs />
            </Section>
            <Section id="contact" className="pb-24">
              <Contact />
            </Section>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Section({
  id,
  children,
  className = "",
}: {
  id: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`pt-24 px-4 ${className}`}>
      <div className="max-w-7xl w-full mx-auto">{children}</div>
    </section>
  );
}
