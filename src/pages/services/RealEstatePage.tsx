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
    description: "Profesionální prezentace, marketing a kompletní servis při prodeji vaší nemovitosti.",
  },
  {
    icon: Search,
    title: "Koupě nemovitostí",
    description: "Pomůžu vám najít ideální nemovitost podle vašich požadavků a rozpočtu.",
  },
  {
    icon: Key,
    title: "Asistovaný nákup",
    description: "Kompletní servis od výběru až po předání klíčů. Provedu vás celým procesem.",
  },
  {
    icon: Home,
    title: "Financování",
    description: "Zajistím hypotéku s nejlepšími podmínkami od více bank. Kompletní vyřízení.",
  },
  {
    icon: FileText,
    title: "Pronájem",
    description: "Hledání nájemníků, příprava smluv, správa nemovitostí. Pronájem bez starostí.",
  },
];

const benefits = [
  "Lokální znalost regionu Vysočina",
  "Kompletní servis od A do Z",
  "Propojení s financováním",
  "Profesionální prezentace nemovitostí",
  "Právní a administrativní podpora",
  "Osobní přístup a dostupnost",
];

const RealEstatePage = () => {
  return (
    <Layout>
      <SEO
        title="Reality Žďár nad Sázavou - Prodej, koupě, financování nemovitostí | ZFP Group"
        description="Kompletní realitní servis na Vysočině. Prodej, koupě, asistovaný nákup, financování i pronájem nemovitostí. Lokální znalost, osobní přístup. Konzultace zdarma."
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
                Kompletní realitní servis v regionu Vysočina a okolí. Pomůžu vám s koupí, prodejem, 
                financováním i pronájmem nemovitostí. Profesionálně a s lokální znalostí.
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

      {/* Services */}
      <section className="py-24 bg-section">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6 font-bold">
              Realitní služby, které nabízím
            </h2>
            <p className="text-muted-foreground text-lg">
              Ať už prodáváte, kupujete nebo pronajímáte – poskytnu vám komplexní servis 
              s osobním přístupem a znalostí místního trhu.
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
                  Na rozdíl od velkých realitních kanceláří nabízím osobní přístup a znalost 
                  lokálního trhu na Vysočině. Znám region, znám ceny a znám lidi.
                </p>
                <p>
                  Velkou výhodou je propojení s finančními službami. Pokud kupujete nemovitost, 
                  zajistím vám nejen její nalezení, ale i optimální financování – hypotéku 
                  s nejlepšími podmínkami od více bank.
                </p>
                <p>
                  Provedu vás celým procesem od prvního prohlížení až po předání klíčů. 
                  Postarám se o veškerou administrativu, smlouvy a komunikaci s úřady.
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
                    <li>• Každý, kdo plánuje koupit nemovitost na Vysočině</li>
                    <li>• Majitelé, kteří chtějí prodat rychle a za dobrou cenu</li>
                    <li>• Investoři hledající nemovitosti k pronájmu</li>
                    <li>• Ti, kdo potřebují pomoc s financováním</li>
                    <li>• Každý, kdo oceňuje osobní přístup</li>
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
                    <li>• Pro ty, kdo hledají pouze online inzeráty bez servisu</li>
                    <li>• Pro ty, kdo hledají nemovitosti mimo region Vysočina</li>
                    <li>• Pro ty, kdo preferují velké realitní kanceláře</li>
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
              Plánujete koupit nebo prodat nemovitost?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Domluvte si bezplatnou konzultaci a společně probereme vaše možnosti. 
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

export default RealEstatePage;
