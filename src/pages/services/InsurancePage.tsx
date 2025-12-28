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
    description: "Co se stane s rodinou, když vypadnete z práce kvůli nemoci nebo úrazu? Životní pojištění zajistí, že hypotéka a účty se zaplatí, i když vy nebudete moct.",
  },
  {
    icon: Building2,
    title: "Pojištění majetku",
    description: "Dům, byt, chata, vybavení. Co když přijde povodeň, požár nebo zloději? Správné pojištění znamená, že nebudete řešit, z čeho to zaplatíte.",
  },
  {
    icon: Car,
    title: "Pojištění vozidel",
    description: "Povinné ručení musíte mít. Havarijko se hodí. Ale za kolik? Srovnám nabídky od víc pojišťoven a najdu vám nejlepší poměr cena/výkon.",
  },
  {
    icon: Users,
    title: "Pojištění pro firmy",
    description: "Podnikáte? Odpovědnost za škodu, majetek firmy, přerušení provozu. Jedna chyba může firmu položit – pojištění vás ochrání.",
  },
  {
    icon: Plane,
    title: "Cestovní pojištění",
    description: "Jedete na dovolenou nebo pracovně do zahraničí? Léčebné výlohy v cizině stojí majlant. Za pár korun máte klid.",
  },
];

const benefits = [
  "Srovnání od 15+ pojišťoven – vyberu to nejlepší",
  "Projdu vaše stávající smlouvy a řeknu, co je zbytečné",
  "Když se něco stane, pomůžu s vyřízením pojistky",
  "Jednou ročně zkontroluju, jestli to pořád sedí",
  "Vysvětlím vám, co pojištění kryje a co ne",
  "18 let praxe – vím, co pojišťovny nerady platí",
];

const InsurancePage = () => {
  return (
    <Layout>
      <SEO
        title="Pojištění Žďár nad Sázavou | Životní, majetkové, firemní | Roman Hájek"
        description="Potřebujete pojištění ve Žďáře nad Sázavou? Za 18 let vím, jak pojišťovny fungují. Srovnám nabídky, najdu mezery ve vašem krytí a pomůžu s pojistkou. Konzultace zdarma."
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
                Pojištění by mělo fungovat, když ho potřebujete – ne vás překvapit výlukami 
                drobným písmem. Za 18 let jsem viděl dost případů, kdy lidé zjistili až při 
                škodě, že jejich pojistka nic nekryje. Proto to dělám jinak.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="hero" size="xl" className="btn-glow" asChild>
                  <Link to="/kontakt">
                    Chci zkontrolovat pojištění
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
              Jaké pojištění řeším
            </h2>
            <p className="text-muted-foreground text-lg">
              Každý člověk i rodina je jiná. Proto nejdřív zjistím, co skutečně potřebujete, 
              a pak teprve hledám produkty. Ne naopak.
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
                Proč pojištění řešit se mnou?
              </h2>
              <div className="space-y-6 text-muted-foreground">
                <p>
                  Pojišťovací agent vám prodá to, co jeho pojišťovna nabízí. I kdyby to pro vás 
                  nebylo ideální. Já pracuju s více než 15 pojišťovnami a vybírám to, co sedí 
                  právě vám.
                </p>
                <p>
                  Hodně lidí má pojištění, které nepotřebují, a chybí jim to, co potřebují. 
                  Projdu s vámi všechny smlouvy a řeknu vám na rovinu, co je zbytečné a co 
                  vám naopak chybí.
                </p>
                <p>
                  A když se něco stane? Nebudete na to sami. Pomůžu vám s nahlášením škody, 
                  s dokumentací i s komunikací s pojišťovnou. Vím, jak to funguje, a nenechám 
                  vás odejít s prázdnou.
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
                    <li>• Máte rodinu a chcete ji zabezpečit</li>
                    <li>• Vlastníte nemovitost (dům, byt, chatu)</li>
                    <li>• Podnikáte a potřebujete pojistit firmu</li>
                    <li>• Máte hypotéku a banka vyžaduje pojištění</li>
                    <li>• Chcete si zkontrolovat, jestli neplatíte zbytečně</li>
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
                    <li>• Hledáte jen nejlevnější pojištění bez ohledu na kvalitu</li>
                    <li>• Nechcete trávit čas analýzou vašich potřeb</li>
                    <li>• Preferujete vyřídit vše online bez osobního kontaktu</li>
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
              Víte, co vaše pojištění skutečně kryje?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Přineste mi svoje smlouvy a za hodinu budete vědět, jestli jste správně 
              pojištění. Schůzka je zdarma a k ničemu vás nezavazuje.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="xl" className="btn-glow" asChild>
                <Link to="/kontakt">
                  Chci zkontrolovat pojištění
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
