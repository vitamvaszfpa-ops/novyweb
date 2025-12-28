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
    title: "Hypotéka na bydlení",
    description: "Chcete koupit byt nebo dům ve Žďáře nebo na Vysočině? Srovnám nabídky od desítek bank a zajistím vám podmínky, které byste sami nedostali.",
  },
  {
    icon: Building2,
    title: "Hypotéka na rekonstrukci",
    description: "Plánujete předělat koupelnu, zateplit dům nebo přistavět? Pomůžu vám získat peníze na úpravy stávající nemovitosti.",
  },
  {
    icon: RefreshCw,
    title: "Refinancování hypotéky",
    description: "Platíte za hypotéku víc, než byste museli? Zjistím, jestli se vám vyplatí přejít k jiné bance, a všechno za vás vyřídím.",
  },
  {
    icon: CreditCard,
    title: "Spotřebitelské úvěry",
    description: "Potřebujete menší částku bez zástavy nemovitosti? Najdu vám úvěr s rozumnými podmínkami – žádné lichvářské půjčky.",
  },
  {
    icon: TrendingDown,
    title: "Konsolidace úvěrů",
    description: "Máte víc půjček a ztrácíte přehled? Sloučím je do jedné s nižší splátkou. Konečně budete vědět, kolik platíte.",
  },
];

const benefits = [
  "Srovnání nabídek od desítek bank na jednom místě",
  "Vyjednám vám lepší úrok, než byste dostali na pobočce",
  "Všechnu papírovou práci vyřídím za vás",
  "Poradím i s pojištěním nemovitosti",
  "Konzultace zdarma – platí až banka",
  "18 let zkušeností s hypotékami na Vysočině",
];

const MortgagesPage = () => {
  return (
    <Layout>
      <SEO
        title="Hypotéky Žďár nad Sázavou | Srovnání bank, lepší úrok | Roman Hájek"
        description="Hledáte hypotéku ve Žďáře nad Sázavou? Za 18 let jsem pomohl stovkám rodin na Vysočině. Srovnám 10+ bank, vyjednám lepší úrok a všechno vyřídím za vás. Konzultace zdarma."
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
                Kupujete byt, stavíte dům nebo chcete refinancovat? Srovnám pro vás nabídky od 10+ bank 
                a vyjednám podmínky, které byste sami nedostali. Za 18 let jsem pomohl stovkám rodin 
                ze Žďáru a okolí.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="hero" size="xl" className="btn-glow" asChild>
                  <Link to="/kontakt">
                    Chci nezávaznou konzultaci
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
              S čím vám můžu pomoct
            </h2>
            <p className="text-muted-foreground text-lg">
              Ať už kupujete první byt, stavíte rodinný dům nebo chcete ušetřit na stávající hypotéce – 
              najdu řešení, které vám sedne.
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
                Proč hypotéku neřešit sám na pobočce?
              </h2>
              <div className="space-y-6 text-muted-foreground">
                <p>
                  Když přijdete do banky, nabídnou vám svou hypotéku. Možná slušnou, možná ne. 
                  Neřeknou vám, že konkurence má lepší úrok nebo méně poplatků. Proč by taky měli?
                </p>
                <p>
                  Já nejsem vázaný na jednu banku. Srovnám nabídky od desítek bank a vyjednám 
                  vám individuální podmínky. Díky objemu, který zprostředkovávám, dostanu lepší 
                  úroky než náhodný klient z ulice.
                </p>
                <p>
                  A hlavně – všechnu tu papírovou práci udělám za vás. Vy se můžete věnovat 
                  hledání nemovitosti, já se postarám o financování. A mé služby? Ty jsou 
                  pro vás zdarma – odměnu dostávám od banky.
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
                    <li>• Kupujete první byt nebo dům</li>
                    <li>• Stavíte nebo rekonstruujete</li>
                    <li>• Chcete refinancovat a ušetřit</li>
                    <li>• Potřebujete spotřebitelský úvěr</li>
                    <li>• Máte víc půjček a chcete je sloučit</li>
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
                    <li>• Nemáte stabilní příjem (zaměstnání nebo podnikání)</li>
                    <li>• Máte záznam v registru dlužníků</li>
                    <li>• Hledáte "rychlou půjčku bez dokladů" – to nedělám</li>
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
              Pojďme to probrat
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Zavolejte mi nebo napište a domluvíme se na schůzce. Ať už osobně ve Žďáře, 
              nebo online. První konzultace je zdarma a k ničemu vás nezavazuje.
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

export default MortgagesPage;
