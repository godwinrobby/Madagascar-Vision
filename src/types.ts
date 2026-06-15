export interface Sector {
  id: string;
  name: string;
  icon: string; // Lucide icon name
  description: string;
  metrics: { label: string; value: string }[];
  services: string[];
  imagingSeed: string; // seed for picsum image
}

export interface Project {
  id: string;
  title: string;
  sector: string;
  location: string;
  description: string;
  metrics: { label: string; value: string };
  imageSeed: string;
  highlights: string[];
  caseStudy: {
    challenge: string;
    solution: string;
    result: string;
  };
}

export interface Service {
  id: string;
  name: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Leader {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageSeed: string;
  imageUrl?: string;
}

export interface JobPosition {
  id: string;
  title: string;
  sector: string;
  location: string;
  type: 'Full-time' | 'Contract' | 'Remote';
  description: string;
  requirements: string[];
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
}

export interface NewsItem {
  id: string;
  title: string;
  category: string;
  date: string;
  summary: string;
  content: string;
  imageSeed: string;
}

export interface BlogItem {
  id: string;
  title: string;
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  summary: string;
  content: string;
  imageSeed: string;
  tags: string[];
}

export interface CorporateEvent {
  id: string;
  title: string;
  type: 'upcoming' | 'recent';
  date: string;
  time?: string;
  location: string;
  description: string;
  imageSeed: string;
  speakers?: string[];
  metrics?: { label: string; value: string };
}
