import Image from 'next/image';

interface Client {
  name: string;
  logo: string;
  description: string;
}

const clients: Client[] = [
  {
    name: "Pertamina",
    logo: "/images/clients/Pertamina_Logo.png",
    description: "State-owned oil and gas company"
  },
  {
    name: "Gerindra",
    logo: "/images/clients/GRINDRA.png",
    description: "Great Indonesia Movement Party"
  },
  {
    name: "Waskita",
    logo: "/images/clients/Waskita_Karya.svg.png",
    description: "State-owned construction company"
  },
  {
    name: "PDI Perjuangan",
    logo: "/images/clients/Lambang_Partai_Demokrasi_Indonesia_Perjuangan.svg.png",
    description: "Indonesian Democratic Party of Struggle"
  },
  {
    name: "Allo Bank",
    logo: "/images/clients/Allo_Bank_logo.png",
    description: "Digital banking solutions"
  },
  {
    name: "Sea Today",
    logo: "/images/clients/SEA_Today_Indonesia_Logo.png",
    description: "Southeast Asia news platform"
  },
  {
    name: "Persija",
    logo: "/images/clients/Persija_Jakarta_logo.png",
    description: "Jakarta Football Club"
  },
  {
    name: "PLN",
    logo: "/images/clients/Logo_PLN.png",
    description: "State electricity company"
  },
  {
    name: "Sinar Mas Land",
    logo: "/images/clients/Sinar_Mas_Land_Logo.png",
    description: "Property development company"
  }
];

export function ClientLogos() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-items-center">
        {clients.map((client) => (
          <div
            key={client.name}
            className="group relative w-full max-w-[200px] aspect-[3/2] flex items-center justify-center"
          >
            <Image
              src={client.logo}
              alt={client.name}
              width={160}
              height={80}
              className="w-full h-full object-contain transition-all duration-300"
            />
            <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
              <p className="text-white text-sm text-center">{client.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 