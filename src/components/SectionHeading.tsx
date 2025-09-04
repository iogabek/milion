import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  variant?: "blue" | "purple" | "cyan";
}

const SectionHeading = ({ 
  title, 
  subtitle, 
  className, 
  variant = "blue" 
}: SectionHeadingProps) => {
  const getGradientClass = () => {
    switch (variant) {
      case "purple":
        return "bg-gradient-secondary bg-clip-text text-transparent";
      case "cyan":
        return "bg-gradient-accent bg-clip-text text-transparent";
      default:
        return "bg-gradient-primary bg-clip-text text-transparent";
    }
  };

  return (
    <motion.div
      className={cn("text-center", className)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className={cn(
        "text-4xl md:text-5xl font-orbitron font-bold mb-4",
        getGradientClass()
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeading;