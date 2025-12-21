import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, Mail, Phone } from "lucide-react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "@/components/AnimatedSection";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Assistant photos
import assistant1 from "@/assets/team/assistant-1.png";
import assistant2 from "@/assets/team/assistant-2.png";
import assistant3 from "@/assets/team/assistant-3.png";
import assistant4 from "@/assets/team/assistant-4.png";
import assistant5 from "@/assets/team/assistant-5.png";

export interface AssistantProfile {
  id: string;
  name: string;
  role: string;
  specialty: string;
  photo: string;
  bio: string;
  responsibilities: string[];
  gallery: string[];
  email?: string;
  phone?: string;
}

// =====================================================
// UPRAVTE ÚDAJE NÍŽE - jména, role, specializace, bio atd.
// =====================================================
export const assistantsData: AssistantProfile[] = [
  {
    id: "asistentka-1",
    name: "JMÉNO ASISTENTKY 1", // UPRAVTE
    role: "Asistentka", // UPRAVTE
    specialty: "SPECIALIZACE", // UPRAVTE
    photo: assistant1,
    bio: "DOPLŇTE POPIS - krátký popis osobnosti a pracovního přístupu asistentky.", // UPRAVTE
    responsibilities: [
      "ÚKOL 1", // UPRAVTE
      "ÚKOL 2", // UPRAVTE
      "ÚKOL 3", // UPRAVTE
    ],
    gallery: [], // DOPLŇTE DALŠÍ FOTKY (volitelné)
    email: "", // DOPLŇTE EMAIL
    phone: "", // DOPLŇTE TELEFON
  },
  {
    id: "asistentka-2",
    name: "JMÉNO ASISTENTKY 2", // UPRAVTE
    role: "Asistentka", // UPRAVTE
    specialty: "SPECIALIZACE", // UPRAVTE
    photo: assistant2,
    bio: "DOPLŇTE POPIS - krátký popis osobnosti a pracovního přístupu asistentky.", // UPRAVTE
    responsibilities: [
      "ÚKOL 1", // UPRAVTE
      "ÚKOL 2", // UPRAVTE
      "ÚKOL 3", // UPRAVTE
    ],
    gallery: [], // DOPLŇTE DALŠÍ FOTKY (volitelné)
    email: "", // DOPLŇTE EMAIL
    phone: "", // DOPLŇTE TELEFON
  },
  {
    id: "asistentka-3",
    name: "JMÉNO ASISTENTKY 3", // UPRAVTE
    role: "Asistentka", // UPRAVTE
    specialty: "SPECIALIZACE", // UPRAVTE
    photo: assistant3,
    bio: "DOPLŇTE POPIS - krátký popis osobnosti a pracovního přístupu asistentky.", // UPRAVTE
    responsibilities: [
      "ÚKOL 1", // UPRAVTE
      "ÚKOL 2", // UPRAVTE
      "ÚKOL 3", // UPRAVTE
    ],
    gallery: [], // DOPLŇTE DALŠÍ FOTKY (volitelné)
    email: "", // DOPLŇTE EMAIL
    phone: "", // DOPLŇTE TELEFON
  },
  {
    id: "asistentka-4",
    name: "JMÉNO ASISTENTKY 4", // UPRAVTE
    role: "Asistentka", // UPRAVTE
    specialty: "SPECIALIZACE", // UPRAVTE
    photo: assistant4,
    bio: "DOPLŇTE POPIS - krátký popis osobnosti a pracovního přístupu asistentky.", // UPRAVTE
    responsibilities: [
      "ÚKOL 1", // UPRAVTE
      "ÚKOL 2", // UPRAVTE
      "ÚKOL 3", // UPRAVTE
    ],
    gallery: [], // DOPLŇTE DALŠÍ FOTKY (volitelné)
    email: "", // DOPLŇTE EMAIL
    phone: "", // DOPLŇTE TELEFON
  },
  {
    id: "asistentka-5",
    name: "JMÉNO ASISTENTKY 5", // UPRAVTE
    role: "Asistentka", // UPRAVTE
    specialty: "SPECIALIZACE", // UPRAVTE
    photo: assistant5,
    bio: "DOPLŇTE POPIS - krátký popis osobnosti a pracovního přístupu asistentky.", // UPRAVTE
    responsibilities: [
      "ÚKOL 1", // UPRAVTE
      "ÚKOL 2", // UPRAVTE
      "ÚKOL 3", // UPRAVTE
    ],
    gallery: [], // DOPLŇTE DALŠÍ FOTKY (volitelné)
    email: "", // DOPLŇTE EMAIL
    phone: "", // DOPLŇTE TELEFON
  },
];

