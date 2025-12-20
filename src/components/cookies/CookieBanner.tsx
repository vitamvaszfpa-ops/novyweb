import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Cookie, Settings, Shield, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCookieConsent } from "@/contexts/CookieConsentContext";

export const CookieBanner = () => {
  const { showBanner, setShowSettings, acceptAll, rejectAll } = useCookieConsent();

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
          className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6"
        >
          <div className="container mx-auto max-w-5xl">
            <div className="bg-card border border-border rounded-2xl shadow-elevated p-6 md:p-8">
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Cookie className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="font-serif text-xl font-semibold text-foreground mb-2">
                    Respektujeme vaše soukromí
                  </h2>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Na našich stránkách používáme cookies. Některé jsou nezbytné pro fungování webu, 
                    jiné nám pomáhají zlepšovat naše služby. Vaše preference můžete kdykoli změnit.
                  </p>
                </div>
              </div>

              {/* Cookie categories summary */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Shield className="w-4 h-4 text-primary" />
                  <span>Nezbytné (vždy aktivní)</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="w-4 h-4 rounded border-2 border-muted-foreground/30" />
                  <span>Analytické</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="w-4 h-4 rounded border-2 border-muted-foreground/30" />
                  <span>Marketingové</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="w-4 h-4 rounded border-2 border-muted-foreground/30" />
                  <span>Funkční</span>
                </div>
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-4 text-xs text-muted-foreground mb-6">
                <Link to="/ochrana-udaju" className="hover:text-primary transition-colors underline underline-offset-2">
                  Zásady ochrany osobních údajů
                </Link>
                <Link to="/cookies" className="hover:text-primary transition-colors underline underline-offset-2">
                  Zásady používání cookies
                </Link>
              </div>

              {/* Buttons - Equal visual weight */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  variant="outline"
                  size="lg"
                  onClick={rejectAll}
                  className="flex-1 font-medium"
                >
                  Odmítnout vše
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => setShowSettings(true)}
                  className="flex-1 font-medium"
                >
                  <Settings className="w-4 h-4 mr-2" />
                  Nastavení
                </Button>
                <Button
                  variant="default"
                  size="lg"
                  onClick={acceptAll}
                  className="flex-1 font-medium"
                >
                  Přijmout vše
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
