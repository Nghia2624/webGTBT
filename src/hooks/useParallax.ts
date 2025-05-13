import { useEffect, useRef, useState } from 'react';

interface ParallaxOptions {
  speed?: number;
  easing?: string;
}

export const useParallax = (options: ParallaxOptions = {}) => {
  const elementRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  const { speed = 0.5, easing = 'easeOut' } = options;

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return;

      const { top } = elementRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementVisible = top < windowHeight;

      if (elementVisible) {
        const scrolled = window.pageYOffset;
        const parallaxOffset = scrolled * speed;
        setOffset(parallaxOffset);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return {
    ref: elementRef,
    style: {
      transform: `translateY(${offset}px)`,
      transition: `transform 0.2s ${easing}`,
    },
  };
}; 