"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
    className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
    const { theme, setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    const toggleTheme = () => {
        setTheme(resolvedTheme === "dark" ? "light" : "dark");
    };

    if (!mounted) {
        return (
            <button
                className={cn(
                    "relative h-9 w-9 rounded-lg bg-white/5 border border-white/10",
                    className
                )}
                aria-label="Toggle theme"
            />
        );
    }

    const isDark = resolvedTheme === "dark";

    return (
        <motion.button
            onClick={toggleTheme}
            className={cn(
                "relative h-9 w-9 rounded-lg bg-white/5 dark:bg-white/5 light:bg-black/5 border border-white/10 dark:border-white/10 overflow-hidden",
                "hover:bg-white/10 dark:hover:bg-white/10 transition-colors",
                "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background",
                className
            )}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
        >
            <AnimatePresence mode="wait" initial={false}>
                {isDark ? (
                    <motion.div
                        key="moon"
                        initial={{ y: -30, opacity: 0, rotate: -90 }}
                        animate={{ y: 0, opacity: 1, rotate: 0 }}
                        exit={{ y: 30, opacity: 0, rotate: 90 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="absolute inset-0 flex items-center justify-center"
                    >
                        <Moon className="h-4 w-4 text-blue-300" />
                    </motion.div>
                ) : (
                    <motion.div
                        key="sun"
                        initial={{ y: 30, opacity: 0, rotate: 90 }}
                        animate={{ y: 0, opacity: 1, rotate: 0 }}
                        exit={{ y: -30, opacity: 0, rotate: -90 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="absolute inset-0 flex items-center justify-center"
                    >
                        <Sun className="h-4 w-4 text-yellow-500" />
                    </motion.div>
                )}
            </AnimatePresence>
            
            {/* Glow effect */}
            <motion.div
                className={cn(
                    "absolute inset-0 rounded-lg opacity-0",
                    isDark ? "bg-blue-500/20" : "bg-yellow-500/20"
                )}
                animate={{ opacity: [0, 0.5, 0] }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                key={isDark ? "dark-glow" : "light-glow"}
            />
        </motion.button>
    );
}
