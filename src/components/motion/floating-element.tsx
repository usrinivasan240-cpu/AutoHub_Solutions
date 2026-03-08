"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FloatingElementProps {
    children?: React.ReactNode;
    className?: string;
    duration?: number;
    delay?: number;
    distance?: number;
    direction?: "vertical" | "horizontal" | "both";
}

export function FloatingElement({
    children,
    className,
    duration = 6,
    delay = 0,
    distance = 20,
    direction = "vertical",
}: FloatingElementProps) {
    const getAnimation = () => {
        switch (direction) {
            case "horizontal":
                return { x: [0, distance, 0, -distance, 0] };
            case "both":
                return { 
                    x: [0, distance * 0.5, 0, -distance * 0.5, 0],
                    y: [0, -distance, 0, distance * 0.5, 0] 
                };
            default:
                return { y: [0, -distance, 0] };
        }
    };

    return (
        <motion.div
            className={cn(className)}
            animate={getAnimation()}
            transition={{
                duration,
                delay,
                repeat: Infinity,
                ease: "easeInOut",
            }}
        >
            {children}
        </motion.div>
    );
}

// Animated gradient blob component
interface GradientBlobProps {
    className?: string;
    color?: "blue" | "violet" | "cyan" | "pink";
    size?: "sm" | "md" | "lg" | "xl";
    blur?: "md" | "lg" | "xl" | "2xl" | "3xl";
}

export function GradientBlob({
    className,
    color = "blue",
    size = "lg",
    blur = "3xl",
}: GradientBlobProps) {
    const colors = {
        blue: "bg-blue-500/30 dark:bg-blue-500/20",
        violet: "bg-violet-500/30 dark:bg-violet-500/20",
        cyan: "bg-cyan-500/30 dark:bg-cyan-500/20",
        pink: "bg-pink-500/30 dark:bg-pink-500/20",
    };

    const sizes = {
        sm: "w-32 h-32",
        md: "w-64 h-64",
        lg: "w-96 h-96",
        xl: "w-[500px] h-[500px]",
    };

    const blurs = {
        md: "blur-md",
        lg: "blur-lg",
        xl: "blur-xl",
        "2xl": "blur-2xl",
        "3xl": "blur-3xl",
    };

    return (
        <FloatingElement
            className={cn(
                "rounded-full absolute -z-10 pointer-events-none",
                colors[color],
                sizes[size],
                blurs[blur],
                className
            )}
            duration={8}
            distance={30}
            direction="both"
        />
    );
}
