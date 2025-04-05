'use client'

import Link from 'next/link'
import { useLanguage } from '@/lib/language-context'

export default function NotFound() {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">{t('notFound.title')}</h2>
        <p className="text-muted-foreground mb-8">{t('notFound.message')}</p>
        <Link 
          href="/" 
          className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
        >
          {t('notFound.back')}
        </Link>
      </div>
    </div>
  )
} 