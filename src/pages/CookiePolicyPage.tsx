import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { BreadcrumbSchema } from "@/components/StructuredData";
import { AnimatedSection } from "@/components/AnimatedSection";

const CookiePolicyPage = () => {
  return (
    <Layout>
      <SEO
        title="Zásady používání cookies | ZFP Group"
        description="Informace o tom, jak používáme cookies na našich webových stránkách v souladu s GDPR a ePrivacy směrnicí."
        canonical="/cookies"
      />
      <BreadcrumbSchema
        items={[
          { name: "Úvod", url: "/" },
          { name: "Cookies", url: "/cookies" },
        ]}
      />

      <section className="pt-32 pb-20 bg-hero">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="max-w-4xl">
            <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-4">
              Právní informace
            </span>
            <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
              Zásady používání cookies
            </h1>
            <p className="text-muted-foreground text-lg">
              Poslední aktualizace: Prosinec 2024
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 bg-section">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <AnimatedSection>
              <h2 className="font-serif text-2xl font-semibold text-foreground mt-8 mb-4">
                1. Co jsou cookies?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Cookies jsou malé textové soubory, které webové stránky ukládají do vašeho prohlížeče. 
                Slouží k zapamatování vašich preferencí, zlepšení uživatelského zážitku a analýze návštěvnosti.
              </p>

              <h2 className="font-serif text-2xl font-semibold text-foreground mt-8 mb-4">
                2. Kategorie cookies
              </h2>
              
              <h3 className="font-serif text-xl font-semibold text-foreground mt-6 mb-3">
                2.1 Nezbytné cookies
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Tyto cookies jsou nezbytné pro fungování webu a nelze je vypnout. Zahrnují:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
                <li>Cookies pro ukládání souhlasu s cookies</li>
                <li>Cookies pro zabezpečení relace</li>
                <li>Cookies pro základní funkčnost webu</li>
              </ul>

              <h3 className="font-serif text-xl font-semibold text-foreground mt-6 mb-3">
                2.2 Analytické cookies
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Pomáhají nám pochopit, jak návštěvníci používají náš web. Data jsou anonymizována.
              </p>
              <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
                <li>Google Analytics - měření návštěvnosti</li>
                <li>Doba uchování: až 26 měsíců</li>
                <li>Zpracovatel: Google Ireland Limited</li>
              </ul>

              <h3 className="font-serif text-xl font-semibold text-foreground mt-6 mb-3">
                2.3 Marketingové cookies
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Používají se k zobrazení relevantních reklam a měření jejich účinnosti.
              </p>
              <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
                <li>Meta Pixel - měření konverzí</li>
                <li>Google Ads - remarketing</li>
                <li>Doba uchování: až 13 měsíců</li>
              </ul>

              <h3 className="font-serif text-xl font-semibold text-foreground mt-6 mb-3">
                2.4 Funkční cookies
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Umožňují pokročilé funkce jako personalizace obsahu a AI nástroje.
              </p>

              <h2 className="font-serif text-2xl font-semibold text-foreground mt-8 mb-4">
                3. Právní základ
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Zpracování cookies probíhá na základě vašeho souhlasu podle čl. 6 odst. 1 písm. a) GDPR 
                a § 89 zákona č. 127/2005 Sb. o elektronických komunikacích. Pro nezbytné cookies 
                je právním základem náš oprávněný zájem podle čl. 6 odst. 1 písm. f) GDPR.
              </p>

              <h2 className="font-serif text-2xl font-semibold text-foreground mt-8 mb-4">
                4. Správa cookies
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Své preference můžete kdykoli změnit:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
                <li>Prostřednictvím odkazu "Nastavení cookies" v patičce webu</li>
                <li>V nastavení vašeho prohlížeče</li>
                <li>Smazáním cookies z prohlížeče</li>
              </ul>

              <h2 className="font-serif text-2xl font-semibold text-foreground mt-8 mb-4">
                5. Vaše práva
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Máte právo:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
                <li>Odvolat svůj souhlas kdykoli</li>
                <li>Požadovat informace o zpracování</li>
                <li>Podat stížnost u dozorového úřadu (ÚOOÚ)</li>
              </ul>

              <h2 className="font-serif text-2xl font-semibold text-foreground mt-8 mb-4">
                6. Kontakt
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                V případě dotazů ohledně cookies nás kontaktujte na info@example.cz.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CookiePolicyPage;
