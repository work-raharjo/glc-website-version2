'use client';

import { AnimatedText } from "@/components/animated-text";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <motion.section 
        className="relative py-20 bg-muted"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedText
              text="Get in Touch"
              className="text-4xl md:text-6xl font-bold mb-6"
              delay={0.2}
            />
            <AnimatedText
              text="Fill out the form below to start your project"
              className="text-xl text-muted-foreground"
              delay={0.4}
            />
          </div>
        </div>
      </motion.section>

      {/* Form Section */}
      <motion.section 
        className="py-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <iframe
                src="https://forms.fillout.com/t/vQaEm2ef2Dus"
                className="w-full h-[800px] border-0"
                title="Contact Form"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Additional Contact Info */}
      <motion.section 
        className="py-20 bg-muted"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Other Ways to Connect</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Email</h3>
                <p className="text-muted-foreground">
                  <a href="mailto:contact@glc.com" className="hover:text-primary transition-colors">
                    contact@glc.com
                  </a>
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Phone</h3>
                <p className="text-muted-foreground">
                  <a href="tel:+1234567890" className="hover:text-primary transition-colors">
                    +1 (234) 567-890
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
} 