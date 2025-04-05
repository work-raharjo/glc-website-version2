"use client";

import { useLanguage } from "@/lib/language-context";
import { portfolioData } from "@/data/portfolioData";
import Image from "next/image";
import Link from "next/link";

export default function PortfolioPage() {
  const { t, language } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">{t('portfolio.title')}</h1>
        <p className="text-xl text-muted-foreground">{t('portfolio.subtitle')}</p>
      </div>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.entries(portfolioData).map(([slug, project]) => (
          <Link
            key={slug}
            href={`/portfolio/${slug}`}
            className="group"
          >
            <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
              <Image
                src={project.image}
                alt={project.title[language]}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-semibold">{t('portfolio.viewProject')}</span>
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
              {project.title[language]}
            </h3>
            <p className="text-muted-foreground">
              {project.description[language]}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
} 