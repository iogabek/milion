export interface Product {
  id: string;
  nom: string;
  kategoriya: string;
  narx: number;
  qisqa_tavsif: string;
  rasm_url: string;
  mavjud: boolean;
  aksiya: boolean;
  taglar: string[];
}

export const categories = [
  "Hamma",
  "Periferiyalar", 
  "Aksessuarlar",
  "Ichimliklar",
  "Game-Pass/Vaqt",
  "Merch"
];

export const products: Product[] = [
  // Gaming Time & Passes
  {
    id: "pc-1hour",
    nom: "PC - 1 soat",
    kategoriya: "Game-Pass/Vaqt",
    narx: 15000,
    qisqa_tavsif: "144Hz monitor, gaming klaviatura va sichqon kiradi",
    rasm_url: "/placeholder.svg",
    mavjud: true,
    aksiya: false,
    taglar: ["pc", "vaqt"]
  },
  {
    id: "pc-3hour",
    nom: "PC - 3 soat",
    kategoriya: "Game-Pass/Vaqt", 
    narx: 40000,
    qisqa_tavsif: "3 soatlik PC sessiya, barcha o'yinlar",
    rasm_url: "/placeholder.svg",
    mavjud: true,
    aksiya: true,
    taglar: ["pc", "vaqt", "chegirma"]
  },
  {
    id: "pc-daily",
    nom: "PC - Kunlik pass",
    kategoriya: "Game-Pass/Vaqt",
    narx: 80000,
    qisqa_tavsif: "Kun bo'yi PC zona, cheksiz o'yin",
    rasm_url: "/placeholder.svg",
    mavjud: true,
    aksiya: false,
    taglar: ["pc", "kun", "vip"]
  },
  {
    id: "ps5-1hour",
    nom: "PS5 - 1 soat",
    kategoriya: "Game-Pass/Vaqt",
    narx: 25000,
    qisqa_tavsif: "DualSense controller, 4K tajriba",
    rasm_url: "/placeholder.svg",
    mavjud: true,
    aksiya: false,
    taglar: ["ps5", "vaqt"]
  },
  {
    id: "ps5-party",
    nom: "PS5 - Party bundle (4 nafar)",
    kategoriya: "Game-Pass/Vaqt",
    narx: 80000,
    qisqa_tavsif: "4 ta controller, 2 soat, do'stlar bilan o'ynash",
    rasm_url: "/placeholder.svg",
    mavjud: true,
    aksiya: true,
    taglar: ["ps5", "party", "chegirma"]
  },

  // Beverages
  {
    id: "energy-monster",
    nom: "Monster Energy",
    kategoriya: "Ichimliklar",
    narx: 12000,
    qisqa_tavsif: "Energiya ichimligi, 500ml",
    rasm_url: "/placeholder.svg",
    mavjud: true,
    aksiya: false,
    taglar: ["energiya", "ichimlik"]
  },
  {
    id: "coffee-americano",
    nom: "Americano",
    kategoriya: "Ichimliklar",
    narx: 8000,
    qisqa_tavsif: "Yangi qaynatilgan kofe",
    rasm_url: "/placeholder.svg",
    mavjud: true,
    aksiya: false,
    taglar: ["kofe", "issiq"]
  },
  {
    id: "cola",
    nom: "Coca Cola 0.5L",
    kategoriya: "Ichimliklar",
    narx: 6000,
    qisqa_tavsif: "Salqin gazlangan ichimlik",
    rasm_url: "/placeholder.svg",
    mavjud: true,
    aksiya: false,
    taglar: ["gazli", "salqin"]
  },

  // Peripherals
  {
    id: "headset-hyperx",
    nom: "HyperX Cloud II",
    kategoriya: "Periferiyalar",
    narx: 450000,
    qisqa_tavsif: "7.1 surround sound gaming headset",
    rasm_url: "/placeholder.svg",
    mavjud: true,
    aksiya: true,
    taglar: ["headset", "gaming", "aksiya"]
  },
  {
    id: "mouse-logitech",
    nom: "Logitech G502",
    kategoriya: "Periferiyalar",
    narx: 320000,
    qisqa_tavsif: "RGB gaming mouse, 25,600 DPI",
    rasm_url: "/placeholder.svg",
    mavjud: false,
    aksiya: false,
    taglar: ["mouse", "rgb", "gaming"]
  },
  {
    id: "keyboard-razer",
    nom: "Razer BlackWidow V3",
    kategoriya: "Periferiyalar",
    narx: 680000,
    qisqa_tavsif: "Mexanik gaming klaviatura, RGB",
    rasm_url: "/placeholder.svg",
    mavjud: true,
    aksiya: false,
    taglar: ["klaviatura", "mexanik", "rgb"]
  },

  // Accessories
  {
    id: "mousepad-steelseries",
    nom: "SteelSeries QcK",
    kategoriya: "Aksessuarlar",
    narx: 85000,
    qisqa_tavsif: "Gaming mouse pad, 320x270mm",
    rasm_url: "/placeholder.svg",
    mavjud: true,
    aksiya: false,
    taglar: ["mousepad", "gaming"]
  },
  {
    id: "controller-ps5",
    nom: "DualSense Controller",
    kategoriya: "Aksessuarlar",
    narx: 380000,
    qisqa_tavsif: "PlayStation 5 kontrolyeri, haptic feedback",
    rasm_url: "/placeholder.svg",
    mavjud: true,
    aksiya: false,
    taglar: ["controller", "ps5", "dualsense"]
  },

  // Merch
  {
    id: "hoodie-million",
    nom: "Million Game Hoodie",
    kategoriya: "Merch",
    narx: 180000,
    qisqa_tavsif: "Rasmiy Million Game klubining hodisi",
    rasm_url: "/placeholder.svg",
    mavjud: true,
    aksiya: true,
    taglar: ["kiyim", "hoodie", "merch"]
  },
  {
    id: "cap-million",
    nom: "Million Game Shapka",
    kategoriya: "Merch",
    narx: 75000,
    qisqa_tavsif: "Snapback shapka, logo bilan",
    rasm_url: "/placeholder.svg",
    mavjud: true,
    aksiya: false,
    taglar: ["kiyim", "shapka", "merch"]
  }
];