"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/lib/language-context"
import { LanguageSwitcher } from "@/components/language-switcher"

export default function Header() {
  const pathname = usePathname()
  const { t } = useLanguage()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          GLC
        </Link>
        <div className="flex items-center space-x-4">
          <LanguageSwitcher />
          <Link
            href="/contact"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              pathname === "/contact"
                ? "text-primary"
                : "text-muted-foreground"
            )}
          >
            {t('nav.contact')}
          </Link>
        </div>
      </nav>
    </header>
  )
}

