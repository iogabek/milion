export interface GalleryImage {
  id: string;
  url: string;
  alt: string;
  tags: string[];
  caption?: string;
}

export const galleryTags = [
  "Hamma",
  "PC zona",
  "PS5",
  "PS4", 
  "PS3",
  "Turnir",
  "Aksiya",
  "VIP"
];

export const galleryImages: GalleryImage[] = [
  {
    id: "pc-zone-1",
    url: "/src/assets/gallery/gaming-setup-1.jpg",
    alt: "Million game club - PC zona - 2024",
    tags: ["PC zona"],
    caption: "60ta yuqori sifatli gaming kompyuter"
  },
  {
    id: "gaming-cafe-wide",
    url: "/src/assets/gallery/gaming-cafe-wide.jpg", 
    alt: "Million game club - umumiy ko'rinish - 2024",
    tags: ["PC zona", "VIP"],
    caption: "Zamonaviy gaming muhit"
  },
  // Mock images for demonstration
  {
    id: "ps5-zone-1",
    url: "/placeholder.svg",
    alt: "Million game club - PS5 zona - 2024",
    tags: ["PS5", "VIP"],
    caption: "PlayStation 5 konsol zonasi"
  },
  {
    id: "tournament-1", 
    url: "/placeholder.svg",
    alt: "Million game club - turnir - 2024",
    tags: ["Turnir", "PC zona"],
    caption: "Haftalik CS:GO turniri"
  },
  {
    id: "vip-room-1",
    url: "/placeholder.svg", 
    alt: "Million game club - VIP xona - 2024",
    tags: ["VIP", "PS5"],
    caption: "Maxsus VIP o'yin xonasi"
  },
  {
    id: "ps4-zone-1",
    url: "/placeholder.svg",
    alt: "Million game club - PS4 zona - 2024", 
    tags: ["PS4"],
    caption: "PlayStation 4 klassik o'yinlar"
  },
  {
    id: "retro-zone-1",
    url: "/placeholder.svg",
    alt: "Million game club - PS3 retro zona - 2024",
    tags: ["PS3"],
    caption: "Retro gaming PlayStation 3"
  },
  {
    id: "action-promo-1",
    url: "/placeholder.svg",
    alt: "Million game club - aksiya - 2024",
    tags: ["Aksiya", "PC zona"],
    caption: "Maxsus aksiyalar va chegirmalar"
  },
  {
    id: "team-gaming-1",
    url: "/placeholder.svg", 
    alt: "Million game club - jamoaviy o'yin - 2024",
    tags: ["PC zona", "Turnir"],
    caption: "Do'stlar bilan jamoaviy o'yinlar"
  }
];