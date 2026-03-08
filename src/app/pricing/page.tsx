import { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { PricingContent } from "@/components/sections/pricing-content";
import { CtaSection } from "@/components/sections/cta";
import { getPricingPlans } from "@/lib/data";

export const metadata: Metadata = {
  title: "Pricing | Autohub Solution",
  description: "Custom pricing for enterprise web development, mobile apps, and AI solutions tailored to your needs.",
  keywords: ["pricing", "web development cost", "mobile app pricing", "AI solutions pricing", "software development rates"],
  openGraph: {
    title: "Pricing | Autohub Solution",
    description: "Custom pricing tailored to your unique requirements.",
    type: "website",
  },
  alternates: {
    canonical: "/pricing",
  },
};

export default function PricingPage() {
  const plans = getPricingPlans();

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 pt-32 pb-16">
        <PricingContent plans={plans} />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}