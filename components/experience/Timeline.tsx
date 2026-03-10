"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Search, Award } from "lucide-react";
import { experiences } from "@/lib/data";
import { cn } from "@/lib/utils";

const typeIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  education: GraduationCap,
  教育: GraduationCap,
  internship: Briefcase,
  实习: Briefcase,
  research: Search,
  研究: Search,
};

const typeLabels: Record<string, string> = {
  education: "Education",
  教育: "Education",
  internship: "Internship",
  实习: "Internship",
  research: "Research",
  研究: "Research",
};

const typeColors: Record<string, string> = {
  education: "bg-blue-500/20 text-blue-500",
  教育: "bg-blue-500/20 text-blue-500",
  internship: "bg-green-500/20 text-green-500",
  实习: "bg-green-500/20 text-green-500",
  research: "bg-purple-500/20 text-purple-500",
  研究: "bg-purple-500/20 text-purple-500",
};

export default function Timeline() {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

      <div className="space-y-12">
        {experiences.map((experience, index) => {
          const Icon = typeIcons[experience.type as keyof typeof typeIcons];
          const isLeft = index % 2 === 0;

          return (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={cn(
                "relative flex items-center",
                isLeft ? "md:flex-row" : "md:flex-row-reverse"
              )}
            >
              {/* Dot on timeline */}
              <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary -translate-x-1/2 z-10">
                <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20" />
              </div>

              {/* Content */}
              <div
                className={cn(
                  "ml-12 md:ml-0 md:w-[calc(50%-2rem)]",
                  isLeft ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"
                )}
              >
                <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-colors">
                  {/* Type badge */}
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className={cn(
                        "px-3 py-1 text-xs font-medium rounded-full flex items-center gap-1",
                        typeColors[experience.type as keyof typeof typeColors]
                      )}
                    >
                      <Icon className="w-3 h-3" />
                      {typeLabels[experience.type as keyof typeof typeLabels]}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold mb-1">
                    {experience.title}
                  </h3>

                  {/* Organization */}
                  <p className="text-muted-foreground font-medium mb-2">
                    {experience.organization}
                  </p>

                  {/* Location & Date */}
                  <div className="flex flex-wrap gap-2 text-sm text-muted-foreground mb-3">
                    <span>{experience.location}</span>
                    <span>•</span>
                    <span>{experience.date}</span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-4">
                    {experience.description}
                  </p>

                  {/* Highlights */}
                  {experience.highlights && experience.highlights.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {experience.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="flex items-center gap-1 px-2 py-1 text-xs bg-secondary rounded-md"
                        >
                          <Award className="w-3 h-3 text-yellow-500" />
                          {highlight}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
