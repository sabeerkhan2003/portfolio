export type SkillCategory = "frontend" | "backend" | "tools";

export type SkillIconId =
  | "html"
  | "css"
  | "tailwind"
  | "javascript"
  | "react"
  | "nextjs"
  | "typescript"
  | "angular"
  | "nodejs"
  | "python"
  | "java"
  | "oops"
  | "mysql"
  | "github"
  | "django";

export interface Skill {
  name: string;
  percentage: number;
  category: SkillCategory;
  icon: SkillIconId;
}

export interface TimelineItem {
  duration: string;
  title: string;
  organization: string;
  description: string;
}

export interface Project {
  title: string;
  description: string;
  liveUrl: string;
  githubUrl: string;
  image: string;
  tags: string[];
  isLive?: boolean;
}

export interface Certificate {
  title: string;
  image: string;
  viewUrl: string;
}

export interface Stat {
  value: string;
  label: string;
}

export type ServiceIcon = "web" | "app" | "devops" | "microservices";

export interface Service {
  title: string;
  description: string;
  icon: ServiceIcon;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: "linkedin" | "github" | "email";
}

export interface PersonalInfo {
  name: string;
  role: string;
  tagline: string;
  bio: string;
  about: string;
  location: string;
  email: string;
  phone: string;
  education: string;
  languages: string[];
  services: string;
  resumeUrl: string;
  profileImage: string;
}

export const personalInfo: PersonalInfo = {
  name: "Sabeer Khan",
  role: "Frontend Engineer",
  tagline:
    "I'm a Full Stack Developer with knowledge and interest in Software Engineering. I love creating beautiful and functional Applications.",
  bio: "I have completed a Full-Stack Development course and have worked on full-stack products using technologies like React.js, Node.js, MySQL, Python, Headless CMS and more.",
  about:"Hello! I'm Sabeer, a passionate and driven Full Stack Developer with expertise in front-end development. I have a diverse educational background and hands-on experience in building responsive, user-friendly web applications. My journey into the world of web development has been a blend of formal education, project-based learning, and real-world experience.",
    // "Frontend Developer with a keen eye for design and a understanding of Software Development (SDE). I specialize in building responsive, user-friendly UI that combine aesthetics with functionality. Constantly exploring new technologies, I have experience working with RESTful APIs and possess full-stack knowledge to handle databases effectively.",
  location: "Chennai, Tamil Nadu",
  email: "sabeersabee20@gmail.com",
  phone: "+91 89460 12650",
  education: "B.TECH CSE (AI with ML)",
  languages: ["Tamil", "English", "Arabic"],
  services: "Fullstack websites",
  resumeUrl: "/resume/Sabeer_Resume_001.pdf",
  profileImage: "/images/professional.jpeg",
};

export const services: Service[] = [
  {
    title: "Web Development",
    description:
      "Designing and building responsive, high-performance websites and web apps with React, Next.js, and modern UI practices.",
    icon: "web",
  },
  {
    title: "App Development",
    description:
      "Creating cross-platform and mobile-friendly experiences with clean interfaces, smooth interactions, and scalable front-end logic.",
    icon: "app",
  },
  {
    title: "Dev-Ops",
    description:
      "Setting up CI/CD workflows, deployments, and cloud-ready pipelines to ship features reliably and keep products running smoothly.",
    icon: "devops",
  },
  {
    title: "Other Microservices",
    description:
      "Integrating REST APIs, headless CMS, and modular backend services into cohesive full-stack solutions.",
    icon: "microservices",
  },
];

export const stats: Stat[] = [
  { value: "20+", label: "Projects Completed" },
  { value: "1.5+", label: "Years of Experience" },
  { value: "60+", label: "Repositories Created" },
  { value: "5+", label: "Client Projects" },
];

