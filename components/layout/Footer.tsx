"use client";

import Link from "next/link";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { personalInfo, socialLinks } from "@/lib/data";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  mail: Mail,
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gradient">{personalInfo.name}</h3>
            <p className="text-muted-foreground text-sm max-w-xs">
              {personalInfo.bio}
            </p>
            <p className="text-muted-foreground text-sm">
              {personalInfo.location}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {["About", "Projects", "Experience", "Resume", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((link) => {
                const Icon = iconMap[link.icon] || Mail;
                return (
                  <Link
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    aria-label={link.name}
                  >
                    <Icon className="w-5 h-5" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-center text-muted-foreground text-sm">
            &copy; {currentYear} {personalInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
