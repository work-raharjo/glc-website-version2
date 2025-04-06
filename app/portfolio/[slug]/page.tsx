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

export const dynamicParams = false

export default function PortfolioPage({
  params,
}: {
  params: { slug: string }
}) {
  const { slug } = params
  const project = portfolioData[slug as keyof typeof portfolioData]

  if (!project) {
    notFound()
  }

  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <PortfolioDetail project={project} />
      <Footer />
    </main>
  )
}