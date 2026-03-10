"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export default function Section({
  id,
  title,
  subtitle,
  children,
  className,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("py-24 md:py-32", className)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Section Content */}
        {children}
      </div>
    </section>
  );
}
