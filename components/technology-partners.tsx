'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export function TechnologyPartners() {
  return (
    <section className="py-12 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">Technology Partners</h2>
        <div className="flex justify-center items-center gap-8">
          <motion.div
            className="relative w-48 h-24 bg-white rounded-lg shadow-md p-4"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src="/images/partners/51world-logo-2019-12-20-02.png"
              alt="51World - Digital Twin Technology Partner"
              fill
              className="object-contain p-4"
            />
          </motion.div>
        </div>
        <p className="text-center mt-8 text-muted-foreground">
          Powered by industry-leading digital twin technology from 51World
        </p>
      </div>
    </section>
  );
} 