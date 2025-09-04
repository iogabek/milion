import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Gamepad2, MessageCircle } from "lucide-react";
import { NeonButton } from "@/components/NeonButton";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: "/", label: "Million" },
    { href: "/shop", label: "Do'kon" },
    { href: "/gallery", label: "Galereya" },
  ];

  const scrollToMap = () => {
    const mapSection = document.getElementById('map-section');
    if (mapSection) {
      mapSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      scrolled ? "bg-gaming-dark/95 backdrop-blur-lg border-b border-border shadow-gaming" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2 text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
          >
            <Gamepad2 className="w-8 h-8 text-primary animate-pulse-neon" />
            <span>Million Game</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "text-foreground hover:text-primary transition-colors duration-300 relative group font-medium",
                  location.pathname === item.href && "text-primary"
                )}
              >
                {item.label}
                <span className={cn(
                  "absolute -bottom-1 left-0 h-0.5 bg-gradient-primary transition-all duration-300",
                  location.pathname === item.href ? "w-full" : "w-0 group-hover:w-full"
                )} />
              </Link>
            ))}
            
            <NeonButton variant="outline-neon" size="sm" className="ml-4" onClick={scrollToMap}>
              <Gamepad2 className="w-4 h-4 mr-2" />
              Game Club
            </NeonButton>
          </div>

          {/* Mobile Menu Button - Hidden since we use bottom nav */}
          <div className="md:hidden" />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;