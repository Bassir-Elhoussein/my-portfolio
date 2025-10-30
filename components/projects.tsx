"use client"

import Link from "next/link"
import { ExternalLink } from "lucide-react"

const projects = [
 {
  title: "Skill Matrix",
  description: "Internal enterprise application for managing competencies, trainings, certifications, and generating analytical reports. Includes secure authentication, mail services, and performance monitoring.",
  tech: ["Next.js", "Spring Boot", "Spring Security", "Minikube", "SonarQube", "Flyway", "MinIO", "Mail Services"],
  link: "#",
},
  {
    title: "ScootMaroc",
    description: "Football networking platform connecting players and teams across Morocco",
    tech: ["Spring Boot", "React.js", "PostgreSQL", "Docker"],
    link: "#",
  },
  {
  title: "YoAtelier",
  description: "E-commerce platform for an architecture company, showcasing and selling interior design and construction products online.",
  tech: ["Next.js", "Tailwind CSS", "Vercel", "Node.js"],
  link: "https://yoatelier-store.vercel.app",
},
  {
    title: "HR Nexus",
    description: "Comprehensive Human Resources management system for enterprise organizations",
    tech: ["JEE", "Maven", "MySQL", "Swing"],
    link: "#",
  },
  {
    title: "LabConnect",
    description: "Research collaboration platform enabling seamless team communication and project management",
    tech: ["Spring Boot", "Angular", "Kafka", "MongoDB"],
    link: "#",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Featured Projects</h2>
        <p className="text-muted-foreground text-lg mb-12">
          A selection of my recent work showcasing full-stack development expertise
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Link
              key={index}
              href={project.link}
              className="group bg-card border border-border rounded-xl p-6 hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/10"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                </div>

                <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 pt-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
