"use client"

import React, { createContext, useContext, useState, useEffect } from 'react'

type Language = 'en' | 'id'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      portfolio: "Portfolio",
      contact: "Contact Us"
    },
    hero: {
      title: "Global Leadership Consulting",
      subtitle: "Empowering businesses through innovative technology solutions",
      cta: "Get Started"
    },
    services: {
      title: "Our Services",
      subtitle: "Comprehensive solutions for your business needs",
      consulting: {
        title: "Technology Consulting",
        description: "Strategic guidance for digital transformation"
      },
      development: {
        title: "Software Development",
        description: "Custom solutions tailored to your needs"
      },
      integration: {
        title: "System Integration",
        description: "Seamless connection of your business systems"
      }
    },
    portfolio: {
      title: "Our Portfolio",
      subtitle: "Showcasing our successful projects",
      overview: "Project Overview",
      features: "Key Features",
      technologies: "Technologies Used",
      gallery: "Project Gallery",
      testimonials: "Client Testimonials",
      relatedProjects: "Related Projects",
      ctaTitle: "Ready to Transform Your Business?",
      ctaDescription: "Let's discuss how we can help you achieve your goals",
      contactUs: "Contact Us",
      notFound: "Project Not Found",
      notFoundDesc: "The project you're looking for doesn't exist or has been moved.",
      backToPortfolio: "Back to Portfolio",
      viewProject: "View Project"
    },
    contact: {
      title: "Contact Us",
      subtitle: "Get in touch with our team",
      form: {
        name: "Your Name",
        email: "Email Address",
        message: "Your Message",
        submit: "Send Message"
      }
    },
    footer: {
      company: "Company",
      services: "Services",
      social: "Social",
      contact: "Contact",
      rights: "All rights reserved"
    },
    loading: "Loading...",
    error: {
      title: "Error",
      message: "Something went wrong",
      retry: "Try Again"
    }
  },
  id: {
    nav: {
      home: "Beranda",
      about: "Tentang",
      services: "Layanan",
      portfolio: "Portofolio",
      contact: "Hubungi Kami"
    },
    hero: {
      title: "Global Leadership Consulting",
      subtitle: "Memberdayakan bisnis melalui solusi teknologi inovatif",
      cta: "Mulai Sekarang"
    },
    services: {
      title: "Layanan Kami",
      subtitle: "Solusi komprehensif untuk kebutuhan bisnis Anda",
      consulting: {
        title: "Konsultasi Teknologi",
        description: "Panduan strategis untuk transformasi digital"
      },
      development: {
        title: "Pengembangan Perangkat Lunak",
        description: "Solusi khusus sesuai kebutuhan Anda"
      },
      integration: {
        title: "Integrasi Sistem",
        description: "Koneksi mulus sistem bisnis Anda"
      }
    },
    portfolio: {
      title: "Portofolio Kami",
      subtitle: "Menampilkan proyek-proyek sukses kami",
      overview: "Gambaran Proyek",
      features: "Fitur Utama",
      technologies: "Teknologi yang Digunakan",
      gallery: "Galeri Proyek",
      testimonials: "Testimoni Klien",
      relatedProjects: "Proyek Terkait",
      ctaTitle: "Siap Mentransformasi Bisnis Anda?",
      ctaDescription: "Mari diskusikan bagaimana kami dapat membantu Anda mencapai tujuan",
      contactUs: "Hubungi Kami",
      notFound: "Proyek Tidak Ditemukan",
      notFoundDesc: "Proyek yang Anda cari tidak ada atau telah dipindahkan.",
      backToPortfolio: "Kembali ke Portofolio",
      viewProject: "Lihat Proyek"
    },
    contact: {
      title: "Hubungi Kami",
      subtitle: "Terhubung dengan tim kami",
      form: {
        name: "Nama Anda",
        email: "Alamat Email",
        message: "Pesan Anda",
        submit: "Kirim Pesan"
      }
    },
    footer: {
      company: "Perusahaan",
      services: "Layanan",
      social: "Sosial",
      contact: "Kontak",
      rights: "Seluruh hak dilindungi"
    },
    loading: "Memuat...",
    error: {
      title: "Kesalahan",
      message: "Terjadi kesalahan",
      retry: "Coba Lagi"
    }
  }
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')

  useEffect(() => {
    // Get saved language from localStorage or default to 'en'
    const savedLanguage = localStorage.getItem('language') as Language
    if (savedLanguage) {
      setLanguage(savedLanguage)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem('language', lang)
  }

  const t = (key: string): string => {
    const keys = key.split('.')
    let value: any = translations[language]
    
    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k]
      } else {
        return key
      }
    }
    
    return typeof value === 'string' ? value : key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
} 