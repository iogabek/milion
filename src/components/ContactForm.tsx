import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Send, Phone, Mail, MapPin } from "lucide-react";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    telegram: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const TELEGRAM_TOKEN = "8142036375:AAHPMaSXl5_19nuhnfqAEFQSEv9GS4tF4MM";
  const TELEGRAM_CHAT_ID = "5678625270";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
  const text = `🆕 Yangi fikr!\n\n👤 Ism: ${form.name}\n📞 Telefon: ${form.phone}\n💬 Telegram: ${form.telegram || "-"}\n📝 Xabar: ${form.message}`;
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
      setSuccess(true);
      setForm({ name: "", phone: "", telegram: "", message: "" });
    } catch (err) {
      // Error handling (optional)
    }
    setLoading(false);
  };

  return (
    <section className="py-20 bg-gaming-surface">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4 animate-fade-in">
            Bog'lanish
          </h2>
          <p className="text-muted-foreground text-lg animate-fade-in">Qo'shimcha fikr va takliflaringizni qoldiring :)</p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8 animate-slide-in-left">
            <Card className="bg-gradient-surface border-border shadow-gaming">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center">
                    {/* Clock icon (SVG) */}
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-accent-foreground">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
                      <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">Ish vaqti</h3>
                    <p className="text-muted-foreground">8:00 dan 4:00 gacha<br />Haftani 7 kuni</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-surface border-border shadow-gaming">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">Telefon</h3>
                    <p className="text-muted-foreground">+998 91 911 11 15</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-surface border-border shadow-gaming">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center">
                    {/* Instagram icon (SVG) */}
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-accent-foreground">
                      <rect x="2" y="2" width="20" height="20" rx="6" stroke="currentColor" strokeWidth="2" fill="none" />
                      <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" fill="none" />
                      <circle cx="17" cy="7" r="1.5" fill="currentColor" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">Instagram</h3>
                    <p className="text-muted-foreground">@million_gameclub</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-surface border-border shadow-gaming">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">Manzil</h3>
                    <p className="text-muted-foreground">Surxondaryo, Denov</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-gradient-surface border-border shadow-gaming animate-slide-in-right">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground">Ismingiz</Label>
                    <Input id="name" name="name" value={form.name} onChange={handleChange} className="bg-gaming-dark border-border focus:border-primary" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-foreground">Telefon</Label>
                    <Input id="phone" name="phone" value={form.phone} onChange={handleChange} className="bg-gaming-dark border-border focus:border-primary" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="telegram" className="text-foreground">Telegram username (ixtiyoriy)</Label>
                  <Input id="telegram" name="telegram" value={form.telegram} onChange={handleChange} className="bg-gaming-dark border-border focus:border-primary" placeholder="@username" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground">Qo'shimcha fikrlar</Label>
                  <Textarea id="message" name="message" value={form.message} onChange={handleChange} rows={4} className="bg-gaming-dark border-border focus:border-primary resize-none" placeholder="O'z fikrlaringizni yozing..." />
                </div>
                <Button type="submit" className="w-full bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold py-3 rounded-lg transition-all duration-300 hover:shadow-glow" disabled={loading}>
                  <Send className="w-5 h-5 mr-2" />
                  {loading ? "Yuborilmoqda..." : "Xabar yuborish"}
                </Button>
                {success && <div className="text-green-500 mt-2">Xabar muvaffaqiyatli yuborildi!</div>}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;