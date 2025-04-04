"use client";

import { useEffect, useState } from "react";

interface TypewriterProps {
  text: string;
  delay?: number;
  className?: string;
}

export default function Typewriter({ text, delay = 100, className = "" }: TypewriterProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [index, text, delay]);

  return <span className={className}>{displayedText}</span>;
}
