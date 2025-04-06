export interface PortfolioItem {
  title: string;
  description: string;
  image: string;
  longDescription: string;
  features: string[];
  technologies: string[];
  testimonials: Array<{
    quote: string;
    author: string;
    role: string;
    company: string;
  }>;
  relatedProjects: string[];
  gallery: Array<{
    image: string;
    title: string;
    description: string;
  }>;
}

export const portfolioData: Record<string, PortfolioItem> = {
  "digital-twin": {
    title: "Digital Twin Solutions",
    description: "Advanced digital twin technology for infrastructure monitoring",
    image: "/images/portfolio/digital-twin-hero.jpg",
    longDescription: "In partnership with 51World, we deliver state-of-the-art digital twin solutions that revolutionize urban infrastructure monitoring and management. Our Jakarta Digital Twin project showcases the power of creating high-fidelity virtual replicas of physical assets, enabling real-time monitoring, predictive maintenance, and data-driven decision making for smart city initiatives.",
    features: [
      "High-fidelity 3D city modeling with 51World technology",
      "Real-time IoT sensor integration and visualization",
      "AI-powered predictive maintenance",
      "Smart city planning and simulation",
      "Traffic flow optimization and analysis"
    ],
    technologies: ["51World Platform", "IoT Sensors", "Cloud Computing", "AI/ML", "3D Visualization", "Edge Computing"],
    testimonials: [
      {
        quote: "The Jakarta Digital Twin project has transformed how we monitor and maintain our urban infrastructure. The predictive maintenance capabilities have reduced our operational costs by 45%.",
        author: "Budi Santoso",
        role: "Smart City Director",
        company: "Jakarta Smart City"
      },
      {
        quote: "The real-time visualization and analytics have given us unprecedented insights into our city's operations. We've improved emergency response times by 30% since implementation.",
        author: "Sarah Johnson",
        role: "Operations Manager",
        company: "Urban Solutions Inc."
      }
    ],
    relatedProjects: ["security", "infrastructure"],
    gallery: [
      {
        image: "/images/portfolio/digitaltwin1.jpeg",
        title: "Digital Twin Overview",
        description: "Comprehensive view of digital twin implementation"
      },
      {
        image: "/images/portfolio/digitaltwin planning.jpg",
        title: "Digital Twin Planning",
        description: "Strategic planning and implementation process"
      },
      {
        image: "/images/portfolio/Geospatial-Digital-Twins-overview-1.jpg",
        title: "Geospatial Digital Twin",
        description: "Advanced geospatial visualization and analysis"
      }
    ]
  },
  "security": {
    title: "Intelligent Security Systems",
    description: "Next-generation security solutions for modern data centers",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80",
    longDescription: "Our Intelligent Security Systems provide comprehensive protection for modern data centers and critical infrastructure. We combine advanced AI surveillance, biometric access control, and environmental monitoring to create a multi-layered security approach that ensures maximum protection while maintaining operational efficiency.",
    features: [
      "AI-powered surveillance and threat detection",
      "Multi-factor biometric access control",
      "Real-time environmental monitoring",
      "Automated incident response",
      "Blockchain-secured audit trails"
    ],
    technologies: ["AI Vision", "Biometrics", "IoT Sensors", "Blockchain", "Cloud Security"],
    testimonials: [
      {
        quote: "The AI-powered threat detection has dramatically improved our security response time. We've seen a 60% reduction in false alarms.",
        author: "Michael Chen",
        role: "Security Director",
        company: "DataSecure Corp"
      },
      {
        quote: "The integration of biometric access control with environmental monitoring has created an unparalleled security ecosystem.",
        author: "Emily Rodriguez",
        role: "IT Manager",
        company: "TechGuard Solutions"
      }
    ],
    relatedProjects: ["digital-twin", "infrastructure"],
    gallery: [
      {
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80",
        title: "Security Command Center",
        description: "Centralized security monitoring hub"
      },
      {
        image: "https://images.unsplash.com/photo-1587554801471-37976a256db0?auto=format&fit=crop&q=80",
        title: "Biometric Access Control",
        description: "Multi-factor authentication system"
      },
      {
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80",
        title: "Environmental Monitoring",
        description: "Advanced sensor network deployment"
      }
    ]
  },
  "infrastructure": {
    title: "Smart Infrastructure Solutions",
    description: "Intelligent systems for sustainable urban development",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80",
    longDescription: "Our Smart Infrastructure Solutions combine IoT technology, renewable energy systems, and AI-driven optimization to create sustainable and efficient urban environments. We help cities and organizations reduce their environmental impact while improving service delivery and quality of life for citizens.",
    features: [
      "Smart energy management",
      "Intelligent traffic control",
      "Waste management optimization",
      "Water distribution monitoring",
      "Air quality tracking"
    ],
    technologies: ["IoT", "Renewable Energy", "AI Analytics", "5G Networks", "Smart Sensors"],
    testimonials: [
      {
        quote: "The smart infrastructure implementation has reduced our energy consumption by 35% and significantly improved our sustainability metrics.",
        author: "David Kim",
        role: "Sustainability Director",
        company: "GreenTech Solutions"
      },
      {
        quote: "The integrated approach to urban management has transformed how we deliver services to our citizens. Response times are down 40%.",
        author: "Lisa Thompson",
        role: "Operations Manager",
        company: "SmartCity Systems"
      }
    ],
    relatedProjects: ["digital-twin", "security"],
    gallery: [
      {
        image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80",
        title: "Smart Energy Grid",
        description: "Renewable energy integration"
      },
      {
        image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80",
        title: "Traffic Management",
        description: "AI-powered traffic optimization"
      },
      {
        image: "https://images.unsplash.com/photo-1494522855154-9297ac14b55f?auto=format&fit=crop&q=80",
        title: "Urban Monitoring",
        description: "City-wide sensor network"
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