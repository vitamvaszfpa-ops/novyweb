import { Link } from "react-router-dom";
import { PiggyBank, CheckCircle, ArrowRight, Gift, TrendingUp, Calculator, Building2, Calendar } from "lucide-react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { BreadcrumbSchema } from "@/components/StructuredData";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection, StaggerChildren, StaggerItem } from "@/components/AnimatedSection";

const savingsFeatures = [
  {
    icon: Gift,
    title: "Státní příspěvek",
    description: "Stát vám přidá až 2 760 Kč ročně. Zadarmo. Stačí spořit 1 000 Kč měsíčně a máte maximum. Kde jinde dostanete 23% výnos bez rizika?",
  },
  {
    icon: Building2,
    title: "Příspěvek zaměstnavatele",
    description: "Hodně zaměstnavatelů přispívá na penzijko. Vy dostanete peníze navíc, firma ušetří na odvodech. Win-win, ale musíte o to požádat.",
  },
  {
    icon: Calculator,
    title: "Daňové výhody",
    description: "Odečtěte si až 48 000 Kč z daní ročně. Při sazbě 23 % to je přes 11 000 Kč zpátky. Peníze, které byste jinak dali státu.",
  },
  {
    icon: TrendingUp,
    title: "Investiční zhodnocení",
    description: "Penzijko může být víc než jen spoření. Připojím k němu investiční strategii, aby peníze rostly rychleji než inflace.",
  },
  {
    icon: Calendar,
    title: "Flexibilita",
    description: "Můžete přerušit, změnit částku, v nouzi i vybrat. Není to past – jen chytrý nástroj pro budoucnost.",
  },
];

const benefits = [
  "Nastavím penzijko tak, abyste dostali maximum od státu",
  "Vyřídím příspěvky od zaměstnavatele, pokud je nabízí",
  "Optimalizuju daňové výhody – ušetříte tisíce ročně",
  "Propojím to s investicemi pro vyšší výnosy",
  "Spočítám, kolik budete mít v důchodu",
  "18 let zkušeností s penzijním plánováním",
];

const RetirementSavingsPage = () => {
  return (
    <Layout>
      <SEO
        title="Penzijní spoření Žďár nad Sázavou | Státní příspěvky, daňové výhody | Roman Hájek"
        description="Chcete mít v důchodu víc než jen státní penzi? Za 18 let jsem pomohl stovkám lidí ze Žďáru připravit se na důchod. Využijte státní příspěvky a daňové výhody. Konzultace zdarma."
        canonical="/sluzby/duchodove-sporeni"
      />
      <BreadcrumbSchema
        items={[
          { name: "Úvod", url: "/" },
          { name: "Služby", url: "/sluzby" },
          { name: "Důchodové spoření", url: "/sluzby/duchodove-sporeni" },
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
                  <PiggyBank className="w-8 h-8 text-primary" />
                </div>
                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground font-bold">
                  Důchodové spoření
                </h1>
              </div>
              <p className="text-muted-foreground text-lg max-w-2xl mb-8">
                Státní důchod vám na slušný život stačit nebude. To není strašení, to je 
                matematika. Dobrá zpráva? Stát vám na spoření přidá tisíce ročně, jen to 
                musíte správně nastavit.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="hero" size="xl" className="btn-glow" asChild>
                  <Link to="/kontakt">
                    Chci nastavit penzijko
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-section">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6 font-bold">
              Co všechno můžete získat
            </h2>
            <p className="text-muted-foreground text-lg">
              Penzijní spoření není jen o odkládání peněz. Je to nástroj, který – když ho 
              správně nastavíte – vám dá tisíce korun ročně navíc. Zdarma.
            </p>
          </AnimatedSection>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {savingsFeatures.map((feature) => (
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

      {/* How It Works */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6 font-bold">
                Kolik budete v důchodu potřebovat?
              </h2>
              <div className="space-y-6 text-muted-foreground">
                <p>
                  Průměrný důchod je dnes kolem 20 000 Kč. Za 20-30 let bude nominálně vyšší, 
                  ale koupíte si za něj méně. Pokud chcete žít stejně jako teď, potřebujete 
                  vlastní rezervy.
                </p>
                <p>
                  Čím dříve začnete, tím méně musíte měsíčně odkládat. Díky složenému úročení 
                  pracuje čas pro vás. Tisícovka měsíčně od třiceti je víc než tři tisíce 
                  od padesáti.
                </p>
                <p>
                  Společně spočítáme, kolik potřebujete. Nastavíme penzijko tak, abyste 
                  dostali maximum od státu i zaměstnavatele. A propojíme to s investicemi, 
                  aby peníze rostly.
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
                    <li>• Zaměstnanci – využijte příspěvky od firmy</li>
                    <li>• OSVČ – nemáte firemní benefity, musíte si poradit sami</li>
                    <li>• Každý od 18 let – čím dříve, tím lépe</li>
                    <li>• Rodiče – založte penzijko dětem, ať mají náskok</li>
                    <li>• Kdokoli, kdo chce využít daňové výhody</li>
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
                    <li>• Odmítáte myslet na budoucnost</li>
                    <li>• Potřebujete peníze k dispozici hned</li>
                    <li>• Už máte důchod dostatečně zajištěný</li>
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
              Nevyhazujte peníze, které vám stát dává zadarmo
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Tisíce lidí nevyužívají státní příspěvky a daňové úlevy, na které mají nárok. 
              Sejdeme se a nastavíme to správně. Schůzka je zdarma.
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

export default RetirementSavingsPage;
