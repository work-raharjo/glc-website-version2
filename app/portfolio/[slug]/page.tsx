import { portfolioData } from "@/data/portfolioData"
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import dynamic from 'next/dynamic'

const PortfolioDetail = dynamic(() => import('@/components/portfolio-detail'), {
  ssr: true
})
const Header = dynamic(() => import('@/components/header'), {
  ssr: true
})
const Footer = dynamic(() => import('@/components/footer'), {
  ssr: true
})

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