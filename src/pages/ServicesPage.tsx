import { Link } from "react-router-dom";
import { 
  TrendingUp, 
  Shield, 
  Home, 
  PiggyBank, 
  Briefcase, 
  Building2,
  ClipboardCheck,
  HelpCircle,
  CheckCircle,
  ArrowRight,
  Download,
  GraduationCap
} from "lucide-react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { BreadcrumbSchema } from "@/components/StructuredData";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection, StaggerChildren, StaggerItem } from "@/components/AnimatedSection";
import MortgageCalculator from "@/components/MortgageCalculator";
import InvestmentCalculator from "@/components/InvestmentCalculator";

const services = [
  {
    id: "pojisteni",
    icon: Shield,
    title: "Pojištění",
    description: "Pojištění domácnosti, nemovitosti, auta i rodiny. Vyberu to, co skutečně potřebujete, bez zbytečného přeplácení. Srovnám nabídky od více pojišťoven a vysvětlím vám rozdíly.",
    benefits: [
      "Životní pojištění – ochrana příjmu a rodiny",
      "Pojištění domácnosti a nemovitosti",
      "Pojištění auta – povinné ručení i havarijní",
      "Úrazové pojištění pro děti i dospělé",
      "Cestovní pojištění – krátkodobé i celoroční",
      "Srovnání nabídek od více než 15 pojišťoven",
    ],
    forWhom: "Pro každého, kdo chce mít jistotu, že je rodina i majetek chráněný.",
    notForWhom: "Pro ty, kdo hledají jen to nejlevnější bez ohledu na to, co pojistka skutečně kryje.",
  },
  {
    id: "investice",
    icon: TrendingUp,
    title: "Investice",
    description: "Zhodnoťte své peníze – od pravidelného spoření po větší částky. Investovat můžete už od 500 Kč měsíčně. Vysvětlím vám, jak investování funguje, a najdeme řešení, které odpovídá vašim cílům.",
    benefits: [
      "Podílové fondy – akciové, dluhopisové, smíšené",
      "Investiční zlato – fyzické i papírové",
      "Fondy kvalifikovaných investorů (FKI)",
      "Realitní fondy",
      "Pravidelné spoření už od 500 Kč měsíčně",
      "Jednorázové investice větších částek",
    ],
    forWhom: "Pro každého, kdo chce, aby peníze pracovaly lépe než na spořicím účtu.",
    notForWhom: "Pro ty, kdo očekávají zázračné výnosy bez jakéhokoliv rizika.",
  },
  {
    id: "financni-planovani",
    icon: Briefcase,
    title: "Finanční plánování",
    description: "Uděláme si pořádek ve vašich financích. Společně sestavíme plán, který vám pomůže dosáhnout vašich cílů – ať už je to vlastní bydlení, vzdělání dětí nebo klidný důchod.",
    benefits: [
      "Rozbor současné finanční situace",
      "Stanovení konkrétních cílů",
      "Návrh řešení na míru",
      "Optimalizace výdajů a příjmů",
      "Pravidelné kontroly a úpravy plánu",
      "Dlouhodobá spolupráce",
    ],
    forWhom: "Pro každého, kdo chce mít jasný přehled a plán pro své finance.",
    notForWhom: "Pro ty, kdo hledají jednorázové rychlé řešení.",
  },
  {
    id: "reality",
    icon: Building2,
    title: "Reality",
    description: "Kupujete nebo prodáváte nemovitost? Pomohu s odhadem ceny, financováním i celým procesem. Znám místní trh a provedu vás od první schůzky až po předání klíčů.",
    benefits: [
      "Prodej nemovitosti – prezentace a marketing",
      "Pomoc s koupí – vyhledání a výběr",
      "Asistovaný nákup – kompletní servis",
      "Zajištění financování",
      "Pronájem a správa nemovitostí",
      "Znalost trhu na Vysočině",
    ],
    forWhom: "Pro každého, kdo řeší koupi, prodej nebo pronájem nemovitosti.",
    notForWhom: "Pro ty, kdo hledají jen online inzeráty bez osobního přístupu.",
  },
  {
    id: "duchodove-sporeni",
    icon: PiggyBank,
    title: "Důchodové spoření",
    description: "Připravte se na penzi. Ukážu vám, jak využít státní příspěvky a daňové výhody naplno. Spočítáme, kolik potřebujete spořit, aby vám důchod nestačil jen tak tak.",
    benefits: [
      "Penzijní spoření se státním příspěvkem",
      "Příspěvky od zaměstnavatele",
      "Daňové úspory",
      "Výpočet potřebné měsíční úložky",
      "Propojení s investičními produkty",
      "Pravidelné kontroly a úpravy",
    ],
    forWhom: "Pro každého, kdo nechce v důchodu škrtat a chce mít zajištěno.",
    notForWhom: "Pro ty, kdo si říkají ‚na to mám ještě čas'.",
  },
  {
    id: "penzijni-audit",
    icon: ClipboardCheck,
    title: "Penzijní audit",
    description: "Spočítám vám budoucí důchod na základě dat z ČSSZ. Zjistíte, jestli vám něco nechybí a co můžete udělat pro vyšší penzi.",
    benefits: [
      "Analýza výpisu z ČSSZ",
      "Kontrola odpracovaných let",
      "Identifikace chybějících dob",
      "Výpočet předpokládaného důchodu",
      "Doporučení, co doložit",
      "Příprava na jednání s úřady",
    ],
    forWhom: "Pro každého, kdo se blíží důchodu nebo chce mít přehled o svých nárocích.",
    notForWhom: "Pro ty, kdo věří, že se o vše postará stát.",
  },
  {
    id: "hypoteky",
    icon: Home,
    title: "Hypotéky a úvěry",
    description: "Najdu nejlepší hypotéku ze všech bank. Vyřídím vše za vás – ušetříte čas i peníze. Pomohu i s refinancováním, když máte nevýhodné podmínky.",
    benefits: [
      "Srovnání nabídek od všech bank",
      "Vyjednání lepších podmínek",
      "Kompletní vyřízení za vás",
      "Refinancování stávající hypotéky",
      "Poradenství při koupi nemovitosti",
      "Spotřebitelské úvěry",
    ],
    forWhom: "Pro každého, kdo plánuje koupi nebo rekonstrukci nemovitosti.",
    notForWhom: "Pro ty, kdo mají negativní záznam v registru dlužníků.",
  },
  {
    id: "ostatni",
    icon: HelpCircle,
    title: "Ostatní služby",
    description: "Potřebujete poradit s něčím konkrétním? Individuální konzultace na míru vaší situaci. Hodinová sazba je 2 500 Kč.",
    benefits: [
      "Individuální finanční konzultace",
      "Druhý názor na důležité rozhodnutí",
      "Pomoc s finančními dokumenty",
      "Řešení nestandardních situací",
      "Vzdělávací konzultace",
      "Hodinová sazba 2 500 Kč",
    ],
    forWhom: "Pro každého, kdo potřebuje profesionální pohled na svou situaci.",
    notForWhom: "Pro ty, kdo hledají bezplatné poradenství.",
  },
  {
    id: "vzdelavani",
    icon: GraduationCap,
    title: "Finanční vzdělávání",
    description: "Jako jediná společnost v ČR vzděláváme veřejnost už 30 let. Přes 300 000 vyškolených účastníků v Česku i na Slovensku. Naučíme vás rozumět penězům.",
    benefits: [
      "Celodenní seminář s odborníky",
      "Pochopíte, jak fungují finanční produkty",
      "Naučíte se poznat kvalitu od předraženého balastu",
      "Studijní materiály, káva a oběd v ceně",
      "Mezinárodní certifikát IES",
      "30 let zkušeností se vzděláváním",
    ],
    forWhom: "Pro každého, kdo chce rozumět financím a dělat lepší rozhodnutí.",
    notForWhom: "Pro ty, kdo hledají rychlé zbohatnutí bez práce.",
  },
];

