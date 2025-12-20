interface StructuredDataProps {
  type: "Person" | "Organization" | "LocalBusiness" | "Service" | "Article" | "FAQPage" | "BreadcrumbList";
  data: Record<string, unknown>;
}

export const StructuredData = ({ type, data }: StructuredDataProps) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": type,
    ...data,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

// Pre-built structured data components
export const PersonSchema = () => (
  <StructuredData
    type="Person"
    data={{
      name: "Finanční Poradce",
      jobTitle: "Senior finanční poradce a ředitel",
      worksFor: {
        "@type": "Organization",
        name: "ZFP Group",
        url: "https://www.zfp.cz",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Žďár nad Sázavou",
        addressRegion: "Vysočina",
        addressCountry: "CZ",
      },
      knowsAbout: [
        "Finanční plánování",
        "Investice",
        "Pojištění",
        "Hypotéky",
        "Důchodové spoření",
      ],
    }}
  />
);

export const LocalBusinessSchema = () => (
  <StructuredData
    type="LocalBusiness"
    data={{
      name: "Finanční Poradenství ZFP",
      description: "Profesionální finanční poradenství pro jednotlivce i firmy v regionu Vysočina.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Centrum města",
        addressLocality: "Žďár nad Sázavou",
        addressRegion: "Vysočina",
        postalCode: "591 01",
        addressCountry: "CZ",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 49.5628,
        longitude: 15.9392,
      },
      areaServed: {
        "@type": "GeoCircle",
        geoMidpoint: {
          "@type": "GeoCoordinates",
          latitude: 49.5628,
          longitude: 15.9392,
        },
        geoRadius: "50000",
      },
      priceRange: "$$",
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "17:00",
        },
      ],
    }}
  />
);

export const OrganizationSchema = () => (
  <StructuredData
    type="Organization"
    data={{
      name: "ZFP Group",
      url: "https://www.zfp.cz",
      logo: "https://www.zfp.cz/logo.png",
      description: "Přední česká společnost v oblasti finančního poradenství.",
      foundingDate: "1991",
      address: {
        "@type": "PostalAddress",
        addressCountry: "CZ",
      },
    }}
  />
);

interface FAQItem {
  question: string;
  answer: string;
}

export const FAQSchema = ({ faqs }: { faqs: FAQItem[] }) => (
  <StructuredData
    type="FAQPage"
    data={{
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    }}
  />
);

interface BreadcrumbItem {
  name: string;
  url: string;
}

export const BreadcrumbSchema = ({ items }: { items: BreadcrumbItem[] }) => (
  <StructuredData
    type="BreadcrumbList"
    data={{
      itemListElement: items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: item.url,
      })),
    }}
  />
);

export default StructuredData;
