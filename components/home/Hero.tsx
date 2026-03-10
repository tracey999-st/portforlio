"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import AnimatedBackground from "./AnimatedBackground";
import { personalInfo, socialLinks } from "@/lib/data";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <AnimatedBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-muted-foreground mb-4"
          >
            Hello, I&apos;m
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-4"
          >
            <span className="text-gradient">{personalInfo.name}</span>
          </motion.h1>

          {/* Title */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-2xl md:text-3xl text-muted-foreground mb-6"
          >
            {personalInfo.title}
          </motion.p>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
          >
            {personalInfo.bio}
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex justify-center gap-4 mb-12"
          >
            {socialLinks.map((link) => {
              const Icon = iconMap[link.icon] || Mail;
              return (
                <Link
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-110"
                  aria-label={link.name}
                >
                  <Icon className="w-5 h-5" />
                </Link>
              );
            })}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="#projects"
              className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
            >
              View My Work
            </Link>
            <Link
              href="#contact"
              className="px-8 py-3 rounded-full border border-border hover:bg-secondary transition-colors font-medium"
            >
              Get In Touch
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown className="w-6 h-6 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
