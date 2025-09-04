import { MapPin, Clock, MessageCircle, Instagram, Wifi, Zap } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const contactInfo = [
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Manzil",
      value: "Surxondaryo, Denov"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      label: "Ish vaqti",
      value: "8:00 dan 4:00 gacha, Haftani 7 kuni"
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      label: "Telegram",
      value: "@million_gameclub"
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      label: "Instagram",
      value: "@million_gameclub"
    }
  ];

  return (
    <footer className="bg-gaming-surface border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {contactInfo.map((item, index) => (
            <motion.div
              key={item.label}
              className="flex items-start space-x-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-primary mt-1">
                {item.icon}
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-1">
                  {item.label}
                </div>
                <div className="text-foreground font-medium">
                  {item.value}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <motion.div
            className="flex items-center space-x-4 mb-4 md:mb-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="text-muted-foreground">
              © {currentYear} Million Game Club
            </span>
          </motion.div>

          <motion.div
            className="flex items-center space-x-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Wifi className="w-4 h-4 text-neon-blue" />
              <span>Wi-Fi</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Zap className="w-4 h-4 text-neon-purple" />
              <span>Zaryadlash</span>
            </div>
          </motion.div>
        </div>
        {/* Web dasturlash xizmati - zamonaviy dizayn */}
        <div className="mt-8 flex justify-center">
          <div className="bg-gradient-to-r from-primary/30 via-background to-primary/30 border border-primary/40 rounded-xl shadow-lg px-6 py-4 flex flex-col md:flex-row items-center gap-4 w-full max-w-xl">
            <div className="flex items-center gap-2 mb-2 md:mb-0">
              {/* Dasturchi ikoni */}
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-primary"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/><path d="M12 16v-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><circle cx="12" cy="10" r="1" fill="currentColor"/></svg>
              <span className="font-bold text-foreground">Web dasturlash xizmati</span>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-primary"><path d="M16 3.13c-2.5-.5-5.5-.5-8 0C5.13 3.5 3.5 5.13 3.13 8c-.5 2.5-.5 5.5 0 8 .37 2.87 2 4.5 4.87 4.87 2.5.5 5.5.5 8 0 2.87-.37 4.5-2 4.87-4.87.5-2.5.5-5.5 0-8C20.5 5.13 18.87 3.5 16 3.13z" stroke="currentColor" strokeWidth="2"/><path d="M12 8v4l3 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg> Isoqov Og'abek</span>
              <span className="flex items-center gap-1"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-primary"><path d="M22 16.92V19a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 3 5.18 2 2 0 0 1 5 3h2.09a2 2 0 0 1 2 1.72c.13 1.06.37 2.09.72 3.09a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45c1 .35 2.03.59 3.09.72A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2"/></svg> <a href="tel:+998976998878" className="underline">+998 97 699 88 78</a></span>
              <span className="flex items-center gap-1"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-primary"><rect x="2" y="2" width="20" height="20" rx="6" stroke="currentColor" strokeWidth="2"/><circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2"/><circle cx="17" cy="7" r="1.5" fill="currentColor"/></svg> <a href="https://instagram.com/ogabek.live" target="_blank" rel="noopener noreferrer" className="underline">@ogabek.live</a></span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;