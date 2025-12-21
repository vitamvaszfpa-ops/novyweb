import { Link } from "react-router-dom";
import { Home, CheckCircle, ArrowRight, RefreshCw, CreditCard, FileText, TrendingDown, Building2 } from "lucide-react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { BreadcrumbSchema } from "@/components/StructuredData";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection, StaggerChildren, StaggerItem } from "@/components/AnimatedSection";
import MortgageCalculator from "@/components/MortgageCalculator";

const mortgageServices = [
  {
    icon: Home,
    title: "Hypotéky na bydlení",
    description: "Financování koupě bytu, domu nebo pozemku. Srovnání nabídek od 10+ bank.",
  },
  {
    icon: Building2,
    title: "Hypotéky na rekonstrukci",
    description: "Financování stavebních úprav a modernizace stávající nemovitosti.",
  },
  {
    icon: RefreshCw,
    title: "Refinancování",
    description: "Přechod k výhodnější hypotéce. Pomůžu vám ušetřit na úrocích.",
  },
  {
    icon: CreditCard,
    title: "Spotřebitelské úvěry",
    description: "Menší úvěry bez zástavy nemovitosti. Pro rychlejší financování.",
  },
  {
    icon: TrendingDown,
    title: "Konsolidace úvěrů",
    description: "Sloučení více půjček do jedné s nižší splátkou a lepší přehledností.",
  },
];

const benefits = [
  "Srovnání nabídek od 10+ bank",
  "Vyjednání individuálních podmínek",
  "Kompletní vyřízení žádosti",
  "Refinancování stávajících hypoték",
  "Poradenství při koupi nemovitosti",
  "Spotřebitelské úvěry",
];

const MortgagesPage = () => {
  return (
    <Layout>
      <SEO
        title="Hypotéky a úvěry Žďár nad Sázavou - Nejlepší podmínky, srovnání bank | ZFP Group"
        description="Hypoteční poradenství na Vysočině. Srovnání nabídek od 10+ bank, refinancování, spotřebitelské úvěry. Najdu vám nejlepší podmínky. Konzultace zdarma."
        canonical="/sluzby/hypoteky"
      />
      <BreadcrumbSchema
        items={[
          { name: "Úvod", url: "/" },
          { name: "Služby", url: "/sluzby" },
          { name: "Hypotéky a úvěry", url: "/sluzby/hypoteky" },
        ]}
      />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-hero relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl">
            <AnimatedSection>
              <Link to="/sluzby" className="inline-flex items-center text-primary text-sm font-medium mb-4 hover:underline">
                ← Zpět na služby
              </Link>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <Home className="w-8 h-8 text-primary" />
                </div>
                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground font-bold">
                  Hypotéky a úvěry
                </h1>
              </div>
              <p className="text-muted-foreground text-lg max-w-2xl mb-8">
                Najdu pro vás nejvýhodnější financování bydlení. Srovnávám nabídky od více než 
                10 bank a zajistím vám nejlepší podmínky. Pomohu i s refinancováním.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="hero" size="xl" className="btn-glow" asChild>
                  <Link to="/kontakt">
                    Nezávazná konzultace
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <MortgageCalculator />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-section">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6 font-bold">
              Úvěrové produkty, které nabízím
            </h2>
            <p className="text-muted-foreground text-lg">
              Ať už kupujete první byt, stavíte dům nebo chcete refinancovat stávající hypotéku – 
              najdu pro vás optimální řešení.
            </p>
          </AnimatedSection>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mortgageServices.map((service) => (
              <StaggerItem key={service.title}>
                <Card variant="glass" className="h-full p-6">
                  <CardContent className="p-0">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6 font-bold">
                Jak funguje hypoteční poradenství?
              </h2>
              <div className="space-y-6 text-muted-foreground">
                <p>
                  Jako nezávislý poradce nejsem vázán na jednu banku. Srovnávám nabídky od více 
                  než 10 bank a vyjednávám individuální podmínky, které byste jako jednotlivec 
                  nezískali.
                </p>
                <p>
                  Celý proces vyřídím za vás – od prvního výpočtu přes sběr dokumentů až po 
                  podpis smlouvy. Vy se můžete soustředit na hledání nemovitosti, já se postarám 
                  o financování.
                </p>
                <p>
                  Mé služby jsou pro vás zdarma – odměnu dostávám od banky. Vy získáte lepší 
                  podmínky, než byste dostali přímo na pobočce, a ušetříte čas i starosti.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <Card variant="premium" className="p-8">
                <CardContent className="p-0">
                  <h3 className="font-heading text-xl font-bold text-foreground mb-6">
                    Co získáte spoluprací se mnou
                  </h3>
                  <div className="space-y-4">
                    {benefits.map((benefit, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* For Whom */}
      <section className="py-24 bg-section">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <AnimatedSection direction="left">
              <Card variant="glass" className="p-6 h-full">
                <CardContent className="p-0">
                  <h3 className="font-heading text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <CheckCircle className="w-6 h-6 text-primary" />
                    Pro koho je služba vhodná
                  </h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>• Každý, kdo plánuje koupi nemovitosti</li>
                    <li>• Ti, kdo staví nebo rekonstruují</li>
                    <li>• Lidé s hypotékou, kteří chtějí ušetřit</li>
                    <li>• Ti, kdo potřebují spotřebitelský úvěr</li>
                    <li>• Každý, kdo chce nejlepší podmínky</li>
                  </ul>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <Card variant="glass" className="p-6 h-full">
                <CardContent className="p-0">
                  <h3 className="font-heading text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full border-2 border-muted-foreground/30 flex items-center justify-center text-sm">✕</span>
                    Pro koho služba není
                  </h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>• Pro ty, kdo nemají stabilní příjem</li>
                    <li>• Pro ty s negativním záznamem v registru dlužníků</li>
                    <li>• Pro ty, kdo hledají rychlé půjčky bez dokumentace</li>
                  </ul>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-hero">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center max-w-2xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6 font-bold">
              Připraveni financovat svůj sen?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Domluvte si bezplatnou konzultaci a společně najdeme nejlepší hypotéku pro vás. 
              První schůzka je vždy zdarma a nezávazná.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="xl" className="btn-glow" asChild>
                <Link to="/kontakt">
                  Mám zájem o konzultaci
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <Link to="/sluzby">
                  Zpět na služby
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default MortgagesPage;
