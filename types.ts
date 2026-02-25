
export interface Project {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  tags: string[];
  icon: string;
}

export interface Award {
  id: string;
  title: string;
  year: string;
  organization: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface GalleryItem {
  id: string;
  url: string;
  category: 'identity' | 'product' | 'experimental' | 'social';
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  logoUrl?: string;
  location?: string;
  type?: string;
  period: string;
  description: string;
  achievements: string[];
}
