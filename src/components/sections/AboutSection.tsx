import { Link } from "react-router-dom";
import { Award, Clock, Heart, Target, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/AnimatedSection";
const values = [{
  icon: Target,
  title: "Nezávislost",
  description: "Pracuji s více než 50 finančními partnery. Vybírám to nejlepší pro vás, ne pro provizi."
}, {
  icon: Heart,
  title: "Osobní přístup",
  description: "Každý klient je jedinečný. Řešení šiji na míru vaší životní situaci a cílům."
}, {
  icon: Award,
  title: "Odbornost",
  description: "Pravidelné vzdělávání, certifikace a sledování novinek v oboru finančního poradenství."
}, {
  icon: Clock,
  title: "Dlouhodobost",
  description: "Nejsem tu jen pro jednorázový obchod. Buduji vztahy na celý život."
}];
export const AboutSection = () => {
  return <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <AnimatedSection direction="left">
            <span className="inline-block text-primary text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              O mně
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 font-bold">
              Váš partner na cestě k{" "}
              <span className="text-gradient">
                finanční svobodě
              </span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">Jsem finanční poradce a ředitel týmu v rámci ZFP GROUP. Více než 18 let pomáhám jednotlivcům i rodinám v regionu Vysočina činit promyšlená a dlouhodobě udržitelná finanční rozhodnutí.

          </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Věřím, že kvalitní finanční poradenství by mělo být dostupné každému. 
              Proto pracuji s transparentním přístupem, vysvětluji složité věci 
              srozumitelně a vždy jednám ve vašem nejlepším zájmu.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" className="btn-glow" asChild>
                <Link to="/o-mne">
                  Více o mně
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button variant="hero-outline" asChild>
                <Link to="/muj-tym">Poznejte můj tým</Link>
              </Button>
            </div>
          </AnimatedSection>

          {/* Values grid */}
          <AnimatedSection direction="right" delay={0.2}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map(value => <div key={value.title} className="p-6 rounded-xl glass hover:border-primary/30 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>)}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>;
};
export default AboutSection;