export const timeline: TimelineItem[] = [
  {
    duration: "MAR 2025 - PRESENT",
    title: "Frontend Engineer",
    organization: "People's Consulting LLC",
    description:
      "Worked as a Frontend Engineer in People's Consulting LLC. An product based company that provides software solutions to businesses.",
  },
  {
    duration: "SEP 2024 - FEB 2025",
    title: "React Developer",
    organization: "Thirdvizion Labs PVT LTD",
    description:
      "Worked as a React Developer in Thirdvizion Labs PVT LTD. I have worked on various projects and completed them successfully.",
  },
  {
    duration: "2024",
    title: "Python Full Stack Development",
    organization: "Qspiders-chennai",
    description:
      "Placed in QSpiders Academy through college placement and opted for an 8-month Python Full Stack Development course.",
  },
  {
    duration: "2020-2024",
    title: "B.TECH CSE with Specialization in AI with ML",
    organization: "Bharath University",
    description:
      "Completed B.Tech in Computer Science and Engineering (CSE) with a specialization in Artificial Intelligence (AI) and Machine Learning (ML) with a CGPA of 8.37.",
  },
  {
    duration: "2019-2020",
    title: "HSC",
    organization: "ST.Paul's MAT.HR.SEC SCHOOL",
    description:
      "Completed higher secondary education (HSC) in Computer Science with a percentage of 74%.",
  },
  {
    duration: "2017-2018",
    title: "SSLC",
    organization: "ST.Paul's MAT.HR.SEC SCHOOL",
    description:
      "Completed Class-X (SSLC) with a percentage of 90%.",
  },
];

export const skills: Skill[] = [
  { name: "HTML5", percentage: 90, category: "frontend", icon: "html" },
  { name: "CSS3", percentage: 90, category: "frontend", icon: "css" },
  { name: "Tailwind CSS", percentage: 90, category: "frontend", icon: "tailwind" },
  { name: "JavaScript", percentage: 80, category: "frontend", icon: "javascript" },
  { name: "ReactJS", percentage: 80, category: "frontend", icon: "react" },
  { name: "NextJs", percentage: 80, category: "frontend", icon: "nextjs" },
  { name: "TypeScript", percentage: 70, category: "frontend", icon: "typescript" },
  { name: "Angular", percentage: 70, category: "frontend", icon: "angular" },
  { name: "NodeJS", percentage: 65, category: "backend", icon: "nodejs" },
  { name: "Python", percentage: 70, category: "backend", icon: "python" },
  { name: "Java", percentage: 70, category: "backend", icon: "java" },
  { name: "OOPS", percentage: 70, category: "backend", icon: "oops" },
  { name: "MySQL", percentage: 70, category: "backend", icon: "mysql" },
  { name: "GitHub", percentage: 70, category: "tools", icon: "github" },
  { name: "Django", percentage: 50, category: "backend", icon: "django" },
];

export const projects: Project[] = [
  {
    title: "People's Consulting Website",
    description: "People's Consulting LLC is a product based company that provides software solutions to businesses.",
    liveUrl: "https://peoples-consulting.com/",
    githubUrl: "https://github.com/sabeerkhan2003",
    image: "/images/projects/port10.webp",
    tags: ["React", "Vercel"],
    isLive: true,
  },
  {
    title: "little hearts daycare Website",
    description: "little hearts daycare is a daycare center that provides daycare services to children.",
    liveUrl: "https://littleheartsdaycareohio.com/",
    githubUrl: "https://github.com/sabeerkhan2003",
    image: "/images/projects/port9.webp",
    tags: ["React", "Vercel"],
    isLive: true,
  },
  {
    title: "Thirdvizion Labs Website",
    description: "Thirdvizion Labs is a software development company that provides software solutions to businesses.",
    liveUrl: "https://thirdvizionlabs.com/",
    githubUrl: "https://github.com/sabeerkhan2003",
    image: "/images/projects/port11.webp",
    tags: ["React", "Vercel"],
    isLive: true,
  },
  {
    title: "Blueberry Template",
    description: "Modern responsive landing page template built with clean UI patterns.",
    liveUrl: "https://blueberry-template.vercel.app/",
    githubUrl: "https://github.com/sabeerkhan2003",
    image: "/images/projects/port1.jpg",
    tags: ["HTML", "CSS", "Responsive"],
  },
  {
    title: "Itech Template",
    description: "Technology-focused business website with polished sections and layout.",
    liveUrl: "https://itech-template1.vercel.app/",
    githubUrl: "https://github.com/sabeerkhan2003",
    image: "/images/projects/port2.jpg",
    tags: ["HTML", "CSS", "UI"],
  },
  {
    title: "Albukhari University",
    description: "University website showcasing programs, campus, and admissions.",
    liveUrl: "https://albukhari-university.vercel.app/",
    githubUrl: "https://github.com/sabeerkhan2003",
    image: "/images/projects/port3.jpg",
    tags: ["React", "Vercel"],
  },
  {
    title: "Hairnic Project",
    description: "Salon and beauty brand site built with vanilla JavaScript interactions.",
    liveUrl: "https://sabeerkhan2003.github.io/hairnic-proj-2-using-JS/",
    githubUrl: "https://github.com/sabeerkhan2003/hairnic-proj-2-using-JS",
    image: "/images/projects/port4.jpg",
    tags: ["JavaScript", "HTML", "CSS"],
  },
  {
    title: "Naturalone",
    description: "Product landing page styled with Tailwind CSS utility classes.",
    liveUrl: "https://sabeerkhan2003.github.io/Naturalone-using-tailwind/index.html",
    githubUrl: "https://github.com/sabeerkhan2003/Naturalone-using-tailwind",
    image: "/images/projects/port5.jpg",
    tags: ["Tailwind CSS", "HTML"],
  },
  {
    title: "Udemy Clone",
    description: "Educational platform UI clone with course cards and navigation.",
    liveUrl: "https://sabeerkhan2003.github.io/clone-4-Udemy/",
    githubUrl: "https://github.com/sabeerkhan2003/clone-4-Udemy",
    image: "/images/projects/port2.jpg",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Blog Frontend",
    description: "Blog application frontend with article listing and modern layout.",
    liveUrl: "https://blog-frontend-nine-phi.vercel.app/",
    githubUrl: "https://github.com/sabeerkhan2003",
    image: "/images/projects/port7.jpg",
    tags: ["React", "Vercel", "Frontend"],
  },
];

