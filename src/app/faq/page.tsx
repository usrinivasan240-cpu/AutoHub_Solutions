import { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FAQContent } from "@/components/sections/faq-content";
import { CtaSection } from "@/components/sections/cta";
import { getFAQs } from "@/lib/data";

export const metadata: Metadata = {
  title: "FAQ | Autohub Solution",
  description: "Find answers to frequently asked questions about our web development, mobile app, and AI automation services.",
  keywords: ["FAQ", "frequently asked questions", "web development questions", "pricing questions", "support"],
  openGraph: {
    title: "FAQ | Autohub Solution",
    description: "Everything you need to know about working with us.",
    type: "website",
  },
  alternates: {
    canonical: "/faq",
  },
};

// FAQ structured data for rich snippets
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Do you provide custom solutions?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we specialize in building fully custom web and mobile applications tailored to your specific business requirements.",
      },
    },
    {
      "@type": "Question",
      "name": "Are your services affordable for startups?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. We understand the constraints of early-stage startups and offer flexible pricing models.",
      },
    },
    {
      "@type": "Question",
      "name": "Do you provide support after the project is launched?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we offer various maintenance and support packages to ensure your digital product remains secure and up-to-date.",
      },
    },
  ],
};

export default function FAQPage() {
  const faqs = getFAQs();

  return (
    <div className="flex min-h-screen flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <main className="flex-1 pt-32 pb-16">
        <FAQContent faqs={faqs} />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
