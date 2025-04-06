import Footer from "@/components/footer"
import { PortfolioDetail } from "@/components/portfolio-detail"
import { notFound } from 'next/navigation'
import { portfolioData } from "@/data/portfolioData"
import Header from "@/components/header"
import { Metadata } from 'next'

type Props = {
  params: {
    slug: string
  }
}

export function generateMetadata({ params }: Props): Metadata {
  const project = portfolioData[params.slug]
  if (!project) return { title: 'Not Found' }
  return { title: project.title }
}

export async function generateStaticParams() {
  return Object.keys(portfolioData).map((slug) => ({
    slug,
  }))
}

export default function Page({ params }: Props) {
  const project = portfolioData[params.slug]
  
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