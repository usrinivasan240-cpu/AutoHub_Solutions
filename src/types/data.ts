// ─── Services ────────────────────────────────────────────────
export interface Service {
  title: string;
  icon: string;
  shortDescription: string;
  description: string;
  features: string[];
  whoFor: string[];
  gradient: string;
}

// ─── Pricing ─────────────────────────────────────────────────
export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  notIncluded: string[];
  cta: string;
  popular: boolean;
  gradient: string;
  bgGradient: string;
  target: string;
}

// ─── FAQ ─────────────────────────────────────────────────────
export interface FAQ {
  question: string;
  answer: string;
}

// ─── Blog ────────────────────────────────────────────────────
export interface BlogCategory {
  name: string;
  icon: string | null;
}

export interface BlogPost {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
  gradient: string;
}

export interface FeaturedPost {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
}

export interface BlogData {
  categories: BlogCategory[];
  featuredPost: FeaturedPost;
  posts: BlogPost[];
}

// ─── About ───────────────────────────────────────────────────
export interface AboutValue {
  title: string;
  description: string;
  icon: string;
}

export interface AboutData {
  values: AboutValue[];
}