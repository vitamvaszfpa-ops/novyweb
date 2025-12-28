import { Link } from "react-router-dom";
import { GraduationCap, CheckCircle, ArrowRight, Users, Award, BookOpen, Target, Clock } from "lucide-react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { BreadcrumbSchema } from "@/components/StructuredData";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection, StaggerChildren, StaggerItem } from "@/components/AnimatedSection";

const educationFeatures = [
  {
    icon: BookOpen,
    title: "Pochopíte, jak finance fungují",
    description: "Žádné složité pojmy. Vysvětlíme vám srozumitelně, jak fungují pojištění, investice, hypotéky i spoření. Budete rozumět tomu, co podepisujete.",
  },
  {
    icon: Target,
    title: "Naučíte se vybrat kvalitní produkt",
    description: "Většina lidí kupuje finanční produkty, aniž by věděla, co je dobré. Po semináři poznáte kvalitu od předraženého balastu.",
  },
  {
    icon: Users,
    title: "Seminář je pro každého",
    description: "Studenti, zaměstnanci, podnikatelé, manželé, senioři – všichni jsou vítáni. Nepotřebujete žádné předchozí znalosti.",
  },
  {
    icon: Award,
    title: "Mezinárodní certifikát IES",
    description: "Jsme držitelem mezinárodního certifikátu, který garantuje trvale vysokou úroveň vzdělávání. To není jen prázdné tvrzení.",
  },
  {
    icon: Clock,
    title: "Dva typy seminářů",
    description: "Sobotní celodenní semináře na našich seminárních hotelích, nebo regionální semináře v pondělí od 17:00 do 20:00. Vyberte si, co vám vyhovuje.",
  },
];

const stats = [
  { number: "300 000+", label: "vyškolených účastníků" },
  { number: "4 200+", label: "seminářů celkem" },
  { number: "170", label: "zkušených lektorů" },
  { number: "30", label: "let zkušeností" },
];

const benefits = [
  "Pochopíte, jak efektivně zabezpečit sebe i rodinu",
  "Naučíte se ochránit svůj majetek",
  "Zjistíte, jak investovat pravidelně do aktiv",
  "Pochopíte cestu k pasivnímu příjmu",
  "Získáte studijní materiály zdarma",
];

const EducationPage = () => {
  return (
    <Layout>
      <SEO
        title="Finanční vzdělávání Žďár nad Sázavou | Semináře ZFP Akademie | Roman Hájek"
        description="Udělejte si ve financích konečně jasno. ZFP Akademie vzdělává veřejnost již 30 let v ČR i SR. Přes 300 000 vyškolených účastníků. Semináře pro každého."
        canonical="/sluzby/vzdelavani"
      />
      <BreadcrumbSchema
        items={[
          { name: "Úvod", url: "/" },
          { name: "Služby", url: "/sluzby" },
          { name: "Finanční vzdělávání", url: "/sluzby/vzdelavani" },
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
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>
                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground font-bold">
                  Finanční vzdělávání
                </h1>
              </div>
              <p className="text-muted-foreground text-lg max-w-2xl mb-8">
                Většina lidí chce mít v penězích jasno, ale neví, jak začít. Na našich 
                seminářích vám vysvětlíme, jak svět financí funguje. Jako jediná společnost 
                v ČR vzděláváme veřejnost už 30 let.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="hero" size="xl" className="btn-glow" asChild>
                  <Link to="/kontakt">
                    Chci se přihlásit na seminář
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button variant="hero-outline" size="xl" asChild>
                  <a href="https://www.zfpa.cz/co-vas-naucime" target="_blank" rel="noopener noreferrer">
                    Web ZFP Akademie
                  </a>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary/5 border-y border-primary/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <AnimatedSection key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground text-sm">
                  {stat.label}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-section">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6 font-bold">
              Co vás na semináři naučíme
            </h2>
            <p className="text-muted-foreground text-lg">
              Naučte se vydělávat pro sebe, aby na vás nevydělávali ostatní. Nejvíce peněz 
              vám vydělají kvalitní informace – nebuďte závislí na radách ostatních.
            </p>
          </AnimatedSection>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {educationFeatures.map((feature) => (
              <StaggerItem key={feature.title}>
                <Card variant="glass" className="h-full p-6">
                  <CardContent className="p-0">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Program */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6 font-bold">
                Program semináře
              </h2>
              <div className="space-y-8 text-muted-foreground">
                {/* Sobotní seminář */}
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-3">
                    Sobotní seminář (seminární hotely)
                  </h3>
                  <div className="space-y-3">
                    <div className="flex gap-4">
                      <span className="text-primary font-semibold w-16">07:30</span>
                      <span>Registrace a studijní materiály</span>
                    </div>
                    <div className="flex gap-4">
                      <span className="text-primary font-semibold w-16">08:30</span>
                      <span>Filozofie a úvod</span>
                    </div>
                    <div className="flex gap-4">
                      <span className="text-primary font-semibold w-16">09:55</span>
                      <span>Rodinné finance I – zabezpečení a ochrana majetku</span>
                    </div>
                    <div className="flex gap-4">
                      <span className="text-primary font-semibold w-16">11:05</span>
                      <span>Rodinné finance II – investice a pasivní příjem</span>
                    </div>
                    <div className="flex gap-4">
                      <span className="text-primary font-semibold w-16">12:15</span>
                      <span>Finanční nezávislost a možnosti spolupráce</span>
                    </div>
                    <div className="flex gap-4">
                      <span className="text-primary font-semibold w-16">13:30</span>
                      <span>Oběd v hotelové restauraci</span>
                    </div>
                  </div>
                </div>

                {/* Regionální seminář */}
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-3">
                    Regionální seminář (pondělí večer)
                  </h3>
                  <div className="space-y-3">
                    <div className="flex gap-4">
                      <span className="text-primary font-semibold w-16">16:30</span>
                      <span>Registrace</span>
                    </div>
                    <div className="flex gap-4">
                      <span className="text-primary font-semibold w-16">17:00</span>
                      <span>Filozofie a úvod</span>
                    </div>
                    <div className="flex gap-4">
                      <span className="text-primary font-semibold w-16">18:00</span>
                      <span>Rodinné finance – zabezpečení, investice, pasivní příjem</span>
                    </div>
                    <div className="flex gap-4">
                      <span className="text-primary font-semibold w-16">19:00</span>
                      <span>Finanční nezávislost a další možnosti</span>
                    </div>
                  </div>
                </div>
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
                    <li>• Studenti – začněte s přehledem o financích</li>
                    <li>• Zaměstnanci – naučte se lépe hospodařit</li>
                    <li>• Podnikatelé – optimalizujte firemní i osobní finance</li>
                    <li>• Manželé a páry – táhněte za jeden provaz</li>
                    <li>• Senioři – chraňte to, co jste vybudovali</li>
                    <li>• Kdokoli, kdo chce rozumět penězům</li>
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
                    <li>• Hledáte rychlé zbohatnutí</li>
                    <li>• Nechcete investovat čas do sebe</li>
                    <li>• Myslíte, že už všechno víte</li>
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
              Udělejte si ve financích konečně jasno
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Přijďte se naučit, jak ze svých peněz mít maximum. Jeden den, který vám 
              změní pohled na osobní finance.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="xl" className="btn-glow" asChild>
                <Link to="/kontakt">
                  Přihlásit se na seminář
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

export default EducationPage;
