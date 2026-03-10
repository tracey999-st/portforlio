"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Code2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/lib/data";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group"
    >
      <div className="relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors">
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />

          {/* Featured badge */}
          {project.featured && (
            <span className="absolute top-4 left-4 px-3 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-full">
              Featured
            </span>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs font-medium bg-secondary rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-4">
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
            >
              <Github className="w-4 h-4" />
              Code
            </Link>
            {project.demo && (
              <Link
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Demo
              </Link>
            )}
            {!project.demo && (
              <span className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                <Code2 className="w-4 h-4" />
                Coming Soon
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
