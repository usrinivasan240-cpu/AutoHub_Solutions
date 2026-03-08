"use client";

import { motion, useInView } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { useRef } from "react";

const benefits = [
    { text: "Affordable pricing", description: "Competitive rates without compromising quality" },
    { text: "AI-first approach", description: "Leveraging cutting-edge AI technologies" },
    { text: "Custom builds", description: "Tailored solutions for your unique needs" },
    { text: "Fast delivery", description: "Quick turnaround times on all projects" },
    { text: "Long-term support", description: "Ongoing maintenance and updates" },
];

export function WhyChooseUs() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut" as const,
            },
        },
    };

    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background gradient */}
            <motion.div 
                className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-cyan-500/10 dark:bg-cyan-500/10 rounded-full blur-[120px] -z-10"
                animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, y: 40 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 leading-tight">
                            Why Choose <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-500 dark:from-blue-400 dark:to-violet-400">
                                Autohub Solution?
                            </span>
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8">
                            We combine technical expertise with business intelligence to deliver products that don&apos;t just look good, but perform exceptionally.
                        </p>

                        <motion.ul 
                            className="space-y-4"
                            variants={containerVariants}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                        >
                            {benefits.map((benefit, index) => (
                                <motion.li 
                                    key={index} 
                                    className="flex items-start space-x-4 group"
                                    variants={itemVariants}
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.2, rotate: 360 }}
                                        transition={{ type: "spring", stiffness: 300, damping: 15 }}
                                    >
                                        <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                                    </motion.div>
                                    <div>
                                        <span className="text-lg font-medium group-hover:text-primary transition-colors">
                                            {benefit.text}
                                        </span>
                                        <p className="text-sm text-muted-foreground mt-0.5">
                                            {benefit.description}
                                        </p>
                                    </div>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </motion.div>

                    <motion.div 
                        className="relative"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {/* Abstract visual representation */}
                        <motion.div 
                            className="aspect-square rounded-3xl border border-border/50 dark:border-white/10 bg-gradient-to-br from-muted/50 dark:from-white/5 to-transparent backdrop-blur-2xl p-8 relative overflow-hidden group"
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                            {/* Animated gradient overlay */}
                            <motion.div 
                                className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-violet-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
                                animate={{
                                    backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                                }}
                                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                            />

                            <div className="h-full flex flex-col justify-between relative z-10">
                                {/* Top lines */}
                                <div className="space-y-4">
                                    <motion.div 
                                        className="h-2 w-1/3 bg-foreground/10 dark:bg-white/20 rounded-full"
                                        initial={{ width: 0 }}
                                        animate={isInView ? { width: "33%" } : {}}
                                        transition={{ duration: 0.8, delay: 0.5 }}
                                    />
                                    <motion.div 
                                        className="h-2 w-1/2 bg-foreground/10 dark:bg-white/20 rounded-full"
                                        initial={{ width: 0 }}
                                        animate={isInView ? { width: "50%" } : {}}
                                        transition={{ duration: 0.8, delay: 0.6 }}
                                    />
                                </div>

                                {/* Center cards */}
                                <div className="grid grid-cols-2 gap-4">
                                    <motion.div 
                                        className="aspect-video bg-primary/10 dark:bg-white/10 rounded-xl"
                                        animate={{ 
                                            scale: [1, 1.02, 1],
                                            opacity: [0.5, 0.8, 0.5]
                                        }}
                                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                    />
                                    <motion.div 
                                        className="aspect-video bg-primary/10 dark:bg-white/10 rounded-xl"
                                        animate={{ 
                                            scale: [1, 1.02, 1],
                                            opacity: [0.5, 0.8, 0.5]
                                        }}
                                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                    />
                                </div>

                                {/* Bottom element */}
                                <div className="flex justify-end">
                                    <motion.div 
                                        className="h-12 w-12 bg-gradient-to-br from-blue-500 to-violet-500 rounded-full shadow-lg"
                                        animate={{ 
                                            scale: [1, 1.1, 1],
                                            boxShadow: [
                                                "0 0 20px rgba(59, 130, 246, 0.3)",
                                                "0 0 40px rgba(139, 92, 246, 0.5)",
                                                "0 0 20px rgba(59, 130, 246, 0.3)"
                                            ]
                                        }}
                                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
