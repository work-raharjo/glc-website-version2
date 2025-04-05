'use client';

import { AnimatedText } from "@/components/animated-text";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { portfolioData, PortfolioItem } from "@/data/portfolioData";
import { TechnologyPartners } from "@/components/technology-partners";
import { useLanguage } from "@/lib/language-context";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const galleryItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      opacity: { duration: 0.5, delay: i * 0.1 },
      y: { duration: 0.5, delay: i * 0.1 }
    }
  }),
  hover: {
    scale: 1.02,
    transition: {
      scale: { duration: 0.3, type: "spring", stiffness: 300 }
    }
  }
};

interface PortfolioDetailProps {
  slug: string;
}

export function PortfolioDetail({ slug }: PortfolioDetailProps) {
  const { t, language } = useLanguage();
  const project = portfolioData[slug];

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold">{t('portfolio.notFound')}</h1>
        <p className="mt-4">{t('portfolio.notFoundDesc')}</p>
        <Link href="/portfolio">
          <Button className="mt-6">{t('portfolio.backToPortfolio')}</Button>
        </Link>
      </div>
    );
  }

  const isDigitalTwin = project.title[language] === t('portfolio.digitalTwin.title');

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="relative h-[400px] w-full rounded-lg overflow-hidden mb-8">
        <Image
          src={project.image}
          alt={project.title[language]}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Project Title and Description */}
      <h1 className="text-4xl font-bold mb-4">{project.title[language]}</h1>
      <p className="text-xl text-muted-foreground mb-8">
        {project.description[language]}
      </p>

      {/* Overview */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">{t('portfolio.overview')}</h2>
        <p className="text-lg leading-relaxed">
          {project.longDescription[language]}
        </p>
      </div>

      {/* Key Features */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">{t('portfolio.features')}</h2>
        <ul className="list-disc list-inside space-y-2">
          {project.features.map((feature, index) => (
            <li key={index} className="text-lg">
              {feature[language]}
            </li>
          ))}
        </ul>
      </div>

      {/* Technologies */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">{t('portfolio.technologies')}</h2>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Gallery */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">{t('portfolio.gallery')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {project.gallery.map((item, index) => (
            <div key={index} className="space-y-2">
              <div className="relative h-48 w-full rounded-lg overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title[language]}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-semibold">{item.title[language]}</h3>
              <p className="text-sm text-muted-foreground">
                {item.description[language]}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">{t('portfolio.testimonials')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {project.testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-card border"
            >
              <p className="text-lg mb-4 italic">"{testimonial.quote[language]}"</p>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role[language]} - {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Related Projects */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">{t('portfolio.relatedProjects')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {project.relatedProjects.map((relatedSlug) => {
            const relatedProject = portfolioData[relatedSlug];
            if (!relatedProject) return null;
            
            return (
              <Link
                key={relatedSlug}
                href={`/portfolio/${relatedSlug}`}
                className="group"
              >
                <div className="relative h-48 w-full rounded-lg overflow-hidden mb-2">
                  <Image
                    src={relatedProject.image}
                    alt={relatedProject.title[language]}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <h3 className="font-semibold group-hover:text-primary">
                  {relatedProject.title[language]}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {relatedProject.description[language]}
                </p>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center py-12 bg-card rounded-lg border">
        <h2 className="text-3xl font-bold mb-4">{t('portfolio.ctaTitle')}</h2>
        <p className="text-lg text-muted-foreground mb-6">
          {t('portfolio.ctaDescription')}
        </p>
        <Link href="/contact">
          <Button size="lg">{t('portfolio.contactUs')}</Button>
        </Link>
      </div>

      {isDigitalTwin && <TechnologyPartners />}
    </div>
  );
} 