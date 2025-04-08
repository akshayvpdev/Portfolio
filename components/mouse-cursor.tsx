"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

export default function MouseCursor() {
  const [isMounted, setIsMounted] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  
  // Use lighter animation settings
  const springConfig = {
    type: "spring",
    damping: 25, // Increased damping for less oscillation
    stiffness: 300, // Increased stiffness for faster response
    mass: 0.5 // Lower mass for quicker movement
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted || !cursorRef.current) return;

    // Throttled cursor movement using requestAnimationFrame
    let frameId: number | null = null;
    let prevTime = 0;
    const throttleMs = 1000 / 60; // Target 60fps
    
    const moveCursor = (e: MouseEvent) => {
      const currentTime = Date.now();
      if (currentTime - prevTime < throttleMs) return;
      
      if (frameId !== null) {
        cancelAnimationFrame(frameId);
      }
      
      frameId = requestAnimationFrame(() => {
        if (!cursorRef.current) return;
        
        // Apply transform directly for better performance
        cursorRef.current.style.transform = `translate3d(${e.clientX - 16}px, ${e.clientY - 16}px, 0)`;
        prevTime = currentTime;
        frameId = null;
      });
    };

    window.addEventListener("mousemove", moveCursor, { passive: true });
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      if (frameId !== null) cancelAnimationFrame(frameId);
    };
  }, [isMounted]);

  if (!isMounted) return null;

  return (
    <motion.div
      ref={cursorRef}
      className="fixed pointer-events-none z-[999]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{
        width: 32,
        height: 32,
        x: -100,
        y: -100,
        mixBlendMode: "difference",
        willChange: "transform"
      }}
      transition={springConfig}
    >
      <div className="w-full h-full rounded-full border-2 border-white/80" />
      <div 
        className="absolute top-1/2 left-1/2 w-2 h-2 bg-white rounded-full"
        style={{ transform: "translate(-50%, -50%)" }}
      />
    </motion.div>
  );
}