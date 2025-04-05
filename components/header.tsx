"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          GLC
        </Link>
        <Link
          href="/contact"
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            pathname === "/contact"
              ? "text-primary"
              : "text-muted-foreground"
          )}
        >
          Contact Us
        </Link>
      </nav>
    </header>
  )
}

