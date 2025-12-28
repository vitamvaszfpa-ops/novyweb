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
    title: "Kde teď jste",
    description: "Projdeme vaše příjmy, výdaje, majetek a dluhy. Získáte jasný obrázek o tom, jak na tom skutečně jste.",
  },
  {
    icon: Calendar,
    title: "Kam chcete",
    description: "Co chcete v životě dosáhnout? Vlastní bydlení? Klidný důchod? Vzdělání pro děti? Pojmenujeme vaše cíle.",
  },
  {
    icon: TrendingUp,
    title: "Jak se tam dostat",
    description: "Vytvořím plán, který vás k cílům dovede. Konkrétní kroky, ne obecné fráze.",
  },
  {
    icon: PiggyBank,
    title: "Uvedení do praxe",
    description: "Neodejdete jen s papírem. Pomůžu vám vybrat konkrétní produkty a všechno nastavit.",
  },
  {
    icon: Shield,
    title: "Pravidelná kontrola",
    description: "Život se mění. Jednou ročně se potkáme a plán upravíme podle aktuální situace.",
  },
];

const benefits = [
  "Jasný přehled o vašich financích",
  "Konkrétní plán, jak dosáhnout cílů",
  "Optimalizace – možná platíte za věci, které nepotřebujete",
  "Propojení všech finančních produktů dohromady",
  "Pravidelné revize – plán roste s vámi",
  "18 let zkušeností s finančním plánováním",
];

const FinancialPlanningPage = () => {
  return (
    <Layout>
      <SEO
        title="Finanční plánování Žďár nad Sázavou | Komplexní poradenství | Roman Hájek"
        description="Nevíte, jestli na tom finančně jste dobře? Za 18 let jsem pomohl stovkám rodin ze Žďáru udělat si jasno. Komplexní finanční plán na míru. Konzultace zdarma."
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
                Máte pojištění, penzijko, možná nějaké investice. Ale dává to dohromady smysl? 
                Finanční plán spojí všechny kousky do celku a ukáže vám cestu k vašim cílům.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="hero" size="xl" className="btn-glow" asChild>
                  <Link to="/kontakt">
                    Chci finanční plán
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
              Jak to probíhá
            </h2>
            <p className="text-muted-foreground text-lg">
              Finanční plánování není jednorázová akce, ale proces. Tady jsou kroky, 
              kterými spolu projdeme.
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
                  Většina lidí řeší finance po kouskách. Pojištění tady, penzijko tam, 
                  nějaké spoření stranou. Ale nikdo se nepodíval na celek. Možná platíte 
                  za věci, které nepotřebujete. Možná vám něco důležitého chybí.
                </p>
                <p>
                  Finanční plán vám dá jasný přehled. Uvidíte, kde jste, kam směřujete 
                  a co potřebujete udělat. Žádné hádání – konkrétní čísla a kroky.
                </p>
                <p>
                  A není to jednorázová věc. Život se mění – nová práce, děti, dědictví. 
                  Plán musí držet krok. Proto se pravidelně potkáváme a upravujeme ho.
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
                    <li>• Chcete mít jasno ve svých financích</li>
                    <li>• Zakládáte rodinu a potřebujete plán</li>
                    <li>• Plánujete velkou investici (bydlení, vzdělání)</li>
                    <li>• Máte pocit, že platíte za zbytečnosti</li>
                    <li>• Chcete se připravit na budoucnost</li>
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
                    <li>• Hledáte jednorázové řešení bez dlouhodobé spolupráce</li>
                    <li>• Nechcete sdílet informace o svých financích</li>
                    <li>• Čekáte zázrak bez vlastního úsilí</li>
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
              Udělejte si jasno
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Sejdeme se a projdeme vaši situaci. Za hodinu budete vědět, na čem jste 
              a co dělat dál. Schůzka je zdarma a k ničemu vás nezavazuje.
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

export default FinancialPlanningPage;
