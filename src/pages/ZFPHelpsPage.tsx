import { Link } from "react-router-dom";
import { Heart, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import zfpPomahaLogo from "@/assets/zfp-pomaha-logo.png";

const ZFPHelpsPage = () => (
  <Layout>
    <SEO title="ZFP Pomáhá - Charitativní činnost | ZFP Group" description="ZFP Group se aktivně zapojuje do charitativních aktivit a pomáhá těm, kteří to potřebují." canonical="/zfp-pomaha" />
    <section className="pt-32 pb-20 bg-hero">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection className="max-w-xl">
            <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-4">ZFP Pomáhá</span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">Pomáháme <span className="text-gradient bg-gradient-to-r from-primary to-accent">společně</span></h1>
            <p className="text-muted-foreground text-lg">Věříme, že úspěch zavazuje. Proto se aktivně zapojujeme do charitativních projektů a pomáháme těm, kteří to potřebují.</p>
          </AnimatedSection>
          
          <AnimatedSection direction="right" delay={0.2} className="flex justify-center lg:justify-end">
            <motion.div 
              className="relative"
              animate={{ 
                y: [0, -10, 0],
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              <div 
                className="relative"
                style={{
                  filter: "drop-shadow(0 25px 50px rgba(237, 109, 5, 0.25)) drop-shadow(0 10px 20px rgba(0, 0, 0, 0.15))",
                }}
              >
                <img 
                  src={zfpPomahaLogo} 
                  alt="ZFP Pomáhá Logo" 
                  className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 object-contain"
                />
              </div>
              {/* Subtle glow behind */}
              <div 
                className="absolute inset-0 -z-10 blur-3xl opacity-30"
                style={{
                  background: "radial-gradient(circle, hsl(25 93% 47% / 0.4) 0%, transparent 70%)",
                }}
              />
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
    <section className="py-24 bg-section">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center"><Heart className="w-8 h-8 text-primary" /></div>
            <h2 className="font-serif text-3xl font-semibold">Naše aktivity</h2>
          </div>
          <div className="prose prose-lg text-muted-foreground">
            <p>Program ZFP Pomáhá je naší odpovědí na potřebu pomáhat druhým. Podporujeme lokální charitativní organizace, pořádáme sbírky a aktivně se zapojujeme do dobrovolnických akcí.</p>
            <p>Věříme, že i malá pomoc může změnit život. Proto se snažíme být aktivní součástí komunity a přispívat k lepšímu světu kolem nás.</p>
          </div>
          <div className="mt-12">
            <Button variant="cta" size="lg" asChild><Link to="/kontakt">Chci se zapojit <ArrowRight className="w-4 h-4 ml-2" /></Link></Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </Layout>
);

export default ZFPHelpsPage;
