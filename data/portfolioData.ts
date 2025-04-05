export interface LocalizedText {
  en: string;
  id: string;
}

export interface PortfolioItem {
  title: LocalizedText;
  description: LocalizedText;
  image: string;
  longDescription: LocalizedText;
  features: LocalizedText[];
  technologies: string[];
  testimonials: Array<{
    quote: LocalizedText;
    author: string;
    role: LocalizedText;
    company: string;
  }>;
  relatedProjects: string[];
  gallery: Array<{
    image: string;
    title: LocalizedText;
    description: LocalizedText;
  }>;
}

export const portfolioData: Record<string, PortfolioItem> = {
  "digital-twin": {
    title: {
      en: "Digital Twin Solutions",
      id: "Solusi Digital Twin"
    },
    description: {
      en: "Advanced digital twin technology for infrastructure monitoring",
      id: "Teknologi digital twin canggih untuk pemantauan infrastruktur"
    },
    image: "/images/portfolio/digital-twin-hero.jpg",
    longDescription: {
      en: "In partnership with 51World, we deliver state-of-the-art digital twin solutions that revolutionize urban infrastructure monitoring and management. Our Jakarta Digital Twin project showcases the power of creating high-fidelity virtual replicas of physical assets, enabling real-time monitoring, predictive maintenance, and data-driven decision making for smart city initiatives.",
      id: "Bermitra dengan 51World, kami menghadirkan solusi digital twin mutakhir yang merevolusi pemantauan dan pengelolaan infrastruktur perkotaan. Proyek Jakarta Digital Twin kami menunjukkan kekuatan dalam menciptakan replika virtual berkualitas tinggi dari aset fisik, memungkinkan pemantauan real-time, pemeliharaan prediktif, dan pengambilan keputusan berbasis data untuk inisiatif kota pintar."
    },
    features: [
      {
        en: "High-fidelity 3D city modeling with 51World technology",
        id: "Pemodelan kota 3D berkualitas tinggi dengan teknologi 51World"
      },
      {
        en: "Real-time IoT sensor integration and visualization",
        id: "Integrasi dan visualisasi sensor IoT secara real-time"
      },
      {
        en: "AI-powered predictive maintenance",
        id: "Pemeliharaan prediktif berbasis AI"
      },
      {
        en: "Smart city planning and simulation",
        id: "Perencanaan dan simulasi kota pintar"
      },
      {
        en: "Traffic flow optimization and analysis",
        id: "Optimasi dan analisis arus lalu lintas"
      }
    ],
    technologies: ["51World Platform", "IoT Sensors", "Cloud Computing", "AI/ML", "3D Visualization", "Edge Computing"],
    testimonials: [
      {
        quote: {
          en: "The Jakarta Digital Twin project has transformed how we monitor and maintain our urban infrastructure. The predictive maintenance capabilities have reduced our operational costs by 45%.",
          id: "Proyek Jakarta Digital Twin telah mengubah cara kami memantau dan memelihara infrastruktur perkotaan. Kemampuan pemeliharaan prediktif telah mengurangi biaya operasional kami sebesar 45%."
        },
        author: "Budi Santoso",
        role: {
          en: "Smart City Director",
          id: "Direktur Kota Pintar"
        },
        company: "Jakarta Smart City"
      },
      {
        quote: {
          en: "The real-time visualization and analytics have given us unprecedented insights into our city's operations. We've improved emergency response times by 30% since implementation.",
          id: "Visualisasi dan analitik real-time telah memberikan kami wawasan yang belum pernah ada sebelumnya tentang operasi kota kami. Kami telah meningkatkan waktu respons darurat sebesar 30% sejak implementasi."
        },
        author: "Sarah Johnson",
        role: {
          en: "Operations Manager",
          id: "Manajer Operasi"
        },
        company: "Urban Solutions Inc."
      }
    ],
    relatedProjects: ["security", "infrastructure"],
    gallery: [
      {
        image: "/images/portfolio/digitaltwin1.jpeg",
        title: {
          en: "Digital Twin Overview",
          id: "Gambaran Digital Twin"
        },
        description: {
          en: "Comprehensive view of digital twin implementation",
          id: "Tampilan komprehensif implementasi digital twin"
        }
      },
      {
        image: "/images/portfolio/digitaltwin planning.jpg",
        title: {
          en: "Digital Twin Planning",
          id: "Perencanaan Digital Twin"
        },
        description: {
          en: "Strategic planning and implementation process",
          id: "Proses perencanaan dan implementasi strategis"
        }
      },
      {
        image: "/images/portfolio/Geospatial-Digital-Twins-overview-1.jpg",
        title: {
          en: "Geospatial Digital Twin",
          id: "Digital Twin Geospasial"
        },
        description: {
          en: "Advanced geospatial visualization and analysis",
          id: "Visualisasi dan analisis geospasial tingkat lanjut"
        }
      }
    ]
  },
  "security": {
    title: {
      en: "Intelligent Security Systems",
      id: "Sistem Keamanan Cerdas"
    },
    description: {
      en: "Next-generation security solutions for modern data centers",
      id: "Solusi keamanan generasi baru untuk pusat data modern"
    },
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80",
    longDescription: {
      en: "Our Intelligent Security Systems provide comprehensive protection for modern data centers and critical infrastructure. We combine advanced AI surveillance, biometric access control, and environmental monitoring to create a multi-layered security approach that ensures maximum protection while maintaining operational efficiency.",
      id: "Sistem Keamanan Cerdas kami memberikan perlindungan komprehensif untuk pusat data modern dan infrastruktur kritis. Kami menggabungkan pengawasan AI canggih, kontrol akses biometrik, dan pemantauan lingkungan untuk menciptakan pendekatan keamanan berlapis yang memastikan perlindungan maksimal sambil mempertahankan efisiensi operasional."
    },
    features: [
      {
        en: "AI-powered surveillance and threat detection",
        id: "Pengawasan dan deteksi ancaman berbasis AI"
      },
      {
        en: "Multi-factor biometric access control",
        id: "Kontrol akses biometrik multi-faktor"
      },
      {
        en: "Real-time environmental monitoring",
        id: "Pemantauan lingkungan real-time"
      },
      {
        en: "Automated incident response",
        id: "Respons insiden otomatis"
      },
      {
        en: "Blockchain-secured audit trails",
        id: "Jejak audit yang diamankan blockchain"
      }
    ],
    technologies: ["AI Vision", "Biometrics", "IoT Sensors", "Blockchain", "Cloud Security"],
    testimonials: [
      {
        quote: {
          en: "The AI-powered threat detection has dramatically improved our security response time. We've seen a 60% reduction in false alarms.",
          id: "Deteksi ancaman berbasis AI telah sangat meningkatkan waktu respons keamanan kami. Kami melihat pengurangan 60% dalam alarm palsu."
        },
        author: "Michael Chen",
        role: {
          en: "Security Director",
          id: "Direktur Keamanan"
        },
        company: "DataSecure Corp"
      },
      {
        quote: {
          en: "The integration of biometric access control with environmental monitoring has created an unparalleled security ecosystem.",
          id: "Integrasi kontrol akses biometrik dengan pemantauan lingkungan telah menciptakan ekosistem keamanan yang tak tertandingi."
        },
        author: "Emily Rodriguez",
        role: {
          en: "IT Manager",
          id: "Manajer TI"
        },
        company: "TechGuard Solutions"
      }
    ],
    relatedProjects: ["digital-twin", "infrastructure"],
    gallery: [
      {
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80",
        title: {
          en: "Security Command Center",
          id: "Pusat Komando Keamanan"
        },
        description: {
          en: "Centralized security monitoring hub",
          id: "Pusat pemantauan keamanan terpusat"
        }
      },
      {
        image: "https://images.unsplash.com/photo-1587554801471-37976a256db0?auto=format&fit=crop&q=80",
        title: {
          en: "Biometric Access Control",
          id: "Kontrol Akses Biometrik"
        },
        description: {
          en: "Multi-factor authentication system",
          id: "Sistem autentikasi multi-faktor"
        }
      },
      {
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80",
        title: {
          en: "Environmental Monitoring",
          id: "Pemantauan Lingkungan"
        },
        description: {
          en: "Advanced sensor network deployment",
          id: "Penerapan jaringan sensor canggih"
        }
      }
    ]
  },
  "infrastructure": {
    title: {
      en: "Smart Infrastructure Solutions",
      id: "Solusi Infrastruktur Pintar"
    },
    description: {
      en: "Intelligent infrastructure management for modern cities",
      id: "Manajemen infrastruktur cerdas untuk kota modern"
    },
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80",
    longDescription: {
      en: "Our Smart Infrastructure Solutions transform traditional infrastructure into intelligent, connected systems. By integrating IoT sensors, advanced analytics, and automation, we help cities optimize resource utilization, reduce maintenance costs, and improve service delivery across transportation, utilities, and public facilities.",
      id: "Solusi Infrastruktur Pintar kami mengubah infrastruktur tradisional menjadi sistem cerdas yang terhubung. Dengan mengintegrasikan sensor IoT, analitik canggih, dan otomatisasi, kami membantu kota mengoptimalkan penggunaan sumber daya, mengurangi biaya pemeliharaan, dan meningkatkan layanan di bidang transportasi, utilitas, dan fasilitas publik."
    },
    features: [
      {
        en: "IoT-enabled infrastructure monitoring",
        id: "Pemantauan infrastruktur berbasis IoT"
      },
      {
        en: "Predictive maintenance systems",
        id: "Sistem pemeliharaan prediktif"
      },
      {
        en: "Resource optimization algorithms",
        id: "Algoritma optimasi sumber daya"
      },
      {
        en: "Real-time data analytics",
        id: "Analitik data real-time"
      },
      {
        en: "Automated response systems",
        id: "Sistem respons otomatis"
      }
    ],
    technologies: ["IoT", "Edge Computing", "AI Analytics", "Cloud Infrastructure", "5G Networks"],
    testimonials: [
      {
        quote: {
          en: "The smart infrastructure solutions have revolutionized how we manage our city's resources. We've seen a 40% reduction in maintenance costs and significant improvements in service delivery.",
          id: "Solusi infrastruktur pintar telah merevolusi cara kami mengelola sumber daya kota. Kami melihat pengurangan 40% dalam biaya pemeliharaan dan peningkatan signifikan dalam penyampaian layanan."
        },
        author: "David Kim",
        role: {
          en: "Infrastructure Director",
          id: "Direktur Infrastruktur"
        },
        company: "Smart City Solutions"
      },
      {
        quote: {
          en: "The predictive maintenance capabilities have transformed our operations. We can now address potential issues before they become problems.",
          id: "Kemampuan pemeliharaan prediktif telah mengubah operasi kami. Kami sekarang dapat mengatasi potensi masalah sebelum menjadi masalah."
        },
        author: "Lisa Wong",
        role: {
          en: "Operations Manager",
          id: "Manajer Operasi"
        },
        company: "Urban Infrastructure Inc."
      }
    ],
    relatedProjects: ["digital-twin", "security"],
    gallery: [
      {
        image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80",
        title: {
          en: "Smart City Infrastructure",
          id: "Infrastruktur Kota Pintar"
        },
        description: {
          en: "Integrated smart city systems",
          id: "Sistem kota pintar terintegrasi"
        }
      },
      {
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80",
        title: {
          en: "Infrastructure Monitoring",
          id: "Pemantauan Infrastruktur"
        },
        description: {
          en: "Real-time infrastructure monitoring systems",
          id: "Sistem pemantauan infrastruktur real-time"
        }
      },
      {
        image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80",
        title: {
          en: "Resource Management",
          id: "Manajemen Sumber Daya"
        },
        description: {
          en: "Smart resource allocation and management",
          id: "Alokasi dan manajemen sumber daya pintar"
        }
      }
    ]
  },
  "starlink": {
    title: "Satellite Communication",
    description: "High-speed internet access anywhere using Starlink technology",
    image: "https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?auto=format&fit=crop&q=80",
    longDescription: "Our Starlink satellite communication solutions provide instant internet access anywhere in Indonesia. Perfect for events, remote locations, maritime operations, and emergency response situations. We offer flexible rental options with professional installation and 24/7 technical support.",
    features: [
      "High-speed internet up to 150Mbps",
      "Low latency (20-40ms)",
      "Professional installation",
      "24/7 technical support",
      "Flexible rental options"
    ],
    technologies: ["Starlink Gen 3", "Enterprise WiFi 6", "Maritime Solutions", "Mobile Connectivity"],
    testimonials: [
      {
        quote: "The Starlink setup was perfect for our outdoor event. The internet speed was incredible, and we had no issues streaming our live performances.",
        author: "Akmal Maulana",
        role: "Event Organizer",
        company: "Event Production Bekasi"
      },
      {
        quote: "We used their Starlink service for a hybrid conference, and it was flawless. Attendees across the globe complimented the smooth, high-quality stream.",
        author: "Dennis Caesar",
        role: "Conference Director",
        company: "Tech Conference Jakarta"
      }
    ],
    relatedProjects: ["digital-twin", "infrastructure"],
    gallery: [
      {
        image: "https://images.unsplash.com/photo-1580894894513-541e068a3e2b?auto=format&fit=crop&q=80",
        title: "Professional Installation",
        description: "Expert technician setting up Starlink equipment"
      },
      {
        image: "https://images.unsplash.com/photo-1540655037529-dec987208707?auto=format&fit=crop&q=80",
        title: "Event Coverage",
        description: "Providing internet access for large-scale events"
      },
      {
        image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80",
        title: "Maritime Solutions",
        description: "Reliable internet connectivity at sea"
      }
    ]
  }
}; 