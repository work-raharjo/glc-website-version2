"use client"

import { useLanguage } from "@/lib/language-context"
import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Linkedin, Instagram, CheckCircle, Youtube } from "lucide-react"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t bg-background">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="space-y-1">
              <Link href="/" className="text-2xl font-bold">
                GLC
              </Link>
              <p className="text-sm text-muted-foreground">PT Galactic Indonesia Perkasa</p>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">Infra & AI Ecosystem for Indonesia's Digital Future</p>
            <div className="flex items-center space-x-2 mt-4">
              <Link 
                href="https://instagram.com/sewastarlinkjakarta" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary flex items-center gap-1"
              >
                <Instagram className="h-5 w-5" />
                <span className="text-sm">@sewastarlinkjakarta</span>
                <CheckCircle className="h-4 w-4 text-blue-500" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-4">{t('services.title')}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  {t('services.digitalTwin.title')}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  {t('services.security.title')}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  {t('services.infrastructure.title')}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-4">Industries</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  Real Estate
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  Energy & Mining
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  Manufacturing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  Agriculture
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  Public Sector
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  Data Infrastructure
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  News
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  {t('nav.contact')}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} GLC - Infra & AI Ecosystem. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <div className="flex flex-col items-center">
                <Image
                  src="/images/iso27001.png"
                  alt="ISO 27001 Certification"
                  width={100}
                  height={50}
                  className="h-12 w-auto"
                />
                <span className="text-xs text-muted-foreground mt-1">ISO 27001</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

