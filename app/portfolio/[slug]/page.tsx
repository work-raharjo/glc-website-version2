import Footer from "@/components/footer"
import { PortfolioDetail } from "@/components/portfolio-detail"
import { notFound } from 'next/navigation'
import { portfolioData } from "@/data/portfolioData"
import Header from "@/components/header"

export default function PortfolioPage({ params }: { params: { slug: string } }) {
  if (!params.slug || !(params.slug in portfolioData)) {
    notFound()
  }

  const project = portfolioData[params.slug]

  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <PortfolioDetail project={project} />
      <Footer />
    </main>
  )
}