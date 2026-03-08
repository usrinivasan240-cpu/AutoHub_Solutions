"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Search, ArrowRight, Calendar, User, Sparkles, Brain, Globe, Smartphone, TrendingUp, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import { MagneticButton } from "@/components/motion/magnetic-button";
import Fuse from "fuse.js";
import { useMemo } from "react";
import type { BlogCategory, BlogPost, FeaturedPost } from "@/types/data";

const iconMap: Record<string, any> = { Brain, Globe, Smartphone, TrendingUp, GraduationCap };

interface BlogContentProps {
  categories: BlogCategory[];
  posts: BlogPost[];
  featuredPost: FeaturedPost;
}

export function BlogContent({ categories, posts, featuredPost }: BlogContentProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [email, setEmail] = useState("");

  const fuse = useMemo(() => {
    return new Fuse(posts, {
      keys: ['title', 'excerpt', 'category', 'author'],
      threshold: 0.3,
    });
  }, [posts]);

  const filteredPosts = searchQuery
    ? fuse.search(searchQuery).map(result => result.item)
    : selectedCategory === "All"
      ? posts
      : posts.filter(post => post.category === selectedCategory);

  return (
    <div className="container mx-auto px-4 md:px-8">
      {/* Header */}
      <div className="max-w-4xl mx-auto mb-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-500">Blog</span>
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
          Insights, tips, and trends about AI, web development, mobile apps, and digital growth. 
          Stay updated with the latest in technology.
        </p>

        {/* Search */}
        <motion.div
          className="relative max-w-lg mx-auto"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
            <Search className="h-5 w-5" />
          </div>
          <Input
            placeholder="Search articles..."
            className="pl-10 h-12 rounded-full bg-muted/50 dark:bg-white/5 border-border/50 dark:border-white/10 hover:border-primary/50 focus-visible:ring-primary/50 transition-colors"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search blog articles"
          />
        </motion.div>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categories.map((cat, index) => (
          <motion.div
            key={cat.name}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
          >
            <Button
              variant={selectedCategory === cat.name ? "gradient" : "outline"}
              onClick={() => {
                setSelectedCategory(cat.name);
                setSearchQuery("");
              }}
              className="rounded-full"
            >
              {(() => {
                if (!cat.icon) return null;
                const Icon = iconMap[cat.icon];
                return Icon ? <Icon className="h-4 w-4 mr-2" /> : null;
              })()}
              {cat.name}
            </Button>
          </motion.div>
        ))}
      </div>

      {/* Featured Post */}
      {!searchQuery && selectedCategory === "All" && (
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="rounded-3xl border border-border/50 dark:border-white/10 bg-card/50 dark:bg-white/5 overflow-hidden flex flex-col md:flex-row group hover:border-primary/30 transition-all duration-300">
            <div className="w-full md:w-1/2 aspect-video md:aspect-auto bg-gradient-to-br from-blue-900/40 to-violet-900/40 relative min-h-[300px] flex items-center justify-center">
              <div className="text-center p-8">
                <div className="text-6xl mb-4">📱</div>
                <div className="text-white/60 text-sm">Featured Article Image</div>
              </div>
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-sm text-primary font-bold uppercase tracking-wider">Featured</span>
              </div>
              <h2 className="text-3xl font-bold font-heading mb-4 group-hover:text-primary transition-colors cursor-pointer">
                {featuredPost.title}
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-8">
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-1" /> {featuredPost.author}
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" /> {featuredPost.date}
                </div>
                <div>{featuredPost.readTime}</div>
              </div>
              <MagneticButton strength={0.1}>
                <Button variant="gradient" className="w-fit" asChild>
                  <Link href="#">
                    Read Full Article
                    <motion.span
                      className="ml-2"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="h-4 w-4" />
                    </motion.span>
                  </Link>
                </Button>
              </MagneticButton>
            </div>
          </div>
        </motion.div>
      )}

      {/* Posts Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        layout
      >
        {filteredPosts.map((post, index) => (
          <motion.div
            key={post.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            layout
          >
            <Card className="flex flex-col h-full bg-card/50 dark:bg-white/5 border-border/50 dark:border-white/10 hover:border-primary/50 hover:bg-card dark:hover:bg-white/[0.07] transition-all group cursor-pointer">
              <div className={`h-48 w-full bg-gradient-to-br ${post.gradient} relative overflow-hidden flex items-center justify-center`}>
                <div className="text-4xl opacity-50">
                  {post.category === "AI" && "🤖"}
                  {post.category === "Web" && "🌐"}
                  {post.category === "App" && "📱"}
                  {post.category === "Business" && "💼"}
                  {post.category === "Student" && "🎓"}
                </div>
              </div>
              <CardHeader>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">{post.category}</span>
                  <span className="text-xs text-muted-foreground">{post.date}</span>
                </div>
                <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
              </CardContent>
              <CardFooter className="mt-auto pt-0">
                <div className="flex items-center justify-between w-full text-sm">
                  <div className="font-medium text-muted-foreground flex items-center">
                    <User className="h-3 w-3 mr-2" /> {post.author}
                  </div>
                  <span className="text-xs text-muted-foreground">{post.readTime}</span>
                </div>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* No results message */}
      {filteredPosts.length === 0 && (
        <div className="text-center py-16">
          <p className="text-muted-foreground">No articles found matching your search.</p>
        </div>
      )}

      {/* Newsletter */}
      <motion.div
        className="mt-24 rounded-3xl bg-gradient-to-r from-blue-900/50 to-violet-900/50 dark:from-blue-900/50 dark:to-violet-900/50 border border-primary/20 p-10 text-center relative overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="absolute top-0 right-0 p-20 bg-primary/20 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <h3 className="text-2xl md:text-3xl font-bold font-heading mb-4 relative z-10">Subscribe to our Newsletter</h3>
        <p className="text-muted-foreground mb-8 max-w-xl mx-auto relative z-10">
          Get the latest articles, tips, and insights delivered directly to your inbox. 
          Join 5,000+ subscribers staying ahead in technology.
        </p>
        <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4 relative z-10">
          <Input
            placeholder="Enter your email"
            className="bg-background"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-label="Email for newsletter subscription"
          />
          <MagneticButton strength={0.1}>
            <Button variant="gradient">Subscribe</Button>
          </MagneticButton>
        </div>
      </motion.div>
    </div>
  );
}
