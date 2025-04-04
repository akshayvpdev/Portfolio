"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GradientTextProps {
  children: ReactNode;
  className?: string;
}

export default function GradientText({ children, className = "" }: GradientTextProps) {
  return (
    <div className="relative">
      <motion.span
        className={`relative block ${className}`}
        style={{
          textShadow: "0 0 0 rgba(0,0,0,0)",
          transform: "translateZ(0)",
          backgroundImage: "linear-gradient(135deg, #6366f1 0%, #a855f7 25%, #ec4899 50%, #3b82f6 75%, #6366f1 100%)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          color: "transparent",
          backgroundSize: "200% 200%",
        }}
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
      >
        {children}
      </motion.span>
      <motion.span
        className={`absolute inset-0 blur-2xl opacity-50 ${className}`}
        style={{
          backgroundImage: "linear-gradient(135deg, #6366f1 0%, #a855f7 25%, #ec4899 50%, #3b82f6 75%, #6366f1 100%)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          color: "transparent",
          backgroundSize: "200% 200%",
        }}
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
      >
        {children}
      </motion.span>
    </div>
  );
}