const AssistantProfilePage = () => {
  const { id } = useParams<{ id: string }>();
  const assistant = assistantsData.find((a) => a.id === id);

  if (!assistant) {
    return <Navigate to="/muj-tym" replace />;
  }

  const hasGallery = assistant.gallery && assistant.gallery.length > 0;

  return (
    <Layout>
      <SEO
        title={`${assistant.name} - Podpůrný tým | ZFP Group`}
        description={`Poznejte ${assistant.name} - ${assistant.specialty}. Součást našeho podpůrného týmu.`}
        canonical={`/tym/${assistant.id}`}
      />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-hero">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection>
            <Button variant="ghost" asChild className="mb-6 -ml-4">
              <Link to="/muj-tym">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Zpět na tým
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-16 bg-section">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Photo & Gallery */}
            <AnimatedSection direction="left">
              <div className="space-y-6">
                {/* Main Photo */}
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                  {assistant.photo ? (
                    <img
                      src={assistant.photo}
                      alt={assistant.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <span className="text-8xl font-serif font-bold text-primary-foreground">
                        {assistant.name.split(" ").map((n) => n.charAt(0)).join("")}
                      </span>
                    </div>
                  )}
                </div>

                {/* Gallery Carousel */}
                {hasGallery && (
                  <div className="relative px-12">
                    <Carousel className="w-full">
                      <CarouselContent>
                        {assistant.gallery.map((photo, index) => (
                          <CarouselItem key={index} className="md:basis-1/2">
                            <div className="aspect-square rounded-xl overflow-hidden">
                              <img
                                src={photo}
                                alt={`${assistant.name} - foto ${index + 1}`}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious className="-left-4" />
                      <CarouselNext className="-right-4" />
                    </Carousel>
                  </div>
                )}
              </div>
            </AnimatedSection>

            {/* Info */}
            <AnimatedSection direction="right" delay={0.2}>
              <div className="space-y-8">
                <div>
                  <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-2">
                    {assistant.specialty}
                  </span>
                  <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-2">
                    {assistant.name}
                  </h1>
                  <p className="text-xl text-primary font-medium">{assistant.role}</p>
                </div>

                <p className="text-muted-foreground text-lg leading-relaxed">
                  {assistant.bio}
                </p>

                {/* Responsibilities */}
                <Card variant="premium">
                  <CardContent className="p-6">
                    <h3 className="font-serif text-lg font-semibold text-foreground mb-4">
                      Pracovní náplň
                    </h3>
                    <ul className="space-y-3">
                      {assistant.responsibilities.map((resp, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Contact */}
                {(assistant.email || assistant.phone) && (
                  <Card variant="premium">
                    <CardContent className="p-6">
                      <h3 className="font-serif text-lg font-semibold text-foreground mb-4">
                        Kontakt
                      </h3>
                      <div className="space-y-3">
                        {assistant.email && (
                          <a
                            href={`mailto:${assistant.email}`}
                            className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                          >
                            <Mail className="w-5 h-5 text-primary" />
                            {assistant.email}
                          </a>
                        )}
                        {assistant.phone && (
                          <a
                            href={`tel:${assistant.phone.replace(/\s/g, "")}`}
                            className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                          >
                            <Phone className="w-5 h-5 text-primary" />
                            {assistant.phone}
                          </a>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center">
            <h2 className="font-serif text-2xl md:text-3xl text-secondary-foreground mb-6">
              Máte dotaz?
            </h2>
            <Button variant="cta" size="lg" asChild>
              <Link to="/kontakt">Kontaktujte nás</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default AssistantProfilePage;
