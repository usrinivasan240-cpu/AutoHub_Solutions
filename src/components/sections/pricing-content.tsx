"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check, Sparkles, ArrowRight, HelpCircle } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TiltCard } from "@/components/motion/tilt-card";
import { MagneticButton } from "@/components/motion/magnetic-button";
import type { PricingPlan } from "@/types/data";

interface PricingContentProps {
  plans: PricingPlan[];
}

export function PricingContent({ plans }: PricingContentProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="container mx-auto px-4 md:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">
          Simple, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-500">Transparent</span> Pricing
        </h1>
        <p className="text-lg text-muted-foreground">
          Custom solutions tailored to your needs. Contact us for a personalized quote.
        </p>
      </div>

      <motion.div
        ref={ref}
        className="flex justify-center max-w-4xl mx-auto mb-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
                transition={{ duration: 0.8 }}
      >
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            className="w-full max-w-md"
          >
            <TiltCard
              className="relative h-full"
              tiltAmount={5}
              glareEnabled={false}
            >
              <motion.div
                className={`relative rounded-2xl p-8 flex flex-col h-full border-2 border-border/50 dark:border-white/10 bg-card/50 dark:bg-white/[0.02] hover:border-primary/30 transition-all duration-500`}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.4, ease: "easeOut" }
                }}
              >
                <div className="text-center mb-6">
                  <motion.h3
                    className="text-2xl font-bold mb-2"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    {plan.name}
                  </motion.h3>
                  <div className="flex items-baseline justify-center gap-1">
                    <motion.span
                      className={`text-4xl font-bold bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      {plan.price}
                    </motion.span>
                    {plan.period && (
                      <span className="text-sm text-muted-foreground">/ {plan.period}</span>
                    )}
                  </div>
                  <motion.p
                    className="text-sm text-muted-foreground mt-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    {plan.target}
                  </motion.p>
                </div>

                <motion.p
                  className="text-muted-foreground text-sm mb-6 text-center"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  {plan.description}
                </motion.p>

                <ul className="space-y-3 mb-6 flex-1">
                  {plan.features.map((feature, i) => (
                    <motion.li
                      key={i}
                      className="flex items-start gap-3 text-sm"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.6 + i * 0.05 }}
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.6 + i * 0.05 }}
                      >
                        <Check className="h-5 w-5 flex-shrink-0 text-primary" />
                      </motion.div>
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 1 }}
                >
                  <MagneticButton strength={0.1}>
                    <Button
                      variant="gradient"
                      className="w-full py-6 text-base"
                      asChild
                    >
                      <Link href="/contact">
                        {plan.cta}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </MagneticButton>
                </motion.div>
              </motion.div>
            </TiltCard>
          </motion.div>
        ))}
      </motion.div>

      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted dark:bg-white/10 text-sm text-muted-foreground">
          <HelpCircle className="h-4 w-4" />
          <span>Have questions about pricing?</span>
        </div>
        <h3 className="text-xl font-bold mt-4 mb-2">Check our FAQ page</h3>
        <p className="text-muted-foreground text-sm mb-4">
          Find answers to common questions about pricing, customization, and more.
        </p>
        <Link
          href="/faq"
          className="inline-flex items-center justify-center gap-2 px-6 py-2 rounded-lg border border-border hover:bg-muted transition-all duration-300"
        >
          View FAQ
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-violet-500/10 to-cyan-500/10 rounded-3xl blur-xl" />
          <div className="relative p-8 md:p-12 rounded-3xl border border-border/50 dark:border-white/10 bg-card/50 dark:bg-white/[0.02] text-center">
            <h2 className="text-2xl md:text-3xl font-bold font-heading mb-4">
              Need Something Custom?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Every business is unique. If you don't find what you're looking for,
              our team will create a custom solution tailored to your specific requirements.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500 text-white font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5"
              >
                Get Custom Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg border border-border dark:border-white/10 hover:bg-muted transition-all duration-300"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}