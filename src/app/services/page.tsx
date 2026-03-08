import { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ServicesContent } from "@/components/sections/services-content";
import { CtaSection } from "@/components/sections/cta";
import { getServices } from "@/lib/data";

export const metadata: Metadata = {
  title: "Our Services | Autohub Solution",
  description: "Comprehensive digital solutions including web development, mobile apps, AI chatbots, custom software, and digital growth strategies.",
  keywords: ["web development", "mobile apps", "AI chatbots", "custom software", "SEO", "digital marketing"],
  openGraph: {
    title: "Our Services | Autohub Solution",
    description: "Comprehensive digital solutions tailored for your growth.",
    type: "website",
  },
  alternates: {
    canonical: "/services",
  },
};

// Structured data for services
const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": [
    {
      "@type": "Service",
      "name": "Website Development",
      "description": "Modern, fast, and SEO-optimized websites built with Next.js and React.",
    },
    {
      "@type": "Service",
      "name": "Mobile App Development",
      "description": "Native and cross-platform mobile applications for iOS and Android.",
    },
    {
      "@type": "Service",
      "name": "AI Chatbots & Automation",
      "description": "Intelligent chatbots and workflow automations to save time and boost engagement.",
    },
    {
      "@type": "Service",
      "name": "Custom Software",
      "description": "Tailored software built for your specific business needs.",
    },
    {
      "@type": "Service",
      "name": "Digital Growth & SEO",
      "description": "Data-driven strategies to increase visibility and drive organic traffic.",
    },
    {
      "@type": "Service",
      "name": "Student Projects",
      "description": "Professional guidance and development assistance for final year academic projects.",
    },
  ],
};

export default function ServicesPage() {
  const services = getServices();

  return (
    <div className="flex min-h-screen flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      <Navbar />
      <main className="flex-1 pt-32 pb-16">
        <div className="container mx-auto px-4 md:px-8">
          <ServicesContent services={services} />
        </div>
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