const ServicesPage = () => {
  return (
    <Layout>
      <SEO
        title="Finanční služby Žďár nad Sázavou - Pojištění, investice, hypotéky, reality | ZFP Group"
        description="Komplexní finanční poradenství na Vysočině: pojištění, investice, hypotéky, reality, penzijní audit a důchodové spoření. Nezávislý výběr z nabídek více než 50 partnerů. Konzultace zdarma."
        canonical="/sluzby"
      />
      <BreadcrumbSchema
        items={[
          { name: "Úvod", url: "/" },
          { name: "Služby", url: "/sluzby" },
        ]}
      />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-hero relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl">
            <AnimatedSection>
              <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-4">
                Služby
              </span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
                Finance nemusí být{" "}
                <span className="text-gradient bg-gradient-to-r from-primary to-accent">
                  složité
                </span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl">
                Ať řešíte hypotéku, pojištění nebo jak rozumně investovat – vysvětlím vám vše 
                srozumitelně a najdeme řešení na míru. Nezávisle vybírám z nabídek více než 50 partnerů.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-section">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div key={service.id} id={service.id}>
                <AnimatedSection direction={index % 2 === 0 ? "left" : "right"}>
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}>
                    <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                          <service.icon className="w-7 h-7 text-primary" />
                        </div>
                        <h2 className="font-serif text-3xl font-semibold text-foreground">
                          {service.title}
                        </h2>
                      </div>
                      <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                        {service.description}
                      </p>

                      <div className="space-y-3 mb-8">
                        {service.benefits.map((benefit, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-foreground">{benefit}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-3">
                        <Button variant="cta" asChild>
                          <Link to="/kontakt">
                            Mám zájem
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Link>
                        </Button>
                        <Button variant="outline" asChild>
                          <Link to={`/sluzby/${service.id}`}>
                            Chci vědět více
                          </Link>
                        </Button>
                        {service.id === "hypoteky" && <MortgageCalculator />}
                        {service.id === "investice" && <InvestmentCalculator />}
                      </div>
                    </div>

                    <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                      <Card variant="premium" className="p-6">
                        <CardContent className="p-0 space-y-6">
                          <div>
                            <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                              <CheckCircle className="w-5 h-5 text-primary" />
                              Pro koho je služba vhodná
                            </h4>
                            <p className="text-muted-foreground text-sm">
                              {service.forWhom}
                            </p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                              <span className="w-5 h-5 rounded-full border-2 border-muted-foreground/30 flex items-center justify-center text-xs">✕</span>
                              Pro koho služba není
                            </h4>
                            <p className="text-muted-foreground text-sm">
                              {service.notForWhom}
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </AnimatedSection>
                
                {index < services.length - 1 && (
                  <div className="mt-24 border-t border-border/50" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-hero">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
              Nevíte, kde začít?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Domluvte si nezávaznou schůzku a probereme, co vás trápí. 
              První konzultace je zdarma – žádné závazky, žádný tlak.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/kontakt">
                  Konzultace zdarma
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <a href="#ebook" onClick={(e) => { e.preventDefault(); /* TODO: implement ebook download */ }}>
                  <Download className="w-5 h-5 mr-2" />
                  Stáhnout e-book zdarma
                </a>
              </Button>
            </div>
            <p className="text-muted-foreground/70 text-sm mt-4">
              Stáhněte si zdarma průvodce finančním plánováním pro nerozhodné
            </p>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default ServicesPage;
