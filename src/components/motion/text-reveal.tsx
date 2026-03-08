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

interface TextRevealProps {
    children: string;
    className?: string;
    delay?: number;
    once?: boolean;
    type?: "words" | "chars";
}

export function TextReveal({
    children,
    className,
    delay = 0,
    once = true,
    type = "words",
}: TextRevealProps) {
    const ref = React.useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once, margin: "-100px" });
    const prefersReducedMotion = usePrefersReducedMotion();

    const items = type === "words" ? children.split(" ") : children.split("");

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: prefersReducedMotion ? 0 : (type === "words" ? 0.08 : 0.03),
                delayChildren: prefersReducedMotion ? 0 : delay,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: prefersReducedMotion 
            ? {} 
            : { 
                opacity: 0, 
                y: 20,
                rotateX: -90,
            },
        visible: prefersReducedMotion 
            ? { opacity: 1 } 
            : { 
                opacity: 1, 
                y: 0, 
                rotateX: 0,
                transition: { duration: 0.5 },
            },
    };

    return (
        <motion.span
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className={cn("inline-flex flex-wrap", className)}
            style={{ perspective: "1000px" }}
        >
            {items.map((item, index) => (
                <motion.span
                    key={index}
                    variants={itemVariants}
                    className="inline-block"
                    style={{ transformOrigin: "bottom" }}
                >
                    {item}
                    {type === "words" && index < items.length - 1 && "\u00A0"}
                </motion.span>
            ))}
        </motion.span>
    );
}
