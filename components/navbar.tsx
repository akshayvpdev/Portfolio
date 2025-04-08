"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { navItems } from "@/config/site";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100; // Add offset to trigger section earlier

      // Update navbar background opacity based on scroll
      setIsScrolled(scrollPosition > 50);

      // Find the current section
      let current = '';
      
      sections.forEach((section) => {
        const sectionElement = section as HTMLElement;

        const sectionTop = sectionElement.offsetTop;
        const sectionHeight = sectionElement.clientHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          current = sectionElement.getAttribute('id') || '';
        }
      });
      
      // If we found an active section, update state
      if (current && current !== activeSection) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once on mount to set initial active section

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeSection]);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-gray-900/80 backdrop-blur-md border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div 
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a 
              href="#hero" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('hero');
              }}
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
            >
              Portfolio
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.hash.slice(1))}
                className={`relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeSection === item.hash.slice(1)
                    ? 'text-white'
                    : 'text-gray-300'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {activeSection === item.hash.slice(1) && (
                  <motion.div
                    layoutId="navbar-active"
                    className="absolute inset-0 bg-gradient-to-r from-blue-500/50 to-purple-500/50 rounded-full -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {item.name}
              </motion.button>
            ))}
          </div>

          {/* Theme Toggle Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="ml-4 p-2 rounded-full bg-white/10 backdrop-blur-sm transition-colors"
          >
            <svg
              className="w-5 h-5 text-gray-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          </motion.button>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-full bg-white/10 backdrop-blur-sm transition-colors"
            >
              <svg
                className="w-6 h-6 text-gray-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}