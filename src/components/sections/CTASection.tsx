import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle, Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/AnimatedSection";
export const CTASection = () => {
  return <section className="py-24 relative overflow-hidden">
      {/* Subtle divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/30 to-transparent" />
      
      {/* Accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <AnimatedSection className="max-w-4xl mx-auto text-center">
          <span className="inline-block text-primary text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            Začněte ještě dnes
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 font-bold">
            Připraveni na první krok k{" "}
            <span className="text-gradient">
              lepší finanční budoucnosti?
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
            Nezávazná konzultace je zcela zdarma. Společně probereme vaši situaci 
            a najdeme optimální cestu k vašim finančním cílům.
          </p>

          {/* CTA Options */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 max-w-3xl mx-auto">
            <Link to="/kontakt" className="flex items-center justify-center gap-3 p-5 rounded-xl glass hover:border-primary/30 transition-all group">
              <Calendar className="w-6 h-6 text-primary" />
              <div className="text-left">
                <div className="text-foreground font-semibold text-sm">
                  Osobní schůzka
                </div>
                <div className="text-muted-foreground text-xs">
                  Žďár nad Sázavou
                </div>
              </div>
            </Link>
            <a href="tel:+420123456789" className="flex items-center justify-center gap-3 p-5 rounded-xl glass hover:border-primary/30 transition-all group">
              <Phone className="w-6 h-6 text-primary" />
              <div className="text-left">
                <div className="text-foreground font-semibold text-sm">
                  Zavolejte mi
                </div>
                <div className="text-muted-foreground text-xs">
                  +420 775 310 825  
                </div>
              </div>
            </a>
            <Link to="/kontakt" className="flex items-center justify-center gap-3 p-5 rounded-xl glass hover:border-primary/30 transition-all group">
              <MessageCircle className="w-6 h-6 text-primary" />
              <div className="text-left">
                <div className="text-foreground font-semibold text-sm">
                  Online konzultace
                </div>
                <div className="text-muted-foreground text-xs">
                  Video hovor
                </div>
              </div>
            </Link>
          </div>

          <Button variant="hero" size="xl" className="btn-glow glow-primary-strong" asChild>
            <Link to="/kontakt">
              Domluvit konzultaci zdarma
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </AnimatedSection>
      </div>
    </section>;
};
export default CTASection;