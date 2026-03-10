// Personal information - Modify this with your own data

// Type definitions
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  demo: string | null;
  featured: boolean;
}

export const personalInfo = {
  name: "Tracy Wang",
  title: "技术+商科背景的AI Builder",
  bio: "热衷于使用AI来改变世界",
  email: "w13997658669@163.com",
  github: "https://github.com/johndoe",
  linkedin: "https://linkedin.com/in/johndoe",
  location: "北京，中国",
  avatar: "/images/avatar.jpg",
};

export const skills = [
  { name: "JavaScript", level: 85, category: "frontend" },
  { name: "React", level: 80, category: "frontend" },
  // 后端 (backend) - 核心的服务端开发、数据处理、数据库相关技能
  { name: "Python", level: 95, category: "backend" },
  { name: "Java", level: 90, category: "backend" },
  { name: "SQL", level: 80, category: "backend" },
    // 运维 (DevOps) - 基础设施、容器、云服务相关
  { name: "Docker", level: 70, category: "DevOps" },
  { name: "AWS", level: 65, category: "DevOps" },
];

export const interests = [
  "AI",
  "机器学习",
  "开源",
  "交互设计",
  "信息系统",
  "财务估值",
];

export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with real-time inventory management, payment processing, and admin dashboard.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    github: "https://github.com/johndoe/ecommerce",
    demo: "https://ecommerce-demo.com",
    featured: true,
  },
  {
    id: 2,
    title: "AI Chat Application",
    description: "Real-time chat application with AI-powered suggestions, voice messages, and end-to-end encryption.",
    image: "https://images.unsplash.com/photo-1611746872915-64382b5c2b36?w=800&q=80",
    technologies: ["React", "Node.js", "WebSocket", "OpenAI API"],
    github: "https://github.com/johndoe/ai-chat",
    demo: "https://ai-chat-demo.com",
    featured: true,
  },
  {
    id: 3,
    title: "Task Management App",
    description: "Collaborative task management tool with Kanban boards, time tracking, and team collaboration features.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&q=80",
    technologies: ["Next.js", "Prisma", "Tailwind CSS", "NextAuth"],
    github: "https://github.com/johndoe/taskmaster",
    demo: "https://taskmaster-demo.com",
    featured: true,
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description: "Beautiful weather dashboard with interactive maps, 7-day forecasts, and severe weather alerts.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&q=80",
    technologies: ["React", "OpenWeather API", "Leaflet", "Framer Motion"],
    github: "https://github.com/johndoe/weather",
    demo: "https://weather-demo.com",
    featured: false,
  },
];

export const experiences = [
  {
    id: 1,
    type: "教育",
    title: "信息管理与信息系统，管理学学士",
    organization: "中央财经大学",
    location: "北京, 中国",
    date: "2020 - 2024",
    description: "专注于机器学习、数据分析. GPA: 3.7/4.0",
    highlights: ["一些过得去的小奖"],
  },
  {
    id: 2,
    type: "教育",
    title: "访学学生",
    organization: "加州大学伯克利分校",
    location: "伯克利, 加州",
    date: "2024暑期",
    description: "参加创业课程并与硅谷VC、做startup的同学交流",
  },
];

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/johndoe",
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/johndoe",
    icon: "linkedin",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/johndoe",
    icon: "twitter",
  },
  {
    name: "Email",
    url: "mailto:john.doe@example.com",
    icon: "mail",
  },
];
