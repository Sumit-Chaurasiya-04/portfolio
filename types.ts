
export interface Project {
  title: string;
  description: string;
  tech: string[];
  link: string;
  icon: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
  icon: string;
}

export interface Certification {
  name: string;
  issuer: string;
  link: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  achievements: string[];
}
