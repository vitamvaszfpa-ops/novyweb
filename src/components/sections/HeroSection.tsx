import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Users, FileText, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef, useState, useEffect, useMemo } from "react";
import heroPortrait from "@/assets/hero-portrait.jpg";

// Calculate ZFP years dynamically - starts at 30 in 2025, +1 each year on April 1st
const calculateZFPYears = (): number => {
  const baseYear = 2025;
  const baseYears = 30;
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth(); // 0-indexed, April = 3
  const currentDay = now.getDate();

  // If before April 1st of current year, use previous year's calculation
  const isBeforeApril = currentMonth < 3 || currentMonth === 3 && currentDay < 1;
  const effectiveYear = isBeforeApril ? currentYear - 1 : currentYear;
  return baseYears + (effectiveYear - baseYear);
};
interface TiltImageProps {
  imageSrc?: string;
}
const TiltImage = ({
  imageSrc
}: TiltImageProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState({
    rotateX: 0,
    rotateY: 0
  });
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    const rotateY = mouseX / (rect.width / 2) * 15;
    const rotateX = -(mouseY / (rect.height / 2)) * 15;
    setTransform({
      rotateX,
      rotateY
    });
  };
  const handleMouseLeave = () => {
    setTransform({
      rotateX: 0,
      rotateY: 0
    });
  };
  return <motion.div ref={containerRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} initial={{
    opacity: 0,
    scale: 0.9
  }} animate={{
    opacity: 1,
    scale: 1
  }} transition={{
    duration: 0.7,
    delay: 0.3
  }} className="relative w-full max-w-[480px] aspect-square mx-auto" style={{
    perspective: 1000
  }}>
      <div className="w-full h-full rounded-2xl overflow-hidden glass transition-transform duration-200 ease-out" style={{
      transform: `rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg)`,
      transformStyle: 'preserve-3d'
    }}>
        {imageSrc ? <img src={imageSrc} alt="Michal Vítámvás - finanční poradce" className="w-full h-full object-cover" /> : <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center">
            <span className="text-muted-foreground text-lg">Fotka bude přidána</span>
          </div>}
      </div>
      {/* Reflection/glow effect */}
      <div className="absolute inset-0 rounded-2xl pointer-events-none" style={{
      background: `radial-gradient(circle at ${50 + transform.rotateY}% ${50 - transform.rotateX}%, rgba(255,255,255,0.15) 0%, transparent 50%)`,
      transform: `rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg)`
    }} />
    </motion.div>;
};
export const HeroSection = () => {
  const zfpYears = useMemo(() => calculateZFPYears(), []);
  const stats = [{
    icon: TrendingUp,
    value: `${zfpYears}+`,
    label: "historie ZFP"
  }, {
    icon: Users,
    value: "358 236+",
    label: "Spokojených klientů ZFP"
  }, {
    icon: FileText,
    value: "4,6 mil.",
    label: "Zprostředkovaných smluv"
  }];
  return <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* No background - uses unified page background */}
      
      <div className="container mx-auto px-4 lg:px-8 pt-32 pb-20 relative z-10">
        {/* Top section - Text and Image side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left column - Text content */}
          <div className="max-w-xl">
            {/* Badge */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6
          }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
              <span className="w-2 h-2 rounded-full bg-primary pulse-glow" />
              <span className="text-primary text-sm font-medium">Finanční poradce Žďár nad Sázavou
            </span>
            </motion.div>

            {/* Main heading - Modern sans-serif */}
            <motion.h1 initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.7,
            delay: 0.1
          }} className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.1] mb-6 font-bold">
              Řešíte hypotéku, pojištění nebo jak{" "}
              <span className="text-gradient">
                zhodnotit peníze?
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.7,
            delay: 0.2
          }} className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">Pomáhám lidem na Vysočině udělat si pořádek ve financích. Společně najdeme řešení, které sedí právě vám – bez zbytečných produktů a srozumitelně.</motion.p>

            {/* CTA Buttons */}
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.7,
            delay: 0.3
          }} className="flex flex-wrap gap-4">
              <Button variant="hero" size="xl" className="btn-glow" asChild>
                <Link to="/kontakt">
                  Nezávazná konzultace zdarma
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <Link to="/o-mne">Více o mně</Link>
              </Button>
            </motion.div>
          </div>

          {/* Right column - Image with tilt effect */}
          <div className="flex justify-center mt-8 lg:mt-0">
            <TiltImage imageSrc={heroPortrait} />
          </div>
        </div>

        {/* Stats section - Below hero content */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.7,
        delay: 0.5
      }} className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {stats.map(item => <div key={item.label} className="flex items-center gap-4 p-4 rounded-xl glass">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="text-2xl font-heading font-bold text-foreground">{item.value}</div>
                <div className="text-sm text-muted-foreground">{item.label}</div>
              </div>
            </div>)}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      delay: 1.5,
      duration: 1
    }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-5 h-5 scroll-indicator" />
        </div>
      </motion.div>
    </section>;
};
export default HeroSection;
