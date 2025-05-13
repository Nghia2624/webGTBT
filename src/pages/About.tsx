import { motion } from 'framer-motion';
import { personalInfo } from '../data/personalInfo';
import { FaBirthdayCake, FaPhone, FaEnvelope, FaGraduationCap, FaCode, FaServer, FaTools, FaBriefcase, FaProjectDiagram, FaCertificate, FaLanguage, FaDownload } from 'react-icons/fa';
import { SKILL_CATEGORIES } from '../utils/constants';

const About = () => {
  return (
    <div className="pt-20">
      <section className="min-h-screen py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Cover Section */}
            <div className="relative h-64 md:h-96 mb-12 rounded-lg overflow-hidden shadow-xl">
              <img
                src={personalInfo.coverImage}
                alt="Cover"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {personalInfo.name}
                </h1>
                <p className="text-xl text-gray-300">{personalInfo.education.degree}</p>
                <a
                  href="/cv.pdf"
                  download
                  className="inline-flex items-center gap-2 mt-4 px-6 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors shadow-lg"
                >
                  <FaDownload />
                  <span>Tải CV</span>
                </a>
              </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column - Personal Info */}
              <div className="space-y-8">
                {/* Avatar Card */}
                <div className="bg-secondary rounded-lg p-6 shadow-lg">
                  <div className="flex justify-center mb-6">
                    <motion.img
                      src={personalInfo.avatar}
                      alt="Avatar"
                      className="w-48 h-48 rounded-full object-cover border-4 border-accent shadow-xl"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      loading="lazy"
                    />
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 p-4 bg-primary/10 rounded-lg">
                      <FaBirthdayCake className="text-accent" size={20} />
                      <div>
                        <h3 className="text-gray-400">Ngày sinh</h3>
                        <p className="text-white">{personalInfo.birthDate}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 p-4 bg-primary/10 rounded-lg">
                      <FaPhone className="text-accent" size={20} />
                      <div>
                        <h3 className="text-gray-400">Số điện thoại</h3>
                        <p className="text-white">{personalInfo.phone}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 p-4 bg-primary/10 rounded-lg">
                      <FaEnvelope className="text-accent" size={20} />
                      <div>
                        <h3 className="text-gray-400">Email</h3>
                        <p className="text-white">{personalInfo.email}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Skills Card */}
                <div className="bg-secondary rounded-lg p-6 shadow-lg">
                  <h2 className="text-2xl font-bold mb-6">Kỹ năng</h2>
                  {Object.values(SKILL_CATEGORIES).map((category, index) => (
                    <motion.div
                      key={category.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="mb-6"
                    >
                      <div className="flex items-center mb-2">
                        <div className="text-accent mr-2">
                          <category.icon />
                        </div>
                        <h3 className="text-lg font-semibold">{category.title}</h3>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((item) => (
                          <span
                            key={item}
                            className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Right Columns - Education, Experience, Projects, etc. */}
              <div className="lg:col-span-2 space-y-8">
                {/* Education Card */}
                <div className="bg-secondary rounded-lg p-8 shadow-lg">
                  <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <FaGraduationCap className="text-accent mr-2" />
                    Học vấn
                  </h2>
                  <div className="space-y-4">
                    <div className="p-4 bg-primary/10 rounded-lg">
                      <h3 className="text-xl font-semibold">{personalInfo.education.school}</h3>
                      <p className="text-gray-400">{personalInfo.education.degree}</p>
                      <p className="text-gray-400">{personalInfo.education.year}</p>
                      <p className="text-gray-400">GPA: {personalInfo.education.gpa}</p>
                    </div>
                    <div className="p-4 bg-primary/10 rounded-lg">
                      <h4 className="font-semibold mb-2">Thành tích</h4>
                      <ul className="list-disc list-inside text-gray-300">
                        {personalInfo.education.achievements.map((achievement, index) => (
                          <li key={index}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Experience Card */}
                <div className="bg-secondary rounded-lg p-8 shadow-lg">
                  <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <FaBriefcase className="text-accent mr-2" />
                    Kinh nghiệm làm việc
                  </h2>
                  <div className="space-y-6">
                    {personalInfo.experience.map((exp, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="border-l-2 border-accent pl-4"
                      >
                        <h3 className="text-xl font-semibold">{exp.position}</h3>
                        {exp.company && <p className="text-gray-400">{exp.company}</p>}
                        <p className="text-gray-400 mb-2">{exp.period}</p>
                        <ul className="list-disc list-inside text-gray-300">
                          {exp.responsibilities.map((resp, i) => (
                            <li key={i}>{resp}</li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Projects Card */}
                <div className="bg-secondary rounded-lg p-8 shadow-lg">
                  <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <FaProjectDiagram className="text-accent mr-2" />
                    Dự án
                  </h2>
                  <div className="space-y-6">
                    {personalInfo.projects.map((project, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="border-l-2 border-accent pl-4"
                      >
                        <h3 className="text-xl font-semibold">{project.name}</h3>
                        <p className="text-gray-300 mb-2">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-2">
                          {project.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-accent hover:underline"
                        >
                          Xem dự án
                        </a>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Certifications Card */}
                <div className="bg-secondary rounded-lg p-8 shadow-lg">
                  <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <FaCertificate className="text-accent mr-2" />
                    Chứng chỉ
                  </h2>
                  <div className="space-y-4">
                    {personalInfo.certifications.map((cert, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="border-l-2 border-accent pl-4"
                      >
                        <h3 className="text-lg font-semibold">{cert.name}</h3>
                        <p className="text-gray-400">{cert.issuer}</p>
                        <p className="text-gray-400">{cert.date}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Languages Card */}
                <div className="bg-secondary rounded-lg p-8 shadow-lg">
                  <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <FaLanguage className="text-accent mr-2" />
                    Ngôn ngữ
                  </h2>
                  <div className="space-y-4">
                    {personalInfo.languages.map((lang, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex justify-between items-center p-4 bg-primary/10 rounded-lg"
                      >
                        <span className="font-semibold">{lang.name}</span>
                        <span className="text-gray-400">{lang.level}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About; 