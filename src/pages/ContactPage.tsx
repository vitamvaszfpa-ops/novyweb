import { useState } from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { BreadcrumbSchema, LocalBusinessSchema } from "@/components/StructuredData";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "@/components/AnimatedSection";
import { useToast } from "@/hooks/use-toast";

const ContactPage = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      toast({ title: "Zpráva odeslána", description: "Ozvu se vám co nejdříve." });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <Layout>
      <SEO
        title="Kontakt - Finanční poradce Žďár nad Sázavou | ZFP Group"
        description="Kontaktujte mě pro nezávaznou konzultaci zdarma. Telefon, email nebo osobní schůzka v Žďáru nad Sázavou na Havlíčkově náměstí. Odpovídám do 24 hodin."
        canonical="/kontakt"
      />
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[{ name: "Úvod", url: "/" }, { name: "Kontakt", url: "/kontakt" }]} />

      {/* Map Section - at the top */}
      <section className="pt-24">
        <div className="w-full h-64 md:h-80 relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2588.123456789!2d15.9393!3d49.5625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470d05e1f2e8c5d5%3A0x1234567890abcdef!2sHavl%C3%AD%C4%8Dkovo%20n%C3%A1m.%20152%2F4%2C%20591%2001%20%C5%BD%C4%8F%C3%A1r%20nad%20S%C3%A1zavou!5e0!3m2!1scs!2scz!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa - ZFP Žďár nad Sázavou"
            className="grayscale hover:grayscale-0 transition-all duration-500"
          />
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-background/20 to-transparent" />
        </div>
      </section>

      <section className="py-12 bg-hero">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="max-w-4xl">
            <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-4">Kontakt</span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              Pojďme se <span className="text-gradient bg-gradient-to-r from-primary to-accent">spojit</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl">
              První konzultace je zcela zdarma a nezávazná. Vyplňte formulář nebo mě kontaktujte přímo.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 bg-section">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <AnimatedSection direction="left">
              <Card variant="premium" className="p-8">
                <CardContent className="p-0">
                  <h2 className="font-serif text-2xl font-semibold text-foreground mb-6">Napište mi</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div><Label htmlFor="name">Jméno *</Label><Input id="name" required className="mt-2" /></div>
                      <div><Label htmlFor="phone">Telefon *</Label><Input id="phone" type="tel" required className="mt-2" /></div>
                    </div>
                    <div><Label htmlFor="email">Email</Label><Input id="email" type="email" className="mt-2" /></div>
                    <div><Label htmlFor="message">Zpráva</Label><Textarea id="message" rows={4} className="mt-2" placeholder="Jak vám mohu pomoci?" /></div>
                    <Button type="submit" variant="cta" size="lg" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? "Odesílám..." : <>Odeslat zprávu <Send className="w-4 h-4 ml-2" /></>}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <div className="space-y-6">
                <Card variant="premium" className="p-6">
                  <CardContent className="p-0 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center"><Phone className="w-6 h-6 text-primary" /></div>
                    <div><div className="font-semibold">Telefon</div><a href="tel:+420123456789" className="text-muted-foreground hover:text-primary">+420 123 456 789</a></div>
                  </CardContent>
                </Card>
                <Card variant="premium" className="p-6">
                  <CardContent className="p-0 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center"><Mail className="w-6 h-6 text-primary" /></div>
                    <div><div className="font-semibold">Email</div><a href="mailto:info@zfp-zdar.cz" className="text-muted-foreground hover:text-primary">info@zfp-zdar.cz</a></div>
                  </CardContent>
                </Card>
                <Card variant="premium" className="p-6">
                  <CardContent className="p-0 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center"><MapPin className="w-6 h-6 text-primary" /></div>
                    <div>
                      <div className="font-semibold">Adresa</div>
                      <address className="text-muted-foreground not-italic">
                        ZFP Žďár nad Sázavou, a.s.<br />
                        Havlíčkovo nám. 152/4<br />
                        591 01 Žďár nad Sázavou
                      </address>
                    </div>
                  </CardContent>
                </Card>
                <Card variant="premium" className="p-6">
                  <CardContent className="p-0 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center"><Clock className="w-6 h-6 text-primary" /></div>
                    <div><div className="font-semibold">Pracovní doba</div><div className="text-muted-foreground">Po–Pá: 9:00–17:00</div></div>
                  </CardContent>
                </Card>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
