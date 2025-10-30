"use client"

import { useState } from "react"
import Link from "next/link"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="#" className="text-xl font-bold text-accent">
            Bassir El Houssein
          </Link>

          <div className="hidden md:flex gap-8">
            <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
            <Link href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
              Projects
            </Link>
            <Link href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">
              Skills
            </Link>
            <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-foreground">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link href="#about" className="block text-muted-foreground hover:text-foreground transition-colors py-2">
              About
            </Link>
            <Link href="#projects" className="block text-muted-foreground hover:text-foreground transition-colors py-2">
              Projects
            </Link>
            <Link href="#skills" className="block text-muted-foreground hover:text-foreground transition-colors py-2">
              Skills
            </Link>
            <Link href="#contact" className="block text-muted-foreground hover:text-foreground transition-colors py-2">
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
