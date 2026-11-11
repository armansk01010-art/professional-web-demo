export type Page = 
  | 'home' 
  | 'about' 
  | 'services' 
  | 'projects' 
  | 'project-detail' 
  | 'process' 
  | 'journal' 
  | 'journal-detail' 
  | 'contact';

export type ProjectCategory = 'All' | 'Residential' | 'Commercial' | 'Architecture';

export interface MaterialItem {
  name: string;
  finish: string;
  origin?: string;
  description: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: 'Residential' | 'Commercial' | 'Architecture';
  location: string;
  year: string;
  area: string;
  coverImage: string;
  galleryImages: string[];
  excerpt: string;
  concept: string;
  description: string[];
  materials: MaterialItem[];
  architecturalHighlights: string[];
  credits: {
    principalDesigner: string;
    leadArchitect: string;
    photographyCredit: string;
  };
  isFeatured?: boolean;
}

export interface Service {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  extendedDescription: string;
  scope: string[];
  deliverables: string[];
  idealFor: string;
  image?: string;
  imageAlt?: string;
}

export interface JournalArticle {
  id: string;
  slug: string;
  title: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  excerpt: string;
  paragraphs: string[];
  keyQuote?: string;
}

export interface ProcessPhase {
  step: string;
  title: string;
  timeframe: string;
  summary: string;
  details: string[];
  deliverables: string[];
}
