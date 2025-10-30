"use client"

import Link from "next/link"
import { Mail, MessageCircle, Linkedin, Github } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-card/30">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-balance">Let's Work Together</h2>
          <p className="text-lg text-muted-foreground">
            I'm always interested in hearing about new projects and opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
          <Link
            href="https://wa.me/212628968780"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-6 py-4 bg-accent text-accent-foreground rounded-lg hover:opacity-90 transition-opacity font-medium"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp
          </Link>
          <Link
            href="mailto:contact@example.com"
            className="flex items-center justify-center gap-3 px-6 py-4 border border-accent text-accent rounded-lg hover:bg-accent/10 transition-colors font-medium"
          >
            <Mail className="w-5 h-5" />
            Email
          </Link>
        </div>

        <div className="flex justify-center gap-6 pt-8">
          <Link
            href="https://github.com/Bassir-Elhoussein"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-accent transition-colors"
          >
            <Github className="w-6 h-6" />
          </Link>
          <Link
            href="https://linkedin.com/in/bassir-el-houssein/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-accent transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </Link>
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

        <div className="pt-8 border-t border-border text-muted-foreground text-sm">
          <p>© 2025 Bassir El Houssein. All rights reserved.</p>
        </div>
      </div>
    </section>
  )
}
