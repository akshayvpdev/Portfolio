"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { MouseEvent, ReactNode, useRef } from "react";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function MagneticButton({
  children,
  className = "",
  onClick,
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const top = useTransform(ySpring, (latest) => `${latest}px`);
  const left = useTransform(xSpring, (latest) => `${latest}px`);

  const handleMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
    const { clientX, clientY } = e;
    const element = ref.current;
    if (!element) return;

    const { height, width, left, top } = element.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const distance = 15;

    const moveX = (clientX - centerX) / centerX * distance;
    const moveY = (clientY - centerY) / centerY * distance;

    x.set(moveX);
    y.set(moveY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{ top, left, position: "relative" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className={className}
    >
      {children}
    </motion.button>
  );
}
