import { motion } from 'framer-motion';
import { personalInfo } from '../data/personalInfo';
import { FaGithub, FaFilter } from 'react-icons/fa';
import { useState, useMemo } from 'react';

const Projects = () => {
  const [selectedTech, setSelectedTech] = useState<string>('all');
  
  // Lấy tất cả các công nghệ duy nhất từ các dự án
  const allTechnologies = useMemo(() => {
    const techs = new Set<string>();
    personalInfo.projects.forEach(project => {
      project.technologies.forEach(tech => techs.add(tech));
    });
    return Array.from(techs);
  }, []);

  // Lọc dự án theo công nghệ được chọn
  const filteredProjects = useMemo(() => {
    if (selectedTech === 'all') return personalInfo.projects;
    return personalInfo.projects.filter(project => 
      project.technologies.includes(selectedTech)
    );
  }, [selectedTech]);

  return (
    <div className="pt-20">
      <section className="min-h-screen py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Header Section */}
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Dự án của tôi</h1>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Khám phá các dự án tôi đã thực hiện, từ ứng dụng web đến các giải pháp công nghệ khác nhau.
              </p>
            </div>

            {/* Filter Section */}
            <div className="mb-8 flex flex-wrap items-center gap-4 justify-center">
              <div className="flex items-center gap-2 text-gray-400">
                <FaFilter />
                <span>Lọc theo công nghệ:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedTech('all')}
                  className={`px-4 py-2 rounded-full text-sm transition-colors ${
                    selectedTech === 'all'
                      ? 'bg-accent text-white shadow-lg'
                      : 'bg-secondary hover:bg-accent/20'
                  }`}
                >
                  Tất cả
                </button>
                {allTechnologies.map((tech) => (
                  <button
                    key={tech}
                    onClick={() => setSelectedTech(tech)}
                    className={`px-4 py-2 rounded-full text-sm transition-colors ${
                      selectedTech === tech
                        ? 'bg-accent text-white shadow-lg'
                        : 'bg-secondary hover:bg-accent/20'
                    }`}
                  >
                    {tech}
                  </button>
                ))}
              </div>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-secondary rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="relative h-48 group">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-50" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-xl font-bold text-white">{project.name}</h3>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-gray-400 mb-4 line-clamp-3">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex justify-between items-center">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-400 hover:text-accent transition-colors"
                        aria-label="GitHub Repository"
                      >
                        <FaGithub size={20} />
                        <span className="text-sm">Source Code</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects; 