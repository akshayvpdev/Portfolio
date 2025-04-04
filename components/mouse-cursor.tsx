"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function MouseCursor() {
  const [isMounted, setIsMounted] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [isMounted, cursorX, cursorY]);

  if (!isMounted) return null;

  return (
    <>
      <motion.div
        className="cursor-dot"
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
          position: "fixed",
          zIndex: 999,
          pointerEvents: "none",
          width: "32px",
          height: "32px",
          border: "2px solid rgba(255, 255, 255, 0.8)",
          borderRadius: "50%",
          mixBlendMode: "difference",
        }}
      />
      <motion.div
        className="cursor-ring"
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
          position: "fixed",
          zIndex: 999,
          pointerEvents: "none",
          width: "8px",
          height: "8px",
          backgroundColor: "white",
          borderRadius: "50%",
          mixBlendMode: "difference",
          transform: "translate(12px, 12px)",
        }}
      />
    </>
  );
}
