'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';

interface AutoScrollProps {
  items: Array<{
    name: string;
    logo: string;
    description?: string;
  }>;
  className?: string;
}

export function AutoScroll({ items, className = '' }: AutoScrollProps) {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (containerRef.current) {
      setScrollPosition(containerRef.current.scrollLeft);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div 
      className="relative w-full overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={containerRef}
        className={`flex space-x-8 ${isHovered ? 'animate-pause' : 'animate-scroll'} ${className}`}
        style={isHovered ? { transform: `translateX(${-scrollPosition}px)` } : undefined}
      >
        {[...items, ...items].map((item, index) => (
          <div
            key={`${item.name}-${index}`}
            className="flex-shrink-0 w-48 h-32 relative bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 ease-in-out p-4 group"
          >
            <Image
              src={item.logo}
              alt={`${item.name} Logo`}
              fill
              className="object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              priority
            />
            {item.description && (
              <div className="absolute bottom-0 left-0 right-0 p-2 bg-black/50 text-white text-xs text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {item.description}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
} 