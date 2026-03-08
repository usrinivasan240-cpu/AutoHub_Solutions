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

interface FadeInProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
    direction?: "up" | "down" | "left" | "right" | "none";
    distance?: number;
    once?: boolean;
}

export function FadeIn({
    children,
    className,
    delay = 0,
    duration = 0.5,
    direction = "up",
    distance = 24,
    once = true,
}: FadeInProps) {
    const ref = React.useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once, margin: "-100px" });
    const prefersReducedMotion = usePrefersReducedMotion();

    const directions = {
        up: { y: distance },
        down: { y: -distance },
        left: { x: distance },
        right: { x: -distance },
        none: {},
    };

    const variants: Variants = {
        hidden: prefersReducedMotion ? {} : { opacity: 0, ...directions[direction] },
        visible: prefersReducedMotion 
            ? { opacity: 1 } 
            : { 
                opacity: 1, 
                x: 0, 
                y: 0,
                transition: { duration, delay },
            },
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants}
            className={cn(className)}
        >
            {children}
        </motion.div>
    );
}
