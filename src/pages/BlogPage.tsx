import { Link } from "react-router-dom";
import { Calendar, ArrowRight, User, Clock } from "lucide-react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { BreadcrumbSchema } from "@/components/StructuredData";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection, StaggerChildren, StaggerItem } from "@/components/AnimatedSection";
const posts = [{
  id: 1,
  slug: "jak-zacit-investovat-2025",
  title: "Jak začít investovat v roce 2025: Kompletní průvodce pro začátečníky",
  excerpt: "Naučte se základy investování od A do Z. Vysvětlíme vám rozdíly mezi akciemi, dluhopisy a fondy, jak sestavit diverzifikované portfolio a kterým chybám se vyhnout.",
  date: "2025-01-15",
  dateFormatted: "15. 1. 2025",
  category: "Investice",
  author: "Michal Vítámvás",
  readTime: "8 min",
  image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop",
  keywords: ["investování", "začátečník", "portfolio", "akcie", "fondy", "2025"]
}, {
  id: 2,
  slug: "5-chyb-pri-sjednavani-hypoteky",
  title: "5 nejčastějších chyb při sjednávání hypotéky a jak se jim vyhnout",
  excerpt: "Hypotéka je dlouhodobý závazek na desítky let. Zjistěte, jaké chyby dělá většina žadatelů a jak ušetřit statisíce korun správným výběrem a vyjednáváním.",
  date: "2025-01-10",
  dateFormatted: "10. 1. 2025",
  category: "Hypotéky",
  author: "Michal Vítámvás",
  readTime: "6 min",
  image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
  keywords: ["hypotéka", "úvěr", "banka", "úroková sazba", "refinancování"]
}, {
  id: 3,
  slug: "proc-nestaci-sporit-jen-na-uctu",
  title: "Proč nestačí spořit jen na spořicím účtu: Inflace vám krade peníze",
  excerpt: "Zjistěte, jak inflace snižuje hodnotu vašich úspor a jaké alternativy máte. Porovnání spořicích účtů, termínovaných vkladů a konzervativních investic.",
  date: "2025-01-05",
  dateFormatted: "5. 1. 2025",
  category: "Spoření",
  author: "Michal Vítámvás",
  readTime: "5 min",
  image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600&h=400&fit=crop",
  keywords: ["spoření", "inflace", "spořicí účet", "zhodnocení", "úroky"]
}, {
  id: 4,
  slug: "pojisteni-nemovitosti-kompletni-pruvodce",
  title: "Pojištění nemovitosti 2025: Kompletní průvodce ochranou vašeho majetku",
  excerpt: "Vše o pojištění domu, bytu a domácnosti. Jaká rizika krýt, jak nastavit pojistné částky a na co si dát pozor ve smlouvě. Tipy od zkušeného poradce.",
  date: "2025-01-01",
  dateFormatted: "1. 1. 2025",
  category: "Pojištění",
  author: "Michal Vítámvás",
  readTime: "7 min",
  image: "https://images.unsplash.com/photo-1560518883-4f2c4b1c2c9c?w=600&h=400&fit=crop",
  keywords: ["pojištění nemovitosti", "pojištění domu", "pojištění domácnosti", "majetkové pojištění"]
}, {
  id: 5,
  slug: "duchodova-reforma-2025-zmeny",
  title: "Důchodová reforma 2025: Všechny změny a jak se na ně připravit",
  excerpt: "Přehled aktuálních změn v důchodovém systému ČR. Jak reforma ovlivní váš budoucí důchod a co můžete udělat pro zajištění klidného stáří.",
  date: "2024-12-20",
  dateFormatted: "20. 12. 2024",
  category: "Důchody",
  author: "Michal Vítámvás",
  readTime: "10 min",
  image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop",
  keywords: ["důchodová reforma", "penze", "důchod", "penzijní spoření", "ČSSZ"]
}, {
  id: 6,
  slug: "reality-vysocina-trendy-2025",
  title: "Realitní trh na Vysočině 2025: Ceny, trendy a predikce pro Žďár nad Sázavou",
  excerpt: "Aktuální analýza realitního trhu v regionu Vysočina. Vývoj cen bytů a domů, nejžádanější lokality a predikce pro rok 2025.",
  date: "2024-12-15",
  dateFormatted: "15. 12. 2024",
  category: "Reality",
  author: "Michal Vítámvás",
  readTime: "6 min",
  image: "https://images.unsplash.com/photo-1560184897-ae75f418493e?w=600&h=400&fit=crop",
  keywords: ["reality Vysočina", "nemovitosti Žďár", "ceny bytů", "realitní trh 2025"]
}];

