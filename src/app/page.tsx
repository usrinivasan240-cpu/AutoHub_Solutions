import { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { ServicesPreview } from "@/components/sections/services-preview";
import { HowItWorks } from "@/components/sections/how-it-works";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { CtaSection } from "@/components/sections/cta";
import { getServices } from "@/lib/data";

export const metadata: Metadata = {
  title: "Autohub Solution | AI & Digital Growth",
  description: "Autohub Solution helps businesses, startups, and students scale faster with modern websites, mobile apps, custom software, and intelligent AI automation.",
  keywords: ["web development", "mobile apps", "AI automation", "custom software", "digital growth"],
  authors: [{ name: "Autohub Solution" }],
  creator: "Autohub Solution",
  publisher: "Autohub Solution",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://autohubsolution.com",
    siteName: "Autohub Solution",
    title: "Autohub Solution | AI & Digital Growth",
    description: "Scale your business with modern websites, mobile apps, and AI automation.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Autohub Solution - AI & Digital Growth",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Autohub Solution | AI & Digital Growth",
    description: "Scale your business with modern websites, mobile apps, and AI automation.",
    images: ["/og-image.jpg"],
    creator: "@autohubsolution",
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://autohubsolution.com",
  },
};

export default function Home() {
  const services = getServices();

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main id="main-content" className="flex-1">
        <Hero />
        <ServicesPreview services={services} />
        <HowItWorks />
        <WhyChooseUs />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
