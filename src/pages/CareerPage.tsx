import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Rocket, 
  GraduationCap, 
  Users, 
  TrendingUp, 
  Clock, 
  Heart,
  CheckCircle,
  ArrowRight,
  Database,
  Building2,
  Headphones,
  UserCheck,
  BarChart3,
  Monitor,
  DollarSign,
  PieChart,
  TrendingDown,
  Home,
  Scale,
  Car,
  Hotel,
  Smartphone,
  Coffee,
  BookOpen,
  Plane,
  Shirt,
  Wine,
  UsersRound,
  HandCoins,
  Camera,
  MapPin,
  CreditCard,
  Code,
  Laptop,
  Phone,
  Refrigerator,
  Play
} from "lucide-react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { BreadcrumbSchema } from "@/components/StructuredData";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection, StaggerChildren, StaggerItem } from "@/components/AnimatedSection";
import { motion } from "framer-motion";

// Adaptační proces - 6 měsíců
const adaptationSteps = [
  {
    month: "1. měsíc",
    title: "START",
    items: ["Seznámení se systémy", "Příprava na legislativní požadavky", "První obchodní jednání"]
  },
  {
    month: "2. měsíc",
    title: "",
    items: ["První adaptační školení", "Tréninky obchodního jednání", "Zdokonalení obchodního jednání"]
  },
  {
    month: "3. měsíc",
    title: "",
    items: ["Adaptační školení", "Sestavení finančního plánu", "Doladění legislativních požadavků"]
  },
  {
    month: "4. měsíc",
    title: "",
    items: ["Adaptační školení", "Samostatné obchodní schůzky", "Kompletace finančního plánu"]
  },
  {
    month: "5. měsíc",
    title: "",
    items: ["Samostatná práce", "Pravidelná konzultace s kolegou"]
  },
  {
    month: "6. měsíc",
    title: "CÍL",
    items: ["Hodnocení dosavadní činnosti", "Poslední kroky k samostatnosti", "Výdělek 35–50 000 Kč"]
  },
];

// Co s námi získáš - support benefity
const supportBenefits = [
  { icon: Database, title: "Databáze klientů" },
  { icon: Building2, title: "Kompletní zázemí kanceláře" },
  { icon: UserCheck, title: "Office asistentka" },
  { icon: Headphones, title: "Servisní asistentky" },
  { icon: Phone, title: "Interní a externí Call centrum" },
  { icon: Monitor, title: "Kvalitní CRM" },
  { icon: BarChart3, title: "Prezentační platformu" },
  { icon: PieChart, title: "Analyzátor" },
  { icon: DollarSign, title: "Garanci příjmu na 6 měsíců" },
  { icon: TrendingUp, title: "Podíl z obratu vlastního týmu" },
  { icon: TrendingDown, title: "Pasivní příjem po 5 letech cca 20–30 tisíc/měsíc" },
  { icon: Users, title: "Možnost být akcionářem celého GROUP" },
  { icon: Scale, title: "Srovnávače a sjednávače pro majetkové pojištění" },
  { icon: Car, title: "Srovnávače a sjednávače pro vozidla" },
  { icon: Home, title: "Srovnávače pro úvěry a hypotéky" },
  { icon: Rocket, title: "Vlastní produktovou řadu" },
];

