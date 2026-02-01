
import { Project, SkillCategory, Certification, Service, ExperienceItem } from './types';

export const PROJECTS: Project[] = [
  {
    title: "Chicago Permits Analysis",
    description: "Deep-dive analysis of 100,000+ permit records using Python, Scikit-learn, and Prophet. Built dashboards mapping approval cycles and identifying key seasonal patterns.",
    tech: ["Python", "Pandas", "Prophet", "Data Visualization"],
    link: "https://github.com/Sumit-Chaurasiya-04/chicago-permits-project",
    icon: "fa-city"
  },
  {
    title: "Advanced Sales Forecasting",
    description: "Time-series forecasting system achieving 92% accuracy. Automated reporting using Excel and Power BI, significantly reducing manual reporting effort.",
    tech: ["Python", "Prophet", "Power BI", "Forecasting"],
    link: "https://github.com/Sumit-Chaurasiya-04/advanced-sales-forecasting",
    icon: "fa-chart-line"
  },
  {
    title: "Skill Intelligence Gap",
    description: "A strategic analysis tool using survey data to identify top 10 in-demand tech skills. Maps industry demand trends through comprehensive EDA.",
    tech: ["Power BI", "EDA", "Data Strategy", "Python"],
    link: "https://github.com/Sumit-Chaurasiya-04/Skill_Intelligence_Gap",
    icon: "fa-brain"
  },
  {
    title: "Professional Home Tutor",
    description: "A comprehensive platform designed to connect students with professional educators, featuring scheduling, resource management, and communication tools.",
    tech: ["React", "Tailwind CSS", "Node.js", "Web Development"],
    link: "https://github.com/Sumit-Chaurasiya-04/professional-home-tutor",
    icon: "fa-chalkboard-user"
  },
  {
    title: "WealthPath",
    description: "Financial intelligence dashboard focusing on investment tracking and portfolio optimization through data-driven insights.",
    tech: ["Data Analytics", "Financial Modeling", "Excel", "Python"],
    link: "https://github.com/Sumit-Chaurasiya-04/wealthpath",
    icon: "fa-money-bill-trend-up"
  },
  {
    title: "Cognition",
    description: "AI-powered experimental project exploring cognitive computing patterns and automated reasoning using modern LLM APIs.",
    tech: ["AI/ML", "LLM", "Python", "API Integration"],
    link: "https://github.com/Sumit-Chaurasiya-04/cognition",
    icon: "fa-microchip"
  },
  {
    title: "Smart Doc Toolkit",
    description: "Workflow optimization suite designed to automate repetitive document tasks, improving processing speed and accuracy.",
    tech: ["Automation", "Python", "OCR", "Productivity"],
    link: "https://github.com/Sumit-Chaurasiya-04/smart-doc-toolkit",
    icon: "fa-file-shield"
  },
  {
    title: "DocuMind",
    description: "Intelligent document processing engine that extracts actionable insights from unstructured text using NLP techniques.",
    tech: ["NLP", "Python", "Data Extraction", "AI"],
    link: "https://github.com/Sumit-Chaurasiya-04/documind",
    icon: "fa-robot"
  },
  {
    title: "EcoRoute",
    description: "Sustainability-focused logistics analyzer that calculates carbon footprints and suggests optimized eco-friendly routing strategies.",
    tech: ["Sustainability Analytics", "Logistics", "Python", "GIS"],
    link: "https://github.com/Sumit-Chaurasiya-04/EcoRoute",
    icon: "fa-leaf"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Data Analytics",
    icon: "fa-magnifying-glass-chart",
    skills: ["Data Cleaning", "EDA", "KPI Development", "Predictive Analytics", "Forecasting", "Statistical Modeling"]
  },
  {
    title: "Programming & Tools",
    icon: "fa-code",
    skills: ["Python (Pandas, NumPy)", "SQL (CTEs, Joins)", "Excel (Advanced Dashboards)", "Git/GitHub"]
  },
  {
    title: "Visualization & BI",
    icon: "fa-chart-pie",
    skills: ["Power BI", "Matplotlib", "Seaborn", "Data Storytelling", "Tableau"]
  },
  {
    title: "AI & Web",
    icon: "fa-cloud",
    skills: ["ChatGPT/Gemini/Claude", "Workflow Optimization", "React", "Tailwind CSS", "JavaScript (ES6+)"]
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    name: "Python Programming: AI-Powered Implementation",
    issuer: "Be10X",
    link: "https://freecodecamp.org/certification/xaltric/python-v9"
  },
  {
    name: "Data Analytics & Visualization (Power BI, Tableau, Excel)",
    issuer: "Be10X",
    link: "https://app.aicareeraccelerator.in/certificate/1-uW9R7_pspHTQq"
  },
  {
    name: "Excel Mastery (Basic to Advanced)",
    issuer: "Be10X",
    link: "https://app.aicareeraccelerator.in/certificate/AMofy92LSkpUeyN"
  },
  {
    name: "Web Development Certification",
    issuer: "STP Computer Education",
    link: "https://old.stpcomputereducation.com/diploma/web-development.html"
  },
  {
    name: "A2 English for Developers",
    issuer: "FreeCodeCamp",
    link: "https://freecodecamp.org/certification/xaltric/a2-english-for-developers"
  }
];

export const SERVICES: Service[] = [
  {
    title: "Data Analysis & Insights",
    description: "Transforming raw data into actionable insights using Python and SQL. Specialized in predictive modeling, trend analysis, and automated reporting.",
    icon: "fa-database"
  },
  {
    title: "Web Development",
    description: "Building responsive, modern single-page applications with React and Tailwind CSS. Focus on high performance and exceptional user experiences.",
    icon: "fa-laptop-code"
  },
  {
    title: "Professional Tutoring",
    description: "Expert guidance in Computer Science and Programming. With experience teaching 800+ students, I provide personalized learning paths for all levels.",
    icon: "fa-user-graduate"
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: "Freelance Tutor",
    company: "Self-Employed",
    period: "Aug 2022 – Dec 2025",
    location: "Noida / Remote",
    achievements: [
      "Mentored and taught over 800+ students on a part-time basis across various programming subjects.",
      "Developed custom lesson plans and managed scheduling for high-volume student groups.",
      "Consistently addressed student doubts and improved learning outcomes through iterative feedback.",
      "Maintained detailed records of student progress and optimized teaching workflows using AI tools."
    ]
  }
];
