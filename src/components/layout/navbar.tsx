"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence, useScroll, useMotionValueEvent, useTransform } from "framer-motion";
import { Menu, X, Rocket } from "lucide-react";

const navItems = [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Pricing", href: "/pricing" },
    { name: "Blog", href: "/blog" },
    { name: "FAQ", href: "/faq" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);
    const [visible, setVisible] = React.useState(true);
    const [hasScrolled, setHasScrolled] = React.useState(false);
    const { scrollY } = useScroll();
    const lastScrollY = React.useRef(0);
    const pathname = usePathname();

    // Transform scroll to background opacity
    const bgOpacity = useTransform(scrollY, [0, 100], [0, 1]);

    useMotionValueEvent(scrollY, "change", (latest) => {
        // Hide/show navbar on scroll
        if (latest > lastScrollY.current && latest > 100) {
            setVisible(false);
        } else {
            setVisible(true);
        }
        lastScrollY.current = latest;
        
        // Track if page has scrolled for visual changes
        setHasScrolled(latest > 50);
    });

    return (
        <motion.header
            variants={{
                visible: { y: 0 },
                hidden: { y: "-100%" },
            }}
            animate={visible ? "visible" : "hidden"}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-4"
        >
            <div className="container mx-auto">
                <motion.div 
                    className={cn(
                        "relative rounded-2xl border backdrop-blur-lg shadow-lg px-6 py-3 flex items-center justify-between transition-all duration-300",
                        hasScrolled 
                            ? "border-border/50 bg-background/80 dark:bg-background/80" 
                            : "border-white/10 dark:border-white/10 bg-white/5 dark:bg-white/5"
                    )}
                >
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2 group">
                        <motion.div 
                            className="p-2 rounded-lg bg-gradient-to-br from-blue-500 to-violet-600"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                            <Rocket className="h-5 w-5 text-white" />
                        </motion.div>
                        <span className="text-xl font-bold font-heading bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-400 dark:from-blue-400 dark:to-violet-400">
                            Autohub
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center space-x-1">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="relative px-4 py-2 text-sm font-medium transition-colors"
                            >
                                <span className={cn(
                                    "relative z-10 transition-colors",
                                    pathname === item.href 
                                        ? "text-primary" 
                                        : "text-muted-foreground hover:text-foreground"
                                )}>
                                    {item.name}
                                </span>
                                {pathname === item.href && (
                                    <motion.div
                                        layoutId="navbar-active"
                                        className="absolute inset-0 rounded-lg bg-primary/10 dark:bg-white/10"
                                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                    />
                                )}
                            </Link>
                        ))}
                    </nav>

                    {/* Actions */}
                    <div className="hidden md:flex items-center space-x-3">
                        <Button variant="ghost" size="sm" asChild>
                            <Link href="/contact">Contact</Link>
                        </Button>
                        <Button variant="gradient" size="sm" asChild>
                            <Link href="/contact">Get Started</Link>
                        </Button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="flex md:hidden items-center">
                        <motion.button
                            className="p-2 text-muted-foreground rounded-lg hover:bg-white/5 dark:hover:bg-white/5"
                            onClick={() => setIsOpen(!isOpen)}
                            whileTap={{ scale: 0.95 }}
                        >
                            <AnimatePresence mode="wait">
                                {isOpen ? (
                                    <motion.div
                                        key="close"
                                        initial={{ rotate: -90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: 90, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <X className="h-5 w-5" />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="menu"
                                        initial={{ rotate: 90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: -90, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <Menu className="h-5 w-5" />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.button>
                    </div>
                </motion.div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0, y: -10 }}
                        animate={{ opacity: 1, height: "auto", y: 0 }}
                        exit={{ opacity: 0, height: 0, y: -10 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="md:hidden overflow-hidden mt-2 rounded-2xl border border-border/50 bg-background/95 backdrop-blur-xl shadow-xl mx-auto container"
                    >
                        <nav className="flex flex-col p-4 space-y-1">
                            {navItems.map((item, index) => (
                                <motion.div
                                    key={item.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                >
                                    <Link
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className={cn(
                                            "block px-4 py-3 text-sm font-medium rounded-lg transition-colors",
                                            pathname === item.href
                                                ? "bg-primary/10 text-primary"
                                                : "hover:bg-muted"
                                        )}
                                    >
                                        {item.name}
                                    </Link>
                                </motion.div>
                            ))}
                            <div className="h-px bg-border my-2" />
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: navItems.length * 0.05 }}
                                className="space-y-2 pt-2"
                            >
                                <Button variant="outline" className="w-full justify-center" asChild>
                                    <Link href="/contact" onClick={() => setIsOpen(false)}>Contact Support</Link>
                                </Button>
                                <Button variant="gradient" className="w-full" asChild>
                                    <Link href="/contact" onClick={() => setIsOpen(false)}>Get Started</Link>
                                </Button>
                            </motion.div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
