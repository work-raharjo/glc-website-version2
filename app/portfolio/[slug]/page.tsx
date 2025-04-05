"use client";

import { PortfolioDetail } from "@/components/portfolio-detail";

interface PortfolioPageProps {
  params: {
    slug: string;
  };
}

export default function PortfolioPage({ params }: PortfolioPageProps) {
  return <PortfolioDetail slug={params.slug} />;
} 