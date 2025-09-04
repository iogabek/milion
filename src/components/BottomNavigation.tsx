import { Link, useLocation } from "react-router-dom";
import { Home, ShoppingBag, Images } from "lucide-react";
import { cn } from "@/lib/utils";

const BottomNavigation = () => {
  const location = useLocation();

  const navItems = [
    { 
      href: "/", 
      label: "Million", 
      icon: Home,
      isActive: location.pathname === "/"
    },
    { 
      href: "/shop", 
      label: "Do'kon", 
      icon: ShoppingBag,
      isActive: location.pathname === "/shop"
    },
    { 
      href: "/gallery", 
      label: "Galereya", 
      icon: Images,
      isActive: location.pathname === "/gallery"
    },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-gaming-dark/95 backdrop-blur-lg border-t border-border md:hidden">
      <div className="flex items-center justify-around py-2">
        {navItems.map((item) => {
          const IconComponent = item.icon;
          return (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "flex flex-col items-center justify-center p-3 rounded-lg transition-all duration-300 min-w-[60px]",
                item.isActive 
                  ? "text-primary bg-primary/10" 
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              )}
            >
              <IconComponent 
                className={cn(
                  "w-6 h-6 mb-1 transition-all duration-300",
                  item.isActive && "animate-pulse-neon"
                )}
              />
              <span className="text-xs font-medium">
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNavigation;