import type {
  Service,
  PricingPlan,
  FAQ,
  BlogCategory,
  BlogPost,
  FeaturedPost,
  BlogData,
  AboutValue,
  AboutData,
} from "@/types/data";

import services from "@/data/services.json";
import pricing from "@/data/pricing.json";
import faq from "@/data/faq.json";
import blog from "@/data/blog.json";
import about from "@/data/about.json";

// ─── Services ────────────────────────────────────────────────
export function getServices(): Service[] {
  return services as Service[];
}

// ─── Pricing ─────────────────────────────────────────────────
export function getPricingPlans(): PricingPlan[] {
  return (pricing as { plans: PricingPlan[] }).plans;
}

// ─── FAQ ─────────────────────────────────────────────────────
export function getFAQs(): FAQ[] {
  return faq as FAQ[];
}

// ─── Blog ────────────────────────────────────────────────────
export function getBlogCategories(): BlogCategory[] {
  return (blog as BlogData).categories;
}

export function getBlogPosts(): BlogPost[] {
  return (blog as BlogData).posts;
}

export function getFeaturedPost(): FeaturedPost {
  return (blog as BlogData).featuredPost;
}

// ─── About ───────────────────────────────────────────────────
export function getAboutValues(): AboutValue[] {
  return (about as AboutData).values;
}