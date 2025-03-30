"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

// Update the navItems array to be empty since we want to remove all navigation items
const navItems = []

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToElement = (elementId: string) => {
    if (mounted) {
      document.getElementById(elementId)?.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold tracking-tight">GLC</span>
          </Link>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={(e) => {
                if (item.href.startsWith("#")) {
                  e.preventDefault()
                  if (mounted) {
                    document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" })
                  }
                }
              }}
            >
              {item.name}
            </Link>
          ))}
          <Button onClick={() => scrollToElement("contact")}>
            Get in Touch
          </Button>
        </nav>

        {/* Mobile menu button */}
        <Button variant="ghost" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>

      {/* Mobile navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="container py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-sm font-medium transition-colors hover:text-primary"
                onClick={(e) => {
                  if (item.href.startsWith("#")) {
                    e.preventDefault()
                    setMobileMenuOpen(false)
                    if (mounted) {
                      document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" })
                    }
                  }
                }}
              >
                {item.name}
              </Link>
            ))}
            <Button
              className="w-full"
              onClick={() => {
                setMobileMenuOpen(false)
                scrollToElement("contact")
              }}
            >
              Get in Touch
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}

