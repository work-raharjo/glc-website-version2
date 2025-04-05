"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/lib/language-context"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { AnimatedText } from "@/components/animated-text"
import { PortfolioGrid } from "@/components/portfolio-grid"
import { ProcessSection } from "@/components/process-section"
import { ClientLogos } from "@/components/client-logos"
import { TechPartners } from "@/components/tech-partners"
import Link from "next/link"

const portfolioItems = [
  {
    title: "Satellite Communication",
    description: "High-speed internet access anywhere using Starlink technology",
    image: "https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?auto=format&fit=crop&q=80",
    link: "/portfolio/starlink"
  },
  {
    title: "Digital Twin Solutions",
    description: "Advanced digital twin technology for infrastructure monitoring",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80",
    link: "/portfolio/digital-twin"
  },
  {
    title: "Data Center Security",
    description: "Comprehensive security systems for modern data centers",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80",
    link: "/portfolio/security"
  },
  {
    title: "Smart Infrastructure",
    description: "Intelligent solutions for sustainable development",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80",
    link: "/portfolio/infrastructure"
  }
];

const processSteps = [
  {
    title: "Design",
    description: "Creating beautiful and functional designs",
    icon: "/images/icons/design-icon.svg"
  },
  {
    title: "Develop",
    description: "Building robust and scalable solutions",
    icon: "/images/icons/develop-icon.svg"
  },
  {
    title: "Engage",
    description: "Connecting with your audience",
    icon: "/images/icons/engage-icon.svg"
  },
  {
    title: "Expand",
    description: "Growing your digital presence",
    icon: "/images/icons/expand-icon.svg"
  }
];

export default function Home() {
  const { t } = useLanguage()

  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-background">
        <div className="container mx-auto px-4 text-center">
          <AnimatedText
            text={t('hero.title')}
            className="text-5xl md:text-7xl font-bold mb-6"
            delay={0.2}
          />
          <AnimatedText
            text={t('hero.subtitle')}
            className="text-xl text-muted-foreground"
            delay={0.4}
          />
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedText
            text={t('portfolio.title')}
            className="text-4xl font-bold text-center mb-16"
          />
          <PortfolioGrid items={portfolioItems} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <AnimatedText
            text={t('nav.about')}
            className="text-4xl font-bold text-center mb-16"
          />
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-muted-foreground mb-8">
              {t('services.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedText
            text="Our Featured Clients"
            className="text-4xl font-bold text-center mb-16"
          />
          <ClientLogos />
        </div>
      </section>

      {/* Technology Partners Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <AnimatedText
            text="Technology Partners"
            className="text-4xl font-bold text-center mb-16"
          />
          <TechPartners />
        </div>
      </section>

      {/* Process Section */}
      <ProcessSection steps={processSteps} />

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <AnimatedText
            text={t('contact.title')}
            className="text-4xl font-bold mb-8"
          />
          <p className="text-xl text-muted-foreground mb-8">
            {t('contact.subtitle')}
          </p>
          <Link 
            href="/contact"
            className="inline-block px-8 py-4 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
          >
            {t('nav.contact')}
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}

