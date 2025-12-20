import { Link } from "react-router-dom";
import { 
  TrendingUp, 
  Shield, 
  Home, 
  PiggyBank, 
  Briefcase,
  Building2,
  ClipboardCheck,
  HelpCircle,
  ArrowRight 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AnimatedSection, StaggerChildren, StaggerItem } from "@/components/AnimatedSection";

const services = [
  {
    icon: Shield,
    title: "Pojištění",
    description: "Životní, majetkové, firemní, odpovědnostní, cestovní pojištění. Komplexní ochrana pro vás, rodinu i firmu.",
    href: "/sluzby#pojisteni",
  },
  {
    icon: TrendingUp,
    title: "Investice",
    description: "FKI, investiční zlato, podílové fondy, realitní fondy, participace. Investujte od 500 Kč měsíčně až po milionové vklady.",
    href: "/sluzby#investice",
  },
  {
    icon: Briefcase,
    title: "Finanční plánování",
    description: "Komplexní pohled na vaše finance. Vytvoříme plán, který vám pomůže dosáhnout životních cílů.",
    href: "/sluzby#financni-planovani",
  },
  {
    icon: Building2,
    title: "Reality",
    description: "Koupě, prodej, financování, pronájem, asistovaný nákup. Kompletní realitní servis profesionálně a lokálně.",
    href: "/sluzby#reality",
  },
  {
    icon: PiggyBank,
    title: "Důchodové spoření",
    description: "Připravte se na klidný důchod. Penzijní spoření propojené s investicemi pro maximální výnos.",
    href: "/sluzby#duchodove-sporeni",
  },
  {
    icon: ClipboardCheck,
    title: "Penzijní audit",
    description: "Na základě výstupu IOLDP z OSSZ uděláme rozbor chybějících dob a spočítáme váš budoucí důchod.",
    href: "/sluzby#penzijni-audit",
  },
  {
    icon: Home,
    title: "Hypotéky a úvěry",
    description: "Najdu pro vás nejvýhodnější financování bydlení. Srovnání nabídek od více bank.",
    href: "/sluzby#hypoteky",
  },
  {
    icon: HelpCircle,
    title: "Ostatní služby",
    description: "Cokoliv dalšího, co potřebujete vyřešit. Individuální konzultace za 2 500 Kč/hodinu.",
    href: "/sluzby#ostatni",
  },
];

export const ServicesSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Subtle divider - not a hard section break */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/30 to-transparent" />
      
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section header */}
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            Služby
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 font-bold">
            Komplexní finanční poradenství
          </h2>
          <p className="text-muted-foreground text-lg">
            Nabízím široké spektrum finančních služeb v regionu Vysočina, vždy přizpůsobených 
            vašim konkrétním potřebám a životní situaci.
          </p>
          <div className="section-divider mt-8" />
        </AnimatedSection>

        {/* Services grid */}
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <Link to={service.href} className="block h-full group">
                <Card variant="glass" className="h-full p-6 group-hover:border-primary/30">
                  <CardContent className="p-0">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-heading text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <div className="flex items-center text-primary text-sm font-medium">
                      <span>Více</span>
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </StaggerItem>
          ))}
        </StaggerChildren>

        {/* CTA */}
        <AnimatedSection className="text-center mt-12">
          <Button variant="hero" size="xl" className="btn-glow" asChild>
            <Link to="/kontakt">
              Konzultace zdarma
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ServicesSection;
