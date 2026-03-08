"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Rocket, Instagram, Mail, MapPin, Phone } from "lucide-react";

const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const socialLinks = [
    { iconComponent: <XIcon />, href: "https://x.com/AutohubBot", label: "X (Twitter)" },
    { icon: Instagram, href: "https://www.instagram.com/autohub_solution777", label: "Instagram" },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut" as const,
        },
    },
};

export function Footer() {
    return (
        <footer className="border-t border-border/50 dark:border-white/10 bg-muted/30 dark:bg-black/20 backdrop-blur-lg pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-8">
                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {/* Brand */}
                    <motion.div className="space-y-4" variants={itemVariants}>
                        <Link href="/" className="flex items-center space-x-2 group">
                            <motion.div 
                                className="p-2 rounded-lg bg-gradient-to-br from-blue-500 to-violet-600"
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                            >
                                <Rocket className="h-5 w-5 text-white" />
                            </motion.div>
                            <span className="text-xl font-bold font-heading bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-400">
                                Autohub
                            </span>
                        </Link>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Autohub Solution helps businesses, startups, and students scale faster with modern websites, mobile apps, custom software, and intelligent AI automation. Your growth, our innovation.
                        </p>
                        <div className="flex space-x-3">
                            {socialLinks.map((social, index) => (
                                <motion.div
                                    key={social.label}
                                    whileHover={{ scale: 1.2, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Link 
                                        href={social.href} 
                                        className="text-muted-foreground hover:text-primary transition-all duration-300 flex items-center justify-center"
                                        aria-label={social.label}
                                    >
                                        {social.iconComponent || (social.icon && <social.icon className="h-5 w-5" />)}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Services Links */}
                    <motion.div variants={itemVariants}>
                        <h3 className="font-heading font-semibold text-lg mb-4">Services</h3>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            {["Web Development", "Mobile Apps", "AI & Automation", "SEO & Growth"].map((item) => (
                                <li key={item}>
                                    <Link 
                                        href="/services" 
                                        className="hover:text-primary transition-colors inline-block hover:translate-x-1 duration-200"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Company Links */}
                    <motion.div variants={itemVariants}>
                        <h3 className="font-heading font-semibold text-lg mb-4">Company</h3>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            {[
                                { name: "About Us", href: "/about" },
                                { name: "Pricing", href: "/pricing" },
                                { name: "Blog", href: "/blog" },
                                { name: "FAQ", href: "/faq" },
                                { name: "Contact", href: "/contact" },
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link 
                                        href={item.href} 
                                        className="hover:text-primary transition-colors inline-block hover:translate-x-1 duration-200"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div variants={itemVariants}>
                        <h3 className="font-heading font-semibold text-lg mb-4">Contact</h3>
                        <ul className="space-y-4 text-sm text-muted-foreground">
                            <li>
                                <motion.a 
                                    href="mailto:autohubsolution777@gmail.com" 
                                    className="flex items-start space-x-3 group"
                                    whileHover={{ x: 3 }}
                                >
                                    <Mail className="h-5 w-5 text-primary mt-0.5 group-hover:scale-110 transition-transform" />
                                    <span className="group-hover:text-primary transition-colors">autohubsolution777@gmail.com</span>
                                </motion.a>
                            </li>
                            <li>
                                <motion.a 
                                    href="tel:+919940918442" 
                                    className="flex items-start space-x-3 group"
                                    whileHover={{ x: 3 }}
                                >
                                    <Phone className="h-5 w-5 text-primary mt-0.5 group-hover:scale-110 transition-transform" />
                                    <span className="group-hover:text-primary transition-colors">+91 9940918442</span>
                                </motion.a>
                            </li>
                            <li className="flex items-start space-x-3">
                                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                                <span>Trichy, Tamil Nadu</span>
                            </li>
                        </ul>
                    </motion.div>
                </motion.div>

                {/* Bottom bar */}
                <motion.div 
                    className="border-t border-border/50 dark:border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                >
                    <p>&copy; {new Date().getFullYear()} Autohub Solution. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="#" className="hover:text-foreground transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-foreground transition-colors">Terms of Service</Link>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
}
