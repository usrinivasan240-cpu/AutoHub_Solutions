"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown, MessageCircle, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import type { FAQ } from "@/types/data";

interface FAQContentProps {
  faqs: FAQ[];
}

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}

const AccordionItem = ({ title, children, isOpen, onToggle, index }: AccordionItemProps) => {
  return (
    <div className="border-b border-border/50 dark:border-white/10 last:border-0">
      <button
        onClick={onToggle}
        className="flex flex-1 items-center justify-between py-6 w-full text-left font-medium transition-all hover:text-primary [&[data-state=open]>svg]:rotate-180"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-4 pr-4">
          <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">
            {index + 1}
          </span>
          <span className="text-lg">{title}</span>
        </div>
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
            <div className="pb-6 pt-2 pl-12 text-muted-foreground leading-relaxed whitespace-pre-line">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export function FAQContent({ faqs }: FAQContentProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  return (
    <div className="container mx-auto px-4 md:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.div
          className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500/20 to-violet-500/20 mb-6"
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <HelpCircle className="h-8 w-8 text-primary" />
        </motion.div>
        <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">
          Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-500">Questions</span>
        </h1>
        <p className="text-lg text-muted-foreground">
          Everything you need to know about working with Autohub Solution. 
          Can't find the answer you're looking for? Contact us directly.
        </p>
      </div>

      {/* FAQ Accordion */}
      <motion.div
        ref={ref}
        className="max-w-3xl mx-auto bg-card/50 dark:bg-white/5 border border-border/50 dark:border-white/10 rounded-3xl p-8 backdrop-blur-md"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {faqs.map((faq, index) => (
          <motion.div key={index} variants={itemVariants}>
            <AccordionItem
              title={faq.question}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              index={index}
            >
              {faq.answer}
            </AccordionItem>
          </motion.div>
        ))}
      </motion.div>

      {/* Still Have Questions CTA */}
      <motion.div
        className="max-w-2xl mx-auto mt-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        <div className="p-8 rounded-3xl border border-border/50 dark:border-white/10 bg-gradient-to-r from-blue-500/10 to-violet-500/10">
          <MessageCircle className="h-12 w-12 text-primary mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">Still Have Questions?</h3>
          <p className="text-muted-foreground mb-6">
            Can't find the answer you're looking for? Our team is here to help you with any questions about our services.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500 text-white font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5"
            >
              Contact Us
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-border dark:border-white/10 hover:bg-muted transition-all duration-300"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
