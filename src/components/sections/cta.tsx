"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { MagneticButton } from "@/components/motion/magnetic-button";

export function CtaSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className="py-24" ref={ref}>
            <div className="container mx-auto px-4 md:px-8">
                <motion.div 
                    className="rounded-3xl bg-gradient-to-r from-blue-900/50 to-violet-900/50 dark:from-blue-900/50 dark:to-violet-900/50 border border-primary/20 p-12 text-center md:text-left relative overflow-hidden"
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    {/* Animated background elements */}
                    <motion.div 
                        className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.5, 0.3],
                        }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.div 
                        className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl -z-10 -translate-x-1/2 translate-y-1/2"
                        animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.2, 0.4, 0.2],
                        }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    />

                    {/* Shimmer effect */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -z-10"
                        animate={{
                            x: ["-100%", "100%"],
                        }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
                    />

                    <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <div className="flex items-center gap-2 mb-4">
                                <motion.div
                                    animate={{ rotate: [0, 10, -10, 0] }}
                                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                                >
                                    <Sparkles className="h-6 w-6 text-yellow-400" />
                                </motion.div>
                                <span className="text-sm font-medium text-blue-200">Ready to start?</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-white">
                                Have an idea? Let&apos;s build it together.
                            </h2>
                            <p className="text-lg text-blue-100/80 max-w-xl">
                                Whether you need a cutting-edge website, an AI chatbot, or a mobile app, we are ready to bring your vision to life.
                            </p>
                        </motion.div>
                        <motion.div 
                            className="flex-shrink-0"
                            initial={{ opacity: 0, x: 20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <MagneticButton strength={0.15}>
                                <Button 
                                    size="lg" 
                                    variant="default" 
                                    className="bg-white text-blue-900 hover:bg-white/90 text-lg px-8 py-6 h-auto font-semibold group" 
                                    asChild
                                >
                                    <Link href="/contact">
                                        Contact Us Today
                                        <motion.span
                                            className="ml-2 inline-block"
                                            animate={{ x: [0, 5, 0] }}
                                            transition={{ duration: 1.5, repeat: Infinity }}
                                        >
                                            <ArrowRight className="h-5 w-5" />
                                        </motion.span>
                                    </Link>
                                </Button>
                            </MagneticButton>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
