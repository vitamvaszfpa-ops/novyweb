import { Link } from "react-router-dom";
import { Award, BookOpen, Users, Target, Heart, Clock, CheckCircle, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { PersonSchema, BreadcrumbSchema } from "@/components/StructuredData";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection, StaggerChildren, StaggerItem } from "@/components/AnimatedSection";
const milestones = [{
  year: "2004",
  title: "Začátek podnikání",
  description: "První kroky v podnikání – kavárny a cukrárny."
}, {
  year: "2007",
  title: "První krach v podnikání",
  description: "Tvrdá škola života – finanční problémy a cenné lekce."
}, {
  year: "2008",
  title: "Začátek kariéry v ZFP GROUP Akademie",
  description: "Nový začátek a vstup do světa finančního poradenství."
}, {
  year: "2012",
  title: "Manažer týmu",
  description: "Tým se rozrůstá a já se posouvám na pozici manažera."
}, {
  year: "2015",
  title: "Strukturní ředitel",
  description: "Dosažení pozice strukturního ředitele – a tou jsem dodnes."
}, {
  year: "2023",
  title: "Člen BOARDU",
  description: "Stal jsem se členem BOARDU hlavní regionální kanceláře č. 133."
}, {
  year: "2025",
  title: "Neustálý vývoj",
  description: "Pokračujeme v růstu a rozšiřování týmu – cesta nekončí."
}];
const certifications = ["Certifikovaný finanční poradce", "Investiční zprostředkovatel ČNB", "Pojišťovací agent ČNB", "Hypoteční specialista"];
const AboutPage = () => {
  return <Layout>
      <SEO title="O mně - Finanční poradce | ZFP Group" description="Poznejte svého finančního poradce. Více než 15 let zkušeností, stovky spokojených klientů a vášeň pro finanční vzdělávání. Žďár nad Sázavou, Vysočina." canonical="/o-mne" />
      <PersonSchema />
      <BreadcrumbSchema items={[{
      name: "Úvod",
      url: "/"
    }, {
      name: "O mně",
      url: "/o-mne"
    }]} />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-hero relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl">
            <AnimatedSection>
              <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-4">
                O mně
              </span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
                Váš průvodce světem{" "}
                <span className="text-gradient bg-gradient-to-r from-primary to-accent">
                  financí
                </span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl">
                Jsem přesvědčen, že každý si zaslouží kvalitní finanční poradenství. 
                Proto přistupuji ke každému klientovi individuálně a s respektem.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-section">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-secondary to-secondary/80 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-accent mx-auto mb-6 flex items-center justify-center">
                      <span className="text-5xl font-serif font-bold text-primary-foreground">FP</span>
                    </div>
                    <p className="text-secondary-foreground/60 text-sm">
                      Profesionální fotografie připravujeme
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                Můj příběh
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Pocházím ze Žďáru nad Sázavou, z rodiny se čtyřmi sourozenci, a vyrůstal jsem v prostředí, kde se člověk musel naučit spoléhat sám na sebe. Už od mládí jsem si přivydělával na brigádách a hledal cesty, jak si vydělat peníze. Věděl jsem, že klasické zaměstnání pro mě nebude – nevyhovovaly mi umělé autority ani předem dané limity. Touha po svobodě, úspěchu a zajištění rodiny mě přirozeně vedla k podnikání.
                </p>
                <p>
                  Moje první podnikatelské zkušenosti byly v oblasti kaváren a cukráren. Přestože začátek vypadal slibně, nedostatek zkušeností a slepá důvěra mě během několika let přivedly do vážných finančních problémů. Ocitl jsem se v druhotné platební neschopnosti, s dluhy a zablokovaným majetkem. S odstupem času vnímám toto období jako zásadní školu života, která mě naučila odpovědnosti, pokoře a skutečnému významu správných rozhodnutí.
                </p>
                <p>
                  Zlom přišel v roce 2008, kdy jsem dostal nabídku spolupráce se společností ZFP Akademie, a.s. Tento okamžik pro mě znamenal nový začátek. Díky ověřenému systému, vzdělávání a vlastnímu nasazení jsem postupně splatil své závazky, vybudoval klientskou základnu i obchodní tým a začal růst společně s firmou. Dnes stojím v čele stabilního týmu, který se stará o tisíce klientů, máme vlastní zázemí, asistenční podporu i funkční systém práce. Věřím v neustálý rozvoj, inovace a dlouhodobou spolupráci – a právě touto cestou dokážu provést i další lidi, kteří chtějí víc než jen celoživotní zaměstnání.
                </p>
              </div>
              
              <div className="mt-8 grid grid-cols-2 gap-4">
                {certifications.map((cert, index) => <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm text-foreground">{cert}</span>
                  </div>)}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-secondary-foreground mb-6">
              Moje cesta
            </h2>
            <div className="section-divider" />
          </AnimatedSection>

          <StaggerChildren className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => <StaggerItem key={milestone.year}>
                <div className="flex gap-6 mb-8 last:mb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                      <span className="text-primary font-bold">{milestone.year}</span>
                    </div>
                    {index < milestones.length - 1 && <div className="w-0.5 h-full bg-primary/20 mt-2" />}
                  </div>
                  <div className="flex-1 pb-8">
                    <h3 className="font-serif text-xl font-semibold text-secondary-foreground mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-secondary-foreground/80 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>)}
          </StaggerChildren>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-section">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
              Pojďme se poznat osobně
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Nejlepší způsob, jak zjistit, zda jsme správná volba, je nezávazná konzultace. 
              Těším se na setkání s vámi.
            </p>
            <Button variant="cta" size="xl" asChild>
              <Link to="/kontakt">
                Domluvit schůzku
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </Layout>;
};
export default AboutPage;