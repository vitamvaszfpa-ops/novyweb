import { Link } from "react-router-dom";
import { TrendingUp, CheckCircle, ArrowRight, Coins, BarChart3, Building, Gem, Percent } from "lucide-react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { BreadcrumbSchema } from "@/components/StructuredData";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection, StaggerChildren, StaggerItem } from "@/components/AnimatedSection";
import InvestmentCalculator from "@/components/InvestmentCalculator";

const investmentTypes = [
  {
    icon: BarChart3,
    title: "Fondy kvalifikovaných investorů (FKI)",
    description: "Exkluzivní investiční příležitosti s vyššími výnosy. Pro investory od 1 mil. Kč.",
  },
  {
    icon: Gem,
    title: "Investiční zlato",
    description: "Fyzické i papírové zlato jako ochrana proti inflaci a diverzifikace portfolia.",
  },
  {
    icon: Coins,
    title: "Podílové fondy",
    description: "Akciové, dluhopisové a smíšené fondy. Pravidelné investování od 500 Kč měsíčně.",
  },
  {
    icon: Building,
    title: "Realitní fondy",
    description: "Investice do nemovitostí bez starostí se správou. Stabilní výnosy z nájmů.",
  },
  {
    icon: Percent,
    title: "Participace",
    description: "Podíl na výnosech z konkrétních projektů. Alternativní investiční příležitosti.",
  },
];

const benefits = [
  "Investice již od 500 Kč měsíčně",
  "Řešení pro malé i milionové vklady",
  "Individuální investiční strategie",
  "Pravidelný monitoring a úpravy",
  "Vzdělávání a vysvětlení rizik",
  "Dlouhodobá spolupráce a podpora",
];

const InvestmentPage = () => {
  return (
    <Layout>
      <SEO
        title="Investice Žďár nad Sázavou - FKI, zlato, fondy, reality | ZFP Group"
        description="Investiční poradenství na Vysočině. Fondy kvalifikovaných investorů, investiční zlato, podílové fondy, realitní fondy. Investujte od 500 Kč měsíčně. Konzultace zdarma."
        canonical="/sluzby/investice"
      />
      <BreadcrumbSchema
        items={[
          { name: "Úvod", url: "/" },
          { name: "Služby", url: "/sluzby" },
          { name: "Investice", url: "/sluzby/investice" },
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
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground font-bold">
                  Investice
                </h1>
              </div>
              <p className="text-muted-foreground text-lg max-w-2xl mb-8">
                Pomohu vám rozmnožit váš majetek s ohledem na váš rizikový profil a časový horizont. 
                Od pravidelného spoření po milionové investice – vše na míru vašim cílům.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="hero" size="xl" className="btn-glow" asChild>
                  <Link to="/kontakt">
                    Nezávazná konzultace
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <InvestmentCalculator />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Investment Types */}
      <section className="py-24 bg-section">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6 font-bold">
              Investiční možnosti
            </h2>
            <p className="text-muted-foreground text-lg">
              Nabízím široké spektrum investičních produktů pro různé cíle a rizikové profily. 
              Společně najdeme optimální mix pro vaše portfolio.
            </p>
          </AnimatedSection>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {investmentTypes.map((type) => (
              <StaggerItem key={type.title}>
                <Card variant="glass" className="h-full p-6">
                  <CardContent className="p-0">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <type.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                      {type.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {type.description}
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
                Jak investování funguje?
              </h2>
              <div className="space-y-6 text-muted-foreground">
                <p>
                  Investování je způsob, jak nechat vaše peníze pracovat za vás. Místo nechávání 
                  úspor na běžném účtu, kde ztrácejí hodnotu kvůli inflaci, je vkládáte do aktiv, 
                  která mohou růst.
                </p>
                <p>
                  Klíčem k úspěšnému investování je diverzifikace – rozložení peněz do různých 
                  typů aktiv. Důležitý je také časový horizont – čím déle investujete, tím více 
                  můžete využít sílu složeného úročení.
                </p>
                <p>
                  Mou rolí je pomoci vám stanovit investiční strategii, která odpovídá vašim 
                  cílům, toleranci k riziku a časovému horizontu. Průběžně vaše portfolio 
                  monitoruji a upravuji podle vývoje trhu a vašich potřeb.
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
                    <li>• Každý, kdo chce zhodnotit úspory lépe než na účtu</li>
                    <li>• Rodiče spořící dětem na vzdělání</li>
                    <li>• Lidé plánující nákup nemovitosti</li>
                    <li>• Ti, kdo chtějí budovat pasivní příjem</li>
                    <li>• Investoři hledající nové příležitosti</li>
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
                    <li>• Pro ty, kdo očekávají garantované vysoké výnosy bez rizika</li>
                    <li>• Pro ty, kdo potřebují peníze okamžitě k dispozici</li>
                    <li>• Pro ty, kdo nejsou ochotni investovat dlouhodobě</li>
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
              Připraveni začít investovat?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Domluvte si bezplatnou konzultaci a společně vytvoříme investiční strategii 
              na míru vašim cílům. První schůzka je vždy zdarma a nezávazná.
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

export default InvestmentPage;
