"use client"

const skillCategories = [
{
  category: "Backend",
  skills: [
    "Spring Boot",
    "Spring Security",
    "Spring MVC",
    "Hibernate",
    "REST APIs",
    "JEE",
    "Microservices",
    "Maven",
    "SOAP",
    "SOA",
    "Design Patterns",
    "Workflow (BPM)",
    "ERP",
    "Web Services",
    "MinIO",
  ],
},
{
  category: "Frontend",
  skills: [
    "Next.js",
    "React.js",
    "Angular",
    "TypeScript",
    "HTML5",
    "CSS3",
    "JavaScript",
    "Bootstrap",
    "Tailwind CSS",
    "AdminLTE",
    "Formik",
    "MUI",
    "Node.js",
  ],
},
{
  category: "DevOps & Tools",
  skills: [
    "Docker",
    "Docker Compose",
    "Kubernetes",
    "Minikube",
    "Kafka",
    "Git",
    "GitLab",
    "CI/CD",
    "PostgreSQL",
    "MongoDB",
    "MySQL",
    "Oracle 11g",
    "Swagger",
    "Postman",
    "JUnit",
    "IntelliJ IDEA",
    "VSCode",
    "Eclipse",
    "SoapUI",
    "CodeBlocks",
    "Azure",
    "MS Project",
  ],
}

]

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Technical Skills</h2>
        <p className="text-muted-foreground text-lg mb-12">
          Technologies and tools I work with to build robust applications
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="space-y-4 p-6 bg-card border border-border rounded-xl hover:border-accent/50 transition-colors"
            >
              <h3 className="text-xl font-bold text-accent">{category.category}</h3>
              <div className="space-y-2">
                {category.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
