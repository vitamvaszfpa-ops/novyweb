import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logoWhite from "@/assets/logo-white.webp";
const navigation = [{
  name: "Úvod",
  href: "/"
}, {
  name: "O mně",
  href: "/o-mne"
}, {
  name: "Služby",
  href: "/sluzby"
}, {
  name: "Kariéra",
  href: "/kariera"
}, {
  name: "ZFP Pomáhá",
  href: "/zfp-pomaha"
}, {
  name: "Můj tým",
  href: "/muj-tym"
}, {
  name: "Blog",
  href: "/blog"
}, {
  name: "Kontakt",
  href: "/kontakt"
}];
export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);
  return <header className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-500", isScrolled ? "bg-secondary/95 backdrop-blur-lg shadow-lg py-3" : "bg-secondary/80 backdrop-blur-sm py-5")}>
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img src={logoWhite} alt="ZFP Group Logo" className="h-10 w-auto object-contain" />
            <div className="hidden sm:block">
              <span className="text-secondary-foreground font-heading text-xl font-bold tracking-tight">Michal Vítámvás</span>
              <span className="block text-secondary-foreground/60 text-xs tracking-wide">
                Finanční poradenství
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map(item => <Link key={item.name} to={item.href} className={cn("px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg", location.pathname === item.href ? "text-primary bg-primary/10" : "text-secondary-foreground/80 hover:text-primary hover:bg-primary/5")}>
                {item.name}
              </Link>)}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+420123456789" className="flex items-center gap-2 text-secondary-foreground/80 hover:text-primary transition-colors text-sm">
              <Phone className="w-4 h-4" />
              <span>+420 775 310 825 </span>
            </a>
            <Button variant="hero" size="lg" asChild>
              <Link to="/kontakt">Konzultace zdarma</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 text-secondary-foreground hover:text-primary transition-colors" aria-label="Toggle menu">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && <motion.div initial={{
          opacity: 0,
          height: 0
        }} animate={{
          opacity: 1,
          height: "auto"
        }} exit={{
          opacity: 0,
          height: 0
        }} transition={{
          duration: 0.3
        }} className="lg:hidden overflow-hidden">
              <div className="py-4 space-y-1">
                {navigation.map((item, index) => <motion.div key={item.name} initial={{
              opacity: 0,
              x: -20
            }} animate={{
              opacity: 1,
              x: 0
            }} transition={{
              delay: index * 0.05
            }}>
                    <Link to={item.href} className={cn("block px-4 py-3 text-base font-medium rounded-lg transition-all", location.pathname === item.href ? "text-primary bg-primary/10" : "text-secondary-foreground/80 hover:text-primary hover:bg-primary/5")}>
                      {item.name}
                    </Link>
                  </motion.div>)}
                <motion.div initial={{
              opacity: 0,
              y: 10
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.4
            }} className="pt-4">
                  <Button variant="hero" size="lg" className="w-full" asChild>
                    <Link to="/kontakt">Konzultace zdarma</Link>
                  </Button>
                </motion.div>
              </div>
            </motion.div>}
        </AnimatePresence>
      </nav>
    </header>;
};
export default Header;