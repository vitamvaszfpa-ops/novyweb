import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { X, Shield, BarChart3, Megaphone, Sparkles, Check, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { useCookieConsent, CONSENT_VERSION } from "@/contexts/CookieConsentContext";

interface CookieCategory {
  id: "necessary" | "analytics" | "marketing" | "functional";
  name: string;
  icon: typeof Shield;
  description: string;
  details: string;
  dataCollected: string[];
  retention: string;
  thirdParties: string[];
  required?: boolean;
}

const categories: CookieCategory[] = [
  {
    id: "necessary",
    name: "Nezbytné cookies",
    icon: Shield,
    description: "Tyto cookies jsou nutné pro základní fungování webu a nelze je vypnout.",
    details: "Zahrnují cookies pro ukládání vašich preferencí, přihlášení a bezpečnost. Bez nich by web nefungoval správně.",
    dataCollected: ["Předvolby uživatele", "Stav přihlášení", "Bezpečnostní tokeny"],
    retention: "Do konce relace nebo max. 1 rok",
    thirdParties: ["Žádné - pouze vlastní cookies"],
    required: true,
  },
  {
    id: "analytics",
    name: "Analytické cookies",
    icon: BarChart3,
    description: "Pomáhají nám pochopit, jak návštěvníci používají náš web.",
    details: "Sbíráme anonymizovaná data o návštěvnosti, jako jsou zobrazení stránek, doba strávená na webu a zdroj návštěvy. Data nám pomáhají zlepšovat obsah a uživatelský zážitek.",
    dataCollected: ["Anonymizované ID návštěvníka", "Navštívené stránky", "Doba návštěvy", "Typ zařízení"],
    retention: "Až 26 měsíců",
    thirdParties: ["Google Analytics (pokud je aktivováno)"],
  },
  {
    id: "marketing",
    name: "Marketingové cookies",
    icon: Megaphone,
    description: "Používají se k zobrazení relevantních reklam a měření jejich účinnosti.",
    details: "Tyto cookies mohou být nastaveny reklamními partnery. Slouží k vytvoření profilu vašich zájmů a zobrazení relevantních reklam na jiných webech.",
    dataCollected: ["Reklamní ID", "Interakce s reklamami", "Konverze"],
    retention: "Až 13 měsíců",
    thirdParties: ["Meta (Facebook Pixel)", "Google Ads"],
  },
  {
    id: "functional",
    name: "Funkční cookies",
    icon: Sparkles,
    description: "Umožňují pokročilé funkce jako personalizace a AI nástroje.",
    details: "Tyto cookies slouží k personalizaci obsahu, ukládání předvoleb a provozu pokročilých funkcí jako jsou chatboty nebo doporučovací systémy.",
    dataCollected: ["Preference uživatele", "Historie interakcí", "Jazykové nastavení"],
    retention: "Až 12 měsíců",
    thirdParties: ["AI služby (pokud jsou aktivovány)"],
  },
];

export const CookieSettings = () => {
  const { consent, showSettings, setShowSettings, savePreferences, acceptAll, rejectAll } = useCookieConsent();
  
  const [preferences, setPreferences] = useState({
    analytics: false,
    marketing: false,
    functional: false,
  });
  
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  // Initialize preferences from current consent
  useEffect(() => {
    if (consent) {
      setPreferences({
        analytics: consent.analytics,
        marketing: consent.marketing,
        functional: consent.functional,
      });
    }
  }, [consent, showSettings]);

  const handleToggle = (category: "analytics" | "marketing" | "functional") => {
    setPreferences((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const handleSave = () => {
    savePreferences(preferences);
  };

  return (
    <AnimatePresence>
      {showSettings && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-foreground/50 backdrop-blur-sm z-[101]"
            onClick={() => setShowSettings(false)}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-2xl md:max-h-[90vh] bg-card border border-border rounded-2xl shadow-elevated z-[102] overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div>
                <h2 className="font-serif text-2xl font-semibold text-foreground">
                  Nastavení cookies
                </h2>
                <p className="text-sm text-muted-foreground mt-1">
                  Verze zásad: {CONSENT_VERSION}
                </p>
              </div>
              <button
                onClick={() => setShowSettings(false)}
                className="p-2 rounded-lg hover:bg-muted transition-colors"
                aria-label="Zavřít"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              <p className="text-sm text-muted-foreground mb-6">
                Zde můžete podrobně nastavit, které kategorie cookies povolíte. Vaše volba bude uložena 
                a můžete ji kdykoli změnit prostřednictvím odkazu "Nastavení cookies" v patičce webu.
              </p>

              {categories.map((category) => (
                <div
                  key={category.id}
                  className="border border-border rounded-xl overflow-hidden"
                >
                  {/* Category header */}
                  <div className="flex items-center justify-between p-4 bg-muted/30">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <category.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground flex items-center gap-2">
                          {category.name}
                          {category.required && (
                            <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                              Vždy aktivní
                            </span>
                          )}
                        </h3>
                        <p className="text-xs text-muted-foreground">
                          {category.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setExpandedCategory(
                          expandedCategory === category.id ? null : category.id
                        )}
                        className="p-2 rounded-lg hover:bg-muted transition-colors"
                        aria-label="Více informací"
                      >
                        <Info className="w-4 h-4 text-muted-foreground" />
                      </button>
                      {category.required ? (
                        <div className="w-10 h-6 rounded-full bg-primary flex items-center justify-end px-1">
                          <div className="w-4 h-4 rounded-full bg-primary-foreground flex items-center justify-center">
                            <Check className="w-3 h-3 text-primary" />
                          </div>
                        </div>
                      ) : (
                        <Switch
                          checked={preferences[category.id as keyof typeof preferences]}
                          onCheckedChange={() => handleToggle(category.id as "analytics" | "marketing" | "functional")}
                        />
                      )}
                    </div>
                  </div>

                  {/* Expanded details */}
                  <AnimatePresence>
                    {expandedCategory === category.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="p-4 border-t border-border bg-muted/10 space-y-4 text-sm">
                          <p className="text-muted-foreground">{category.details}</p>
                          
                          <div>
                            <h4 className="font-medium text-foreground mb-1">Sbíraná data:</h4>
                            <ul className="list-disc list-inside text-muted-foreground">
                              {category.dataCollected.map((item, i) => (
                                <li key={i}>{item}</li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="font-medium text-foreground mb-1">Doba uchování:</h4>
                            <p className="text-muted-foreground">{category.retention}</p>
                          </div>

                          <div>
                            <h4 className="font-medium text-foreground mb-1">Zpracovatelé dat:</h4>
                            <ul className="list-disc list-inside text-muted-foreground">
                              {category.thirdParties.map((item, i) => (
                                <li key={i}>{item}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              {/* Links */}
              <div className="flex flex-wrap gap-4 text-xs text-muted-foreground pt-4">
                <Link 
                  to="/ochrana-udaju" 
                  className="hover:text-primary transition-colors underline underline-offset-2"
                  onClick={() => setShowSettings(false)}
                >
                  Zásady ochrany osobních údajů
                </Link>
                <Link 
                  to="/cookies" 
                  className="hover:text-primary transition-colors underline underline-offset-2"
                  onClick={() => setShowSettings(false)}
                >
                  Zásady používání cookies
                </Link>
              </div>
            </div>

            {/* Footer - Equal button weights */}
            <div className="p-6 border-t border-border bg-muted/20">
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
                  onClick={handleSave}
                  className="flex-1 font-medium"
                >
                  Uložit nastavení
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
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CookieSettings;