// Benefity - flip karty
const flipBenefits = [
  { icon: Car, title: "ZFP fleet", description: "Firemní vozidla pro vaši práci i osobní potřebu" },
  { icon: Hotel, title: "Firemní hotely", description: "Zvýhodněné ubytování v partnerských hotelech" },
  { icon: Smartphone, title: "Mobilní operátor", description: "Výhodné firemní tarify pro vás i rodinu" },
  { icon: Coffee, title: "Káva na kanceláři", description: "Kvalitní káva zdarma každý den" },
  { icon: BookOpen, title: "Osobní rozvoj", description: "Vzdělávací programy a osobní koučink" },
  { icon: Plane, title: "Soutěže o dovolené", description: "Luxusní zájezdy jako odměna za výsledky" },
  { icon: Shirt, title: "Branded oblečení", description: "Profesionální oblečení s logem ZFP" },
  { icon: Wine, title: "Sleva na vína", description: "Exkluzivní slevy u partnerských vinařství" },
  { icon: UsersRound, title: "Firemní teambuilding", description: "Pravidelné akce pro posílení týmu" },
  { icon: HandCoins, title: "Obratové odměny", description: "Bonusy za dosažené obchodní výsledky" },
  { icon: Camera, title: "Profesionální fotograf", description: "Profi fotky pro vaši prezentaci" },
  { icon: MapPin, title: "Kanceláře a zázemí", description: "Moderní kancelářské prostory v centru" },
  { icon: CreditCard, title: "Luxusní vizitky", description: "Prémiové vizitky pro vaši image" },
  { icon: Code, title: "Účast na vývoji", description: "Podílejte se na rozvoji nástrojů" },
  { icon: Laptop, title: "MacBook", description: "Špičková technika pro vaši práci" },
  { icon: Smartphone, title: "iPhone", description: "Nejnovější iPhone jako pracovní nástroj" },
  { icon: Refrigerator, title: "Lednička nápojů", description: "Osvěžení kdykoliv během dne" },
];

// YouTube videa
const youtubeVideos = [
  { id: "Hq2Ge1R-ZUA", title: "Životní styl s ZFP" },
  { id: "aaiskUazlJM", title: "Příběh úspěchu" },
  { id: "wilGljXQU48", title: "Kariéra bez hranic" },
  { id: "CeGNDlI0dnQ", title: "Tým profesionálů" },
  { id: "QUtf2dTg1Sw", title: "Svoboda a flexibilita" },
  { id: "PkZ2aCsINo8", title: "Vaše budoucnost" },
];

// Flip Card Component
const FlipCard = ({ icon: Icon, title, description }: { icon: any; title: string; description: string }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="relative h-40 cursor-pointer perspective-1000"
      onClick={() => setIsFlipped(!isFlipped)}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="relative w-full h-full"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.4 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front */}
        <div 
          className="absolute inset-0 glass rounded-xl flex flex-col items-center justify-center p-4 backface-hidden"
          style={{ backfaceVisibility: "hidden" }}
        >
          <Icon className="w-10 h-10 text-primary mb-3" />
          <span className="text-white font-medium text-center text-sm">{title}</span>
        </div>
        
        {/* Back */}
        <div 
          className="absolute inset-0 glass rounded-xl flex items-center justify-center p-4 bg-primary/10"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <p className="text-white text-center text-sm">{description}</p>
        </div>
      </motion.div>
    </div>
  );
};

