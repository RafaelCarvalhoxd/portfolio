import { LucideIcon } from "lucide-react";

export interface Experience {
  period: string;
  title: string;
  company: string;
  achievements?: string[];
  description?: string;
  skills: string[];
  current: boolean;
  previousRole?: string;
}

export interface SkillCategory {
  title: string;
  icon: LucideIcon;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level?: number;
}

export interface TechStack {
  name: string;
  icon: LucideIcon;
}

export interface Highlight {
  icon: LucideIcon;
  label: string;
  value: string;
}

export interface ContactLink {
  label: string;
  value: string;
  href: string;
  icon: LucideIcon;
}

export interface NavItem {
  label: string;
  href: string;
  icon: LucideIcon;
}
