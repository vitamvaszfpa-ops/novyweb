import { Star, Quote, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection, StaggerChildren, StaggerItem } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Martin Novák",
    role: "Podnikatel",
    content: "Díky profesionálnímu přístupu jsem konečně dostal své finance pod kontrolu. Po letech nejistoty mám jasný plán a klid v duši.",
    rating: 5,
  },
  {
    name: "Jana Svobodová",
    role: "Učitelka",
    content: "Oceňuji srozumitelné vysvětlení i složitých produktů. Cítím, že mi skutečně rozumí a hledá to nejlepší řešení pro mě.",
    rating: 5,
  },
  {
    name: "Petr Kučera",
    role: "IT specialista",
    content: "Skvělá zkušenost s hypotékou. Ušetřil mi nejen peníze, ale i spoustu času a stresu. Doporučuji všem známým.",
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Subtle divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/30 to-transparent" />
      
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section header */}
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            Reference
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 font-bold">
            Co říkají moji klienti
          </h2>
          <p className="text-muted-foreground text-lg">
            Důvěra mých klientů je pro mě tou největší odměnou. 
            Přečtěte si, jak jsem jim pomohl na jejich cestě k finanční jistotě.
          </p>
          <div className="section-divider mt-8" />
        </AnimatedSection>

        {/* Testimonials grid */}
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <StaggerItem key={testimonial.name}>
              <Card variant="premium" className="h-full">
                <CardContent className="p-8">
                  {/* Quote icon */}
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                    <Quote className="w-5 h-5 text-primary" />
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-primary fill-primary"
                      />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <span className="text-primary-foreground font-semibold text-sm">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground text-sm">
                        {testimonial.name}
                      </div>
                      <div className="text-muted-foreground text-xs">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerChildren>

        {/* Review buttons */}
        <AnimatedSection className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-12">
          <Button variant="glass" size="lg" asChild>
            <a 
              href="https://share.google/NFu9R9tmK775z7PMl" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Google Recenze
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
          <Button variant="glass" size="lg" asChild>
            <a 
              href="https://www.firmy.cz/detail/12802315-michal-vitamvas-zfp-group-zdar-nad-sazavou-1.html" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
              Firmy.cz
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default TestimonialsSection;
