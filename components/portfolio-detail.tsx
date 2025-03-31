'use client';

import { AnimatedText } from "@/components/animated-text";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { portfolioData, PortfolioItem } from "@/data/portfolioData";
import { TechnologyPartners } from "@/components/technology-partners";

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
  project: PortfolioItem;
}

export function PortfolioDetail({ project }: PortfolioDetailProps) {
  const isDigitalTwin = project.title === "Digital Twin Solutions";

  return (
    <>
      {/* Hero Section */}
      <motion.section 
        className="relative h-[60vh] flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 z-0">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="container mx-auto px-4 text-center text-white relative z-10">
          <AnimatedText
            text={project.title}
            className="text-4xl md:text-6xl font-bold mb-4"
            delay={0.2}
          />
          <AnimatedText
            text={project.description}
            className="text-xl md:text-2xl"
            delay={0.4}
          />
        </div>
      </motion.section>

      {isDigitalTwin && <TechnologyPartners />}

      {/* Content Section */}
      <motion.section 
        className="py-20 bg-background"
        {...fadeInUp}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <AnimatedText
              text="Project Overview"
              className="text-3xl font-bold mb-8"
            />
            <p className="text-lg text-muted-foreground mb-12">
              {project.longDescription}
            </p>

            <div className="grid md:grid-cols-2 gap-12">
              <motion.div {...fadeInUp}>
                <h3 className="text-2xl font-semibold mb-6">Key Features</h3>
                <ul className="space-y-4">
                  {project.features.map((feature, index) => (
                    <motion.li 
                      key={index} 
                      className="flex items-start group"
                      whileHover={{ x: 5 }}
                    >
                      <span className="text-primary mr-2 group-hover:scale-110 transition-transform">•</span>
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div {...fadeInUp}>
                <h3 className="text-2xl font-semibold mb-6">Technologies Used</h3>
                <ul className="space-y-4">
                  {project.technologies.map((tech, index) => (
                    <motion.li 
                      key={index} 
                      className="flex items-start group"
                      whileHover={{ x: 5 }}
                    >
                      <span className="text-primary mr-2 group-hover:scale-110 transition-transform">•</span>
                      {tech}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Gallery Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="mt-16"
      >
        <h3 className="text-2xl font-bold mb-8">Project Gallery</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {project.gallery.map((image, index) => (
            <div key={index} className="relative aspect-[16/9]">
              <Image
                src={image.image}
                alt={image.title}
                fill
                className="object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center p-6">
                <div className="text-center">
                  <h4 className="text-xl font-semibold text-white mb-2">{image.title}</h4>
                  <p className="text-white/90">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Testimonials Section */}
      <motion.section 
        className="py-20 bg-background"
        {...fadeInUp}
      >
        <div className="container mx-auto px-4">
          <AnimatedText
            text="Client Testimonials"
            className="text-3xl font-bold text-center mb-16"
          />
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {project.testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-muted p-6 rounded-lg shadow-lg"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-lg mb-4 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}, {testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Related Projects Section */}
      <motion.section 
        className="py-20 bg-muted"
        {...fadeInUp}
      >
        <div className="container mx-auto px-4">
          <AnimatedText
            text="Related Projects"
            className="text-3xl font-bold text-center mb-16"
          />
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {project.relatedProjects.map((slug) => {
              const relatedProject = portfolioData[slug as keyof typeof portfolioData];
              return (
                <Link 
                  key={slug} 
                  href={`/portfolio/${slug}`}
                  className="group"
                >
                  <motion.div
                    className="relative aspect-[4/3] overflow-hidden rounded-lg"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
                  >
                    <Image
                      src={relatedProject.image}
                      alt={relatedProject.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-white text-center p-6">
                        <h3 className="text-xl font-semibold mb-2">{relatedProject.title}</h3>
                        <p className="text-sm">{relatedProject.description}</p>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="py-20 bg-background"
        {...fadeInUp}
      >
        <div className="container mx-auto px-4 text-center">
          <AnimatedText
            text="Ready to Start Your Project?"
            className="text-3xl font-bold mb-8"
          />
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss how we can help bring your vision to life.
          </p>
          <motion.a
            href="/contact"
            className="inline-block px-8 py-4 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.a>
        </div>
      </motion.section>
    </>
  );
} 