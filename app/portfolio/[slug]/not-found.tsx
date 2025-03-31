import Link from 'next/link'

export default function PortfolioNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">Portfolio Not Found</h2>
        <p className="text-muted-foreground mb-8">This portfolio item does not exist</p>
        <Link 
          href="/portfolio" 
          className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
        >
          View All Projects
        </Link>
      </div>
    </div>
  )
} 