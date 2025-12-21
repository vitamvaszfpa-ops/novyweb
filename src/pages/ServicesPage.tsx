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
  ArrowRight 
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
    description: "Komplexní pojištění pro jednotlivce, rodiny i firmy. Životní pojištění, majetkové pojištění, pojištění odpovědnosti, firemní pojištění a cestovní pojištění. Srovnávám nabídky od více pojišťoven a vybírám to nejlepší pro vaši situaci.",
    benefits: [
      "Životní pojištění – ochrana rodiny a příjmu",
      "Majetkové pojištění – nemovitosti, domácnost, vozidla",
      "Firemní pojištění – odpovědnost, majetek, přerušení provozu",
      "Pojištění odpovědnosti – za škodu v běžném životě i podnikání",
      "Cestovní pojištění – krátkodobé i celoroční",
      "Srovnání nabídek od více než 15 pojišťoven",
    ],
    forWhom: "Pro každého, kdo chce chránit sebe, rodinu nebo firmu před nepředvídatelnými událostmi.",
    notForWhom: "Pro ty, kdo hledají pouze nejlevnější pojištění bez ohledu na kvalitu krytí.",
  },
  {
    id: "investice",
    icon: TrendingUp,
    title: "Investice a zhodnocení",
    description: "Pomohu vám rozmnožit váš majetek s ohledem na váš rizikový profil a časový horizont. Nabízím fondy kvalifikovaných investorů (FKI), investiční zlato, podílové fondy, realitní fondy a participace. Možnost investovat od 500 Kč měsíčně – pro malé pravidelné vklady i jednorázové milionové investice.",
    benefits: [
      "Fondy kvalifikovaných investorů (FKI)",
      "Investiční zlato – fyzické i papírové",
      "Podílové fondy – akciové, dluhopisové, smíšené",
      "Realitní fondy – investice do nemovitostí",
      "Participace na výnosech",
      "Pravidelné i jednorázové investice od 500 Kč",
      "Řešení pro malé i milionové vklady",
    ],
    forWhom: "Pro každého, kdo chce své peníze zhodnotit lépe než na běžném účtu – od drobných střadatelů po velké investory.",
    notForWhom: "Pro ty, kdo očekávají garantované vysoké výnosy bez rizika.",
  },
  {
    id: "financni-planovani",
    icon: Briefcase,
    title: "Finanční plánování",
    description: "Komplexní pohled na vaše finance. Analyzuji vaši současnou situaci, definuji s vámi finanční cíle a vytvořím plán, který vám pomůže dosáhnout vašich životních snů – ať už je to vlastní bydlení, vzdělání dětí nebo klidný důchod.",
    benefits: [
      "Analýza současné finanční situace",
      "Definice krátkodobých i dlouhodobých cílů",
      "Návrh komplexního řešení na míru",
      "Optimalizace výdajů a příjmů",
      "Pravidelné revize a úpravy plánu",
      "Dlouhodobá spolupráce a podpora",
    ],
    forWhom: "Pro každého, kdo chce mít jasný přehled a plán pro své finance.",
    notForWhom: "Pro ty, kdo hledají rychlé řešení bez dlouhodobé spolupráce.",
  },
  {
    id: "reality",
    icon: Building2,
    title: "Reality",
    description: "Kompletní realitní servis v regionu Vysočina a okolí. Pomůžu vám s koupí, prodejem, financováním i pronájmem nemovitostí. Nabízím asistovaný nákup, kdy vás provedu celým procesem od výběru až po předání klíčů.",
    benefits: [
      "Prodej nemovitostí – profesionální prezentace a marketing",
      "Koupě nemovitostí – vyhledání ideální nemovitosti",
      "Asistovaný nákup – kompletní servis od A do Z",
      "Financování – zajištění hypotéky s nejlepšími podmínkami",
      "Pronájem – hledání nájemníků, správa nemovitostí",
      "Lokální znalost regionu Vysočina",
    ],
    forWhom: "Pro každého, kdo plánuje koupit, prodat nebo pronajmout nemovitost na Vysočině.",
    notForWhom: "Pro ty, kdo hledají pouze online inzeráty bez osobního servisu.",
  },
  {
    id: "duchodove-sporeni",
    icon: PiggyBank,
    title: "Důchodové spoření",
    description: "Připravte se na klidný důchod. Pomohu vám s penzijním spořením, které je propojené s investičními strategiemi pro maximální výnos. Využijeme státní příspěvky, daňové výhody zaměstnavatele i efektivní investování.",
    benefits: [
      "Penzijní spoření se státním příspěvkem",
      "Propojení s investičními produkty",
      "Optimalizace daňových výhod",
      "Příspěvky zaměstnavatele",
      "Výpočet potřebné úspory na důchod",
      "Pravidelná revize a úpravy",
    ],
    forWhom: "Pro každého, kdo chce mít zajištěnou finanční stabilitu i v důchodu.",
    notForWhom: "Pro ty, kdo odmítají myslet na budoucnost.",
  },
  {
    id: "penzijni-audit",
    icon: ClipboardCheck,
    title: "Penzijní audit",
    description: "Na základě výstupu IOLDP (Informativní list důchodového pojištění) z OSSZ uděláme detailní rozbor vaší pracovní historie. Zjistíme, které doby vám chybí, co je potřeba doložit, a spočítáme, jaký důchod byste měli mít v nároku.",
    benefits: [
      "Analýza výstupu IOLDP z OSSZ",
      "Identifikace chybějících dob pojištění",
      "Poradenství, co a jak doložit",
      "Výpočet předpokládaného důchodu",
      "Návrhy, jak situaci zlepšit",
      "Příprava na komunikaci s ČSSZ",
    ],
    forWhom: "Pro každého, kdo se blíží důchodovému věku nebo chce mít přehled o svých nárocích.",
    notForWhom: "Pro ty, kdo nemají zájem o kontrolu svých důchodových nároků.",
  },
  {
    id: "hypoteky",
    icon: Home,
    title: "Hypotéky a úvěry",
    description: "Najdu pro vás nejvýhodnější financování bydlení. Srovnávám nabídky od více než 10 bank a zajistím vám nejlepší podmínky. Pomohu i s refinancováním stávající hypotéky.",
    benefits: [
      "Srovnání nabídek od 10+ bank",
      "Vyjednání individuálních podmínek",
      "Kompletní vyřízení žádosti",
      "Refinancování stávajících hypoték",
      "Poradenství při koupi nemovitosti",
      "Spotřebitelské úvěry",
    ],
    forWhom: "Pro každého, kdo plánuje koupi nebo rekonstrukci nemovitosti.",
    notForWhom: "Pro ty, kdo nemají stabilní příjem nebo negativní záznam v registru.",
  },
  {
    id: "ostatni",
    icon: HelpCircle,
    title: "Ostatní služby",
    description: "Potřebujete poradit s něčím, co nespadá do běžných kategorií? Nabízím individuální konzultace pro speciální případy. Hodinová sazba je 2 500 Kč/hodinu.",
    benefits: [
      "Individuální finanční konzultace",
      "Řešení nestandardních situací",
      "Druhý názor na finanční rozhodnutí",
      "Pomoc s finančními dokumenty",
      "Vzdělávací konzultace",
      "Hodinová sazba 2 500 Kč",
    ],
    forWhom: "Pro každého, kdo potřebuje profesionální radu mimo standardní služby.",
    notForWhom: "Pro ty, kdo hledají bezplatné poradenství.",
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
                Komplexní finanční{" "}
                <span className="text-gradient bg-gradient-to-r from-primary to-accent">
                  poradenství
                </span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl">
                Nabízím široké spektrum finančních služeb v regionu Žďár nad Sázavou a celé Vysočiny, 
                vždy přizpůsobených vašim konkrétním potřebám. Nezávisle vybírám z nabídek více než 50 partnerů.
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
              Nejste si jistí, co potřebujete?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Domluvte si bezplatnou konzultaci a společně najdeme optimální řešení 
              pro vaši situaci. První schůzka je vždy zdarma a nezávazná.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/kontakt">
                Konzultace zdarma
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default ServicesPage;
