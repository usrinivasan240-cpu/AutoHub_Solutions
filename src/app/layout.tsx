import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ScrollProgress } from "@/components/ui/scroll-progress";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Autohub Solution | AI & Digital Growth",
  description: "Autohub Solution helps businesses, startups, and students scale faster with modern websites, mobile apps, custom software, and intelligent AI automation.",
  keywords: ["web development", "mobile apps", "AI automation", "custom software", "digital growth"],
  authors: [{ name: "Autohub Solution" }],
  creator: "Autohub Solution",
  publisher: "Autohub Solution",
  metadataBase: new URL("https://autohubsolution.com"),
  alternates: {
    canonical: "/",
  },
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#0f172a" />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased bg-background text-foreground selection:bg-primary/20`}>
        <ScrollProgress />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-lg focus:outline-none"
        >
          Skip to main content
        </a>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}