import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Gamepad2, Coffee } from "lucide-react";
import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NeonButton } from "@/components/NeonButton";
import gamingCafeModern from "@/assets/hero/gaming-cafe-modern.jpg";
import vipGamingRoom from "@/assets/hero/vip-gaming-room.jpg";
import tournamentArena from "@/assets/hero/tournament-arena.jpg";

const HeroCarousel = () => {
  // Smooth scroll to map section
  const scrollToMap = () => {
    const mapSection = document.getElementById('map-section');
    if (mapSection) {
      mapSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Million Game Club",
      subtitle: "faqat comfort hohlovchilar uchun",
      description: "Eng yaxshi jihozlar va qulay muhit sizni kutmoqda",
      image: gamingCafeModern
    },
    {
      id: 2,
      title: "Million Game",
      subtitle: "sifatli mahsulotlar",
      description: "Yuqori sifatli gaming tajriba va professional xizmat",
      image: vipGamingRoom
    },
    {
      id: 3,
      title: "Million Game",
      subtitle: "turnir hohlovchilar uchun",
      description: "Haftalik turnirlar va championship imkoniyatlari",
      image: tournamentArena
    }
  ];

  // Auto-play carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background images with Ken Burns effect */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`bg-${currentSlide}`}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-gaming-dark/40 via-gaming-dark/60 to-gaming-dark/80" />
            <div className="absolute inset-0 bg-gradient-to-r from-gaming-dark/50 via-transparent to-gaming-dark/50" />
          </div>
        </motion.div>
      </AnimatePresence>
      
      {/* Main content container */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4 max-w-6xl mx-auto">
        {/* Text content with enhanced animations */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-orbitron font-bold bg-gradient-primary bg-clip-text text-transparent mb-6 leading-tight"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              style={{
                textShadow: '0 0 30px rgba(56, 189, 248, 0.3), 0 0 60px rgba(56, 189, 248, 0.2)',
                filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.5))'
              }}
            >
              {slides[currentSlide].title}
            </motion.h1>
            
            <motion.h2 
              className="text-2xl md:text-4xl lg:text-5xl font-semibold text-white mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              style={{
                textShadow: '0 2px 10px rgba(0,0,0,0.8)',
                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.7))'
              }}
            >
              {slides[currentSlide].subtitle}
            </motion.h2>
            
            <motion.p 
              className="text-lg md:text-2xl lg:text-3xl text-white/95 mb-12 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              style={{
                textShadow: '0 2px 8px rgba(0,0,0,0.9)',
                filter: 'drop-shadow(0 1px 3px rgba(0,0,0,0.8))'
              }}
            >
              {slides[currentSlide].description}
            </motion.p>

            {/* Action buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            >
              <NeonButton 
                variant="neon-blue" 
                size="lg" 
                className="text-lg px-8 py-4"
                onClick={scrollToMap}
              >
                <Gamepad2 className="w-6 h-6 mr-3" />
                Clubga kelish
              </NeonButton>
              <a
                href="https://instagram.com/million_gameclub"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg px-8 py-4"
              >
                <NeonButton variant="outline-neon" size="lg">
                  <Instagram className="w-6 h-6 mr-3" />
                  Instagram
                </NeonButton>
              </a>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Enhanced navigation arrows */}
      <Button
        variant="ghost"
        size="icon"
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-gaming-dark/60 hover:bg-gaming-dark/80 text-white hover:text-primary border border-white/20 hover:border-primary/60 backdrop-blur-md rounded-full transition-all duration-300 hover:scale-110 z-20"
      >
        <ChevronLeft className="w-8 h-8" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-gaming-dark/60 hover:bg-gaming-dark/80 text-white hover:text-primary border border-white/20 hover:border-primary/60 backdrop-blur-md rounded-full transition-all duration-300 hover:scale-110 z-20"
      >
        <ChevronRight className="w-8 h-8" />
      </Button>

      {/* Enhanced dots indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex justify-center space-x-4 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-500 rounded-full border-2 ${
              currentSlide === index
                ? "w-5 h-5 bg-primary border-primary scale-125 shadow-lg shadow-primary/50"
                : "w-4 h-4 bg-white/30 border-white/50 hover:bg-white/50 hover:border-white/70 hover:scale-110"
            }`}
          />
        ))}
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 border border-primary/30 rounded-full animate-pulse" />
        <div className="absolute bottom-20 right-10 w-16 h-16 border border-neon-cyan/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/3 right-20 w-12 h-12 border border-neon-pink/30 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
      </div>
    </div>
  );
};

export default HeroCarousel;