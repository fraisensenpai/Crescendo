export type ProjectType = 
  | 'Web Sitesi'
  | 'Özel Yazılım'
  | 'E-ticaret'
  | 'UI/UX'
  | 'Dijital Ürün'
  | 'Diğer';

export type BudgetRange =
  | '25.000 TL – 50.000 TL'
  | '50.000 TL – 100.000 TL'
  | '100.000 TL – 250.000 TL'
  | '250.000 TL+'
  | 'Henüz Belirlenmedi';

export interface ContactFormData {
  fullName: string;
  email: string;
  company: string;
  projectType: ProjectType;
  budgetRange: BudgetRange;
  projectDetails: string;
}

export interface ServiceItem {
  id: string;
  code: string; // e.g. "01 / WEB"
  title: string;
  tagline: string;
  description: string;
  architectureDetails: string[];
  deliverables: string[];
  techStack: string[];
  visualType: 'code-structure' | 'api-flow' | 'saas-modules' | 'design-tokens';
}

export interface ProjectItem {
  id: string;
  code: string; // e.g. "PROJE 01"
  title: string;
  clientType: string;
  category: string;
  year: string;
  summary: string;
  challenge: string;
  architectureSolution: string;
  stack: string[];
  deliverables: string[];
  specs: { label: string; value: string }[];
  accentTone?: string;
}

export interface ProcessStep {
  step: string; // "01", "02", etc.
  title: string;
  phaseLabel: string;
  duration: string;
  description: string;
  deliverables: string[];
  technicalAudit: string;
}

export interface TechnologyItem {
  name: string;
  category: 'Frontend' | 'Backend & Sistem' | 'Veri & Bulut' | 'Altyapı & Derleme';
  role: string;
  strengths: string;
  primaryUse: string;
}

export interface StudioPhilosophy {
  code: string;
  title: string;
  description: string;
  practice: string;
}
