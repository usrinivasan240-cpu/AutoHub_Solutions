"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, MapPin, Phone, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { MagneticButton } from "@/components/motion/magnetic-button";
import { cn } from "@/lib/utils";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  project: z.string().min(10, "Please provide at least 10 characters about your project"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    description: "autohubsolution777@gmail.com",
    color: "blue",
    gradient: "from-blue-500/20 to-cyan-500/20"
  },
  {
    icon: Phone,
    title: "Call Us",
    description: "+91 9940918442",
    color: "violet",
    gradient: "from-violet-500/20 to-purple-500/20"
  },
  {
    icon: MapPin,
    title: "Visit Us",
    description: "Trichy, Tamil Nadu",
    color: "cyan",
    gradient: "from-cyan-500/20 to-teal-500/20"
  },
  {
    title: "Working Hours",
    description: "Everyday 6 PM – 12 AM",
    color: "cyan",
    gradient: "from-cyan-500/20 to-teal-500/20",
    customIcon: true
  }
];

export function ContactContent() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus("success");
        reset();
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 md:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Contact Info */}
        <div className="space-y-8">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">
            Let&apos;s Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-500">Amazing</span> Together
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Have a project in mind? We'd love to hear from you. Get in touch and let's discuss how we can help bring your vision to life.
          </p>

          <div className="space-y-4 pt-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-4 group"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.div
                  className={`w-12 h-12 rounded-full bg-gradient-to-br ${method.gradient} flex items-center justify-center flex-shrink-0 ${method.customIcon ? 'bg-gradient-to-br from-cyan-500/20 to-teal-500/20' : ''}`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  {method.icon && !method.customIcon && <method.icon className={`h-6 w-6 text-${method.color}-400`} />}
                  {method.customIcon && <span className="text-xl">🕐</span>}
                </motion.div>
                <div>
                  <h3 className="text-lg font-bold group-hover:text-primary transition-colors">{method.title}</h3>
                  <p className="text-muted-foreground">{method.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <motion.div
          className="rounded-3xl border border-border/50 dark:border-white/10 bg-card/50 dark:bg-white/5 p-8 md:p-10 backdrop-blur-md"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold font-heading mb-6">Send us a Message</h2>
          
          {submitStatus === "success" && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center gap-2 text-green-600"
            >
              <CheckCircle2 className="h-5 w-5" />
              <span>Thank you! We&apos;ll get back to you soon.</span>
            </motion.div>
          )}

          {submitStatus === "error" && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center gap-2 text-red-600"
            >
              <AlertCircle className="h-5 w-5" />
              <span>Something went wrong. Please try again.</span>
            </motion.div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                Full Name <span className="text-red-500">*</span>
              </label>
              <Input
                id="name"
                type="text"
                placeholder="John Doe"
                autoComplete="name"
                className={cn(
                  "bg-muted/50 dark:bg-black/20 border-border/50 dark:border-white/10 focus:border-primary/50 transition-colors",
                  errors.name && "border-red-500 focus:border-red-500"
                )}
                aria-invalid={errors.name ? "true" : "false"}
                aria-describedby={errors.name ? "name-error" : undefined}
                {...register("name")}
              />
              {errors.name && (
                <p id="name-error" className="text-sm text-red-500">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email Address <span className="text-red-500">*</span>
              </label>
              <Input
                id="email"
                type="email"
                placeholder="john@example.com"
                className={cn(
                  "bg-muted/50 dark:bg-black/20 border-border/50 dark:border-white/10 focus:border-primary/50 transition-colors",
                  errors.email && "border-red-500 focus:border-red-500"
                )}
                aria-invalid={errors.email ? "true" : "false"}
                aria-describedby={errors.email ? "email-error" : undefined}
                spellCheck={false}
                autoComplete="email"
                {...register("email")}
              />
              {errors.email && (
                <p id="email-error" className="text-sm text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium">
                Phone Number (Optional)
              </label>
                <Input
                id="phone"
                type="tel"
                inputMode="tel"
                placeholder="+91 XXXXX XXXXX"
                autoComplete="tel"
                className="bg-muted/50 dark:bg-black/20 border-border/50 dark:border-white/10 focus:border-primary/50 transition-colors"
                {...register("phone")}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="project" className="text-sm font-medium">
                Project Details <span className="text-red-500">*</span>
              </label>
              <textarea
                id="project"
                rows={4}
                className={cn(
                  "flex min-h-[120px] w-full rounded-md border bg-muted/50 dark:bg-black/20 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 focus:border-primary/50 transition-colors resize-none",
                  errors.project ? "border-red-500 focus:border-red-500" : "border-border/50 dark:border-white/10"
                )}
                placeholder="Tell us about your project requirements..."
                aria-invalid={errors.project ? "true" : "false"}
                aria-describedby={errors.project ? "project-error" : undefined}
                {...register("project")}
              />
              {errors.project && (
                <p id="project-error" className="text-sm text-red-500">
                  {errors.project.message}
                </p>
              )}
            </div>

            <MagneticButton strength={0.1} className="w-full">
              <Button
                type="submit"
                variant="gradient"
                className="w-full py-6 text-base group"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending…
                  </>
                ) : (
                  <>
                    Send Message
                    <motion.span
                      className="ml-2"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <Send className="h-4 w-4" />
                    </motion.span>
                  </>
                )}
              </Button>
            </MagneticButton>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
