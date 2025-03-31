import Image from 'next/image'

const partners = [
  {
    name: "51World",
    logo: "/images/partners/51world-logo.png",
    description: "Digital Twin Technology Partner"
  },
  {
    name: "Dwimitra DME",
    logo: "/images/partners/dwimitra-dme-logo.png",
    description: "Infrastructure Solutions Partner"
  },
  {
    name: "Uptime Institute",
    logo: "/images/partners/uptime-institute-logo.png",
    description: "Data Center Certification Partner"
  },
  {
    name: "Avirtech",
    logo: "/images/partners/avirtech-logo.png",
    description: "Drone Technology Partner"
  },
  {
    name: "DJI",
    logo: "/images/partners/dji-logo.png",
    description: "Drone Solutions Partner"
  },
  {
    name: "MSP",
    logo: "/images/partners/msp-logo.png",
    description: "Managed Services Partner"
  },
  {
    name: "Vertiv",
    logo: "/images/partners/vertiv-logo.png",
    description: "Critical Infrastructure Partner"
  },
  {
    name: "Eaton",
    logo: "/images/partners/eaton-logo.png",
    description: "Power Management Partner"
  },
  {
    name: "Delta UPS",
    logo: "/images/partners/delta-ups-logo.png",
    description: "Uninterruptible Power Supply Partner"
  },
  {
    name: "APC",
    logo: "/images/partners/apc-logo.png",
    description: "Power Solutions Partner"
  },
  {
    name: "Schneider",
    logo: "/images/partners/schneider-logo.png",
    description: "Energy Management Partner"
  },
  {
    name: "Fortinet",
    logo: "/images/partners/fortinet-logo.png",
    description: "Cybersecurity Partner"
  },
  {
    name: "Hikvision",
    logo: "/images/partners/hikvision-logo.png",
    description: "Video Surveillance Partner"
  },
  {
    name: "Falco VMS",
    logo: "/images/partners/falco-vms-logo.png",
    description: "Video Management Partner"
  }
]

export function TechPartners() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 items-center justify-items-center py-8">
      {partners.map((partner) => (
        <div 
          key={partner.name}
          className="w-40 h-24 relative hover:scale-110 transition-all duration-300 ease-in-out"
        >
          <Image
            src={partner.logo}
            alt={`${partner.name} Logo`}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
            priority
          />
        </div>
      ))}
    </div>
  )
} 