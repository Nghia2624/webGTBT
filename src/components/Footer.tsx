import { memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo } from '../data/personalInfo';
import { FaGithub, FaFacebook, FaLinkedin, FaHeart, FaArrowUp } from 'react-icons/fa';
import { SiZalo } from 'react-icons/si';
import { fadeInUp, container, hoverScale, hoverTilt, hoverBounce } from '../utils/animations';
import { useScrollAnimation } from '../hooks/useAnimations';
import { SOCIAL_LINKS } from '../utils/constants';
import { IconType } from 'react-icons';

const QUICK_LINKS = [
  { name: 'Trang chủ', href: '/' },
  { name: 'Về tôi', href: '/about' },
  { name: 'Dự án', href: '/projects' },
  { name: 'Liên hệ', href: '/contact' },
] as const;

// Memoized components for better performance
const SocialLink = memo(({ url, icon: Icon, name }: { url: string; icon: IconType; name: string }) => (
  <motion.a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-accent transition-colors"
    whileHover={hoverTilt}
    aria-label={name}
  >
    <Icon size={18} />
  </motion.a>
));
SocialLink.displayName = 'SocialLink';

const QuickLink = memo(({ href, name }: typeof QUICK_LINKS[number]) => (
  <motion.a
    href={href}
    className="text-gray-400 hover:text-accent transition-colors inline-block text-sm"
    whileHover={{ x: 2 }}
  >
    {name}
  </motion.a>
));
QuickLink.displayName = 'QuickLink';

const Footer = () => {
  const [ref, inView, controls] = useScrollAnimation(0.1);
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-b from-transparent to-primary/30 backdrop-blur-lg border-t border-white/10">
      <AnimatePresence>
        <motion.button
          onClick={scrollToTop}
          className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-accent text-white p-2 rounded-full shadow-lg hover:shadow-accent/20 hover:scale-110 transition-all"
          whileHover={hoverScale}
          whileTap={{ scale: 0.95 }}
          animate={hoverBounce}
          aria-label="Scroll to top"
        >
          <FaArrowUp size={16} />
        </motion.button>
      </AnimatePresence>

      <motion.div
        ref={ref}
        variants={container}
        initial="hidden"
        animate={controls}
        className="container mx-auto px-4 py-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* About Section */}
          <motion.div variants={fadeInUp} className="space-y-3">
            <h3 className="text-lg font-bold mb-2 text-white">Về tôi</h3>
            <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
              {personalInfo.shortBio}
            </p>
            <motion.div 
              variants={container}
              className="flex items-center gap-3 pt-2"
            >
              {SOCIAL_LINKS.map((link) => (
                <SocialLink key={link.name} {...link} />
              ))}
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-lg font-bold mb-2 text-white">Liên kết nhanh</h3>
            <motion.ul 
              variants={container}
              className="space-y-1.5"
            >
              {QUICK_LINKS.map((link) => (
                <motion.li key={link.name} variants={fadeInUp}>
                  <QuickLink {...link} />
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-lg font-bold mb-2 text-white">Liên hệ</h3>
            <motion.ul 
              variants={container}
              className="space-y-1.5 text-sm"
            >
              <motion.li variants={fadeInUp} className="text-gray-400">
                <span className="font-medium">Email:</span>
                <a 
                  href={`mailto:${personalInfo.email}`} 
                  className="hover:text-accent ml-2 transition-colors"
                >
                  {personalInfo.email}
                </a>
              </motion.li>
              <motion.li variants={fadeInUp} className="text-gray-400">
                <span className="font-medium">Phone:</span>
                <a 
                  href={`tel:${personalInfo.phone}`} 
                  className="hover:text-accent ml-2 transition-colors"
                >
                  {personalInfo.phone}
                </a>
              </motion.li>
              <motion.li variants={fadeInUp} className="text-gray-400">
                <span className="font-medium">Address:</span>
                <span className="ml-2">{personalInfo.address}</span>
              </motion.li>
            </motion.ul>
          </motion.div>

          {/* Download CV */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-lg font-bold mb-2 text-white">Tải CV</h3>
            <p className="text-gray-400 text-sm mb-3 line-clamp-2">
              Tải CV của tôi để xem thêm thông tin chi tiết về kinh nghiệm và kỹ năng.
            </p>
            <motion.a
              href={personalInfo.resumeUrl}
              download
              className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-1.5 rounded-full hover:bg-accent/20 transition-colors text-sm"
              whileHover={hoverScale}
              whileTap={{ scale: 0.95 }}
            >
              Tải CV
            </motion.a>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          variants={fadeInUp}
          className="mt-8 pt-4 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-2">
            <p className="text-gray-400 text-xs">
              © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
            </p>
            <p className="text-gray-400 text-xs flex items-center gap-1">
              Made with <FaHeart className="text-accent animate-pulse w-3 h-3" /> by {personalInfo.name}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default memo(Footer); 