import { Link } from "react-router-dom";
import { Briefcase, CheckCircle, ArrowRight, Target, TrendingUp, Calendar, PiggyBank, Shield } from "lucide-react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { BreadcrumbSchema } from "@/components/StructuredData";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection, StaggerChildren, StaggerItem } from "@/components/AnimatedSection";

const planningSteps = [
  {
    icon: Target,
    title: "Analýza současné situace",
    description: "Zmapujeme vaše příjmy, výdaje, aktiva a závazky. Získáte jasný přehled o tom, kde stojíte.",
  },
  {
    icon: Calendar,
    title: "Definice cílů",
    description: "Společně určíme vaše krátkodobé i dlouhodobé finanční cíle a priority.",
  },
  {
    icon: TrendingUp,
    title: "Návrh strategie",
    description: "Vytvořím komplexní plán, jak dosáhnout vašich cílů s optimálním využitím zdrojů.",
  },
  {
    icon: PiggyBank,
    title: "Implementace",
    description: "Pomohu vám uvést plán do praxe – výběr produktů, nastavení spoření, investic.",
  },
  {
    icon: Shield,
    title: "Pravidelná revize",
    description: "Vaši situaci průběžně sledujeme a plán upravujeme podle změn v životě.",
  },
];

const benefits = [
  "Komplexní pohled na vaše finance",
  "Jasná strategie pro dosažení cílů",
  "Optimalizace výdajů a příjmů",
  "Propojení všech finančních produktů",
  "Pravidelné revize a úpravy",
  "Dlouhodobá spolupráce a podpora",
];

const FinancialPlanningPage = () => {
  return (
    <Layout>
      <SEO
        title="Finanční plánování Žďár nad Sázavou - Komplexní finanční poradenství | ZFP Group"
        description="Profesionální finanční plánování na Vysočině. Analýza financí, definice cílů, komplexní strategie. Pomohu vám dosáhnout životních snů. Konzultace zdarma."
        canonical="/sluzby/financni-planovani"
      />
      <BreadcrumbSchema
        items={[
          { name: "Úvod", url: "/" },
          { name: "Služby", url: "/sluzby" },
          { name: "Finanční plánování", url: "/sluzby/financni-planovani" },
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
                  <Briefcase className="w-8 h-8 text-primary" />
                </div>
                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground font-bold">
                  Finanční plánování
                </h1>
              </div>
              <p className="text-muted-foreground text-lg max-w-2xl mb-8">
                Komplexní pohled na vaše finance. Analyzuji vaši současnou situaci, definuji s vámi 
                cíle a vytvořím plán, který vám pomůže dosáhnout vašich životních snů.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="hero" size="xl" className="btn-glow" asChild>
                  <Link to="/kontakt">
                    Nezávazná konzultace
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Planning Steps */}
      <section className="py-24 bg-section">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6 font-bold">
              Jak finanční plánování probíhá
            </h2>
            <p className="text-muted-foreground text-lg">
              Finanční plánování je proces, ne jednorázová akce. Společně projdeme těmito kroky 
              a budujeme vaši finanční budoucnost.
            </p>
          </AnimatedSection>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {planningSteps.map((step, index) => (
              <StaggerItem key={step.title}>
                <Card variant="glass" className="h-full p-6 relative">
                  <CardContent className="p-0">
                    <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                      {index + 1}
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <step.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6 font-bold">
                Proč potřebujete finanční plán?
              </h2>
              <div className="space-y-6 text-muted-foreground">
                <p>
                  Bez jasného plánu je těžké dosáhnout finančních cílů. Finanční plán vám dává 
                  směr, priority a konkrétní kroky, jak se dostat tam, kde chcete být.
                </p>
                <p>
                  Plán propojuje všechny aspekty vašich financí – od spoření přes investice 
                  až po pojištění. Díky tomu víte, že všechny části spolupracují a směřují 
                  ke stejným cílům.
                </p>
                <p>
                  Nejde o jednorázovou konzultaci, ale o dlouhodobé partnerství. Život přináší 
                  změny – nová práce, rodina, dědictví – a váš plán se musí těmto změnám přizpůsobit.
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
                    <li>• Každý, kdo chce mít jasný přehled o svých financích</li>
                    <li>• Mladé páry zakládající rodinu</li>
                    <li>• Lidé plánující velké investice (bydlení, vzdělání)</li>
                    <li>• Ti, kdo chtějí optimalizovat své příjmy a výdaje</li>
                    <li>• Každý, kdo myslí na budoucnost</li>
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
                    <li>• Pro ty, kdo hledají rychlé řešení bez dlouhodobé spolupráce</li>
                    <li>• Pro ty, kdo nechtějí sdílet informace o svých financích</li>
                    <li>• Pro ty, kdo očekávají zázračné řešení bez vlastního úsilí</li>
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
              Připraveni na cestu k finančním cílům?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Domluvte si bezplatnou konzultaci a společně vytvoříme plán, který vás dovede 
              k vašim životním snům. První schůzka je vždy zdarma a nezávazná.
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

export default FinancialPlanningPage;
