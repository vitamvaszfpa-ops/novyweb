import { Link } from "react-router-dom";
import { Users, ArrowRight, ExternalLink, User } from "lucide-react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection, StaggerChildren, StaggerItem } from "@/components/AnimatedSection";
import { assistantsData } from "./AssistantProfilePage";

interface TeamMember {
  id?: string;
  name: string;
  role: string;
  specialty: string;
  photo?: string;
  website?: string;
}

const advisors: TeamMember[] = [
  { name: "Jan Poradce", role: "Senior poradce", specialty: "Investice", photo: "", website: "https://example.com" },
  { name: "Marie Nováková", role: "Poradkyně", specialty: "Pojištění", photo: "", website: "https://example.com" },
  { name: "Petr Svoboda", role: "Poradce", specialty: "Hypotéky", photo: "", website: "https://example.com" },
  { name: "Kolega 4", role: "Poradce", specialty: "Finanční plánování", photo: "", website: "https://example.com" },
  { name: "Kolega 5", role: "Poradce", specialty: "Investice", photo: "", website: "https://example.com" },
  { name: "Kolega 6", role: "Poradce", specialty: "Pojištění", photo: "", website: "https://example.com" },
  { name: "Kolega 7", role: "Senior poradce", specialty: "Hypotéky", photo: "", website: "https://example.com" },
  { name: "Kolega 8", role: "Poradce", specialty: "Spoření", photo: "", website: "https://example.com" },
  { name: "Kolega 9", role: "Poradce", specialty: "Důchody", photo: "", website: "https://example.com" },
  { name: "Kolega 10", role: "Poradce", specialty: "Investice", photo: "", website: "https://example.com" },
  { name: "Kolega 11", role: "Poradce", specialty: "Pojištění", photo: "", website: "https://example.com" },
  { name: "Kolega 12", role: "Poradce", specialty: "Finanční plánování", photo: "", website: "https://example.com" },
];

// Map assistants from the shared data
const assistants: TeamMember[] = assistantsData.map((a) => ({
  id: a.id,
  name: a.name,
  role: a.role,
  specialty: a.specialty,
  photo: a.photo,
}));

interface TeamMemberCardProps {
  member: TeamMember;
  linkType?: "external" | "internal" | "none";
}

const TeamMemberCard = ({ member, linkType = "none" }: TeamMemberCardProps) => {
  const isClickable = linkType !== "none";
  
  const cardContent = (
    <Card variant="premium" className={`text-center p-8 h-full transition-all duration-300 ${isClickable ? 'hover:scale-105 hover:shadow-2xl cursor-pointer group' : ''}`}>
      <CardContent className="p-0">
        <div className="w-28 h-28 rounded-full mx-auto mb-4 overflow-hidden relative shadow-lg ring-4 ring-primary/20">
          {member.photo ? (
            <img 
              src={member.photo} 
              alt={member.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="text-3xl font-serif font-bold text-primary-foreground">
                {member.name.split(' ').map(n => n.charAt(0)).join('')}
              </span>
            </div>
          )}
        </div>
        <h3 className="font-serif text-xl font-semibold text-foreground">{member.name}</h3>
        <p className="text-primary text-sm font-medium">{member.role}</p>
        <p className="text-muted-foreground text-sm mt-2">{member.specialty}</p>
        {isClickable && (
          <div className="mt-4 flex items-center justify-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-sm">
              {linkType === "external" ? "Navštívit web" : "Zobrazit profil"}
            </span>
            {linkType === "external" ? (
              <ExternalLink className="w-4 h-4" />
            ) : (
              <User className="w-4 h-4" />
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );

  if (linkType === "external" && member.website) {
    return (
      <a href={member.website} target="_blank" rel="noopener noreferrer" className="block h-full">
        {cardContent}
      </a>
    );
  }

  if (linkType === "internal" && member.id) {
    return (
      <Link to={`/tym/${member.id}`} className="block h-full">
        {cardContent}
      </Link>
    );
  }

  return cardContent;
};

const TeamPage = () => (
  <Layout>
    <SEO title="Můj tým - Finanční poradci | ZFP Group" description="Poznejte náš tým zkušených finančních poradců v regionu Vysočina." canonical="/muj-tym" />
    
    {/* Hero */}
    <section className="pt-32 pb-20 bg-hero">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedSection className="max-w-4xl">
          <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-4">Tým</span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            Můj <span className="text-gradient bg-gradient-to-r from-primary to-accent">tým</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Společně tvoříme silný tým profesionálů, kteří vám pomohou s vašimi financemi.
          </p>
        </AnimatedSection>
      </div>
    </section>

    {/* Advisors Section */}
    <section className="py-24 bg-section">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            Finanční poradci
          </h2>
          <p className="text-muted-foreground">
            Naši zkušení poradci vám pomohou s investicemi, pojištěním, hypotékami a dalšími finančními produkty.
          </p>
          <div className="section-divider mt-6" />
        </AnimatedSection>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {advisors.map((member) => (
            <StaggerItem key={member.name}>
              <TeamMemberCard member={member} linkType="external" />
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>

    {/* Support Team Section */}
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-secondary-foreground mb-4">
            Podpůrný tým
          </h2>
          <p className="text-secondary-foreground/80">
            Naše asistentky zajišťují hladký chod kanceláře a kvalitní klientský servis.
          </p>
          <div className="section-divider mt-6" />
        </AnimatedSection>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {assistants.map((member) => (
            <StaggerItem key={member.name}>
              <TeamMemberCard member={member} linkType="internal" />
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>

    {/* CTA */}
    <section className="py-24 bg-section">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedSection className="text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
            Chcete se stát součástí našeho týmu?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Hledáme ambiciózní lidi, kteří chtějí růst a pomáhat klientům s jejich financemi.
          </p>
          <Button variant="cta" size="xl" asChild>
            <Link to="/kariera">
              Přidejte se k nám 
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  </Layout>
);

export default TeamPage;
