import { Suspense } from "react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { PersonSchema, LocalBusinessSchema, OrganizationSchema, FAQSchema } from "@/components/StructuredData";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import AboutSection from "@/components/sections/AboutSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import ZFPLogo3D from "@/components/ZFPLogo3D";

const homeFaqs = [
  {
    question: "Co je finanční poradenství a proč ho potřebuji?",
    answer: "Finanční poradenství je profesionální služba, která vám pomůže optimalizovat vaše finance - od spoření a investic přes pojištění až po hypotéky.",
  },
  {
    question: "Kolik stojí konzultace?",
    answer: "První konzultace je zcela zdarma a nezávazná. Běžné poradenství je hrazeno z provizí od finančních institucí.",
  },
  {
    question: "Jsem skutečně nezávislý poradce?",
    answer: "Ano, spolupracuji s více než 50 finančními institucemi a vybírám produkty podle vašich potřeb.",
  },
];

const Index = () => {
  return (
    <Layout>
      <SEO
        title="Finanční poradce Žďár nad Sázavou | ZFP Group"
        description="Profesionální finanční poradenství v regionu Vysočina. Investice, pojištění, hypotéky a důchodové spoření. Více než 15 let zkušeností. Konzultace zdarma."
        canonical="/"
      />
      <PersonSchema />
      <LocalBusinessSchema />
      <OrganizationSchema />
      <FAQSchema faqs={homeFaqs} />
      
      {/* 3D Background Element */}
      <Suspense fallback={null}>
        <ZFPLogo3D />
      </Suspense>
      
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
