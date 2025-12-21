import { Link } from "react-router-dom";
import { Shield, CheckCircle, ArrowRight, Users, Building2, Plane, Heart, Car } from "lucide-react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { BreadcrumbSchema } from "@/components/StructuredData";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection, StaggerChildren, StaggerItem } from "@/components/AnimatedSection";

const insuranceTypes = [
  {
    icon: Heart,
    title: "Životní pojištění",
    description: "Ochrana rodiny a příjmu v případě nemoci, úrazu nebo úmrtí. Zajistěte finanční stabilitu pro vaše blízké.",
  },
  {
    icon: Building2,
    title: "Majetkové pojištění",
    description: "Komplexní ochrana nemovitostí, domácností a cenností. Pojištění proti živlům, krádeži i vandalismu.",
  },
  {
    icon: Car,
    title: "Pojištění vozidel",
    description: "Povinné ručení a havarijní pojištění. Srovnání nabídek od více pojišťoven pro nejlepší cenu.",
  },
  {
    icon: Users,
    title: "Firemní pojištění",
    description: "Ochrana podnikání - odpovědnost, majetek, přerušení provozu, kybernetická rizika.",
  },
  {
    icon: Plane,
    title: "Cestovní pojištění",
    description: "Krátkodobé i celoroční pojištění na cesty. Léčebné výlohy, storno, odpovědnost za škodu.",
  },
];

const benefits = [
  "Nezávislé srovnání od 15+ pojišťoven",
  "Individuální analýza vašich potřeb",
  "Pomoc s likvidací pojistných událostí",
  "Pravidelná revize a optimalizace",
  "Kompletní servis bez starostí",
  "Dlouhodobá péče a podpora",
];

const InsurancePage = () => {
  return (
    <Layout>
      <SEO
        title="Pojištění Žďár nad Sázavou - Životní, majetkové, firemní pojištění | ZFP Group"
        description="Komplexní pojištění pro jednotlivce, rodiny i firmy na Vysočině. Životní, majetkové, firemní, cestovní pojištění. Nezávislé srovnání od 15+ pojišťoven. Konzultace zdarma."
        canonical="/sluzby/pojisteni"
      />
      <BreadcrumbSchema
        items={[
          { name: "Úvod", url: "/" },
          { name: "Služby", url: "/sluzby" },
          { name: "Pojištění", url: "/sluzby/pojisteni" },
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
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground font-bold">
                  Pojištění
                </h1>
              </div>
              <p className="text-muted-foreground text-lg max-w-2xl mb-8">
                Komplexní pojištění pro jednotlivce, rodiny i firmy. Srovnávám nabídky od více než 15 pojišťoven 
                a vybírám to nejlepší pro vaši situaci. Ochrana, na kterou se můžete spolehnout.
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

      {/* Insurance Types */}
      <section className="py-24 bg-section">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6 font-bold">
              Typy pojištění, které nabízím
            </h2>
            <p className="text-muted-foreground text-lg">
              Každý člověk i firma má jiné potřeby. Proto nabízím široké spektrum pojištění, 
              které přizpůsobím přesně vaší situaci.
            </p>
          </AnimatedSection>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {insuranceTypes.map((type) => (
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
                Jak pojištění funguje?
              </h2>
              <div className="space-y-6 text-muted-foreground">
                <p>
                  Pojištění je smlouva mezi vámi a pojišťovnou. Platíte pravidelné pojistné 
                  a v případě pojistné události vám pojišťovna vyplatí dohodnutou částku 
                  nebo uhradí vzniklou škodu.
                </p>
                <p>
                  Mou rolí je najít pro vás optimální poměr mezi cenou a kvalitou krytí. 
                  Nezávisle porovnávám nabídky od více pojišťoven a doporučím řešení, 
                  které nejlépe odpovídá vašim potřebám a rozpočtu.
                </p>
                <p>
                  V případě pojistné události vám pomohu s celým procesem likvidace – 
                  od nahlášení přes dokumentaci až po vyplacení pojistného plnění.
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
                    <li>• Rodiny, které chtějí ochránit své blízké</li>
                    <li>• Majitelé nemovitostí a cenných předmětů</li>
                    <li>• Podnikatelé a firmy</li>
                    <li>• Lidé s hypotékou či úvěrem</li>
                    <li>• Každý, kdo chce mít klid a jistotu</li>
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
                    <li>• Pro ty, kdo hledají pouze nejlevnější pojištění bez ohledu na kvalitu</li>
                    <li>• Pro ty, kdo nechtějí investovat čas do analýzy svých potřeb</li>
                    <li>• Pro ty, kdo preferují řešení přes internet bez osobního kontaktu</li>
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
              Připraveni ochránit to, na čem záleží?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Domluvte si bezplatnou konzultaci a společně najdeme optimální pojištění 
              pro vaši situaci. První schůzka je vždy zdarma a nezávazná.
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

export default InsurancePage;
