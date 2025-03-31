import Header from "@/components/header";
import Footer from "@/components/footer";
import { AnimatedText } from "@/components/animated-text";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { PortfolioDetail } from "@/components/portfolio-detail";
import { notFound } from 'next/navigation';
import { portfolioData } from "@/data/portfolioData";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export default async function PortfolioPage({ params }: { params: { slug: string } }) {
  const slug = await Promise.resolve(params.slug);
  const project = portfolioData[slug as keyof typeof portfolioData];

  if (!project) {
    notFound();
  }

  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <PortfolioDetail project={project} />
      <Footer />
    </main>
  );
} 