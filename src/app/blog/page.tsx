import { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { BlogContent } from "@/components/sections/blog-content";
import { getBlogCategories, getBlogPosts, getFeaturedPost } from "@/lib/data";

export const metadata: Metadata = {
  title: "Blog | Autohub Solution",
  description: "Latest insights on web development, AI automation, mobile apps, and digital growth strategies from the Autohub Solution team.",
  keywords: ["blog", "web development tips", "AI automation", "mobile app development", "digital marketing"],
  openGraph: {
    title: "Blog | Autohub Solution",
    description: "Latest news, technology trends, and tips from our team.",
    type: "website",
  },
  alternates: {
    canonical: "/blog",
  },
};

// Blog listing structured data
const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "Autohub Solution Blog",
  "description": "Insights on web development, AI, and digital growth.",
  "url": "https://autohubsolution.com/blog",
  "publisher": {
    "@type": "Organization",
    "name": "Autohub Solution",
  },
};

export default function BlogPage() {
  const categories = getBlogCategories();
  const posts = getBlogPosts();
  const featuredPost = getFeaturedPost();

  return (
    <div className="flex min-h-screen flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <Navbar />
      <main className="flex-1 pt-32 pb-16">
        <BlogContent categories={categories} posts={posts} featuredPost={featuredPost} />
      </main>
      <Footer />
    </div>
  );
}
