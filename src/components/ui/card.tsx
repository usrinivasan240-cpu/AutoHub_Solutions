"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { motion, useMotionValue, useSpring, useTransform, HTMLMotionProps } from "framer-motion";

interface CardProps {
    className?: string;
    children?: React.ReactNode;
    enableTilt?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({ className, enableTilt = false, children }, ref) => {
        const cardRef = React.useRef<HTMLDivElement>(null);
        
        const x = useMotionValue(0);
        const y = useMotionValue(0);

        const springConfig = { stiffness: 150, damping: 20 };
        const xSpring = useSpring(x, springConfig);
        const ySpring = useSpring(y, springConfig);

        const rotateX = useTransform(ySpring, [-0.5, 0.5], [5, -5]);
        const rotateY = useTransform(xSpring, [-0.5, 0.5], [-5, 5]);

        const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
            if (!enableTilt || !cardRef.current) return;

            const rect = cardRef.current.getBoundingClientRect();
            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;

            x.set((mouseX / rect.width) - 0.5);
            y.set((mouseY / rect.height) - 0.5);
        };

        const handleMouseLeave = () => {
            x.set(0);
            y.set(0);
        };

        return (
            <motion.div
                ref={cardRef}
                onMouseMove={enableTilt ? handleMouse : undefined}
                onMouseLeave={enableTilt ? handleMouseLeave : undefined}
                style={enableTilt ? {
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                } : undefined}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={cn(
                    "rounded-2xl border border-border/50 dark:border-white/10 bg-card dark:bg-white/5 backdrop-blur-md text-card-foreground shadow-sm transition-shadow hover:shadow-lg hover:border-primary/50 overflow-hidden",
                    className
                )}
            >
                {children}
            </motion.div>
        );
    }
);
Card.displayName = "Card";

const CardHeader = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("flex flex-col space-y-1.5 p-6", className)}
        {...props}
    />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
    <h3
        ref={ref}
        className={cn(
            "text-2xl font-semibold leading-none tracking-tight font-heading group-hover:text-primary transition-colors",
            className
        )}
        {...props}
    />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
    <p
        ref={ref}
        className={cn("text-sm text-muted-foreground", className)}
        {...props}
    />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("flex items-center p-6 pt-0", className)}
        {...props}
    />
));
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
