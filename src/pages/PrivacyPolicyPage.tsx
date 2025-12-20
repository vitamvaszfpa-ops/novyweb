import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { BreadcrumbSchema } from "@/components/StructuredData";
import { AnimatedSection } from "@/components/AnimatedSection";
const PrivacyPolicyPage = () => {
  return <Layout>
      <SEO title="Ochrana osobních údajů | ZFP Group" description="Informace o zpracování osobních údajů v souladu s GDPR. Zjistěte, jak chráníme vaše data." canonical="/ochrana-udaju" />
      <BreadcrumbSchema items={[{
      name: "Úvod",
      url: "/"
    }, {
      name: "Ochrana osobních údajů",
      url: "/ochrana-udaju"
    }]} />

      <section className="pt-32 pb-20 bg-hero">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="max-w-4xl">
            <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-4">
              Právní informace
            </span>
            <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
              Ochrana osobních údajů
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
                1. Správce osobních údajů
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">Správcem vašich osobních údajů je finanční poradce působící pod značkou ZFP Žďár nad Sázavou, s.r.o. IČ: 23375434 se sídlem v Žďáru nad Sázavou, Česká republika.</p>

              <h2 className="font-serif text-2xl font-semibold text-foreground mt-8 mb-4">
                2. Jaké údaje zpracováváme
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Zpracováváme pouze údaje, které nám sami poskytnete:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
                <li>Jméno a příjmení</li>
                <li>E-mailová adresa</li>
                <li>Telefonní číslo</li>
                <li>Obsah vaší zprávy</li>
              </ul>

              <h2 className="font-serif text-2xl font-semibold text-foreground mt-8 mb-4">
                3. Účely zpracování
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Vaše údaje zpracováváme pro tyto účely:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
                <li>Zodpovězení vašich dotazů</li>
                <li>Poskytnutí konzultace</li>
                <li>Plnění smluvních povinností</li>
                <li>Plnění zákonných povinností</li>
              </ul>

              <h2 className="font-serif text-2xl font-semibold text-foreground mt-8 mb-4">
                4. Právní základ zpracování
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Zpracování probíhá na základě vašeho souhlasu (čl. 6 odst. 1 písm. a) GDPR), 
                plnění smlouvy (čl. 6 odst. 1 písm. b) GDPR) nebo plnění právních povinností 
                (čl. 6 odst. 1 písm. c) GDPR).
              </p>

              <h2 className="font-serif text-2xl font-semibold text-foreground mt-8 mb-4">
                5. Doba uchování údajů
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Údaje uchováváme pouze po dobu nezbytně nutnou - typicky po dobu trvání 
                smluvního vztahu a následně po dobu stanovenou zákonem (obvykle 10 let pro 
                účetní dokumenty).
              </p>

              <h2 className="font-serif text-2xl font-semibold text-foreground mt-8 mb-4">
                6. Vaše práva
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Podle GDPR máte následující práva:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
                <li>Právo na přístup k údajům</li>
                <li>Právo na opravu nepřesných údajů</li>
                <li>Právo na výmaz („právo být zapomenut")</li>
                <li>Právo na omezení zpracování</li>
                <li>Právo na přenositelnost údajů</li>
                <li>Právo vznést námitku</li>
                <li>Právo odvolat souhlas</li>
                <li>Právo podat stížnost u ÚOOÚ</li>
              </ul>

              <h2 className="font-serif text-2xl font-semibold text-foreground mt-8 mb-4">
                7. Příjemci údajů
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Vaše údaje nepředáváme třetím stranám s výjimkou případů, kdy to vyžaduje 
                zákon nebo kdy je to nezbytné pro plnění smlouvy (např. spolupracující 
                finanční instituce).
              </p>

              <h2 className="font-serif text-2xl font-semibold text-foreground mt-8 mb-4">
                8. Zabezpečení údajů
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Přijímáme vhodná technická a organizační opatření k ochraně vašich údajů 
                před neoprávněným přístupem, ztrátou nebo zneužitím.
              </p>

              <h2 className="font-serif text-2xl font-semibold text-foreground mt-8 mb-4">
                9. Kontakt
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Pro uplatnění vašich práv nebo v případě dotazů nás kontaktujte na info@example.cz 
                nebo telefonicky na +420 123 456 789.
              </p>

              <h2 className="font-serif text-2xl font-semibold text-foreground mt-8 mb-4">
                10. Dozorový úřad
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Stížnost můžete podat u Úřadu pro ochranu osobních údajů (ÚOOÚ), 
                Pplk. Sochora 27, 170 00 Praha 7, www.uoou.cz.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>;
};
export default PrivacyPolicyPage;