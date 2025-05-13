import { Variants } from 'framer-motion';

// Animation constants
const DURATION = {
  SHORT: 0.2,
  MEDIUM: 0.4,
  LONG: 0.8
};

const EASE = {
  DEFAULT: 'easeOut',
  SMOOTH: 'easeInOut'
};

// Fade up animation
export const fadeInUp: Variants = {
  hidden: { 
    opacity: 0, 
    y: 20,
    transition: { duration: DURATION.SHORT }
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: DURATION.MEDIUM, ease: EASE.DEFAULT }
  }
};

// Fade in animation
export const fadeIn: Variants = {
  hidden: { 
    opacity: 0,
    transition: { duration: DURATION.SHORT }
  },
  visible: { 
    opacity: 1,
    transition: { duration: DURATION.MEDIUM, ease: EASE.DEFAULT }
  }
};

// Scale animation
export const scaleIn: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8,
    transition: { duration: DURATION.SHORT }
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: DURATION.MEDIUM, ease: EASE.DEFAULT }
  }
};

// Slide animations
export const slideInLeft: Variants = {
  hidden: { x: -50, opacity: 0, transition: { duration: DURATION.SHORT } },
  visible: { x: 0, opacity: 1, transition: { duration: DURATION.MEDIUM, ease: EASE.DEFAULT } }
};

export const slideInRight: Variants = {
  hidden: { x: 50, opacity: 0, transition: { duration: DURATION.SHORT } },
  visible: { x: 0, opacity: 1, transition: { duration: DURATION.MEDIUM, ease: EASE.DEFAULT } }
};

// Hover effects
export const hoverScale = {
  scale: 1.05,
  transition: { duration: DURATION.SHORT }
};

export const hoverTilt = {
  rotate: 2,
  scale: 1.05,
  transition: { duration: DURATION.SHORT }
};

// Container animation with stagger effect
export const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
      ease: EASE.DEFAULT
    }
  }
};

export const hoverBounce = {
  y: [0, -8, 0],
  transition: {
    duration: 1.5,
    repeat: Infinity,
    ease: EASE.SMOOTH
  }
};

// Page transition
export const pageTransition: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    transition: { duration: DURATION.SHORT }
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.MEDIUM, ease: EASE.DEFAULT }
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: DURATION.SHORT }
  }
}; 