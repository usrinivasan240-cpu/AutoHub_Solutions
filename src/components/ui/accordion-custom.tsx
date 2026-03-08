"use client"

import * as React from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

// Simple Accordion implementation without radix-ui heavy primitives to save setup time, or use manual state
// Actually, let's build a robust manual one using generic props.

interface AccordionItemProps {
    title: string;
    children: React.ReactNode;
    isOpen: boolean;
    onToggle: () => void;
}

const AccordionItem = ({ title, children, isOpen, onToggle }: AccordionItemProps) => {
    return (
        <div className="border-b border-white/10 last:border-0">
            <button
                onClick={onToggle}
                className="flex flex-1 items-center justify-between py-6 w-full text-left font-medium transition-all hover:text-primary [&[data-state=open]>svg]:rotate-180"
            >
                <span className="text-lg">{title}</span>
                <ChevronDown
                    className={cn(
                        "h-5 w-5 shrink-0 transition-transform duration-200 text-muted-foreground",
                        isOpen && "rotate-180 text-primary"
                    )}
                />
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <div className="pb-6 pt-0 text-muted-foreground leading-relaxed">
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export { AccordionItem }
