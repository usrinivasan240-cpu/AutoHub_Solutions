"use client";

import Link from "next/link";
import { Globe, Smartphone, Bot, Code, BarChart, GraduationCap, Check, ArrowRight, Sparkles, type LucideIcon } from "lucide-react";
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

interface ServicesContentProps {
  services: Service[];
}

export function ServicesContent({ services }: ServicesContentProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <>
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-500">Services</span>
        </h1>
        <p className="text-lg text-muted-foreground">
          Comprehensive digital solutions tailored for your growth. From websites to AI, we have everything you need to succeed in the digital world.
        </p>
      </div>

      <div ref={ref} className="space-y-20">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
          >
            <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
              <div className={`inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r ${service.gradient} text-white text-sm font-medium mb-6`}>
                {(() => { const Icon = iconMap[service.icon]; return Icon ? <Icon className="h-4 w-4" /> : null; })()}
                <span>{service.title}</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
                {service.title}
              </h2>

              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {service.features.slice(0, 6).map((feature, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-2 text-sm"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mb-8">
                <h4 className="font-semibold mb-3">Who It's For:</h4>
                <div className="flex flex-wrap gap-2">
                  {service.whoFor.map((item, i) => (
                    <motion.span
                      key={i}
                      className="px-3 py-1 rounded-full text-xs bg-muted dark:bg-white/10 text-muted-foreground"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500 text-white font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
                >
                  Get Quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            </div>

            <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
              <motion.div
                className="relative"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-3xl blur-xl opacity-10`} />
                <div className="relative p-8 rounded-3xl border border-border/50 dark:border-white/10 bg-card/50 dark:bg-white/[0.02]">
                  <motion.div
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    {(() => { const Icon = iconMap[service.icon]; return Icon ? <Icon className="h-10 w-10 text-white" /> : null; })()}
                  </motion.div>

                  <h3 className="text-xl font-bold mb-3">{service.shortDescription}</h3>

                  <div className="space-y-3">
                    {service.features.slice(0, 4).map((feature, i) => (
                      <motion.div
                        key={i}
                        className="flex items-center gap-3 text-sm text-muted-foreground"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + i * 0.1 }}
                      >
                        <motion.div
                          className={`w-6 h-6 rounded-full bg-gradient-to-br ${service.gradient} flex items-center justify-center`}
                          whileHover={{ scale: 1.2 }}
                        >
                          <Check className="h-3 w-3 text-white" />
                        </motion.div>
                        {feature}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-20 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted dark:bg-white/10 text-sm text-muted-foreground mb-4">
          <Sparkles className="h-4 w-4 text-primary" />
          <span>Need something custom?</span>
        </div>
        <h3 className="text-2xl font-bold font-heading mb-4">Don't see what you're looking for?</h3>
        <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
          We offer custom solutions tailored to your unique requirements. Contact us to discuss your project.
        </p>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg border border-border dark:border-white/10 hover:bg-muted transition-all duration-300"
          >
            Discuss Your Project
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </>
  );
}