import React from "react";
import { motion } from "framer-motion";
import { Button, ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";
interface NeonButtonProps extends Omit<ButtonProps, 'variant'> {
  variant?: "neon-blue" | "neon-purple" | "neon-red" | "outline-neon";
  glowOnHover?: boolean;
}
const NeonButton = React.forwardRef<HTMLButtonElement, NeonButtonProps>(({
  className,
  variant = "neon-blue",
  glowOnHover = true,
  children,
  ...props
}, ref) => {
  const getVariantClasses = () => {
    switch (variant) {
      case "neon-blue":
        return "bg-gradient-to-r from-neon-blue to-neon-cyan text-primary-foreground border-neon-blue shadow-neon hover:shadow-glow";
      case "neon-purple":
        return "bg-gradient-to-r from-neon-purple to-neon-pink text-primary-foreground border-neon-purple shadow-neon-purple hover:shadow-glow";
      case "neon-red":
        return "bg-gradient-to-r from-neon-red to-neon-pink text-primary-foreground border-neon-red hover:shadow-glow";
      case "outline-neon":
        return "border-2 border-neon-blue bg-transparent text-neon-blue hover:bg-neon-blue/10 hover:shadow-neon";
      default:
        return "bg-gradient-to-r from-neon-blue to-neon-cyan text-primary-foreground border-neon-blue shadow-neon hover:shadow-glow";
    }
  };
  return (
    <motion.div
      className={cn("relative group", glowOnHover && "hover:scale-105 transition-transform duration-300")}
      whileHover={{ scale: glowOnHover ? 1.05 : 1 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Glow Effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-neon-blue/30 via-neon-cyan/20 to-neon-blue/30 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Button */}
      <Button
        ref={ref}
        className={cn(
          "relative z-10 font-orbitron font-semibold transition-all duration-300 border",
          getVariantClasses(),
          className
        )}
        {...props}
      >
        {children}
      </Button>
    </motion.div>
  );
});
NeonButton.displayName = "NeonButton";
export { NeonButton };