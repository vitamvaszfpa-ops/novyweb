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
    description: "Pomůžu vám získat Informativní osobní list důchodového pojištění z OSSZ.",
  },
  {
    icon: FileSearch,
    title: "Analýza historie",
    description: "Projdu vaši pracovní historii a identifikuji všechny doby pojištění.",
  },
  {
    icon: AlertCircle,
    title: "Identifikace chyb",
    description: "Zjistím, které doby chybí nebo jsou špatně evidované.",
  },
  {
    icon: HelpCircle,
    title: "Návrh řešení",
    description: "Poradím, jak chybějící doby doložit a co je potřeba udělat.",
  },
  {
    icon: Calculator,
    title: "Výpočet důchodu",
    description: "Spočítám, jaký důchod byste měli mít v nároku podle aktuálních pravidel.",
  },
];

const benefits = [
  "Analýza výstupu IOLDP z OSSZ",
  "Identifikace chybějících dob pojištění",
  "Poradenství, co a jak doložit",
  "Výpočet předpokládaného důchodu",
  "Návrhy, jak situaci zlepšit",
  "Příprava na komunikaci s ČSSZ",
];

const PensionAuditPage = () => {
  return (
    <Layout>
      <SEO
        title="Penzijní audit Žďár nad Sázavou - Kontrola důchodových nároků, IOLDP analýza | ZFP Group"
        description="Profesionální penzijní audit na Vysočině. Analýza IOLDP, identifikace chybějících dob pojištění, výpočet důchodu. Zjistěte, na jaký důchod máte nárok. Konzultace zdarma."
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
                Na základě výstupu IOLDP z OSSZ uděláme detailní rozbor vaší pracovní historie. 
                Zjistíme, které doby vám chybí, a spočítáme, jaký důchod byste měli mít v nároku.
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

      {/* Audit Steps */}
      <section className="py-24 bg-section">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6 font-bold">
              Jak penzijní audit probíhá
            </h2>
            <p className="text-muted-foreground text-lg">
              Penzijní audit je systematický proces, který vám dá jasný přehled o vašich 
              důchodových nárocích a pomůže vám je maximalizovat.
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
                Proč je penzijní audit důležitý?
              </h2>
              <div className="space-y-6 text-muted-foreground">
                <p>
                  Evidence České správy sociálního zabezpečení není vždy bezchybná. Chybějící 
                  doby pojištění – ať už kvůli chybě zaměstnavatele nebo neúplným záznamům – 
                  mohou výrazně snížit váš budoucí důchod.
                </p>
                <p>
                  Čím dříve chyby odhalíte, tím snáze je opravíte. S odstupem let je těžší 
                  shánět dokumenty a doklady. Proto je dobré provést audit i v mladším věku, 
                  nejen před důchodem.
                </p>
                <p>
                  Penzijní audit vám také ukáže, jak se váš důchod počítá, a co můžete udělat 
                  pro jeho zvýšení – například dobrovolným důchodovým pojištěním nebo optimalizací 
                  zbývajících let.
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
                    <li>• Lidé blížící se důchodovému věku</li>
                    <li>• Ti, kdo měli složitou pracovní historii</li>
                    <li>• Lidé, kteří pracovali v zahraničí</li>
                    <li>• OSVČ a podnikatelé</li>
                    <li>• Každý, kdo chce mít přehled o svých nárocích</li>
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
                    <li>• Pro ty, kdo nemají zájem o kontrolu svých nároků</li>
                    <li>• Pro ty, kdo mají jednoduchý průběžný pracovní život</li>
                    <li>• Pro velmi mladé lidi bez pracovní historie</li>
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
              Domluvte si bezplatnou konzultaci a společně projdeme vaši pracovní historii. 
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

export default PensionAuditPage;
