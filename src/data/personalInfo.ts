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
  shortBio: "Sinh viên năm 3 ngành CNTT, định hướng Backend (Golang). Luôn nỗ lực học hỏi và phát triển kỹ năng lập trình.",
  longBio: "Tôi là sinh viên năm 3 tại Đại học Đại Nam, yêu thích lập trình backend, đặc biệt là với ngôn ngữ Golang. Tôi đang tích cực học tập, thực hành các dự án nhỏ và mong muốn trở thành Backend Developer chuyên nghiệp trong tương lai.",
  
  education: {
    school: "Trường Đại học Đại Nam",
    degree: "Cử nhân Công nghệ Thông tin",
    year: "2022 - 2026",
    gpa: "2.92/4.0",
    achievements: [
      "Học bổng sinh viên khá năm 2024"
    ]
  },

  experience: [
    {
      position: "Sinh viên năm 3 ngành CNTT",
      period: "2022 - nay",
      responsibilities: [
        "Học tập các môn chuyên ngành về lập trình, cơ sở dữ liệu, mạng máy tính",
        "Tự học và thực hành các dự án nhỏ về backend với Golang và SQL"
      ]
    }
  ],

  skills: [
    {
      name: "Backend Development",
      items: ["Golang (cơ bản)", "SQL (cơ bản)", "RESTful API"],
      level: "Beginner"
    },
    {
      name: "Frontend Development",
      items: ["HTML", "CSS", "JavaScript"],
      level: "Beginner"
    },
    {
      name: "Tools & Technologies",
      items: ["Git", "VS Code", "Postman"],
      level: "Beginner"
    }
  ],

  projects: [
    {
      name: "Beauty Spot Lite",
      description: "Ứng dụng di động Flutter giới thiệu các địa chỉ làm đẹp, spa, salon... với bản đồ, đánh giá và tìm kiếm tiện lợi.",
      technologies: ["Flutter", "Dart", "Firebase", "Google Maps API"],
      link: "https://github.com/Nghia2624/beauty_spot_lite",
      github: "https://github.com/Nghia2624/beauty_spot_lite",
      image: "public/images/NemMT.jpg",
      featured: true,
      startDate: "2024-01",
      endDate: "2024-03"
    },
    {
      name: "WebChat - Ứng dụng chat real-time",
      description: "Web chat real-time tối ưu hiệu suất, hỗ trợ chat nhóm, cá nhân, sử dụng Go cho backend và React cho frontend.",
      technologies: ["Go", "React", "WebSocket", "Node.js", "MongoDB"],
      link: "https://github.com/Nghia2624/webchat",
      github: "https://github.com/Nghia2624/webchat",
      image: "public/images/NemMT.jpg",
      featured: true,
      startDate: "2023-09",
      endDate: "2023-12"
    },
    {
      name: "Vườn Thông Minh (AI & IoT)",
      description: "Dự án IoT ứng dụng AI để giám sát, điều khiển vườn thông minh: cảm biến nhiệt độ, độ ẩm, tự động tưới, nhận diện hình ảnh sâu bệnh.",
      technologies: ["IoT", "AI", "Python", "Raspberry Pi", "TensorFlow", "Node-RED"],
      link: "https://github.com/Nghia2624/VuonThongMinh",
      github: "https://github.com/Nghia2624/VuonThongMinh",
      image: "public/images/NemMT.jpg",
      featured: true,
      startDate: "2023-05",
      endDate: "2023-08"
    }
  ],

  certifications: [
    // Chưa có chứng chỉ
  ],

  languages: [
    { name: "Tiếng Việt", level: "Native" },
    { name: "Tiếng Anh", level: "Beginner" }
  ],

  interests: [
    "Lập trình backend",
    "Golang",
    "Cơ sở dữ liệu",
    "Đọc sách",
    "Đá bóng"
  ],

  socialLinks: {
    github: "https://github.com/Nghia2624",
    facebook: "https://www.facebook.com/dnnghia04",
    zalo: "https://zalo.me/0369217030",
    linkedin: "https://www.linkedin.com/in/ngh%C4%A9a-nghia-01369b364/"
  },
  
  resumeUrl: "/DoNgocNghia_CV.pdf" 
};

// Validate the personal info
validatePersonalInfo(personalInfo);

export type { PersonalInfo, Education, Experience, Skill, Project, Certification, Language, SocialLinks };
export { VALID_LEVELS, VALID_CATEGORIES }; 