export interface WorkExperience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  domain: string;
  description: string[];
  technologies: string[];
  keyProject?: string;
  isCurrent?: boolean;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  score: string;
  details?: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: { name: string; level?: 'Expert' | 'Advanced' | 'Proficient'; featured?: boolean }[];
}

export interface ArchitectureHighlight {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  components: string[];
  benefits: string[];
  diagramType: 'microservices' | 'ai-rag' | 'event-driven' | 'bi-pipeline';
}

export interface ContactDetails {
  name: string;
  role: string;
  address: string;
  cityCountry: string;
  mobile: string;
  email: string;
  summary: string;
  yearsExperience: number;
}
