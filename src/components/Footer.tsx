import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Linkedin, Facebook, Instagram, Settings, ArrowUp } from "lucide-react";
import { useCookieConsent } from "@/contexts/CookieConsentContext";
import logoWhite from "@/assets/logo-white.webp";
const YoutubeIcon = () => <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>;
const footerLinks = {
  services: [{
    name: "Pojištění",
    href: "/sluzby#pojisteni"
  }, {
    name: "Investice a zhodnocení",
    href: "/sluzby#investice"
  }, {
    name: "Finanční plánování",
    href: "/sluzby#financni-planovani"
  }, {
    name: "Reality",
    href: "/sluzby#reality"
  }, {
    name: "Důchodové spoření",
    href: "/sluzby#duchodove-sporeni"
  }, {
    name: "Penzijní audit",
    href: "/sluzby#penzijni-audit"
  }, {
    name: "Hypotéky a úvěry",
    href: "/sluzby#hypoteky"
  }],
  company: [{
    name: "O mně",
    href: "/o-mne"
  }, {
    name: "Můj tým",
    href: "/muj-tym"
  }, {
    name: "Kariéra",
    href: "/kariera"
  }, {
    name: "ZFP Pomáhá",
    href: "/zfp-pomaha"
  }, {
    name: "Blog",
    href: "/blog"
  }],
  legal: [{
    name: "Ochrana osobních údajů",
    href: "/ochrana-udaju"
  }, {
    name: "Cookies",
    href: "/cookies"
  }]
};
export const Footer = () => {
  const {
    setShowSettings
  } = useCookieConsent();
  return <footer className="bg-secondary border-t border-secondary-foreground/10">
      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img src={logoWhite} alt="ZFP Group Logo" className="h-12 w-auto object-contain" />
              <div>
                <span className="font-heading text-xl font-semibold text-secondary-foreground">Michal Vítámvás</span>
                <span className="block text-secondary-foreground/60 text-xs">Finanční poradenství</span>
              </div>
            </Link>
            <p className="text-secondary-foreground/70 text-sm leading-relaxed mb-6">
              Profesionální finanční poradenství pro jednotlivce, rodiny i firmy. Pomáhám budovat finanční jistotu a
              prosperitu již více než 18+ let.
            </p>
            <div className="flex gap-3">
              <a href="https://www.linkedin.com/in/michalvitamvas/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-secondary-foreground/70" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100008337244220" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-secondary-foreground/70" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/michalvitamvas/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-secondary-foreground/70" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.youtube.com/@michalvitamvas4186" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-secondary-foreground/70" aria-label="YouTube">
                <YoutubeIcon />
              </a>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6 text-secondary-foreground">Služby</h4>
            <ul className="space-y-3">
              {footerLinks.services.map(link => <li key={link.name}>
                  <Link to={link.href} className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>)}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6 text-secondary-foreground">O nás</h4>
            <ul className="space-y-3">
              {footerLinks.company.map(link => <li key={link.name}>
                  <Link to={link.href} className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>)}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6 text-secondary-foreground">Kontakt</h4>
            <ul className="space-y-4">
              <li>
                <a className="flex items-center gap-3 text-secondary-foreground/70 hover:text-primary transition-colors text-sm" href="tel:+420775310825">
                  <Phone className="w-5 h-5 text-primary" />
                  +420 775 310 825  
                </a>
              </li>
              <li>
                <a className="flex items-center gap-3 text-secondary-foreground/70 hover:text-primary transition-colors text-sm" href="mailto:michal.vitamvas@zfpa.cz">
                  <Mail className="w-5 h-5 text-primary" />
                  michal.vitamvas@zfpa.cz  
                </a>
              </li>
              <li>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Havlíčkovo+nám.+152/4,+591+01+Žďár+nad+Sázavou,+Česká+republika" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-secondary-foreground/70 hover:text-primary transition-colors text-sm not-italic"
                >
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Centrum města <br />
Havlíčkovo nám. 152/4, 
591 01 Žďár nad Sázavou,
                    <br />
                    Česká republika
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary-foreground/10">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-secondary-foreground/60 text-sm">
              © {new Date().getFullYear()} ZFP Žďár nad Sázavou s.r.o., IČO: 23375434,
            </p>
            <div className="flex flex-wrap items-center gap-6">
              {footerLinks.legal.map(link => <Link key={link.name} to={link.href} className="text-secondary-foreground/60 hover:text-primary transition-colors text-sm">
                  {link.name}
                </Link>)}
              <button onClick={() => setShowSettings(true)} className="text-secondary-foreground/60 hover:text-primary transition-colors text-sm flex items-center gap-1">
                <Settings className="w-3 h-3" />
                Nastavení cookies
              </button>
              <button onClick={() => window.scrollTo({
              top: 0,
              behavior: "smooth"
            })} className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center hover:bg-primary/90 transition-all duration-300 text-primary-foreground shadow-lg hover:shadow-xl hover:-translate-y-1" aria-label="Zpět nahoru">
                <ArrowUp className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;
