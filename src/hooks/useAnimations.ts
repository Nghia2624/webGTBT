import { useEffect, useRef, useState, useCallback } from 'react';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Hook for scroll-triggered animations with Framer Motion controls
export const useScrollAnimation = (threshold = 0.1) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return [ref, inView, controls] as const;
};

// Hook for parallax effect (simplified version)
export const useParallax = (speed = 0.5) => {
  const ref = useRef<HTMLDivElement>(null);
  const [y, setY] = useState(0);

  const handleScroll = useCallback(() => {
    if (!ref.current) return;
    const scrolled = window.scrollY;
    setY(scrolled * speed);
  }, [speed]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return { ref, y };
};

// Hook for animate on scroll with IntersectionObserver
export const useAnimateOnScroll = (threshold = 0.1, once = true) => {
  const [ref, inView] = useInView({
    threshold,
    triggerOnce: once,
  });

  return [ref, inView] as const;
}; 