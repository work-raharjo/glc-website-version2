import Footer from "@/components/footer"
import { PortfolioDetail } from "@/components/portfolio-detail"
import { notFound } from 'next/navigation'
import { portfolioData } from "@/data/portfolioData"
import Header from "@/components/header"

export async function generateStaticParams() {
  return Object.keys(portfolioData).map((slug) => ({
    slug,
  }))
}

export default function PortfolioPage({ params }: { params: { slug: string } }) {
  const { slug } = params
  
  if (!slug || typeof slug !== 'string' || !(slug in portfolioData)) {
    notFound()
  }

  const project = portfolioData[slug]

  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <PortfolioDetail project={project} />
      <Footer />
    </main>
  )
}