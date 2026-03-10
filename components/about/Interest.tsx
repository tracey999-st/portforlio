"use client";

import { motion } from "framer-motion";
import { interests } from "@/lib/data";

export default function Interest() {
  return (
    <div className="flex flex-wrap gap-3">
      {interests.map((interest, index) => (
        <motion.span
          key={interest}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
          whileHover={{ scale: 1.05 }}
          className="px-4 py-2 rounded-full bg-secondary text-sm font-medium cursor-default hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          {interest}
        </motion.span>
      ))}
    </div>
  );
}