const CareerPage = () => {
  return (
    <Layout>
      <SEO
        title="Kariéra ve finančním poradenství - Práce ve Žďáru nad Sázavou | ZFP Group"
        description="Hledáme ambiciózní obchodníky pro kariéru ve finančním poradenství. Flexibilita, silné zázemí, příjem od 100 000 Kč měsíčně. Přidejte se k ZFP Group na Vysočině."
        canonical="/kariera"
      />
      <BreadcrumbSchema
        items={[
          { name: "Úvod", url: "/" },
          { name: "Kariéra", url: "/kariera" },
        ]}
      />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-hero relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl">
            <AnimatedSection>
              <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-4">
                Kariéra
              </span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
                Začněte kariéru s{" "}
                <span className="text-gradient bg-gradient-to-r from-primary to-accent">
                  neomezeným potenciálem
                </span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-3xl mb-8">
                Tato pozice je ideální pro ambiciózní obchodníky, kteří chtějí rozvíjet svou kariéru 
                v dynamickém a stabilním prostředí. Nabízíme časovou flexibilitu, silné zázemí 
                a možnost pracovat s kvalitní klientelou.
              </p>
              <Button variant="hero" size="xl" asChild>
                <Link to="/kontakt">
                  Mám zájem o pohovor
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Proč s námi */}
      <section className="py-24 bg-section">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
              Proč s námi?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Vstupte do světa ZFP GROUP akademie, kde spojujeme bohaté finanční know-how 
              s podnikatelským úspěchem již od roku 1995. Jsme více než jen společnost - 
              jsme komunita, která neustále roste. Za 30 let jsme vytvořili dynamický 
              a inovativní tým, který se nebojí nových výzev.
            </p>
            <div className="section-divider mt-8" />
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <div className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  Nabízíme příležitost pro ty, kteří chtějí být součástí naší rodiny 
                  a přispět k našemu společnému úspěchu. Ať už jste zkušený obchodník, 
                  nebo teprve začínáte svou kariéru, máme pro vás místo. Hledáme obchodní 
                  zástupce i sales manažery, kteří se nebojí vyjít ze své komfortní zóny.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  U nás není důležité jen vzdělání, ale i vášeň pro obchod a schopnost 
                  navazovat vztahy. Jsme tým lidí, kteří věří v sílu spolupráce, loajalitu 
                  a svobodu práce. Práce s námi není jen o výsledcích, ale o cestě k nim.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Díky moderním technologiím můžete pracovat odkudkoliv na světě. 
                  Věříme, že svět je plný příležitostí, a my vám poskytneme podporu 
                  a prostředí, ve kterém můžete růst.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <Card variant="glass" className="p-8">
                <CardContent className="p-0 space-y-4">
                  <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
                    Co vás čeká?
                  </h3>
                  {[
                    "Nezávislost a časová flexibilita",
                    "Silná podpora – back office, call centrum",
                    "Databáze klientů pro akvizici",
                    "Jasně definovaný adaptační proces",
                    "Kariérní růst bez nutnosti obhajoby",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Co nabízíme */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-secondary-foreground mb-6">
              Co nabízíme?
            </h2>
            <div className="section-divider mt-8" />
          </AnimatedSection>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: TrendingUp, title: "Nejlépe placená kariéra", desc: "Mezi firmami poskytujícími finanční poradenství" },
              { icon: DollarSign, title: "Atraktivní ohodnocení", desc: "Po zaučení běžný příjem od 100 000 Kč měsíčně" },
              { icon: Car, title: "Bohatý balíček benefitů", desc: "Operativní leasing, MacBook a další výhody" },
              { icon: Users, title: "Možnost stát se akcionářem", desc: "Jedinečná příležitost podílet se na růstu společnosti" },
              { icon: Heart, title: "Dědičná kariéra", desc: "Budujte podnikání, které lze předat dalším generacím" },
              { icon: GraduationCap, title: "Vedení týmu", desc: "Školení, mentoring a řízení obchodních porad" },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <Card variant="glass" className="h-full p-6">
                  <CardContent className="p-0">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-serif text-lg font-semibold text-secondary-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-secondary-foreground/70 text-sm">
                      {item.desc}
                    </p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Požadujeme */}
      <section className="py-24 bg-section">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                Požadujeme
              </h2>
              <div className="space-y-4 mb-8">
                {[
                  "Minimálně středoškolské vzdělání s maturitou",
                  "Řidičský průkaz skupiny B",
                  "Schopnost efektivně komunikovat a jednat s klienty",
                  "Samostatnost, zodpovědnost a proaktivní přístup",
                  "Motivaci k dosažení vysokých výsledků",
                  "Chuť učit se novým věcem",
                ].map((req, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{req}</span>
                  </div>
                ))}
              </div>
              <Button variant="hero" asChild>
                <Link to="/kontakt">
                  Přihlásit se k pohovoru
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <Card variant="premium" className="p-8">
                <CardContent className="p-0">
                  <p className="text-muted-foreground leading-relaxed italic text-lg">
                    "Pokud hledáte stabilní a perspektivní kariéru s neomezenými 
                    možnostmi růstu, tato pozice je pro vás ideální volbou. 
                    Společně budujeme silné základy pro váš finanční úspěch."
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Adaptační proces */}
      <section className="py-24 bg-hero">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
              První kroky spolupráce
            </h2>
            <p className="text-muted-foreground text-lg">
              Víme, že náš společný úspěch závisí na tom, jak rychle se dokážete naučit 
              naši práci. Proto jsme vytvořili unikátní adaptační proces, který spojuje 
              online vzdělávání s prezenčním tréninkem a praxí pod vedením vlastního mentora.
            </p>
            <div className="section-divider mt-8" />
          </AnimatedSection>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary to-primary/50 -translate-y-1/2" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
              {adaptationSteps.map((step, index) => (
                <AnimatedSection key={step.month} delay={index * 0.1}>
                  <div className="relative">
                    {/* Timeline dot */}
                    <div className="hidden lg:flex absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-primary items-center justify-center z-10">
                      <div className="w-3 h-3 rounded-full bg-background" />
                    </div>
                    
                    <Card variant="glass" className="p-4 h-full mt-6">
                      <CardContent className="p-0">
                        <div className="text-primary font-bold text-lg mb-2">{step.month}</div>
                        {step.title && (
                          <div className="text-foreground font-semibold mb-2">{step.title}</div>
                        )}
                        <ul className="space-y-1">
                          {step.items.map((item, i) => (
                            <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                              <span className="text-primary mt-1">•</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          <AnimatedSection className="text-center mt-12">
            <p className="text-muted-foreground text-lg">
              <strong className="text-foreground">Nejsi v tom sám</strong> – vše tě krok po kroku naučíme, 
              protože jsme tým. Díky tomuto přístupu jsou naši noví kolegové schopni samostatnosti 
              během pouhých pár měsíců.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Co s námi získáš - Support */}
      <section className="py-24 bg-section">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
              Co s námi získáš
            </h2>
            <p className="text-muted-foreground text-lg">
              Každý, kdo touží po úspěchu, potřebuje solidní zázemí. Jsme si toho plně vědomi, 
              a proto naše ředitelství vypracovalo systematicky popsaný support pro nové i stávající kolegy.
            </p>
            <div className="section-divider mt-8" />
          </AnimatedSection>

          <StaggerChildren className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {supportBenefits.map((benefit) => (
              <StaggerItem key={benefit.title}>
                <Card variant="glass" className="p-4 h-full">
                  <CardContent className="p-0 flex items-center gap-3">
                    <benefit.icon className="w-8 h-8 text-primary flex-shrink-0" />
                    <span className="text-foreground text-sm font-medium">{benefit.title}</span>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Benefity - Flip karty */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-secondary-foreground mb-6">
              Benefity
            </h2>
            <p className="text-secondary-foreground/70 text-lg">
              Klikněte na kartu pro více informací
            </p>
            <div className="section-divider mt-8" />
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {flipBenefits.map((benefit) => (
              <FlipCard 
                key={benefit.title}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* YouTube videa */}
      <section className="py-24 bg-section">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
              Životní styl s ZFP
            </h2>
            <p className="text-muted-foreground text-lg">
              Podívejte se, jak si naši kolegové užívají svůj úspěch
            </p>
            <div className="section-divider mt-8" />
          </AnimatedSection>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {youtubeVideos.map((video) => (
              <StaggerItem key={video.id}>
                <a 
                  href={`https://youtu.be/${video.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <Card variant="premium" className="overflow-hidden">
                    <div className="relative aspect-video">
                      <img 
                        src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                        alt={video.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-background/20 flex items-center justify-center group-hover:bg-background/10 transition-colors">
                        <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Play className="w-8 h-8 text-primary-foreground ml-1" />
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
                        {video.title}
                      </h3>
                    </CardContent>
                  </Card>
                </a>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-hero">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
              Připraveni na změnu?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Neváhejte se ozvat. Nezávazně si popovídáme o tom, zda je tato 
              kariérní cesta pro vás ta pravá. Jste připraveni na tuto vzrušující výzvu?
            </p>
            <Button variant="cta" size="xl" asChild>
              <Link to="/kontakt">
                Kontaktovat
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default CareerPage;
