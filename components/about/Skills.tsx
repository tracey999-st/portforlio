"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";

export default function Skills() {
  const categories = ["frontend", "backend", "devops"] as const;

  // Normalize category to lowercase for comparison
  const getCategoryKey = (cat: string) => cat.toLowerCase();

  const categoryLabels: Record<string, string> = {
    frontend: "Frontend",
    backend: "Backend",
    devops: "DevOps",
  };

  return (
    <div className="space-y-12">
      {categories.map((category, categoryIndex) => (
        <motion.div
          key={category}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
        >
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary" />
            {categoryLabels[category]}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skills
              .filter((skill) => getCategoryKey(skill.category) === category)
              .map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="space-y-2"
                >
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 + index * 0.05 }}
                      className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
