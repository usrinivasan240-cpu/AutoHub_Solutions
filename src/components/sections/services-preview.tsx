"use client";

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { Globe, Smartphone, Bot, Code, BarChart, GraduationCap, type LucideIcon } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import type { Service } from "@/types/data";

const iconMap: Record<string, LucideIcon> = {
  Globe,
  Smartphone,
  Bot,
  Code,
  BarChart,
  GraduationCap,
};

interface ServicesPreviewProps {
  services: Service[];
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

export function ServicesPreview({ services }: ServicesPreviewProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-muted/30 dark:bg-black/20" id="services" style={{ scrollMarginTop: "100px" }}>
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70 dark:from-white dark:to-white/70">
            What We Do
          </h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive digital solutions tailored for your growth.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <SpotlightCard className="h-full">
                <Card className="h-full border-border/50 dark:border-white/5 bg-card/50 dark:bg-white/[0.02] hover:bg-card dark:hover:bg-white/[0.05] hover:border-primary/20 transition-all duration-300 group">
                  <CardHeader>
                    <motion.div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      {(() => { const Icon = iconMap[service.icon]; return Icon ? <Icon className="h-6 w-6 text-white" /> : null; })()}
                    </motion.div>
                    <CardTitle className="group-hover:text-primary transition-colors">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-muted-foreground/80">
                      {service.shortDescription}
                    </CardDescription>
                  </CardContent>
                </Card>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}