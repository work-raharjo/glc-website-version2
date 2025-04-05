'use client'

import { useLanguage } from '@/lib/language-context'

export default function Loading() {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background gap-4">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary"></div>
      <p className="text-lg text-muted-foreground">{t('loading')}</p>
    </div>
  )
} 