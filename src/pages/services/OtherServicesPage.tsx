import { Link } from "react-router-dom";
import { HelpCircle, CheckCircle, ArrowRight, MessageCircle, FileQuestion, Lightbulb, Scale, Users } from "lucide-react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { BreadcrumbSchema } from "@/components/StructuredData";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection, StaggerChildren, StaggerItem } from "@/components/AnimatedSection";

const otherServices = [
  {
    icon: MessageCircle,
    title: "Individuální konzultace",
    description: "Máte konkrétní otázku? Sejdeme se a probereme přesně to, co potřebujete. Žádné zbytečné řeči.",
  },
  {
    icon: Scale,
    title: "Druhý názor",
    description: "Někdo vám něco nabídl a nevíte, jestli je to dobrý deal? Podívám se na to nezávisle a řeknu vám svůj názor.",
  },
  {
    icon: FileQuestion,
    title: "Pomoc s dokumenty",
    description: "Máte smlouvu a nerozumíte jí? Přineste mi ji a vysvětlím vám, co tam je a na co si dát pozor.",
  },
  {
    icon: Lightbulb,
    title: "Finanční vzdělávání",
    description: "Chcete rozumět financím, ale nevíte, kde začít? Naučím vás základy – investování, pojištění, hypotéky.",
  },
  {
    icon: Users,
    title: "Rodinné finance",
    description: "Jak spolu mluvit o penězích? Konzultace pro páry a rodiny, kteří chtějí táhnout za jeden provaz.",
  },
];

const benefits = [
  "Individuální přístup na míru",
  "Řešení nestandardních situací",
  "Nezávislý druhý názor",
  "Pomoc s dokumenty a smlouvami",
  "Vzdělávání v oblasti financí",
  "Hodinová sazba 2 500 Kč",
];

const OtherServicesPage = () => {
  return (
    <Layout>
      <SEO
        title="Finanční konzultace Žďár nad Sázavou | Druhý názor, pomoc s dokumenty | Roman Hájek"
        description="Potřebujete poradit s něčím specifickým? Druhý názor, vysvětlení smlouvy, vzdělávání. Za 18 let jsem řešil i nestandardní situace. Hodinová sazba 2 500 Kč."
        canonical="/sluzby/ostatni"
      />
      <BreadcrumbSchema
        items={[
          { name: "Úvod", url: "/" },
          { name: "Služby", url: "/sluzby" },
          { name: "Ostatní služby", url: "/sluzby/ostatni" },
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
                  <HelpCircle className="w-8 h-8 text-primary" />
                </div>
                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground font-bold">
                  Ostatní služby
                </h1>
              </div>
              <p className="text-muted-foreground text-lg max-w-2xl mb-8">
                Ne všechno se vejde do škatulek. Někdy potřebujete jen hodinovou konzultaci, 
                druhý názor nebo vysvětlení dokumentu. Tyhle služby platíte přímo – 2 500 Kč za hodinu.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="hero" size="xl" className="btn-glow" asChild>
                  <Link to="/kontakt">
                    Objednat konzultaci
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
              Finanční svět je složitý. Pokud máte konkrétní otázku nebo problém, 
              který nespadá do běžných kategorií, jsem tu pro vás.
            </p>
          </AnimatedSection>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherServices.map((service) => (
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

      {/* Pricing */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6 font-bold">
                Jak to funguje s cenou
              </h2>
              <div className="space-y-6 text-muted-foreground">
                <p>
                  U běžných služeb (hypotéky, pojištění, investice) mě platí poskytovatelé produktů. 
                  Vy neplatíte nic. Ale tyhle speciální konzultace jsou jiné – tady pracuju 
                  čistě pro vás, bez vazby na produkty.
                </p>
                <p>
                  Proto si účtuju hodinovou sazbu 2 500 Kč. Zahrnuje přípravu i samotnou schůzku. 
                  Předem se dohodneme na rozsahu, abyste věděli, kolik to bude stát.
                </p>
                <p>
                  Pokud se během konzultace ukáže, že potřebujete některou z mých standardních 
                  služeb (třeba hypotéku nebo pojištění), přejdeme na běžný model bez přímé platby.
                </p>
              </div>
              
              <div className="mt-8 p-6 rounded-xl bg-primary/5 border border-primary/20">
                <div className="text-3xl font-bold text-primary mb-2">2 500 Kč / hodina</div>
                <p className="text-muted-foreground">včetně přípravy a následné komunikace</p>
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
                    <li>• Máte konkrétní otázku, na kterou chcete odpověď</li>
                    <li>• Někdo vám něco nabídl a chcete druhý názor</li>
                    <li>• Nerozumíte smlouvě nebo dokumentu</li>
                    <li>• Chcete se naučit o financích</li>
                    <li>• Řešíte nestandardní situaci</li>
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
                    <li>• Hledáte bezplatné poradenství</li>
                    <li>• Potřebujete právní služby (to dělá advokát)</li>
                    <li>• Hledáte účetního nebo daňového poradce</li>
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
              Potřebujete poradit?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Napište mi, o čem byste chtěli konzultovat. Dohodneme se na termínu 
              a ceně. Žádný problém není příliš malý ani příliš velký.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="xl" className="btn-glow" asChild>
                <Link to="/kontakt">
                  Objednat konzultaci
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

export default OtherServicesPage;
