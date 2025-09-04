import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Coffee, Utensils, Wine, IceCream, Pizza, Sandwich } from "lucide-react";

const Menu = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "Barchasi", icon: <Utensils className="w-4 h-4" /> },
    { id: "drinks", name: "Ichimliklar", icon: <Coffee className="w-4 h-4" /> },
    { id: "snacks", name: "Gazak", icon: <IceCream className="w-4 h-4" /> },
    { id: "food", name: "Taomlar", icon: <Pizza className="w-4 h-4" /> },
    { id: "desserts", name: "Shirinliklar", icon: <Wine className="w-4 h-4" /> },
  ];

  const menuItems = [
    // Ichimliklar
    { id: 1, name: "Cola", category: "drinks", price: "8,000", image: "🥤", popular: true },
    { id: 2, name: "Pepsi", category: "drinks", price: "8,000", image: "🥤" },
    { id: 3, name: "Fanta", category: "drinks", price: "8,000", image: "🥤" },
    { id: 4, name: "Sprite", category: "drinks", price: "8,000", image: "🥤" },
    { id: 5, name: "Qora choy", category: "drinks", price: "5,000", image: "☕" },
    { id: 6, name: "Kofe", category: "drinks", price: "12,000", image: "☕", popular: true },
    { id: 7, name: "Red Bull", category: "drinks", price: "18,000", image: "🔋" },
    { id: 8, name: "Monster Energy", category: "drinks", price: "20,000", image: "🔋" },
    { id: 9, name: "Suv", category: "drinks", price: "3,000", image: "💧" },
    { id: 10, name: "Limonad", category: "drinks", price: "10,000", image: "🍋" },

    // Gazaklar
    { id: 11, name: "Chipsi", category: "snacks", price: "6,000", image: "🍟" },
    { id: 12, name: "Popcorn", category: "snacks", price: "8,000", image: "🍿", popular: true },
    { id: 13, name: "Kirieshki", category: "snacks", price: "4,000", image: "🥨" },
    { id: 14, name: "Shokolad", category: "snacks", price: "7,000", image: "🍫" },
    { id: 15, name: "Yong'oq", category: "snacks", price: "15,000", image: "🥜" },
    { id: 16, name: "Suxarik", category: "snacks", price: "5,000", image: "🍞" },

    // Taomlar
    { id: 17, name: "Gamburger", category: "food", price: "25,000", image: "🍔", popular: true },
    { id: 18, name: "Pizza (kichik)", category: "food", price: "35,000", image: "🍕" },
    { id: 19, name: "Pizza (katta)", category: "food", price: "55,000", image: "🍕" },
    { id: 20, name: "Hot-dog", category: "food", price: "18,000", image: "🌭" },
    { id: 21, name: "Sendvich", category: "food", price: "22,000", image: "🥪" },
    { id: 22, name: "Lavash", category: "food", price: "20,000", image: "🌯" },
    { id: 23, name: "Osh", category: "food", price: "28,000", image: "🍚" },
    { id: 24, name: "Manti", category: "food", price: "32,000", image: "🥟" },

    // Shirinliklar
    { id: 25, name: "Muzqaymoq", category: "desserts", price: "12,000", image: "🍦" },
    { id: 26, name: "Tort (bo'lak)", category: "desserts", price: "15,000", image: "🍰", popular: true },
    { id: 27, name: "Donut", category: "desserts", price: "8,000", image: "🍩" },
    { id: 28, name: "Kek", category: "desserts", price: "10,000", image: "🧁" },
    { id: 29, name: "Konfet", category: "desserts", price: "5,000", image: "🍬" },
    { id: 30, name: "Pechene", category: "desserts", price: "6,000", image: "🍪" },
  ];

  const filteredItems = menuItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "all" || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <section className="pt-24 pb-12 bg-gaming-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4 animate-fade-in">
              Menyu va Narxlar
            </h1>
            <p className="text-muted-foreground text-lg animate-fade-in">
              Game club da mavjud barcha mahsulotlar va ularning narxlari
            </p>
          </div>

          {/* Search */}
          <div className="max-w-md mx-auto mb-8 animate-slide-in-left">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                placeholder="Mahsulot qidirish..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-gaming-dark border-border focus:border-primary"
              />
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-2 mb-12 animate-slide-in-right">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 ${
                  activeCategory === category.id
                    ? "bg-gradient-primary text-primary-foreground"
                    : "border-border text-foreground hover:bg-muted"
                }`}
              >
                {category.icon}
                <span>{category.name}</span>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <Card
                key={item.id}
                className="bg-gradient-surface border-border shadow-gaming hover:shadow-glow transition-all duration-300 hover:scale-105 animate-fade-in group"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="text-6xl mb-4 group-hover:animate-float">
                    {item.image}
                  </div>
                  <CardTitle className="text-lg font-semibold text-foreground flex items-center justify-center gap-2">
                    {item.name}
                    {item.popular && (
                      <Badge className="bg-gradient-secondary text-accent-foreground text-xs animate-pulse-neon">
                        TOP
                      </Badge>
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
                    {item.price} so'm
                  </div>
                  <Button 
                    size="sm" 
                    className="w-full bg-gradient-accent hover:opacity-90 text-accent-foreground transition-all duration-300"
                  >
                    Buyurtma berish
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Hech narsa topilmadi</h3>
              <p className="text-muted-foreground">Boshqa nom bilan qidirib ko'ring</p>
            </div>
          )}
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-20 bg-gaming-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold bg-gradient-secondary bg-clip-text text-transparent mb-4 animate-fade-in">
              Maxsus Takliflar
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-gradient-surface border-border shadow-gaming animate-slide-in-left">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="text-4xl mb-4">🎮</div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Gaming Combo
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    2 soat o'yin + Pizza + Cola
                  </p>
                  <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                    65,000 so'm
                  </div>
                  <Badge className="mt-2 bg-gradient-secondary text-accent-foreground">
                    20% chegirma
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-surface border-border shadow-gaming animate-slide-in-right">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="text-4xl mb-4">👥</div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Jamoaviy Paket
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    4 kishi uchun 3 soat + 4ta ichimlik
                  </p>
                  <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                    180,000 so'm
                  </div>
                  <Badge className="mt-2 bg-gradient-secondary text-accent-foreground">
                    25% chegirma
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;