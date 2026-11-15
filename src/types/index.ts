export type ProjectCategory = 'all' | 'villas' | 'apartments' | 'commercial' | 'renovation';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'villas' | 'apartments' | 'commercial' | 'renovation';
  status: 'Completed' | 'Under Construction' | 'Upcoming';
  location: string;
  area: string;
  plotSize?: string;
  timeline: string;
  budgetTier: 'Elegance' | 'Premium' | 'Elite' | 'Luxury';
  heroImage: string;
  gallery: string[];
  floorPlanUrl: string;
  description: string;
  features: string[];
  materialsHighlight: string[];
  clientQuote?: {
    author: string;
    text: string;
    rating: number;
    locality?: string;
  };
}

export interface HouseType {
  id: string;
  name: string;
  tagline: string;
  iconName: string;
  image: string;
  idealPlot: string;
  builtUpArea: string;
  facing: string;
  highlights: string[];
  description: string;
  architecturalStyle: string;
  estimatedBudget: string;
  floorBreakdown: string[];
  galleryViews?: {
    label: string;
    url: string;
    caption: string;
  }[];
}

export interface ActiveProjectProgress {
  id: string;
  projectName: string;
  locality: string;
  plotSpec: string;
  houseType: string;
  currentStage: string;
  dayCount: string;
  progressPercent: number;
  recentMilestone: string;
  clientInitials: string;
  clientLocation: string;
  estimatedHandover: string;
  siteImage: string;
  hasLiveCCTV: boolean;
  cameraName?: string;
}

export interface Service {
  id: string;
  title: string;
  tagline: string;
  iconName: string;
  image: string;
  description: string;
  deliverables: string[];
  warranty: string;
  timelineAvg: string;
}

export interface PackageFeature {
  name: string;
  elegance: string;
  premium: string;
  elite: string;
  luxury: string;
}

export interface ConstructionPackage {
  id: string;
  name: string;
  tier: 'Elegance' | 'Premium' | 'Elite' | 'Luxury';
  tagline: string;
  ratePerSqFt: number;
  currencySymbol: string;
  popular?: boolean;
  idealFor: string;
  highlights: string[];
  structuralSpecs: string[];
  finishingSpecs: string[];
}

export interface MaterialBrand {
  name: string;
  category: 'Cement' | 'Steel' | 'Electrical' | 'Plumbing' | 'Finishes' | 'Windows & Glass' | 'Fixtures';
  logoText: string;
  grade: string;
  specification: string;
  testingFrequency: string;
  warranty: string;
  image: string;
}

export interface ProcessStage {
  step: number;
  title: string;
  duration: string;
  summary: string;
  details: string[];
  qualityGate: string;
  milestonePayment: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  projectTitle: string;
  rating: number;
  date: string;
  avatar: string;
  feedback: string;
  metrics: string;
}

export interface Partner {
  name: string;
  type: 'Bank & Finance' | 'Architectural Body' | 'Quality & Standard' | 'Tech & Material';
  tagline: string;
  badge: string;
}

export interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}
