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
    title: "Fondy kvalifikovaných investorů",
    description: "Máte volný milion a víc? FKI nabízí zajímavé výnosy, které běžné fondy nedají. Ukážu vám možnosti, které jsou jinak těžko dostupné.",
  },
  {
    icon: Gem,
    title: "Investiční zlato",
    description: "Zlato není o rychlém zbohatnutí, ale o ochraně majetku. Když všechno ostatní padá, zlato drží. Mám přístup k fyzickému i papírovému zlatu.",
  },
  {
    icon: Coins,
    title: "Podílové fondy",
    description: "Ideální start pro většinu lidí. Můžete začít od 500 Kč měsíčně a nechat peníze růst. Akciové, dluhopisové, smíšené – vyberu podle vašeho profilu.",
  },
  {
    icon: Building,
    title: "Realitní fondy",
    description: "Chcete výnosy z nemovitostí bez starostí s nájemníky? Realitní fondy vám dají podíl na nájmech z komerčních budov.",
  },
  {
    icon: Percent,
    title: "Participace a alternativy",
    description: "Podíl na konkrétních projektech – od developmentu po energetiku. Vyšší riziko, ale i vyšší potenciál. Pouze pro ty, kdo vědí, do čeho jdou.",
  },
];

const benefits = [
  "Začít můžete od 500 Kč měsíčně",
  "Řešení pro malé úspory i milionové investice",
  "Investiční strategie podle vašich cílů a tolerance k riziku",
  "Pravidelně kontroluju, jestli portfolio dává smysl",
  "Vysvětlím vám, jak to funguje – žádný investor-speech",
  "18 let zkušeností s investicemi na Vysočině",
];

const InvestmentPage = () => {
  return (
    <Layout>
      <SEO
        title="Investice Žďár nad Sázavou | Fondy, zlato, reality | Roman Hájek"
        description="Chcete investovat, ale nevíte jak začít? Za 18 let jsem pomohl stovkám lidí ze Žďáru a okolí. Od 500 Kč měsíčně po milionové investice. Konzultace zdarma."
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
                Peníze na účtu vám inflace sežere. Investování je způsob, jak tomu zabránit 
                a nechat peníze pracovat za vás. Nemusíte být milionář – začít můžete 
                od stovek měsíčně.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="hero" size="xl" className="btn-glow" asChild>
                  <Link to="/kontakt">
                    Chci začít investovat
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
              Do čeho můžete investovat
            </h2>
            <p className="text-muted-foreground text-lg">
              Není jedna správná investice pro všechny. Záleží na tom, kolik máte, jak dlouho 
              můžete počkat a kolik rizika zvládnete. Společně najdeme mix, který vám sedne.
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
                Proč investovat přes mě?
              </h2>
              <div className="space-y-6 text-muted-foreground">
                <p>
                  Můžete si koupit akcie sami přes aplikaci. Ale víte, které? A kdy prodat? 
                  A co daně? Investování není složité, ale má svá pravidla. Za 18 let jsem 
                  viděl, jak lidé zbytečně tratí, protože je nikdo nevedl.
                </p>
                <p>
                  Nejdřív zjistím, co potřebujete – jestli spoříte dětem na školu, sobě 
                  na důchod nebo chcete zhodnotit dědictví. Podle toho nastavím strategii. 
                  Konzervativní, vyvážená nebo agresivní – záleží na vás.
                </p>
                <p>
                  A pak to pravidelně kontroluju. Trhy se mění, vaše situace se mění. 
                  Portfolio musí držet krok. Nebudete na to sami.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <Card variant="premium" className="p-8">
                <CardContent className="p-0">
                  <h3 className="font-heading text-xl font-bold text-foreground mb-6">
                    Co ode mě dostanete
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
                    Pro koho je to
                  </h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>• Máte peníze na účtu, které tam jen leží</li>
                    <li>• Chcete spořit dětem na vzdělání</li>
                    <li>• Plánujete koupit nemovitost za pár let</li>
                    <li>• Chcete si budovat pasivní příjem</li>
                    <li>• Zdědili jste peníze a nevíte, co s nimi</li>
                  </ul>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <Card variant="glass" className="p-6 h-full">
                <CardContent className="p-0">
                  <h3 className="font-heading text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full border-2 border-muted-foreground/30 flex items-center justify-center text-sm">✕</span>
                    Pro koho to není
                  </h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>• Čekáte garantované vysoké výnosy bez rizika – to neexistuje</li>
                    <li>• Potřebujete peníze za měsíc – investice chce čas</li>
                    <li>• Hledáte "zaručený tip" na rychlé zbohatnutí</li>
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
              Nechte peníze pracovat za vás
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Zavolejte nebo napište a probereme, co by pro vás dávalo smysl. 
              První konzultace je zdarma a k ničemu vás nezavazuje.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="xl" className="btn-glow" asChild>
                <Link to="/kontakt">
                  Chci konzultaci zdarma
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
