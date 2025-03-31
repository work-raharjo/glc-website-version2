import Image from 'next/image'

const clients = [
  {
    name: "Pertamina",
    logo: "/images/clients/Pertamina_Logo.png",
  },
  {
    name: "Gerindra",
    logo: "/images/clients/GRINDRA.png",
  },
  {
    name: "Waskita",
    logo: "/images/clients/Waskita_Karya.svg.png",
  },
  {
    name: "PDI Perjuangan",
    logo: "/images/clients/Lambang_Partai_Demokrasi_Indonesia_Perjuangan.svg.png",
  },
  {
    name: "Allo Bank",
    logo: "/images/clients/Allo_Bank_logo.png",
  },
  {
    name: "Sea Today",
    logo: "/images/clients/SEA_Today_Indonesia_Logo.png",
  },
  {
    name: "Persija",
    logo: "/images/clients/Persija_Jakarta_logo.png",
  },
  {
    name: "PLN",
    logo: "/images/clients/Logo_PLN.png",
  }
]

export function ClientLogos() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 items-center justify-items-center py-8">
      {clients.map((client) => (
        <div 
          key={client.name}
          className="w-48 h-32 relative grayscale hover:grayscale-0 transition-all duration-300 ease-in-out hover:scale-110"
        >
          <Image
            src={client.logo}
            alt={`${client.name} Logo`}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            priority
          />
        </div>
      ))}
    </div>
  )
} 