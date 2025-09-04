import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Coffee, Gamepad2, Star } from "lucide-react";

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader = ({ onComplete }: PreloaderProps) => {
  const [progress, setProgress] = useState(0);
  const [showSkip, setShowSkip] = useState(false);
  const [currentIcon, setCurrentIcon] = useState(0);

  const icons = [Gamepad2, Zap, Coffee, Star];
  const loadingTexts = [
    "Serverga ulanmoqda...",
    "O'yinlar yuklanmoqda...",
    "Grafika tayyorlanmoqda...",
    "Tezkor bo'lish uchun tayyorgarlik ko'rilmoqda..."
  ];

  useEffect(() => {
    const timer = setTimeout(() => setShowSkip(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const iconInterval = setInterval(() => {
      setCurrentIcon(prev => (prev + 1) % icons.length);
    }, 800);

    return () => clearInterval(iconInterval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 60) {
          return prev + Math.random() * 12;
        } else if (prev < 90) {
          return prev + Math.random() * 3;
        } else if (prev < 100) {
          return prev + Math.random() * 1;
        } else {
          clearInterval(interval);
          setTimeout(onComplete, 800);
          return 100;
        }
      });
    }, 120);

    return () => clearInterval(interval);
  }, [onComplete]);

  const handleSkip = () => {
    setProgress(100);
    setTimeout(onComplete, 400);
  };

  const currentTextIndex = Math.floor((progress / 100) * loadingTexts.length);
  const CurrentIcon = icons[currentIcon];

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: "radial-gradient(ellipse at center, hsl(var(--gaming-dark)) 0%, hsl(var(--background)) 100%)"
      }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'grid-move 20s linear infinite'
        }} />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -100],
              opacity: [0, 1, 0],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Premium Logo Section */}
      <motion.div
        className="flex flex-col items-center mb-12 relative z-10"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Glowing Circle Background */}
        <div className="relative mb-8">
          <motion.div
            className="absolute inset-0 w-32 h-32 bg-gradient-to-r from-primary/20 via-neon-cyan/20 to-primary/20 rounded-full blur-2xl"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 360],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Rotating Icon Container */}
          <motion.div
            className="relative w-24 h-24 bg-gradient-to-br from-gaming-dark via-primary/20 to-gaming-dark rounded-2xl border-2 border-primary/50 shadow-2xl shadow-primary/30 flex items-center justify-center"
            animate={{ rotateY: [0, 360] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIcon}
                initial={{ opacity: 0, scale: 0.5, rotateY: 90 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.5, rotateY: -90 }}
                transition={{ duration: 0.5 }}
              >
                <CurrentIcon className="w-12 h-12 text-primary" />
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
        
        {/* Premium Brand Text */}
        <motion.div
          className="text-center"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-orbitron font-bold mb-2">
            <span className="bg-gradient-to-r from-primary via-neon-cyan to-primary bg-clip-text text-transparent bg-300% animate-gradient">
              MILLION
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-white/90 mb-4 tracking-wider">
            GAME CLUB
          </h2>
          <div className="flex items-center justify-center space-x-2">
            <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-primary"></div>
            <span className="text-sm text-primary/80 font-medium tracking-widest">PREMIUM EXPERIENCE</span>
            <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-primary"></div>
          </div>
        </motion.div>
      </motion.div>

      {/* Enhanced Progress Section */}
      <motion.div
        className="w-96 max-w-sm mx-auto px-4"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        {/* Loading Text */}
        <motion.div 
          className="text-center mb-6"
          key={currentTextIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm text-muted-foreground">
            {loadingTexts[Math.min(currentTextIndex, loadingTexts.length - 1)]}
          </p>
        </motion.div>

        {/* Premium Progress Bar */}
        <div className="relative">
          {/* Background Track */}
          <div className="h-3 bg-gaming-dark rounded-full border border-primary/20 overflow-hidden shadow-inner">
            {/* Progress Fill */}
            <motion.div
              className="h-full bg-gradient-to-r from-primary via-neon-cyan to-primary rounded-full relative overflow-hidden"
              style={{ width: `${Math.min(progress, 100)}%` }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {/* Shimmer Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"
                animate={{ x: [-100, 300] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          </div>
          
          {/* Glow Effect */}
          <div 
            className="absolute top-0 left-0 h-3 bg-gradient-to-r from-primary/50 via-neon-cyan/50 to-primary/50 rounded-full blur-sm"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>
        
        {/* Progress Info */}
        <div className="flex justify-between items-center mt-4">
          <motion.span 
            className="text-lg font-semibold bg-gradient-primary bg-clip-text text-transparent"
            animate={{ scale: progress === 100 ? [1, 1.1, 1] : 1 }}
            transition={{ duration: 0.3 }}
          >
            {Math.round(progress)}%
          </motion.span>
          
          {showSkip && progress < 100 && (
            <motion.button
              onClick={handleSkip}
              className="px-4 py-2 text-sm bg-gaming-dark/50 text-primary border border-primary/30 rounded-lg hover:bg-primary/10 hover:border-primary/60 transition-all duration-300 backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              O'tkazib yuborish
            </motion.button>
          )}
        </div>
      </motion.div>

      {/* Premium Loading Complete */}
      {progress === 100 && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center bg-background/90 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="text-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 1 }}
            >
              <Star className="w-8 h-8 text-white" />
            </motion.div>
            <h3 className="text-xl font-semibold text-foreground">Tayyor!</h3>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Preloader;