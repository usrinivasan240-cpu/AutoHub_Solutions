import { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { getAboutValues } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us | Autohub Solution",
  description: "Learn about Autohub Solution - our mission, vision, and values. We help businesses, startups, and students scale with AI and digital solutions.",
  keywords: ["about", "company", "mission", "vision", "team", "autohub"],
};

export default function AboutPage() {
  const values = getAboutValues();

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
            backgroundSize: "24px 24px"
          }} />
          
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-500">Autohub Solution</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We are a technology company dedicated to transforming ideas into powerful digital experiences. 
                From startups to established businesses and students, we help everyone leverage the power of AI and modern technology.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 bg-muted/30 dark:bg-black/20">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div className="p-8 rounded-2xl border border-border/50 dark:border-white/10 bg-card/50 dark:bg-white/[0.02]">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-6">
                  <span className="text-3xl">🎯</span>
                </div>
                <h2 className="text-2xl font-bold font-heading mb-4">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To democratize technology by making AI and digital solutions accessible to businesses of all sizes and students at every level. 
                  We strive to bridge the gap between complex technology and practical implementation, empowering our clients to achieve their goals 
                  without breaking the bank.
                </p>
              </div>
              
              <div className="p-8 rounded-2xl border border-border/50 dark:border-white/10 bg-card/50 dark:bg-white/[0.02]">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center mb-6">
                  <span className="text-3xl">🚀</span>
                </div>
                <h2 className="text-2xl font-bold font-heading mb-4">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To be the leading technology partner for businesses and students in India and beyond, bridging the gap between innovative 
                  technology and practical implementation. We envision a future where every business, regardless of size, can leverage 
                  cutting-edge AI and digital tools to succeed.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">
                Our Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-pink-500">Values</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                The principles that guide everything we do and shape how we work with our clients.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl border border-border/50 dark:border-white/10 bg-card/50 dark:bg-white/[0.02] hover:border-primary/30 transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold font-heading mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why We Started */}
        <section className="py-20 bg-muted/30 dark:bg-black/20">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">
                  Why We <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">Started</span>
                </h2>
                <p className="text-muted-foreground text-lg">
                  Our story began with a simple observation and a desire to make a difference.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">The Problem We Saw</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We noticed that businesses and students in India faced a significant challenge - high-quality technology solutions 
                      were either too expensive from big agencies or too unreliable from freelancers. There was a clear gap in the market 
                      for affordable, high-quality technology services.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Our Solution</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Autohub Solution was born from the desire to fill this gap. We set out to create a company that offers 
                      premium-quality development services at affordable prices, without compromising on quality or support. 
                      We combine the best of both worlds - the professionalism of an agency with the affordability of freelance work.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Our Purpose</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Today, we serve hundreds of clients across India, from startups building their first product to students 
                      working on academic projects. Our purpose remains the same: to make technology accessible, affordable, 
                      and transformative for everyone. Every project we undertake is a step toward that vision.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
                Ready to Work Together?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Whether you have a project in mind or just want to discuss your ideas, we'd love to hear from you.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500 text-white font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5"
                >
                  Get In Touch
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-lg border border-border dark:border-white/10 hover:bg-muted transition-all duration-300"
                >
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
