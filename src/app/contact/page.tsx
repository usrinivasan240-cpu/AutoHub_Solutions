import { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ContactContent } from "@/components/sections/contact-content";

export const metadata: Metadata = {
  title: "Contact Us | Autohub Solution",
  description: "Get in touch with Autohub Solution. We'd love to hear about your project and discuss how we can help bring your vision to life.",
  keywords: ["contact", "get in touch", "web development inquiry", "software consultation"],
  openGraph: {
    title: "Contact Us | Autohub Solution",
    description: "Get in touch with us to discuss your next project.",
    type: "website",
  },
  alternates: {
    canonical: "/contact",
  },
};

// Contact page structured data
const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact Autohub Solution",
  "description": "Get in touch with our team for web development, mobile apps, and AI solutions.",
  "mainEntity": {
    "@type": "Organization",
    "name": "Autohub Solution",
    "email": "support@autohubsolution.com",
    "areaServed": "India",
  },
};

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <Navbar />
      <main className="flex-1 pt-32 pb-16">
        <ContactContent />
      </main>
      <Footer />
    </div>
  );
}
