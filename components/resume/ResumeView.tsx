"use client";

import { motion } from "framer-motion";
import { Download, FileText, Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { personalInfo, experiences, skills } from "@/lib/data";

export default function ResumeView() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Resume Preview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-card border border-border rounded-2xl overflow-hidden"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white">
          <h1 className="text-3xl font-bold mb-2">{personalInfo.name}</h1>
          <p className="text-lg opacity-90 mb-4">{personalInfo.title}</p>
          <div className="flex flex-wrap gap-4 text-sm opacity-80">
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              {personalInfo.location}
            </span>
            <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-1 hover:opacity-100">
              <Mail className="w-4 h-4" />
              {personalInfo.email}
            </a>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:opacity-100">
              <Github className="w-4 h-4" />
              GitHub
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:opacity-100">
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 space-y-8">
          {/* Summary */}
          <section>
            <h2 className="text-lg font-semibold mb-3 pb-2 border-b border-border">Summary</h2>
            <p className="text-muted-foreground">{personalInfo.bio}</p>
          </section>

          {/* Skills */}
          <section>
            <h2 className="text-lg font-semibold mb-3 pb-2 border-b border-border">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {skills.map((skill) => (
                <div key={skill.name} className="flex items-center justify-between">
                  <span className="text-sm">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
              ))}
            </div>
          </section>

          {/* Experience */}
          <section>
            <h2 className="text-lg font-semibold mb-3 pb-2 border-b border-border">Experience</h2>
            <div className="space-y-6">
              {experiences.map((exp) => (
                <div key={exp.id}>
                  <div className="flex justify-between items-start mb-1">
                    <div>
                      <h3 className="font-medium">{exp.title}</h3>
                      <p className="text-sm text-muted-foreground">{exp.organization}</p>
                    </div>
                    <span className="text-sm text-muted-foreground">{exp.date}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{exp.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </motion.div>

      {/* Download Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="mt-8 flex justify-center"
      >
        <a
          href="/resume.pdf"
          download
          className="flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
        >
          <Download className="w-5 h-5" />
          Download Resume
        </a>
      </motion.div>

      <p className="text-center text-muted-foreground text-sm mt-4">
        Or view my{" "}
        <a href="#experience" className="text-primary hover:underline">
          detailed experience timeline
        </a>
      </p>
    </div>
  );
}
