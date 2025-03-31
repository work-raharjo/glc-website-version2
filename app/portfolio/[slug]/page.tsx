import { portfolioData, type PortfolioItem } from "@/data/portfolioData"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { PortfolioDetail } from "@/components/portfolio-detail"

interface PortfolioPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return portfolioData.map((project: PortfolioItem) => ({
    slug: project.slug,
  }))
}

export default async function PortfolioPage({ params }: PortfolioPageProps) {
  const project = portfolioData.find((p: PortfolioItem) => p.slug === params.slug)

  if (!project) {
    return <div>Project not found</div>
  }

  return (
    <div>
      <Header />
      <PortfolioDetail project={project} />
      <Footer />
    </div>
  )
} 