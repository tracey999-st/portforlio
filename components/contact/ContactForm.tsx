"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Github, Linkedin, Mail, MapPin, CheckCircle } from "lucide-react";
import { personalInfo, socialLinks } from "@/lib/data";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
};

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* Contact Info */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        <div>
          <h2 className="text-3xl font-bold mb-4">Let&apos;s Connect</h2>
          <p className="text-muted-foreground">
            Have a project in mind or just want to chat? Feel free to reach out!
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-full bg-secondary">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="font-medium">Location</p>
              <p className="text-muted-foreground text-sm">{personalInfo.location}</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="p-3 rounded-full bg-secondary">
              <Mail className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="font-medium">Email</p>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-muted-foreground text-sm hover:text-primary transition-colors"
              >
                {personalInfo.email}
              </a>
            </div>
          </div>
        </div>

        <div>
          <p className="font-medium mb-3">Social Links</p>
          <div className="flex gap-3">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.icon] || Mail;
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={link.name}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>
      </motion.div>

      {/* Contact Form */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-card border border-border rounded-2xl p-8 text-center"
          >
            <div className="flex justify-center mb-4">
              <div className="p-4 rounded-full bg-green-500/20">
                <CheckCircle className="w-12 h-12 text-green-500" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
            <p className="text-muted-foreground">
              Thank you for reaching out. I&apos;ll get back to you soon.
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="Your name"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                placeholder="What's this about?"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                placeholder="Your message..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Send Message
                </>
              )}
            </button>
          </form>
        )}
      </motion.div>
    </div>
  );
}
