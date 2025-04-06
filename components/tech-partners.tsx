'use client';

import Image from 'next/image';

const partners = [
  {
    name: "51World",
    logo: "/images/partners/51world-logo-2019-12-20-02.png",
    description: "Digital Twin Technology Partner"
  },
  {
    name: "Starlink",
    logo: "/images/partners/Starlink_(satellite_constellation)-Logo.wine.png",
    description: "Satellite Communication Partner"
  },
  {
    name: "DJI",
    logo: "/images/partners/brand-dji-icon-512x295-fidswbpx.png",
    description: "Drone Solutions Partner"
  },
  {
    name: "Vertiv",
    logo: "/images/partners/Vertiv_logo.svg.png",
    description: "Critical Infrastructure Partner"
  },
  {
    name: "Eaton",
    logo: "/images/partners/Eaton_Corporation_logo.svg.png",
    description: "Power Management Partner"
  },
  {
    name: "APC",
    logo: "/images/partners/apc-by-schneider-logo-png_seeklogo-268480.png",
    description: "Power Solutions Partner"
  },
  {
    name: "Fortinet",
    logo: "/images/partners/Fortinet_logo.svg",
    description: "Cybersecurity Partner"
  },
  {
    name: "Hikvision",
    logo: "/images/partners/2560px-Hikvision_logo.svg.png",
    description: "Video Surveillance Partner"
  },
  {
    name: "Uptime Institute",
    logo: "/images/partners/up-inst-base-corp-2022.png",
    description: "Data Center Certification Partner"
  },
  {
    name: "Cisco",
    logo: "/images/partners/Cisco_logo_blue_2016.svg.png",
    description: "Networking Solutions Partner"
  },
  {
    name: "Ruckus Wireless",
    logo: "/images/partners/Ruckus_Wireless-logo-15ADDE56AE-seeklogo.com.png",
    description: "Wireless Solutions Partner"
  },
  {
    name: "Ruijie",
    logo: "/images/partners/ruijie-logo.png",
    description: "Network Infrastructure Partner"
  }
];

export function TechPartners() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-items-center">
        {partners.map((partner) => (
          <div
            key={partner.name}
            className="group relative w-full max-w-[200px] aspect-[3/2] flex items-center justify-center"
          >
            <Image
              src={partner.logo}
              alt={partner.name}
              width={160}
              height={80}
              className="w-full h-full object-contain transition-all duration-300"
            />
            <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
              <p className="text-white text-sm text-center">{partner.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 