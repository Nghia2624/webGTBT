import { memo, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo } from '../data/personalInfo';
import { FaArrowDown, FaDownload } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import { SOCIAL_LINKS, SKILL_CATEGORIES } from '../utils/constants';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1 }
};

// Memoized components for better performance
const SocialLink = memo(({ href, Icon, label }: { href: string; Icon: React.ComponentType<any>; label: string }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-accent transition-all transform hover:scale-110 hover:shadow-lg p-2 rounded-full hover:bg-accent/10"
    whileHover={{ y: -2 }}
    aria-label={label}
  >
    <Icon size={28} />
  </motion.a>
));

const SkillCard = memo(({ skill, index }: { skill: { name: string; level: string; items: string[] }; index: number }) => {
  const Icon = SKILL_CATEGORIES[skill.name.toLowerCase() as keyof typeof SKILL_CATEGORIES]?.icon;
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <motion.div
      ref={ref}
      variants={fadeInUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-secondary/50 backdrop-blur-sm rounded-xl p-6 hover:bg-secondary/70 transition-colors"
    >
      <div className="flex items-center gap-4 mb-4">
        {Icon && <Icon className="text-accent" size={24} />}
        <div>
          <h3 className="text-xl font-semibold">{skill.name}</h3>
          {skill.level && (
            <span className="text-sm text-gray-400">
              Level: {skill.level}
            </span>
          )}
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        {skill.items.map((item) => (
          <span
            key={item}
            className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm"
          >
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
});

const ProjectCard = memo(({ project, index }: { project: typeof personalInfo.projects[0]; index: number }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <motion.div
      ref={ref}
      variants={fadeInUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-secondary/50 backdrop-blur-sm rounded-xl overflow-hidden group hover:bg-secondary/70 transition-colors"
    >
      <div className="relative h-40 sm:h-48">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary to-transparent opacity-60" />
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
          <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">{project.name}</h3>
          <p className="text-sm sm:text-base text-gray-300 line-clamp-2">{project.description}</p>
        </div>
      </div>
      <div className="p-4 sm:p-6">
        <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 sm:px-3 py-1 bg-accent/10 text-accent rounded-full text-xs sm:text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-0">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-accent/80 transition-colors text-sm sm:text-base"
          >
            Xem mã nguồn
          </a>
        </div>
        {project.startDate && project.endDate && (
          <div className="mt-3 sm:mt-4 text-xs sm:text-sm text-gray-400">
            {project.startDate} - {project.endDate}
          </div>
        )}
      </div>
    </motion.div>
  );
});

const Home = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  // Use SOCIAL_LINKS from constants
  const socialLinks = useMemo(() =>
    SOCIAL_LINKS.map(link => ({
      url: link.url,
      Icon: link.icon,
      label: link.name
    })),
  []);

  // Memoize featured projects
  const featuredProjects = useMemo(() => 
    personalInfo.projects.filter(project => project.featured).slice(0, 2),
    []
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-secondary to-primary relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-48 h-48 md:w-72 md:h-72 bg-accent opacity-20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 md:w-72 md:h-72 bg-accent opacity-20 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-96 md:h-96 bg-accent opacity-10 rounded-full filter blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center py-20 md:py-0">
          <div className="w-full max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center"
            >
              {/* Left Column - Content */}
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-left space-y-6 md:space-y-8"
              >
                <div className="space-y-4 md:space-y-6">
                  <motion.h2 
                    variants={fadeInUp}
                    className="text-accent text-lg md:text-2xl font-medium"
                  >
                    Welcome to my portfolio
                  </motion.h2>
                  <motion.h1 
                    variants={fadeInUp}
                    className="text-3xl md:text-6xl font-bold space-y-2 md:space-y-4"
                  >
                    <div className="text-white">Xin chào, tôi là</div>
                    <motion.div 
                      className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400 bg-[length:200%_100%] py-1"
                      animate={{
                        backgroundPosition: ['0% 0%', '100% 0%', '0% 0%']
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      style={{
                        WebkitTextStroke: '1px rgba(255,255,255,0.1)'
                      }}
                    >
                      Đỗ Ngọc Nghĩa
                    </motion.div>
                  </motion.h1>
                  <motion.p 
                    variants={fadeInUp}
                    className="text-base md:text-xl text-gray-400 max-w-2xl"
                  >
                    {personalInfo.longBio || personalInfo.shortBio}
                  </motion.p>
                </div>

                <motion.div 
                  variants={fadeInUp}
                  className="flex flex-wrap gap-3 md:gap-4"
                >
                  <button
                    onClick={() => handleNavigation('/about')}
                    className="inline-flex items-center gap-2 bg-accent text-white px-6 py-2.5 md:px-8 md:py-3 rounded-full font-medium hover:bg-accent/90 transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-accent/20 text-sm md:text-base"
                  >
                    <span>Tìm hiểu thêm về tôi</span>
                    <FaArrowDown className="animate-bounce" />
                  </button>
                  <a
                    href={personalInfo.resumeUrl}
                    download
                    className="inline-flex items-center gap-2 bg-white/10 text-white px-6 py-2.5 md:px-8 md:py-3 rounded-full font-medium hover:bg-white/20 transition-all transform hover:scale-105 hover:shadow-lg text-sm md:text-base"
                  >
                    <span>Tải CV</span>
                    <FaDownload />
                  </a>
                </motion.div>

                {/* Social Links */}
                <motion.div 
                  variants={fadeInUp}
                  className="flex flex-wrap gap-3 md:gap-4 pt-2"
                >
                  {socialLinks.map((link) => (
                    <SocialLink
                      key={link.label}
                      href={link.url}
                      Icon={link.Icon}
                      label={link.label}
                    />
                  ))}
                </motion.div>
              </motion.div>

              {/* Right Column - Image/Animation */}
              <motion.div
                variants={scaleIn}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.4, duration: 0.8 }}
                className="relative"
              >
                <div className="relative w-full max-w-md mx-auto">
                  {/* Decorative circles */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-accent to-accent/20 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
                  
                  {/* Avatar container */}
                  <div className="relative bg-gradient-to-tr from-accent to-accent/50 p-1 rounded-full shadow-xl group transition-transform duration-300 hover:scale-105">
                    <div className="bg-secondary rounded-full p-2 transition-transform duration-300 group-hover:scale-95">
                      <img
                        src={personalInfo.avatar}
                        alt={`Avatar of ${personalInfo.name}`}
                        className="w-full aspect-square rounded-full object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  {/* Floating badge */}
                  <AnimatePresence>
                    <motion.div
                      variants={fadeInUp}
                      initial="hidden"
                      animate="visible"
                      transition={{ delay: 0.8, duration: 0.5 }}
                      className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-accent/90 backdrop-blur-sm text-white px-4 sm:px-6 py-2 rounded-full shadow-lg border border-white/20 whitespace-nowrap z-10 text-sm sm:text-base"
                    >
                      Back-end Intern (GoLang)
                    </motion.div>
                  </AnimatePresence>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12"
            >
              Kỹ năng của tôi
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {Object.entries(SKILL_CATEGORIES).map(([key, category], index) => (
                <SkillCard 
                  key={key} 
                  skill={{
                    name: category.title,
                    level: 'Beginner',
                    items: category.skills
                  }} 
                  index={index} 
                />
              ))}
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12"
            >
              Dự án nổi bật
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {featuredProjects.map((project, index) => (
                <ProjectCard key={project.name} project={project} index={index} />
              ))}
            </div>
            <motion.div 
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mt-8 md:mt-12"
            >
              <button
                onClick={() => handleNavigation('/projects')}
                className="inline-flex items-center gap-2 bg-accent text-white px-6 py-2.5 md:px-8 md:py-3 rounded-full font-medium hover:bg-accent/90 transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-accent/20 text-sm md:text-base"
              >
                <span>Xem tất cả dự án</span>
                <FaArrowDown className="animate-bounce" />
              </button>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default memo(Home); 