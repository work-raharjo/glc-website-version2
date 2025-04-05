'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { useLanguage } from '@/lib/language-context'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const { t } = useLanguage();
  
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">{t('error.title')}</h2>
        <p className="text-muted-foreground mb-8">{t('error.message')}</p>
        <div className="space-x-4">
          <button
            onClick={reset}
            className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
          >
            Try again
          </button>
          <Link 
            href="/"
            className="inline-block px-6 py-3 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/90 transition-colors"
          >
            {t('error.back')}
          </Link>
        </div>
      </div>
    </div>
  )
} 