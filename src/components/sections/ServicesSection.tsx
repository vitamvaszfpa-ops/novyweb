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
    description: "Pojištění domácnosti, nemovitosti, auta i rodiny. Vyberu to, co skutečně potřebujete, bez zbytečného přeplácení.",
    href: "/sluzby/pojisteni",
  },
  {
    icon: TrendingUp,
    title: "Investice",
    description: "Zhodnoťte své peníze – od pravidelného spoření po větší částky. Investovat můžete už od 500 Kč měsíčně.",
    href: "/sluzby/investice",
  },
  {
    icon: Briefcase,
    title: "Finanční plánování",
    description: "Uděláme si pořádek ve vašich financích. Společně sestavíme plán, který vám pomůže dosáhnout vašich cílů.",
    href: "/sluzby/financni-planovani",
  },
  {
    icon: Building2,
    title: "Reality",
    description: "Kupujete nebo prodáváte nemovitost? Pomohu s odhadem ceny, financováním i celým procesem.",
    href: "/sluzby/reality",
  },
  {
    icon: PiggyBank,
    title: "Důchodové spoření",
    description: "Připravte se na penzi. Ukážu vám, jak využít státní příspěvky a daňové výhody naplno.",
    href: "/sluzby/duchodove-sporeni",
  },
  {
    icon: ClipboardCheck,
    title: "Penzijní audit",
    description: "Spočítám vám budoucí důchod na základě dat z ČSSZ. Zjistíte, jestli vám něco nechybí.",
    href: "/sluzby/penzijni-audit",
  },
  {
    icon: Home,
    title: "Hypotéky a úvěry",
    description: "Najdu nejlepší hypotéku ze všech bank. Vyřídím vše za vás – ušetříte čas i peníze.",
    href: "/sluzby/hypoteky",
  },
  {
    icon: HelpCircle,
    title: "Ostatní služby",
    description: "Potřebujete poradit s něčím konkrétním? Individuální konzultace na míru vaší situaci.",
    href: "/sluzby/ostatni",
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
            Jak vám mohu pomoct
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 font-bold">
            Finance nemusí být složité
          </h2>
          <p className="text-muted-foreground text-lg">
            Ať řešíte hypotéku na první byt, pojištění domácnosti nebo jak rozumně investovat – vysvětlím vám vše srozumitelně a najdeme řešení na míru.
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
