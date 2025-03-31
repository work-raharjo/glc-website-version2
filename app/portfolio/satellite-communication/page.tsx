import { Metadata } from 'next';
import Image from 'next/image';
import { SatellitePartners } from '@/components/satellite-partners';

export const metadata: Metadata = {
  title: 'Satellite Communication Project | GLC',
  description: 'Advanced satellite communication solutions powered by Starlink technology.',
};

export default function SatelliteCommunicationPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Satellite Communication Project</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="relative h-[400px] rounded-lg overflow-hidden">
          <Image
            src="/images/portfolio/satellite-communication.jpg"
            alt="Satellite Communication Project"
            fill
            className="object-cover"
          />
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
          <p className="text-muted-foreground mb-4">
            Our satellite communication project leverages cutting-edge Starlink technology to provide reliable, high-speed internet connectivity in remote and underserved areas. This solution offers:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>High-speed, low-latency internet access</li>
            <li>Global coverage with reliable connectivity</li>
            <li>Easy installation and maintenance</li>
            <li>Scalable solution for various applications</li>
            <li>Cost-effective alternative to traditional infrastructure</li>
          </ul>
        </div>
      </div>

      <SatellitePartners />
    </div>
  );
} 