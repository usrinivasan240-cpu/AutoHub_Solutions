"use client";

import * as React from "react";
import { motion, useInView, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

function usePrefersReducedMotion() {
    const [prefersReducedMotion, setPrefersReducedMotion] = React.useState(false);

    React.useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
        setPrefersReducedMotion(mediaQuery.matches);

        const handler = (event: MediaQueryListEvent) => {
            setPrefersReducedMotion(event.matches);
        };

        mediaQuery.addEventListener("change", handler);
        return () => mediaQuery.removeEventListener("change", handler);
    }, []);

    return prefersReducedMotion;
}

interface StaggeredListProps {
    children: React.ReactNode;
    className?: string;
    staggerDelay?: number;
    once?: boolean;
}

export function StaggeredList({
    children,
    className,
    staggerDelay = 0.1,
    once = true,
}: StaggeredListProps) {
    const ref = React.useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once, margin: "-50px" });
    const prefersReducedMotion = usePrefersReducedMotion();

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: prefersReducedMotion ? 0 : staggerDelay,
                delayChildren: prefersReducedMotion ? 0 : 0.1,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: prefersReducedMotion ? {} : { opacity: 0, y: 20 },
        visible: prefersReducedMotion 
            ? { opacity: 1 } 
            : { 
                opacity: 1, 
                y: 0,
                transition: { duration: 0.5 },
            },
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className={cn(className)}
        >
            {React.Children.map(children, (child, index) => (
                <motion.div key={index} variants={itemVariants}>
                    {child}
                </motion.div>
            ))}
        </motion.div>
    );
}
