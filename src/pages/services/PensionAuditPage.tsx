import { Link } from "react-router-dom";
import { ClipboardCheck, CheckCircle, ArrowRight, FileSearch, AlertCircle, Calculator, FileText, HelpCircle } from "lucide-react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { BreadcrumbSchema } from "@/components/StructuredData";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection, StaggerChildren, StaggerItem } from "@/components/AnimatedSection";

const auditSteps = [
  {
    icon: FileText,
    title: "Získání IOLDP",
    description: "Pomůžu vám získat výpis z evidence důchodového pojištění. Ukáže, co o vás stát ví.",
  },
  {
    icon: FileSearch,
    title: "Kontrola historie",
    description: "Projdu vaši pracovní historii rok po roku. Hledám mezery a nesrovnalosti.",
  },
  {
    icon: AlertCircle,
    title: "Nalezení chyb",
    description: "Evidence ČSSZ není bezchybná. Zjistím, které doby chybí nebo jsou špatně.",
  },
  {
    icon: HelpCircle,
    title: "Co s tím",
    description: "Poradím, jak chybějící doby doložit. Které dokumenty potřebujete a kde je vzít.",
  },
  {
    icon: Calculator,
    title: "Výpočet důchodu",
    description: "Spočítám, jaký důchod byste měli dostat podle aktuálních pravidel.",
  },
];

const benefits = [
  "Analýza vašeho výpisu z ČSSZ",
  "Identifikace chybějících dob pojištění",
  "Poradenství, jak chyby opravit",
  "Výpočet předpokládaného důchodu",
  "Návrhy, jak důchod zvýšit",
  "18 let zkušeností s penzijním systémem",
];

const PensionAuditPage = () => {
  return (
    <Layout>
      <SEO
        title="Penzijní audit Žďár nad Sázavou | Kontrola důchodových nároků | Roman Hájek"
        description="Nevíte, jaký budete mít důchod? Zkontroluju vaši evidenci u ČSSZ a najdu chybějící doby pojištění. Za 18 let vím, kde hledat. Konzultace zdarma."
        canonical="/sluzby/penzijni-audit"
      />
      <BreadcrumbSchema
        items={[
          { name: "Úvod", url: "/" },
          { name: "Služby", url: "/sluzby" },
          { name: "Penzijní audit", url: "/sluzby/penzijni-audit" },
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
                  <ClipboardCheck className="w-8 h-8 text-primary" />
                </div>
                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground font-bold">
                  Penzijní audit
                </h1>
              </div>
              <p className="text-muted-foreground text-lg max-w-2xl mb-8">
                Evidence ČSSZ není bezchybná. Chybějící roky pojištění znamenají nižší důchod. 
                Zkontroluju vaši historii a najdu, co chybí – dokud je ještě čas to napravit.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="hero" size="xl" className="btn-glow" asChild>
                  <Link to="/kontakt">
                    Chci zkontrolovat důchod
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Audit Steps */}
      <section className="py-24 bg-section">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6 font-bold">
              Jak penzijní audit probíhá
            </h2>
            <p className="text-muted-foreground text-lg">
              Systematicky projdeme vaši pracovní historii a zjistíme, jestli máte 
              všechno správně zaevidované.
            </p>
          </AnimatedSection>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {auditSteps.map((step, index) => (
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

      {/* Why Audit */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6 font-bold">
                Proč to řešit teď?
              </h2>
              <div className="space-y-6 text-muted-foreground">
                <p>
                  Spousta lidí zjistí problém až když žádají o důchod. Pak je pozdě. 
                  Dokumenty jsou ztracené, firmy neexistují, svědci si nepamatují. 
                  Oprava trvá měsíce a někdy se nepovede.
                </p>
                <p>
                  Čím dříve to zkontrolujete, tím snáze se případné chyby opraví. 
                  Máte čas sehnat dokumenty, kontaktovat bývalé zaměstnavatele, 
                  případně doplatit chybějící pojištění.
                </p>
                <p>
                  A taky se dozvíte, jaký důchod můžete čekat. Možná vás to překvapí – 
                  v dobrém i špatném. Lepší vědět teď a mít čas reagovat.
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
                    <li>• Blížíte se důchodovému věku</li>
                    <li>• Měli jste složitou pracovní historii</li>
                    <li>• Pracovali jste v zahraničí</li>
                    <li>• Podnikali jste jako OSVČ</li>
                    <li>• Chcete vědět, na co máte nárok</li>
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
                    <li>• Nemáte zájem o kontrolu svých nároků</li>
                    <li>• Máte jednoduchou pracovní historii u jednoho zaměstnavatele</li>
                    <li>• Jste velmi mladí bez pracovní historie</li>
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
              Zjistěte, na jaký důchod máte nárok
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Přineste mi výpis z ČSSZ a za hodinu budete vědět, jak na tom jste. 
              Schůzka je zdarma a k ničemu vás nezavazuje.
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

export default PensionAuditPage;
