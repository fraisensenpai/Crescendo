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
  code: string; // e.g. "01 / WEB SİTESİ"
  title: string;
  tagline: string;
  description: string;
  /** Hizmetin kapsamı — müşterinin anlayacağı dilde */
  highlights: string[];
  /** Somut teslim kalemleri */
  deliverables: string[];
  techStack: string[];
}

export interface ProjectPreviewSpec {
  label: string;
  value: string;
}

/** Kartlarda kullanılan teknik önizleme görseli (mevcut blueprint görsel dili). */
export type ProjectPreview =
  | {
      kind: 'schematic';
      headerLabel: string;
      headerBadge: string;
      rows: { label: string; value: string; width: number }[];
      footerLeft: string;
      footerRight: string;
    }
  | {
      kind: 'module';
      label: string;
      headline: string;
      note: string;
    };

export interface ProjectItem {
  id: string;
  code: string; // e.g. "PROJE 01"
  title: string;
  clientType: string;
  category: string;
  year?: string; // doğrulanmış tarih yoksa gösterilmez
  summary: string;
  challenge: string;
  architectureSolution: string;
  stack: string[];
  deliverables: string[];
  specs: ProjectPreviewSpec[];
  preview?: ProjectPreview;
}

export interface ProcessStep {
  step: string; // "01", "02", etc.
  title: string;
  phaseLabel: string;
  duration: string;
  description: string;
  deliverables: string[];
  note: string;
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
