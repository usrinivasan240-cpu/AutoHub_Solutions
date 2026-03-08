"use client";

import * as React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import { GlareEffect } from "./glare-effect";

interface TiltCardProps {
    children: React.ReactNode;
    className?: string;
    tiltAmount?: number;
    glareEnabled?: boolean;
}

export function TiltCard({
    children,
    className,
    tiltAmount = 10,
    glareEnabled = true,
}: TiltCardProps) {
    const ref = React.useRef<HTMLDivElement>(null);
    
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springConfig = { stiffness: 150, damping: 15 };
    const xSpring = useSpring(x, springConfig);
    const ySpring = useSpring(y, springConfig);

    const rotateX = useTransform(ySpring, [-0.5, 0.5], [tiltAmount, -tiltAmount]);
    const rotateY = useTransform(xSpring, [-0.5, 0.5], [-tiltAmount, tiltAmount]);

    const glareX = useTransform(xSpring, [-0.5, 0.5], [0, 100]);
    const glareY = useTransform(ySpring, [-0.5, 0.5], [0, 100]);

    const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        x.set((mouseX / width) - 0.5);
        y.set((mouseY / height) - 0.5);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className={cn("relative", className)}
        >
            {children}
            
            {glareEnabled && (
                <GlareEffect glareX={glareX} glareY={glareY} />
            )}
        </motion.div>
    );
}
