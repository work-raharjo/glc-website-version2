'use client';

import { useEffect, useRef } from 'react';

export default function AnimatedBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const scrolled = window.scrollY;
      const container = containerRef.current;
      
      // Parallax effect for different layers
      container.style.transform = `translateY(${scrolled * 0.5}px)`;
      
      // Fade out effect as you scroll
      const opacity = Math.max(0, 1 - scrolled / 500);
      container.style.opacity = opacity.toString();
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 -z-10 overflow-hidden"
      style={{ willChange: 'transform' }}
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F1B2B] to-[#1A1A1A] opacity-90" />
      
      {/* Animated circles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#0F1B2B] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#1A1A1A] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-[#E31837] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
      </div>
      
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(to right, #E5E5E5 1px, transparent 1px),
                           linear-gradient(to bottom, #E5E5E5 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />
    </div>
  );
} 