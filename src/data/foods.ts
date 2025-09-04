export interface Food {
  id: number;
  nom: string;
  kategoriya: string;
  narx: number;
  rasm_url: string;
  tavsif?: string;
}

export const foodCategories = [
  "Barchasi",
  "Taomlar", 
  "Ichimliklar",
  "Shirinliklar",
  "Sneklar"
];

export const foods: Food[] = [
  // Taomlar
  {
    id: 1,
    nom: "Burger",
    kategoriya: "Taomlar",
    narx: 35000,
    rasm_url: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=300&fit=crop",
    tavsif: "Go'sht, sabzavat va sous bilan"
  },
  {
    id: 2,
    nom: "Pizza",
    kategoriya: "Taomlar", 
    narx: 45000,
    rasm_url: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop",
    tavsif: "Klassik Margarita pizza"
  },
  {
    id: 3,
    nom: "Hot Dog",
    kategoriya: "Taomlar",
    narx: 18000,
    rasm_url: "https://images.unsplash.com/photo-1612392062798-2ad99ac7e48e?w=400&h=300&fit=crop",
    tavsif: "Sosiska va sous bilan"
  },
  {
    id: 4,
    nom: "French Fries",
    kategoriya: "Taomlar",
    narx: 15000,
    rasm_url: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&h=300&fit=crop",
    tavsif: "Mazali kartoshka fri"
  },
  {
    id: 5,
    nom: "Club Sandwich",
    kategoriya: "Taomlar",
    narx: 28000,
    rasm_url: "https://images.unsplash.com/photo-1567234669003-dce7a7a88821?w=400&h=300&fit=crop",
    tavsif: "Tovuq, bekon va sabzavat"
  },

  // Ichimliklar
  {
    id: 6,
    nom: "Coca Cola",
    kategoriya: "Ichimliklar",
    narx: 8000,
    rasm_url: "https://images.unsplash.com/photo-1581636625402-29b2a704ef13?w=400&h=300&fit=crop",
    tavsif: "Sovuq gazli ichimlik"
  },
  {
    id: 7,
    nom: "Fresh Orange Juice",
    kategoriya: "Ichimliklar",
    narx: 12000,
    rasm_url: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400&h=300&fit=crop",
    tavsif: "Yangi apelsin sharbati"
  },
  {
    id: 8,
    nom: "Coffee",
    kategoriya: "Ichimliklar",
    narx: 10000,
    rasm_url: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop",
    tavsif: "Issiq Americano kofe"
  },
  {
    id: 9,
    nom: "Milkshake",
    kategoriya: "Ichimliklar",
    narx: 18000,
    rasm_url: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop",
    tavsif: "Shokoladli sut kokteyli"
  },
  {
    id: 10,
    nom: "Energy Drink",
    kategoriya: "Ichimliklar",
    narx: 15000,
    rasm_url: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop",
    tavsif: "Gaming uchun energetik ichimlik"
  },

  // Shirinliklar
  {
    id: 11,
    nom: "Donut",
    kategoriya: "Shirinliklar",
    narx: 12000,
    rasm_url: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop",
    tavsif: "Shokoladli donut"
  },
  {
    id: 12,
    nom: "Ice Cream",
    kategoriya: "Shirinliklar",
    narx: 16000,
    rasm_url: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop",
    tavsif: "Vanil muzqaymoq"
  },
  {
    id: 13,
    nom: "Cookies",
    kategoriya: "Shirinliklar",
    narx: 8000,
    rasm_url: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&h=300&fit=crop",
    tavsif: "Shokoladli pechen'ye"
  },

  // Sneklar
  {
    id: 14,
    nom: "Popcorn",
    kategoriya: "Sneklar",
    narx: 10000,
    rasm_url: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
    tavsif: "Tuzli popkorn"
  },
  {
    id: 15,
    nom: "Nachos",
    kategoriya: "Sneklar",
    narx: 22000,
    rasm_url: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=400&h=300&fit=crop",
    tavsif: "Pishloq sousi bilan"
  }
];