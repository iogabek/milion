import React, { useState } from 'react';
import { ExternalLink, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Map = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const mapOptions = [
    {
      name: 'Google Maps',
      url: 'https://maps.app.goo.gl/mtP6QW3rkAXKbnLQA',
      icon: <ExternalLink className="w-4 h-4 mr-2" />
    },
    {
      name: 'Yandex Maps',
      url: 'https://yandex.uz/maps/-/CLQyYFk-',
      icon: <MapPin className="w-4 h-4 mr-2" />
    },
    {
      name: 'OpenStreetMap',
      url: 'https://www.openstreetmap.org/?#map=19/38.276978/67.895299',
      icon: <MapPin className="w-4 h-4 mr-2" />
    }
  ];

  const openMap = (url: string, serviceName: string) => {
    console.log(`${serviceName} ochilmoqda:`, url);
    try {
      window.open(url, '_blank');
    } catch (error) {
      console.error(`${serviceName} ochishda xatolik:`, error);
      alert(`${serviceName} ochishda muammo yuz berdi. Iltimos, boshqa xarita xizmatini tanlang.`);
    }
  };

  return (
    <div className="relative w-full h-96 rounded-lg overflow-hidden">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1566.0623880568908!2d67.89284686456583!3d38.276600337012695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38b511005f9511d9%3A0xa1ccb1153f69b4b8!2sMillion%20game%20club!5e0!3m2!1suz!2s!4v1757003965425!5m2!1suz!2s" 
        width="100%" 
        height="100%" 
        style={{ border: 0 }} 
        allowFullScreen 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-lg shadow-gaming"
      />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent to-gaming-dark/10 rounded-lg" />
      
      {/* Map Options Button */}
      <div className="absolute bottom-4 right-4 z-20 pointer-events-auto">
        <DropdownMenu open={isDropdownOpen} onOpenChange={setIsDropdownOpen}>
          <DropdownMenuTrigger asChild>
            <Button
              className="bg-gaming-dark/90 hover:bg-gaming-dark text-white border border-primary/30 hover:border-primary/60 backdrop-blur-sm shadow-gaming hover:shadow-glow transition-all duration-300 pointer-events-auto"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Xaritada ochish
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent 
            align="end" 
            className="bg-gaming-dark/95 backdrop-blur-sm border border-primary/30 shadow-gaming"
          >
            {mapOptions.map((option) => (
              <DropdownMenuItem
                key={option.name}
                onClick={() => openMap(option.url, option.name)}
                className="text-white hover:bg-primary/20 cursor-pointer transition-colors duration-200"
              >
                {option.icon}
                {option.name}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Map;