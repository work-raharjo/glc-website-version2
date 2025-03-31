import Header from "@/components/header";
import Footer from "@/components/footer";
import { AnimatedText } from "@/components/animated-text";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { PortfolioDetail } from "@/components/portfolio-detail";

// This would typically come from a CMS or database
const portfolioData = {
  "digital-twin": {
    title: "Digital Twin Solutions",
    description: "Advanced digital twin technology for infrastructure monitoring and management",
    image: "/images/portfolio/digital-twin-hero.jpg",
    longDescription: "Our Digital Twin Solutions revolutionize infrastructure monitoring and management through cutting-edge technology. We create virtual replicas of physical assets, enabling real-time monitoring, predictive maintenance, and data-driven decision making. Using advanced IoT sensors and AI algorithms, we provide unprecedented visibility into your infrastructure's performance.",
    features: [
      "Real-time 3D visualization and monitoring",
      "AI-powered predictive maintenance",
      "IoT sensor integration and analytics",
      "Cloud-based infrastructure management",
      "Scalable and secure architecture"
    ],
    technologies: ["IoT Sensors", "Cloud Computing", "AI/ML", "3D Visualization", "Edge Computing"],
    testimonials: [
      {
        quote: "The digital twin solution has transformed how we monitor and maintain our infrastructure. The predictive maintenance capabilities have reduced our downtime by 45%.",
        author: "John Smith",
        role: "Operations Director",
        company: "InfraTech Solutions"
      },
      {
        quote: "The real-time visualization and analytics have given us unprecedented insights into our operations. We've improved efficiency by 30% since implementation.",
        author: "Sarah Johnson",
        role: "Maintenance Manager",
        company: "Smart Systems Inc."
      }
    ],
    relatedProjects: ["security", "infrastructure"],
    gallery: [
      {
        image: "/images/portfolio/digital-twin-dashboard.jpg",
        title: "Real-time Monitoring Dashboard",
        description: "Advanced analytics and visualization interface"
      },
      {
        image: "/images/portfolio/digital-twin-modeling.jpg",
        title: "3D Asset Modeling",
        description: "High-precision digital modeling system"
      },
      {
        image: "/images/portfolio/digital-twin-analytics.jpg",
        title: "Predictive Analytics",
        description: "AI-powered maintenance forecasting"
      }
    ]
  },
  "security": {
    title: "Intelligent Security Systems",
    description: "Next-generation security solutions for modern data centers",
    image: "/images/portfolio/security-hero.jpg",
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
        image: "/images/portfolio/security-command.jpg",
        title: "Security Command Center",
        description: "Centralized security monitoring hub"
      },
      {
        image: "/images/portfolio/security-biometrics.jpg",
        title: "Biometric Access Control",
        description: "Multi-factor authentication system"
      },
      {
        image: "/images/portfolio/security-monitoring.jpg",
        title: "Environmental Monitoring",
        description: "Advanced sensor network deployment"
      }
    ]
  },
  "infrastructure": {
    title: "Smart Infrastructure Solutions",
    description: "Intelligent systems for sustainable urban development",
    image: "/images/portfolio/infrastructure-hero.jpg",
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
        image: "/images/portfolio/infrastructure-energy.jpg",
        title: "Smart Energy Grid",
        description: "Renewable energy integration"
      },
      {
        image: "/images/portfolio/infrastructure-traffic.jpg",
        title: "Traffic Management",
        description: "AI-powered traffic optimization"
      },
      {
        image: "/images/portfolio/infrastructure-monitoring.jpg",
        title: "Urban Monitoring",
        description: "City-wide sensor network"
      }
    ]
  }
};

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export default async function PortfolioPage({ params }: { params: { slug: string } }) {
  const project = portfolioData[params.slug as keyof typeof portfolioData];

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <PortfolioDetail project={project} />
      <Footer />
    </main>
  );
} 