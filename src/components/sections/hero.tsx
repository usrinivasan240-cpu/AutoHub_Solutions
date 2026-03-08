"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Star, Cpu, Activity, Zap } from "lucide-react";
import { GradientBlob } from "@/components/motion/floating-element";
import { MagneticButton } from "@/components/motion/magnetic-button";

export function Hero() {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 150]);
    const y2 = useTransform(scrollY, [0, 500], [0, -100]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

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
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut" as const,
            },
        },
    };

    const letterVariants = {
        hidden: { opacity: 0, y: 50, rotateX: -90 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            rotateX: 0,
            transition: {
                duration: 0.5,
                delay: i * 0.03,
                ease: "easeOut" as const,
            },
        }),
    };

    const floatVariants = {
        animate: {
            y: [0, -20, 0],
            transition: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut" as const,
            },
        },
    };

    const floatDelayedVariants = {
        animate: {
            y: [0, -15, 0],
            transition: {
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut" as const,
                delay: 2,
            },
        },
    };

    const title = "AUTOMATE";
    const subtitle = "THE EXTRAORDINARY";

    return (
        <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-20">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.03] grid-pattern" />
            
            {/* Radial gradient for depth */}
            <div className="absolute inset-0 radial-gradient-bg pointer-events-none" />

            {/* Animated Background Gradients */}
            <motion.div style={{ y: y1 }} className="absolute top-[-10%] right-[-5%]">
                <GradientBlob color="blue" size="xl" blur="3xl" />
            </motion.div>
            <motion.div style={{ y: y2 }} className="absolute bottom-[-10%] left-[-10%]">
                <GradientBlob color="violet" size="lg" blur="3xl" />
            </motion.div>

            {/* Floating decorative dots */}
            <motion.div
                className="absolute top-1/4 left-10 w-2 h-2 rounded-full bg-blue-400"
                animate={{
                    y: [0, -20, 0],
                    opacity: [0.5, 1, 0.5],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            <motion.div
                className="absolute top-1/3 right-20 w-3 h-3 rounded-full bg-violet-400"
                animate={{
                    y: [0, 20, 0],
                    opacity: [0.5, 1, 0.5],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                }}
            />

            <motion.div
                className="container mx-auto px-6 lg:px-12 relative z-10"
                style={{ opacity }}
            >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    {/* Left Content Column */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="lg:col-span-7 flex flex-col gap-8"
                    >
                        {/* Badge */}
                        <motion.div
                            variants={itemVariants}
                            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 w-fit backdrop-blur-md"
                        >
                            <span className="relative flex h-2 w-2">
                                <motion.span
                                    className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"
                                    animate={{ scale: [1, 1.5, 1], opacity: [0.75, 0, 0.75] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                            </span>
                            <span className="text-xs font-bold text-primary tracking-wide uppercase">
                                AI & Digital Innovation
                            </span>
                        </motion.div>

                        {/* Main Heading */}
                        <motion.div variants={itemVariants}>
                            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-[0.9]" style={{ textShadow: "0 0 40px rgba(13, 166, 242, 0.3)" }}>
                                <span className="inline-flex flex-wrap" style={{ perspective: "1000px" }}>
                                    {title.split("").map((char, i) => (
                                        <motion.span
                                            key={i}
                                            custom={i}
                                            variants={letterVariants}
                                            initial="hidden"
                                            animate="visible"
                                            className="inline-block text-white"
                                            style={{ transformOrigin: "bottom" }}
                                        >
                                            {char === " " ? "\u00A0" : char}
                                        </motion.span>
                                    ))}
                                </span>
                                <br />
                                <motion.span
                                    className="inline-block mt-2"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5, duration: 0.6 }}
                                >
                                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0da6f2] via-[#22d3ee] to-[#a855f7]">
                                        {subtitle}
                                    </span>
                                </motion.span>
                            </h1>
                        </motion.div>

                        {/* Description */}
                        <motion.p
                            variants={itemVariants}
                            className="text-lg text-slate-300 max-w-xl leading-relaxed font-light border-l-2 border-primary/50 pl-6"
                        >
                            Autohub Solution helps businesses, startups, and students scale faster with modern websites, mobile apps, custom software, and intelligent AI automation.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            variants={itemVariants}
                            className="flex flex-wrap gap-4 mt-4"
                        >
                            <MagneticButton strength={0.2}>
                                <Button
                                    size="lg"
                                    className="group relative h-14 px-8 rounded-lg bg-primary text-white text-base font-bold tracking-wide shadow-[0_0_20px_rgba(13,166,242,0.4)] hover:shadow-[0_0_35px_rgba(13,166,242,0.6)] hover:-translate-y-0.5 transition-all duration-300 overflow-hidden"
                                    asChild
                                >
                                    <Link href="/contact">
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                                        <span>Get Free Consultation</span>
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
                            <MagneticButton strength={0.2}>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="group h-14 px-8 rounded-lg border border-white/20 hover:border-white/50 bg-white/5 backdrop-blur-sm text-white text-base font-bold tracking-wide hover:bg-white/10 transition-all duration-300"
                                    asChild
                                >
                                    <Link href="/services">
                                        <span>Explore Services</span>
                                        <motion.span
                                            className="ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                                        >
                                            <ArrowRight className="h-5 w-5" />
                                        </motion.span>
                                    </Link>
                                </Button>
                            </MagneticButton>
                        </motion.div>
                    </motion.div>

                    {/* Right Column - Floating Cards */}
                    <div className="lg:col-span-5 relative h-[500px] lg:h-[700px] w-full hidden lg:flex items-center justify-center">
                        {/* System Status Card */}
                        <motion.div
                            variants={floatVariants}
                            animate="animate"
                            className="absolute top-[10%] right-[10%] w-64 p-4 rounded-xl bg-slate-900/60 backdrop-blur-xl border border-white/10 shadow-2xl z-20"
                        >
                            <div className="flex items-center justify-between mb-3">
                                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">System Status</span>
                                <motion.div
                                    className="h-2 w-2 rounded-full bg-green-500"
                                    style={{ boxShadow: "0 0 8px rgba(34,197,94,0.6)" }}
                                    animate={{ opacity: [1, 0.5, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                />
                            </div>
                            <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden mb-2">
                                <motion.div
                                    className="h-full bg-gradient-to-r from-primary to-violet-500 rounded-full"
                                    initial={{ width: "0%" }}
                                    animate={{ width: "98.4%" }}
                                    transition={{ duration: 2, delay: 0.5 }}
                                />
                            </div>
                            <div className="flex justify-between text-xs text-slate-300">
                                <span>Optimization</span>
                                <span className="font-mono text-primary">98.4%</span>
                            </div>
                        </motion.div>

                        {/* AI Core Card */}
                        <motion.div
                            variants={floatDelayedVariants}
                            animate="animate"
                            className="absolute top-[40%] left-[5%] lg:left-[-5%] w-56 p-4 rounded-xl bg-slate-800/40 backdrop-blur-lg border border-primary/20 shadow-2xl z-10"
                            style={{ boxShadow: "0 0 20px rgba(13, 166, 242, 0.4), inset 0 0 10px rgba(13, 166, 242, 0.1)" }}
                        >
                            <div className="flex items-center gap-3 mb-2">
                                <div className="p-2 rounded bg-primary/20 text-primary">
                                    <Cpu className="h-5 w-5" />
                                </div>
                                <div>
                                    <h3 className="text-sm font-bold text-white">AI Core</h3>
                                    <p className="text-[10px] text-slate-400">Processing Node</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-4 gap-1 mt-2">
                                {[1, 2, 3, 4].map((i) => (
                                    <motion.div
                                        key={i}
                                        className="h-8 bg-primary/10 rounded"
                                        animate={{ opacity: [0.3, 1, 0.3] }}
                                        transition={{
                                            duration: 1.5,
                                            repeat: Infinity,
                                            delay: i * 0.15,
                                        }}
                                        style={{ backgroundColor: `rgba(13, 166, 242, ${i * 0.1})` }}
                                    />
                                ))}
                            </div>
                        </motion.div>

                        {/* Hub Connection Card */}
                        <motion.div
                            variants={floatVariants}
                            animate="animate"
                            className="absolute bottom-[15%] right-[5%] w-72 h-40 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-md border border-white/10 shadow-xl flex items-center justify-center z-0 rotate-[-6deg]"
                        >
                            <div className="text-center">
                                <Zap className="h-12 w-12 text-white/20 mx-auto mb-2" />
                                <motion.div
                                    className="text-sm text-white/40 font-mono tracking-widest"
                                    animate={{ opacity: [0.4, 1, 0.4] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    CONNECTING...
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Activity Indicator */}
                        <motion.div
                            className="absolute top-[25%] left-[25%] p-3 rounded-full bg-slate-900/60 backdrop-blur-xl border border-white/10"
                            animate={{
                                scale: [1, 1.1, 1],
                                rotate: [0, 180, 360],
                            }}
                            transition={{
                                duration: 10,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                        >
                            <Activity className="h-6 w-6 text-cyan-400" />
                        </motion.div>
                    </div>
                </div>
            </motion.div>

            {/* Bottom gradient fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none z-20" />

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
            >
                <motion.div
                    className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center p-2"
                    animate={{ y: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <motion.div
                        className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50"
                        animate={{ y: [0, 12, 0], opacity: [1, 0.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                </motion.div>
            </motion.div>
        </section>
    );
}
