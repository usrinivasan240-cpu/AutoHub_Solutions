"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageSquare, Code, Rocket, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Consult",
    description: "We discuss your requirements, understand your goals, and create a detailed project roadmap tailored to your needs.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Code,
    number: "02",
    title: "Develop",
    description: "Our expert team builds your solution using cutting-edge technologies with regular updates and transparent progress reporting.",
    gradient: "from-violet-500 to-purple-500",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Deliver & Support",
    description: "We launch your project and provide ongoing support to ensure continuous growth and optimization of your digital presence.",
    gradient: "from-cyan-500 to-blue-500",
  },
];

export function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 relative overflow-hidden bg-muted/30 dark:bg-black/20">
      <div className="absolute inset-0 opacity-[0.03] grid-pattern" />

      <div className="container mx-auto px-4 md:px-8" ref={ref}>
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">
            How It <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-500">Works</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Our streamlined process ensures your project moves from concept to launch seamlessly.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="relative group">
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-[calc(100%+20px)] w-[calc(100%-40px)] h-px bg-gradient-to-r from-primary/50 to-transparent z-0">
                    <motion.div
                      className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary"
                      animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>
                )}

                <div className="relative z-10 p-8 rounded-2xl border border-border/50 dark:border-white/10 bg-card/50 dark:bg-white/[0.02] hover:border-primary/30 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/10">
                  <div className="absolute -top-4 left-8 px-4 py-1 rounded-full bg-background dark:bg-slate-900 border border-border dark:border-white/10">
                    <span className="text-sm font-bold text-muted-foreground">{step.number}</span>
                  </div>

                  <motion.div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.gradient} flex items-center justify-center mb-6 shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <step.icon className="h-7 w-7 text-white" />
                  </motion.div>

                  <h3 className="text-xl font-bold font-heading mb-3 group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>

                  <motion.div
                    className="mt-6 flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={{ x: -10 }}
                    whileHover={{ x: 0 }}
                  >
                    <span>Learn more</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}