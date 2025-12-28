import { Link } from "react-router-dom";
import { Building2, CheckCircle, ArrowRight, Home, Key, HandCoins, Search, FileText } from "lucide-react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { BreadcrumbSchema } from "@/components/StructuredData";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection, StaggerChildren, StaggerItem } from "@/components/AnimatedSection";

const realEstateServices = [
  {
    icon: HandCoins,
    title: "Prodej nemovitostí",
    description: "Chcete prodat byt nebo dům na Vysočině? Postarám se o prezentaci, marketing i jednání s kupci. Vy jen podepíšete.",
  },
  {
    icon: Search,
    title: "Koupě nemovitostí",
    description: "Hledáte bydlení ve Žďáře nebo okolí? Znám místní trh a najdu vám nemovitost, která sedí vašim požadavkům i rozpočtu.",
  },
  {
    icon: Key,
    title: "Asistovaný nákup",
    description: "Nevíte, jak na to? Provedu vás celým procesem od výběru po předání klíčů. Právník, odhad, zápis do katastru – všechno zařídím.",
  },
  {
    icon: Home,
    title: "Financování",
    description: "Velká výhoda – nemovitost i hypotéku vyřídíte na jednom místě. Zajistím vám nejlepší podmínky od 10+ bank.",
  },
  {
    icon: FileText,
    title: "Pronájem",
    description: "Máte nemovitost k pronájmu? Najdu vám spolehlivé nájemníky, připravím smlouvy a můžu se starat o správu.",
  },
];

const benefits = [
  "Znám Žďár a Vysočinu – vím, co kde stojí a proč",
  "Nemovitost i hypotéku vyřídíte u mě",
  "Osobní přístup – nejsem velká realitka",
  "Postarám se o veškerou administrativu",
  "Právní podpora a kontrola smluv",
  "18 let zkušeností s realitami na Vysočině",
];

const RealEstatePage = () => {
  return (
    <Layout>
      <SEO
        title="Reality Žďár nad Sázavou | Prodej, koupě, financování | Roman Hájek"
        description="Prodáváte nebo kupujete nemovitost ve Žďáře nad Sázavou? Za 18 let znám místní trh. Kompletní servis od hledání po financování. Konzultace zdarma."
        canonical="/sluzby/reality"
      />
      <BreadcrumbSchema
        items={[
          { name: "Úvod", url: "/" },
          { name: "Služby", url: "/sluzby" },
          { name: "Reality", url: "/sluzby/reality" },
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
                  <Building2 className="w-8 h-8 text-primary" />
                </div>
                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground font-bold">
                  Reality
                </h1>
              </div>
              <p className="text-muted-foreground text-lg max-w-2xl mb-8">
                Kupujete nebo prodáváte nemovitost na Vysočině? Znám místní trh, znám ceny 
                a hlavně – vyřídím vám i financování. Všechno na jednom místě, bez pobíhání 
                mezi realitkou a bankou.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="hero" size="xl" className="btn-glow" asChild>
                  <Link to="/kontakt">
                    Chci probrat nemovitost
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
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
              Ať už prodáváte, kupujete nebo pronajímáte – mám zkušenosti a kontakty, 
              aby to proběhlo hladce.
            </p>
          </AnimatedSection>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {realEstateServices.map((service) => (
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
                Proč řešit nemovitosti se mnou?
              </h2>
              <div className="space-y-6 text-muted-foreground">
                <p>
                  Nejsem velká realitní kancelář s call centrem. Jsem člověk ze Žďáru, 
                  který tu žije 18 let a zná každou ulici. Vím, kde jsou dobré školy, 
                  kde je klid a kde radši nekupovat.
                </p>
                <p>
                  Velká výhoda? Vyřídím vám nemovitost i hypotéku. Nemusíte běhat mezi 
                  realitkou a bankou. Najdu vám bydlení a rovnou zajistím financování 
                  s nejlepšími podmínkami.
                </p>
                <p>
                  A hlavně – postarám se o všechnu tu papírovou práci. Smlouvy, katastr, 
                  právník. Vy se můžete soustředit na to důležité – vybrat si domov.
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
                    <li>• Kupujete byt nebo dům na Vysočině</li>
                    <li>• Prodáváte a chcete dostat dobrou cenu</li>
                    <li>• Investujete do nemovitostí k pronájmu</li>
                    <li>• Potřebujete pomoct s financováním</li>
                    <li>• Oceňujete osobní přístup místo call centra</li>
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
                    <li>• Hledáte nemovitosti v Praze nebo Brně</li>
                    <li>• Chcete jen online inzeráty bez servisu</li>
                    <li>• Preferujete velké realitní kanceláře</li>
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
              Ať už kupujete nebo prodáváte – zavolejte nebo napište. Schůzka je 
              zdarma a k ničemu vás nezavazuje.
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

export default RealEstatePage;
