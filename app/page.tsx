import Hero from "@/components/home/Hero";
import Section from "@/components/ui/Section";
import Skills from "@/components/about/Skills";
import Interest from "@/components/about/Interest";
import ProjectCard from "@/components/projects/ProjectCard";
import Timeline from "@/components/experience/Timeline";
import ResumeView from "@/components/resume/ResumeView";
import ContactForm from "@/components/contact/ContactForm";
import { projects } from "@/lib/data";

export default function Home() {
  return (
    <div className="pt-16">
      {/* Home Section */}
      <Hero />

      {/* About Section */}
      <Section
        id="about"
        title="About Me"
        subtitle="Get to know me better"
        className="bg-card/30"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Introduction */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I&apos;m a passionate full-stack developer with a strong focus on building
              modern, performant web applications. With a background in computer science
              and years of hands-on experience, I specialize in creating seamless user
              experiences using cutting-edge technologies.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I&apos;m not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing knowledge with the
              developer community.
            </p>

            {/* Interests */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Interests</h3>
              <Interest />
            </div>
          </div>

          {/* Skills */}
          <div>
            <Skills />
          </div>
        </div>
      </Section>

      {/* Projects Section */}
      <Section
        id="projects"
        title="Projects"
        subtitle="Some of my recent work"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </Section>

      {/* Experience Section */}
      <Section
        id="experience"
        title="Experience"
        subtitle="My professional journey"
        className="bg-card/30"
      >
        <Timeline />
      </Section>

      {/* Resume Section */}
      <Section
        id="resume"
        title="Resume"
        subtitle="Download or view my resume"
      >
        <ResumeView />
      </Section>

      {/* Contact Section */}
      <Section
        id="contact"
        title="Contact"
        subtitle="Get in touch"
        className="bg-card/30"
      >
        <ContactForm />
      </Section>
    </div>
  );
}
