import { Link } from "react-router-dom";
import { PiggyBank, CheckCircle, ArrowRight, Gift, TrendingUp, Calculator, Building2, Calendar } from "lucide-react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { BreadcrumbSchema } from "@/components/StructuredData";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection, StaggerChildren, StaggerItem } from "@/components/AnimatedSection";

const savingsFeatures = [
  {
    icon: Gift,
    title: "Státní příspěvek",
    description: "Až 2 760 Kč ročně od státu. Maximální příspěvek při vkladu 1 000 Kč měsíčně.",
  },
  {
    icon: Building2,
    title: "Příspěvek zaměstnavatele",
    description: "Daňově výhodný benefit. Zaměstnavatel ušetří na odvodech, vy získáte extra peníze.",
  },
  {
    icon: Calculator,
    title: "Daňové výhody",
    description: "Odpočet až 48 000 Kč z daňového základu ročně. Reálná úspora tisíce korun.",
  },
  {
    icon: TrendingUp,
    title: "Investiční zhodnocení",
    description: "Propojení s investičními strategiemi pro maximální výnos vašich úspor.",
  },
  {
    icon: Calendar,
    title: "Flexibilita",
    description: "Možnost přerušení spoření, změny výše příspěvků i předčasného výběru.",
  },
];

const benefits = [
  "Penzijní spoření se státním příspěvkem",
  "Propojení s investičními produkty",
  "Optimalizace daňových výhod",
  "Příspěvky zaměstnavatele",
  "Výpočet potřebné úspory na důchod",
  "Pravidelná revize a úpravy",
];

const RetirementSavingsPage = () => {
  return (
    <Layout>
      <SEO
        title="Důchodové spoření Žďár nad Sázavou - Penzijní spoření, příprava na důchod | ZFP Group"
        description="Příprava na důchod na Vysočině. Penzijní spoření se státním příspěvkem, daňové výhody, propojení s investicemi. Spočítejte si, kolik potřebujete. Konzultace zdarma."
        canonical="/sluzby/duchodove-sporeni"
      />
      <BreadcrumbSchema
        items={[
          { name: "Úvod", url: "/" },
          { name: "Služby", url: "/sluzby" },
          { name: "Důchodové spoření", url: "/sluzby/duchodove-sporeni" },
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
                  <PiggyBank className="w-8 h-8 text-primary" />
                </div>
                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground font-bold">
                  Důchodové spoření
                </h1>
              </div>
              <p className="text-muted-foreground text-lg max-w-2xl mb-8">
                Připravte se na klidný důchod. Pomohu vám s penzijním spořením, které využívá 
                státní příspěvky, daňové výhody a efektivní investování pro maximální výnos.
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

      {/* Features */}
      <section className="py-24 bg-section">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6 font-bold">
              Výhody důchodového spoření
            </h2>
            <p className="text-muted-foreground text-lg">
              Důchodové spoření není jen o odkládání peněz. Je to chytrý nástroj, 
              který vám pomůže získat maximum díky státním příspěvkům a daňovým výhodám.
            </p>
          </AnimatedSection>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {savingsFeatures.map((feature) => (
              <StaggerItem key={feature.title}>
                <Card variant="glass" className="h-full p-6">
                  <CardContent className="p-0">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
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
                Kolik potřebujete na důchod?
              </h2>
              <div className="space-y-6 text-muted-foreground">
                <p>
                  Státní důchod pokryje jen část vašich potřeb. Abyste si udrželi životní 
                  úroveň, potřebujete mít vlastní rezervy. Čím dříve začnete spořit, 
                  tím méně musíte odkládat.
                </p>
                <p>
                  Společně spočítáme, kolik potřebujete naspořit a jaká strategie vám 
                  to umožní dosáhnout. Propojíme penzijní spoření s investicemi pro 
                  maximální efekt.
                </p>
                <p>
                  Nezapomínáme ani na příspěvky zaměstnavatele – pokud je váš zaměstnavatel 
                  nabízí, pomůžu vám je optimálně využít. A pokud ne, ukážeme možnosti, 
                  jak ho přesvědčit.
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
                    <li>• Každý, kdo chce mít zajištěnou budoucnost</li>
                    <li>• Zaměstnanci, kteří mohou využít příspěvky zaměstnavatele</li>
                    <li>• OSVČ, kteří nemají zaměstnanecké benefity</li>
                    <li>• Lidé, kteří chtějí využít daňové výhody</li>
                    <li>• Každý od 18 let věku</li>
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
                    <li>• Pro ty, kdo odmítají myslet na budoucnost</li>
                    <li>• Pro ty, kdo potřebují peníze okamžitě k dispozici</li>
                    <li>• Pro ty, kdo již mají dostatečné zajištění na důchod</li>
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
              Začněte plánovat svůj důchod
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Domluvte si bezplatnou konzultaci a společně vytvoříme strategii pro váš 
              klidný důchod. První schůzka je vždy zdarma a nezávazná.
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

export default RetirementSavingsPage;
