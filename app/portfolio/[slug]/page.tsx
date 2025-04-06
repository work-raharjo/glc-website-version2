'use client'

import { portfolioData } from "@/data/portfolioData"
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"

type Props = {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = portfolioData[params.slug]
  if (!project) return { title: 'Not Found' }
  return { 
    title: project.title,
    description: project.description
  }
}

export async function generateStaticParams() {
  return Object.keys(portfolioData).map((slug) => ({
    slug,
  }))
}

function ProjectContent({ project }: { project: any }) {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="container mx-auto px-4 text-center text-white relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {project.title}
          </h1>
          <p className="text-xl md:text-2xl">
            {project.description}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Project Overview</h2>
            <p className="text-lg text-muted-foreground mb-12">
              {project.longDescription}
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default function Page({ params }: Props) {
  const project = portfolioData[params.slug]
  
  if (!project) {
    notFound()
  }

  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col pt-16">
        <ProjectContent project={project} />
      </main>
      <Footer />
    </>
  )
}