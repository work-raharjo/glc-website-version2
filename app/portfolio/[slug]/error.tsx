'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function PortfolioError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Portfolio error:', error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">Portfolio Error</h2>
        <p className="text-muted-foreground mb-8">Failed to load portfolio item</p>
        <div className="space-x-4">
          <button
            onClick={reset}
            className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
          >
            Try again
          </button>
          <Link 
            href="/portfolio"
            className="inline-block px-6 py-3 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/90 transition-colors"
          >
            Back to Portfolio
          </Link>
        </div>
      </div>
    </div>
  )
} 