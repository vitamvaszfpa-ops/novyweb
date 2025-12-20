import { AnimatedSection, StaggerChildren, StaggerItem } from "@/components/AnimatedSection";

const faqs = [
  {
    question: "Co je finanční poradenství a proč ho potřebuji?",
    answer: "Finanční poradenství je profesionální služba, která vám pomůže optimalizovat vaše finance - od spoření a investic přes pojištění až po hypotéky. Kvalitní poradce vám ušetří čas, peníze a pomůže vyhnout se běžným chybám při finančním plánování.",
  },
  {
    question: "Kolik stojí konzultace?",
    answer: "První konzultace je zcela zdarma a nezávazná. Běžné poradenství je hrazeno z provizí od finančních institucí, takže pro vás jako klienta je bez přímých nákladů. U některých specializovaných služeb může být domluvena hodinová sazba.",
  },
  {
    question: "Jak probíhá první schůzka?",
    answer: "Na první schůzce se vzájemně poznáme, zjistím vaši současnou finanční situaci, cíle a priority. Společně identifikujeme oblasti, kde vám mohu pomoci. Schůzka trvá obvykle 60-90 minut a můžete ji absolvovat osobně nebo online.",
  },
  {
    question: "Jsem skutečně nezávislý poradce?",
    answer: "Ano, spolupracuji s více než 50 finančními institucemi a vybírám produkty podle vašich potřeb, ne podle výše provize. Mým cílem je vaše dlouhodobá spokojenost, ne jednorázový obchod.",
  },
  {
    question: "Pro koho jsou vaše služby vhodné?",
    answer: "Moje služby jsou vhodné pro každého, kdo chce mít své finance pod kontrolou - ať už jste jednotlivec, rodina nebo podnikatel. Pomáhám lidem v různých životních situacích, od mladých lidí po seniory.",
  },
  {
    question: "Mohu vás doporučit svým známým?",
    answer: "Samozřejmě! Doporučení od spokojených klientů je pro mě tou největší poctou. Za každé doporučení, které vede k navázání spolupráce, nabízím poděkování v podobě dárku nebo slevy na služby.",
  },
];

export const FAQSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section header */}
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            Časté otázky
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 font-bold">
            Máte otázky? Mám odpovědi
          </h2>
          <p className="text-muted-foreground text-lg">
            Zde najdete odpovědi na nejčastější dotazy ohledně finančního poradenství 
            a mých služeb. Pokud nenajdete, co hledáte, neváhejte mě kontaktovat.
          </p>
          <div className="section-divider mt-8" />
        </AnimatedSection>

        {/* FAQ Grid */}
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {faqs.map((faq, index) => (
            <StaggerItem key={index}>
              <div className="p-6 rounded-xl glass hover:border-primary/30 transition-all duration-300">
                <h3 className="font-heading text-lg font-bold text-foreground mb-3">
                  {faq.question}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
};

export default FAQSection;
