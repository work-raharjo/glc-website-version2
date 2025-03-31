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
    image: "/images/digital-twin.png",
    longDescription: "Our Digital Twin Solutions revolutionize infrastructure monitoring and management through cutting-edge technology. We create virtual replicas of physical assets, enabling real-time monitoring, predictive maintenance, and data-driven decision making.",
    features: [
      "Real-time monitoring and visualization",
      "Predictive maintenance capabilities",
      "Data-driven decision making",
      "Integration with existing systems",
      "Scalable architecture"
    ],
    technologies: ["IoT Sensors", "Cloud Computing", "AI/ML", "3D Visualization"],
    testimonials: [
      {
        quote: "The digital twin solution has transformed how we monitor and maintain our infrastructure. It's been a game-changer for our operations.",
        author: "John Smith",
        role: "Operations Director",
        company: "InfraTech Solutions"
      },
      {
        quote: "The predictive maintenance capabilities have saved us countless hours and significantly reduced downtime.",
        author: "Sarah Johnson",
        role: "Maintenance Manager",
        company: "Smart Systems Inc."
      }
    ],
    relatedProjects: ["security", "infrastructure"],
    gallery: [
      {
        image: "/images/digital-twin.png",
        title: "Digital Twin Dashboard",
        description: "Real-time monitoring interface"
      },
      {
        image: "/images/hero-infrastructure.png",
        title: "Infrastructure Visualization",
        description: "3D model integration"
      },
      {
        image: "/images/security-system.png",
        title: "Security Integration",
        description: "System monitoring"
      }
    ]
  },
  "security": {
    title: "Data Center Security",
    description: "Comprehensive security systems for modern data centers",
    image: "/images/security-system.png",
    longDescription: "Our Data Center Security solutions provide comprehensive protection for modern data centers. We implement multi-layered security measures to ensure the safety and integrity of your critical infrastructure.",
    features: [
      "24/7 monitoring and surveillance",
      "Access control systems",
      "Environmental monitoring",
      "Fire detection and suppression",
      "Emergency response protocols"
    ],
    technologies: ["Biometric Access", "CCTV Systems", "Environmental Sensors", "Fire Suppression"],
    testimonials: [
      {
        quote: "The security system implementation was seamless and provides us with complete peace of mind.",
        author: "Michael Chen",
        role: "Security Director",
        company: "DataSecure Corp"
      },
      {
        quote: "The multi-layered approach to security has significantly enhanced our data center's protection.",
        author: "Emily Rodriguez",
        role: "IT Manager",
        company: "TechGuard Solutions"
      }
    ],
    relatedProjects: ["digital-twin", "infrastructure"],
    gallery: [
      {
        image: "/images/security-system.png",
        title: "Security Control Center",
        description: "24/7 monitoring dashboard"
      },
      {
        image: "/images/digital-twin.png",
        title: "Access Control System",
        description: "Biometric integration"
      },
      {
        image: "/images/hero-infrastructure.png",
        title: "Environmental Monitoring",
        description: "Real-time sensor data"
      }
    ]
  },
  "infrastructure": {
    title: "Smart Infrastructure",
    description: "Intelligent infrastructure solutions for sustainable development",
    image: "/images/hero-infrastructure.png",
    longDescription: "Smart Infrastructure solutions combine cutting-edge technology with sustainable practices to create efficient, resilient, and future-ready infrastructure systems. Our solutions help organizations optimize resource usage and improve operational efficiency.",
    features: [
      "Resource optimization",
      "Environmental monitoring",
      "Energy efficiency",
      "Smart maintenance",
      "Real-time analytics"
    ],
    technologies: ["Smart Sensors", "Energy Management", "Analytics Platform", "IoT Integration"],
    testimonials: [
      {
        quote: "The smart infrastructure solution has helped us achieve significant energy savings while improving operational efficiency.",
        author: "David Kim",
        role: "Sustainability Director",
        company: "GreenTech Solutions"
      },
      {
        quote: "The real-time analytics have given us unprecedented insights into our infrastructure performance.",
        author: "Lisa Thompson",
        role: "Operations Manager",
        company: "SmartCity Systems"
      }
    ],
    relatedProjects: ["digital-twin", "security"],
    gallery: [
      {
        image: "/images/hero-infrastructure.png",
        title: "Smart Infrastructure",
        description: "System overview"
      },
      {
        image: "/images/digital-twin.png",
        title: "Resource Management",
        description: "Energy optimization"
      },
      {
        image: "/images/security-system.png",
        title: "Monitoring Systems",
        description: "Performance analytics"
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