// Schema.org JSON-LD pro blog
const BlogListSchema = () => {
  const blogPostingSchema = posts.map(post => ({
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": post.image,
    "datePublished": post.date,
    "dateModified": post.date,
    "author": {
      "@type": "Person",
      "name": post.author,
      "jobTitle": "Finanční poradce",
      "worksFor": {
        "@type": "Organization",
        "name": "ZFP Group"
      }
    },
    "publisher": {
      "@type": "Organization",
      "name": "ZFP Group - Michal Vítámvás",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.michalvitamvas.cz/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.michalvitamvas.cz/blog/${post.slug}`
    },
    "keywords": post.keywords.join(", "),
    "articleSection": post.category,
    "inLanguage": "cs-CZ"
  }));
  const schema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Finanční blog - Michal Vítámvás",
    "description": "Praktické rady a tipy ze světa financí. Investice, pojištění, hypotéky, reality a finanční plánování.",
    "url": "https://www.michalvitamvas.cz/blog",
    "inLanguage": "cs-CZ",
    "publisher": {
      "@type": "Organization",
      "name": "ZFP Group - Michal Vítámvás",
      "url": "https://www.michalvitamvas.cz"
    },
    "blogPost": blogPostingSchema
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{
    __html: JSON.stringify(schema)
  }} />;
};
const BlogPage = () => <Layout>
    <SEO title="Finanční blog 2025 - Investice, hypotéky, pojištění | Michal Vítámvás, ZFP Group" description="Praktické rady a tipy ze světa financí od zkušeného poradce. Naučte se investovat, vybrat správnou hypotéku, zajistit rodinu pojištěním a plánovat důchod. Aktuální články pro rok 2025." canonical="/blog" />
    <BreadcrumbSchema items={[{
    name: "Úvod",
    url: "/"
  }, {
    name: "Blog",
    url: "/blog"
  }]} />
    <BlogListSchema />
    
    {/* Hero Section */}
    <section className="pt-32 pb-20 bg-hero">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedSection className="max-w-4xl">
          <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-4">
            Finanční blog
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            Finanční{" "}
            <span className="text-gradient bg-gradient-to-r from-primary to-accent">
              vzdělávání
            </span>{" "}
            pro každého
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mb-4">
            Praktické rady a tipy, které vám pomohou lépe rozumět financím a činit moudrá rozhodnutí. 
            Od investování přes hypotéky až po plánování důchodu.
          </p>
          <p className="text-sm text-muted-foreground">
            Všechny články píše <strong>Michal Vítámvás</strong>, certifikovaný finanční poradce s více než 18 lety zkušeností v oboru.
          </p>
        </AnimatedSection>
      </div>
    </section>

    {/* Articles Grid */}
    <section className="py-24 bg-section">
      <div className="container mx-auto px-4 lg:px-8">
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map(post => <StaggerItem key={post.id}>
              <Link to={`/blog/${post.slug}`}>
                <article itemScope itemType="https://schema.org/BlogPosting">
                  <Card variant="premium" className="h-full group cursor-pointer hover:border-primary/30 overflow-hidden">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img src={post.image} alt={post.title} itemProp="image" loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                      <div className="absolute top-3 left-3">
                        <span className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium" itemProp="articleSection">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <time dateTime={post.date} itemProp="datePublished">
                            {post.dateFormatted}
                          </time>
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </span>
                      </div>
                      <h2 className="font-serif text-xl font-semibold mb-2 group-hover:text-primary transition-colors" itemProp="headline">
                        {post.title}
                      </h2>
                      <p className="text-muted-foreground text-sm mb-4" itemProp="description">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground flex items-center gap-1" itemProp="author" itemScope itemType="https://schema.org/Person">
                          <User className="w-3 h-3" />
                          <span itemProp="name">{post.author}</span>
                        </span>
                        <span className="text-primary text-sm font-medium flex items-center">
                          Číst více 
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                        </span>
                      </div>
                      <meta itemProp="keywords" content={post.keywords.join(", ")} />
                    </CardContent>
                  </Card>
                </article>
              </Link>
            </StaggerItem>)}
        </StaggerChildren>

        {/* AI-friendly content summary */}
        <div className="mt-16 p-8 bg-muted/50 rounded-2xl border border-border/50">
          <h2 className="font-serif text-2xl font-semibold mb-4 text-foreground">
            O finančním blogu
          </h2>
          <div className="prose prose-sm max-w-none text-muted-foreground">
            <p>
              Tento finanční blog poskytuje aktuální a praktické informace o osobních financích v České republice. 
              Zaměřujeme se na témata jako <strong>investování pro začátečníky</strong>, <strong>hypoteční úvěry</strong>, 
              <strong>pojištění majetku a osob</strong>, <strong>důchodové plánování</strong> a <strong>reality na Vysočině</strong>.
            </p>
            <p>
              Všechny články jsou psány <strong>Michalem Vítámvásem</strong>, certifikovaným finančním poradcem působícím 
              ve Žďáru nad Sázavou a okolí. S více než 18 lety praxe v oboru přináší ověřené rady založené na reálných 
              zkušenostech s klienty.
            </p>
            <p>
              <strong>Témata, která zde najdete:</strong> Jak začít investovat, srovnání podílových fondů, 
              výběr správné hypotéky, refinancování úvěrů, životní a majetkové pojištění, penzijní spoření, 
              důchodová reforma, nákup a prodej nemovitostí na Vysočině.
            </p>
          </div>
        </div>
      </div>
    </section>
  </Layout>;
export default BlogPage;