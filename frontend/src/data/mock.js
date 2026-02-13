// Portfolio Data - Sougata Halder

export const personalInfo = {
  name: "Sougata Halder",
  title: "Full-Stack Developer & ML Researcher",
  tagline: "Building intelligent systems & crafting exceptional web experiences",
  email: "halderdk33@gmail.com",
  phone: "+91 94340 32833",
  location: "Kolkata, West Bengal, India",
  photo: "https://customer-assets.emergentagent.com/job_portfolio-hub-1098/artifacts/coqpdwbg_photo_2026-02-13_15-50-02.jpg",
  resumeUrl: "#",
  bio: "I'm a passionate Computer Science student at BIT Mesra with a deep interest in machine learning and full-stack web development. Currently working on federated learning systems while building scalable web applications that make a real impact."
};

export const socialLinks = [
  { name: "GitHub", url: "https://github.com/Saggie213", icon: "github" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/sougata-halder-b76b94134", icon: "linkedin" },
  { name: "LeetCode", url: "https://leetcode.com/u/vasuli12/", icon: "code" },
  { name: "Codeforces", url: "https://codeforces.com/profile/Thande_papa14", icon: "trophy" },
  { name: "CodeChef", url: "https://www.codechef.com/users/thanda_chai14", icon: "chef-hat" }
];

export const projects = [
  {
    id: 1,
    title: "Federated Cyber-attack Detection System",
    category: "Research Project",
    period: "Jan 2025 – July 2025",
    description: "End-to-end federated detection system using dataset-specific autoencoders and latent-space alignment for heterogeneous network intrusion data.",
    highlights: [
      "Built dataset-specific autoencoders with latent-space alignment",
      "Engineered SMOTETomek resampling & federated training pipelines",
      "Developed global encoder + classification head in PyTorch",
      "Achieved strong cross-dataset generalization"
    ],
    techStack: ["Python", "PyTorch", "Federated Learning", "Deep Learning"],
    bgColor: "#14b8a6",
    featured: true,
    type: "research"
  },
  {
    id: 2,
    title: "EcoScore",
    category: "Full-Stack Application",
    description: "Sustainable Impact Tracking Platform with AI-powered carbon footprint calculator, ESG scoring, smart packaging suggestions, and product recommendations.",
    highlights: [
      "AI-powered carbon footprint estimation using Gradient Boosting",
      "ESG Score Analysis with TF-IDF text analysis",
      "ML-based packaging recommendations for sustainability",
      "Collaborative filtering for sustainable product discovery"
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Python", "scikit-learn", "Framer Motion"],
    bgColor: "#10b981",
    liveLink: "#",
    githubLink: "https://github.com/Saggie213",
    featured: true,
    type: "web"
  },
  {
    id: 3,
    title: "Price Alert",
    category: "Full-Stack Application",
    description: "Real-time price-tracking platform with automated alerts on price drops, featuring Amazon product search and email notifications.",
    highlights: [
      "Boosted user engagement by 35% with real-time alerts",
      "Improved cross-device navigation by 40%",
      "Reduced bounce rates by 25%",
      "Improved system efficiency by 40%"
    ],
    techStack: ["Next.js", "Node.js", "TypeScript", "Tailwind CSS", "MongoDB", "Express.js"],
    bgColor: "#f97316",
    liveLink: "#",
    githubLink: "https://github.com/Saggie213",
    featured: true,
    type: "web"
  },
  {
    id: 4,
    title: "Expense Ease",
    category: "Web Application",
    description: "Cross-functional expense tracker with category-based tracking, interactive visual summaries, and offline access capabilities.",
    highlights: [
      "Handled 100+ entries with zero data loss",
      "Increased user retention by 30%",
      "Boosted daily active users by 20%",
      "Reduced query response time by 35%"
    ],
    techStack: ["React.js", "Tailwind CSS", "JavaScript", "Material-UI", "Local Storage"],
    bgColor: "#8b5cf6",
    liveLink: "#",
    githubLink: "https://github.com/Saggie213",
    featured: true,
    type: "web"
  }
];

export const skills = {
  languages: ["C/C++", "Python", "JavaScript", "TypeScript", "SQL", "NoSQL"],
  frontend: ["React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "Material-UI"],
  backend: ["Node.js", "Express.js", "Django", "FastAPI"],
  databases: ["MongoDB", "MySQL", "PostgreSQL", "Oracle SQL"],
  tools: ["Git", "GitHub", "VSCode", "PyCharm", "Jupyter", "Postman"],
  mlLibraries: ["PyTorch", "scikit-learn", "NumPy", "Pandas", "Matplotlib"]
};

export const education = [
  {
    institution: "Birla Institute of Technology, Mesra",
    degree: "Bachelor of Technology in Computer Science",
    period: "Nov 2022 – June 2026",
    grade: "CGPA: 7.8/10.0",
    location: "Jharkhand, India",
    coursework: ["Data Structures & Algorithms", "OOP", "DBMS", "Computer Networks", "Operating Systems", "Web Development", "Data Mining", "Cryptography"]
  },
  {
    institution: "Delhi Public School, Ruby Park",
    degree: "Senior Secondary School",
    period: "Apr 2021 – Mar 2022",
    grade: "87%",
    location: "Kolkata, India"
  }
];

export const experience = [
  {
    role: "Director",
    organization: "IETE Student Branch – BIT Mesra",
    period: "May 2024 – Present",
    description: "Leading technical initiatives and managing developer teams",
    highlights: [
      "Spearheaded recruitment drive attracting 80+ students",
      "Delivered Web Development Workshop for 80+ students",
      "Managed 5 developers using GitHub workflows",
      "Instituted pull-request workflows and weekly reviews"
    ]
  }
];

export const achievements = [
  {
    title: "Flipkart GRiD 7.0 Semi-Finalist",
    description: "Among 200,000+ registrations",
    year: "2025",
    icon: "trophy"
  },
  {
    title: "CodeChef START144D",
    description: "Secured 188th rank",
    year: "2024",
    icon: "medal"
  },
  {
    title: "Google Data Analytics Certification",
    description: "Coursera",
    year: "2024",
    icon: "certificate"
  },
  {
    title: "Full-Stack Web Development Bootcamp",
    description: "Udemy",
    year: "2023",
    icon: "certificate"
  }
];

export const stats = [
  { value: "12+", label: "Projects Built" },
  { value: "7+", label: "Hackathons Participated" },
  { value: "5+", label: "Tech Stacks" }
];
