import { LucideIcon } from 'lucide-react';

export interface Project {
  title: string;
  date: string;
  description: string;
  tech: string[];
  image: string;
  featured?: boolean;
  link?: string;
  liveUrl?: string;
  githubUrl?: string;
}

export interface Skill {
  name: string;
  level: number; // 1-100
  category: 'Frontend/Game' | 'Backend' | 'GenAI/Tools' | 'Core';
  icon: string;
}

export interface Experience {
  role: string;
  company: string;
  duration: string;
  details: string[];
}

export interface Achievement {
  title: string;
  event: string;
  date: string;
  icon: LucideIcon;
}
