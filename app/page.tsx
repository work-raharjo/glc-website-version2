import Header from "@/components/header";
import Footer from "@/components/footer";
import { AnimatedText } from "@/components/animated-text";
import { PortfolioGrid } from "@/components/portfolio-grid";
import { ProcessSection } from "@/components/process-section";

const portfolioItems = [
  {
    title: "Digital Twin Solutions",
    description: "Advanced digital twin technology for infrastructure monitoring and management",
    image: "/images/digital-twin.png",
    link: "/portfolio/digital-twin"
  },
  {
    title: "Data Center Security",
    description: "Comprehensive security systems for modern data centers",
    image: "/images/security-system.png",
    link: "/portfolio/security"
  },
  {
    title: "Smart Infrastructure",
    description: "Intelligent infrastructure solutions for sustainable development",
    image: "/images/hero-infrastructure.png",
    link: "/portfolio/infrastructure"
  }
];

const processSteps = [
  {
    title: "Design",
    description: "Creating beautiful and functional designs",
    icon: "/images/icons/design-icon.svg"
  },
  {
    title: "Develop",
    description: "Building robust and scalable solutions",
    icon: "/images/icons/develop-icon.svg"
  },
  {
    title: "Engage",
    description: "Connecting with your audience",
    icon: "/images/icons/engage-icon.svg"
  },
  {
    title: "Expand",
    description: "Growing your digital presence",
    icon: "/images/icons/expand-icon.svg"
  }
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-background">
        <div className="container mx-auto px-4 text-center">
          <AnimatedText
            text="Creating Distinctive Digital Solutions"
            className="text-5xl md:text-7xl font-bold mb-6"
            delay={0.2}
          />
          <AnimatedText
            text="Since 2016"
            className="text-xl text-muted-foreground"
            delay={0.4}
          />
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedText
            text="Our Work"
            className="text-4xl font-bold text-center mb-16"
          />
          <PortfolioGrid items={portfolioItems} />
        </div>
      </section>

      {/* Process Section */}
      <ProcessSection steps={processSteps} />

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <AnimatedText
            text="Let's Work Together"
            className="text-4xl font-bold mb-8"
          />
          <p className="text-xl text-muted-foreground mb-8">
            Ready to create something amazing?
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}

