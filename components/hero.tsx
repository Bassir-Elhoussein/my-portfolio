"use client"

import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export function Hero() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center pt-16 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold text-balance">Bassir El Houssein</h1>
            <p className="text-2xl text-accent font-semibold">Full Stack Software Engineer</p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Specialized in Java, Spring Boot, and Next.js. I build scalable, elegant software solutions that solve
              real-world problems.
            </p>
          </div>

          <div className="flex gap-4 flex-wrap">
            <Link
              href="https://github.com/Bassir-Elhoussein"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-lg hover:opacity-90 transition-opacity font-medium"
            >
              <Github className="w-5 h-5" />
              GitHub
            </Link>
            <Link
              href="https://linkedin.com/in/bassir-el-houssein/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-accent text-accent rounded-lg hover:bg-accent/10 transition-colors font-medium"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </Link>
            <Link
              href="https://wa.me/212628968780"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-accent text-accent rounded-lg hover:bg-accent/10 transition-colors font-medium"
            >
              <Mail className="w-5 h-5" />
              WhatsApp
            </Link>
          </div>

          <div className="flex gap-6 pt-4">
            <Link
              href="https://www.upwork.com/freelancers/~013a80c39b8156b402?viewMode=1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors text-sm font-medium"
            >
              Upwork
            </Link>
            <Link
              href="https://www.fiverr.com/unfazed_7?public_mode=true"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors text-sm font-medium"
            >
              Fiverr
            </Link>
          </div>
        </div>

        <div className="hidden md:flex items-center justify-center">
          <div className="relative w-80 h-80">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent rounded-2xl blur-3xl"></div>
            <div className="relative bg-card border border-border rounded-2xl p-8 flex items-center justify-center h-full">
              <div className="text-center space-y-4">
                <div className="text-6xl font-bold text-accent">{"<>"}</div>
                <p className="text-muted-foreground">Full Stack Engineer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
