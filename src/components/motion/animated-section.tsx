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

interface AnimatedSectionProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    once?: boolean;
}

export function AnimatedSection({
    children,
    className,
    delay = 0,
    once = true,
}: AnimatedSectionProps) {
    const ref = React.useRef<HTMLElement>(null);
    const isInView = useInView(ref, { once, margin: "-100px" });
    const prefersReducedMotion = usePrefersReducedMotion();

    const variants: Variants = {
        hidden: prefersReducedMotion ? {} : { opacity: 0, y: 40 },
        visible: prefersReducedMotion 
            ? { opacity: 1 } 
            : { 
                opacity: 1, 
                y: 0,
                transition: { duration: 0.6, delay },
            },
    };

    return (
        <motion.section
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants}
            className={cn(className)}
        >
            {children}
        </motion.section>
    );
}
