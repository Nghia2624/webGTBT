import { FaGithub, FaLinkedin, FaFacebook, FaCode, FaServer, FaTools } from 'react-icons/fa';
import { SiZalo } from 'react-icons/si';

// Breakpoints
export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px'
} as const;

export type Breakpoint = keyof typeof BREAKPOINTS;

// Animation config
export const ANIMATION_CONFIG = {
  fadeInUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.5 }
  },
  scaleIn: {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.8, opacity: 0 },
    transition: { duration: 0.5 }
  },
  stagger: {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }
} as const;

// Theme colors (only dark theme)
export const THEME_COLORS = {
  primary: '#0F172A',       // Deep blue-black for background
  secondary: '#1E293B',     // Slightly lighter blue-gray for components
  accent: '#3B82F6',        // Vibrant blue for highlights/buttons
  background: '#0F172A',    // Same as primary for consistency
  text: '#F8FAFC',          // Almost white for text
  textSecondary: '#94A3B8'  // Muted grayish blue for secondary text
} as const;

// Scroll reveal config
export const SCROLL_REVEAL_CONFIG = {
  threshold: 0.1,
  rootMargin: '-50px',
  delay: 200,
} as const;

// Social media links
export const SOCIAL_LINKS = [
  {
    name: 'GitHub',
    icon: FaGithub,
    url: 'https://github.com/Nghia2624', // Replace with your GitHub profile URL
    color: '#333333'
  },
  {
    name: 'LinkedIn',
    icon: FaLinkedin,
    url: 'https://www.linkedin.com/in/ngh%C4%A9a-nghia-01369b364/', // Replace with your LinkedIn profile URL
    color: '#0077B5'
  },
  {
    name: 'Facebook',
    icon: FaFacebook,
    url: 'https://www.facebook.com/dnnghia04', // Replace with your Facebook profile URL
    color: '#1877F2'
  },
  {
    name: 'Zalo',
    icon: SiZalo,
    url: 'https://zalo.me/0369217030', // Replace with your Zalo phone number (e.g., 0123456789)
    color: '#0068FF'
  }
];

// Navigation links
export const NAV_LINKS = [
  { name: 'Trang chủ', path: '/' },
  { name: 'Giới thiệu', path: '/about' },
  { name: 'Dự án', path: '/projects' },
  { name: 'Liên hệ', path: '/contact' }
];

// Skill categories with icon components
export const SKILL_CATEGORIES = {
  frontend: {
    title: 'Frontend Development',
    icon: FaCode,
    skills: ['React', 'TypeScript', 'HTML/CSS', 'Tailwind CSS', 'Framer Motion']
  },
  backend: {
    title: 'Backend Development',
    icon: FaServer,
    skills: ['Node.js', 'Express', 'MongoDB', 'RESTful APIs', 'GraphQL']
  },
  tools: {
    title: 'Development Tools',
    icon: FaTools,
    skills: ['Git', 'VS Code', 'Docker', 'Postman', 'Figma']
  }
}; 