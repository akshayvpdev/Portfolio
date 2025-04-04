"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface FloatingTextProps {
  text: string;
  className?: string;
}

export default function FloatingText({ text, className = "" }: FloatingTextProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className={`relative ${className}`}>
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          className="inline-block"
          animate={{
            y: [0, -10, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            delay: index * 0.1,
            ease: "easeInOut",
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </div>
  );
}
