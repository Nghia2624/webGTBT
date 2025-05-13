// Constants
const VALID_LEVELS = ['Beginner', 'Intermediate', 'Advanced', 'Native'] as const;
const VALID_CATEGORIES = ['Frontend Development', 'Backend Development', 'Tools & Technologies'] as const;

// Types
type Level = typeof VALID_LEVELS[number];
type Category = typeof VALID_CATEGORIES[number];

interface Education {
  school: string;
  degree: string;
  year: string;
  gpa: string;
  achievements: string[];
}

interface Experience {
  position: string;
  company?: string;
  period: string;
  responsibilities: string[];
  technologies?: string[]; // Added for better context
}

interface Skill {
  name: Category;
  items: string[];
  level?: Level; // Optional skill proficiency level
}

interface Project {
  name: string;
  description: string;
  technologies: string[];
  link: string;
  github: string;
  image: string;
  featured?: boolean; // Added to mark featured projects
  startDate?: string; // Added for chronological ordering
  endDate?: string;
}

interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialUrl?: string; // Added for verification
  expiryDate?: string;
}

interface Language {
  name: string;
  level: Level;
  certification?: string; // Added for language certifications
}

interface SocialLinks {
  github: string;
  facebook: string;
  zalo: string;
  linkedin?: string; // Added LinkedIn as it's important for professional networking
}

interface PersonalInfo {
  name: string;
  birthDate: string;
  phone: string;
  email: string;
  address: string;
  avatar: string;
  coverImage: string;
  shortBio: string;
  longBio?: string; // Added for detailed description
  education: Education;
  experience: Experience[];
  skills: Skill[];
  projects: Project[];
  certifications: Certification[];
  languages: Language[];
  interests: string[];
  socialLinks: SocialLinks;
  resumeUrl?: string; // Added for direct CV download
}

// Helper function to validate email
const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Helper function to validate phone number
const isValidPhone = (phone: string): boolean => {
  const phoneRegex = /^[0-9]{10}$/;
  return phoneRegex.test(phone);
};

// Validate personal info
const validatePersonalInfo = (info: PersonalInfo): void => {
  if (!isValidEmail(info.email)) {
    throw new Error('Invalid email format');
  }
  if (!isValidPhone(info.phone)) {
    throw new Error('Invalid phone number format');
  }
};

export const personalInfo: PersonalInfo = {
  name: "Đỗ Ngọc Nghĩa",
  birthDate: "02/06/2004",
  phone: "0369217030",
  email: "dnghia9119@gmail.com",
  address: "Tây Mỗ, Hà Nội, Việt Nam",
  avatar: "/images/AVT.jpg",
  coverImage: "/images/NemMT.jpg",
  shortBio: "Tôi là một lập trình viên đam mê công nghệ và luôn tìm kiếm cơ hội để học hỏi và phát triển.",
  longBio: "Với niềm đam mê về công nghệ và sự sáng tạo, tôi luôn nỗ lực học hỏi và phát triển bản thân trong lĩnh vực lập trình. Tôi có kinh nghiệm làm việc với các công nghệ hiện đại và luôn tìm cách áp dụng những giải pháp tối ưu nhất cho từng dự án.",
  
  education: {
    school: "Trường Đại học Đại Nam",
    degree: "Cử nhân Công nghệ Thông tin",
    year: "2022 - 2026",
    gpa: "2.92/4.0",
    achievements: [
      "Học bổng sinh viên khá năm 2024",
    ]
  },

  experience: [
    {
      position: "Thực tập sinh Frontend Developer",
      company: "Công ty Cổ phần Công nghệ ABC",
      period: "06/2023 - 08/2023",
      responsibilities: [
        "Phát triển giao diện người dùng sử dụng React và TypeScript",
        "Tối ưu hóa hiệu suất và trải nghiệm người dùng",
        "Làm việc với API và tích hợp dữ liệu"
      ],
      technologies: ["React", "TypeScript", "Tailwind CSS", "RESTful API"]
    },
    {
      position: "Freelance Web Developer",
      period: "01/2023 - Hiện tại",
      responsibilities: [
        "Thiết kế và phát triển website cho khách hàng",
        "Tư vấn và triển khai giải pháp công nghệ",
        "Bảo trì và nâng cấp hệ thống"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Express"]
    }
  ],

  skills: [
    {
      name: "Frontend Development",
      items: ["HTML/CSS", "JavaScript", "React", "TypeScript", "Tailwind CSS", "Next.js"],
      level: "Advanced"
    },
    {
      name: "Backend Development",
      items: ["golang", "c#", "MongoDB", "SQL", "RESTful API"],
      level: "Intermediate"
    },
    {
      name: "Tools & Technologies",
      items: ["Git", "VS Code", "Figma", "Postman", "Docker", "AWS"],
      level: "Intermediate"
    }
  ],

  projects: [
    {
      name: "Website Quản lý Thư viện",
      description: "Xây dựng hệ thống quản lý thư viện với chức năng mượn/trả sách, quản lý thành viên",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      link: "https://library-management-demo.vercel.app",
      github: "https://github.com/yourusername/library-management",
      image: "/images/projects/library.jpg",
      featured: true,
      startDate: "2023-06",
      endDate: "2023-08"
    },
    {
      name: "Ứng dụng Chat Real-time",
      description: "Phát triển ứng dụng chat thời gian thực với tính năng nhóm và tin nhắn riêng tư",
      technologies: ["React", "Socket.io", "MongoDB", "Node.js"],
      link: "https://chat-app-demo.vercel.app",
      github: "https://github.com/yourusername/chat-app",
      image: "/images/projects/chat.jpg",
      featured: true,
      startDate: "2023-09",
      endDate: "2023-11"
    }
  ],

  certifications: [
    {
      name: "Chứng chỉ Frontend Developer",
      issuer: "FPT Software Academy",
      date: "12/2023",
      credentialUrl: "https://credentials.fptsoftware.com/verify/123456",
      expiryDate: "12/2025"
    },
    {
      name: "Chứng chỉ React Developer",
      issuer: "Meta",
      date: "08/2023",
      credentialUrl: "https://www.coursera.org/verify/123456"
    }
  ],

  languages: [
    { name: "Tiếng Việt", level: "Native" },
    { name: "Tiếng Anh", level: "Advanced", certification: "TOEIC 650" }
  ],

  interests: [
    "Phát triển web",
    "Học máy",
    "Thiết kế UI/UX",
    "Công nghệ mới",
    "Đọc sách",
    "Thể thao"
  ],

  socialLinks: {
    github: "https://github.com/Nghia2624",
    facebook: "https://www.facebook.com/dnnghia04",
    zalo: "https://zalo.me/0369217030",
    linkedin: "https://www.linkedin.com/in/ngh%C4%A9a-nghia-01369b364/"
  },
  
  resumeUrl: "public/DoNgocNghia_CV.pdf" 
};

// Validate the personal info
validatePersonalInfo(personalInfo);

export type { PersonalInfo, Education, Experience, Skill, Project, Certification, Language, SocialLinks };
export { VALID_LEVELS, VALID_CATEGORIES }; 