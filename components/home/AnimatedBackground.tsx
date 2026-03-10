"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function AnimatedBackground() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradient orbs - always colorful regardless of theme */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[10%] -left-20 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-blue-500/40 via-cyan-400/30 to-transparent blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          x: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[10%] -right-20 w-[500px] h-[500px] rounded-full bg-gradient-to-bl from-purple-500/40 via-pink-400/30 to-transparent blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[30%] left-[20%] w-[450px] h-[450px] rounded-full bg-gradient-to-tr from-cyan-400/30 via-blue-500/20 to-transparent blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.1, 0.9, 1.1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[30%] right-[20%] w-[350px] h-[350px] rounded-full bg-gradient-to-tl from-pink-500/30 via-rose-400/20 to-transparent blur-3xl"
      />

      {/* Animated floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.sin(i) * 50, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 1.5,
          }}
          className={`absolute w-2 h-2 rounded-full ${
            i % 3 === 0
              ? "bg-blue-400/60"
              : i % 3 === 1
              ? "bg-purple-400/60"
              : "bg-pink-400/60"
          }`}
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
        />
      ))}

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.02]" />
    </div>
  );
}