export const certificates: Certificate[] = [
  {
    title: "Professional Certificate",
    image: "/images/certificates/cert.jpeg",
    viewUrl:
      "https://drive.google.com/file/d/1rua7xawp03jy0WZN-3S_arH5zga_aVuP/view?usp=drivesdk",
  },
  {
    title: "HackerRank Certificate",
    image: "/images/certificates/cert1.png",
    viewUrl: "https://www.hackerrank.com/certificates/a052530d2966",
  },
  {
    title: "Development Certificate",
    image: "/images/certificates/cert2.png",
    viewUrl: "https://drive.google.com/file/d/1GogMSkpeO8fWRXEgVZF_eGq537wL3x6r/view",
  },
  {
    title: "Training Certificate",
    image: "/images/certificates/cert3.png",
    viewUrl: "https://drive.google.com/file/d/1H8Lw1BlOaoEeL6bBmQS7gMLaSBT1Sj5g/view",
  },
  {
    title: "Achievement Certificate",
    image: "/images/certificates/cert4.png",
    viewUrl:
      "https://mail.google.com/mail/u/0/s/?view=att&th=18963bb9fbcc62d1&attid=0.1&disp=attd&safe=1&zw",
  },
  {
    title: "Udemy Certificate",
    image: "/images/certificates/cert5.png",
    viewUrl:
      "https://udemy-certificate.s3.amazonaws.com/pdf/UC-c31e3b7f-86ae-4f60-adb1-a38cb7d0730d.pdf",
  },
  {
    title: "Course Completion",
    image: "/images/certificates/cert6.png",
    viewUrl:
      "https://drive.google.com/file/d/1o9BSYRwk4dviyyDenPlklqpssCmp6dud/view?usp=drivesdk",
  },
];

export const socialLinks: SocialLink[] = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/sabeer-khan-867420243/",
    icon: "linkedin",
  },
  {
    name: "GitHub",
    url: "https://github.com/sabeerkhan2003",
    icon: "github",
  },
  {
    name: "Email",
    url: "mailto:sabeersabee20@gmail.com",
    icon: "email",
  },
];

export const navSections = [
  { id: "home", label: "Home", icon: "home" as const },
  { id: "about", label: "About", icon: "user" as const },
  { id: "journey", label: "Journey", icon: "journey" as const },
  { id: "skills", label: "Skills", icon: "skills" as const },
  { id: "portfolio", label: "Portfolio", icon: "briefcase" as const },
  { id: "certificates", label: "Certificates", icon: "certificate" as const },
  { id: "contact", label: "Contact", icon: "mail" as const },
];
