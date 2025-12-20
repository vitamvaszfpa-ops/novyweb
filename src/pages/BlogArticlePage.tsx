import { Link, useParams } from "react-router-dom";
import { Calendar, ArrowLeft, User, Clock, Share2, BookOpen, TrendingUp, Home, MapPin, BarChart3 } from "lucide-react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { BreadcrumbSchema } from "@/components/StructuredData";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// Vzorový článek - v reálné aplikaci by data přicházela z API/CMS
const articleData = {
  slug: "reality-vysocina-trendy-2025",
  title: "Realitní trh na Vysočině 2025: Ceny, trendy a predikce pro Žďár nad Sázavou",
  subtitle: "Komplexní analýza vývoje cen nemovitostí v regionu Vysočina s důrazem na okres Žďár nad Sázavou",
  excerpt: "Aktuální analýza realitního trhu v regionu Vysočina. Vývoj cen bytů a domů, nejžádanější lokality a predikce pro rok 2025.",
  date: "2024-12-15",
  dateFormatted: "15. prosince 2024",
  author: "Michal Vítámvás",
  authorRole: "Certifikovaný finanční poradce",
  authorExperience: "18 let praxe",
  category: "Reality",
  readTime: "6 min",
  image: "https://images.unsplash.com/photo-1560184897-ae75f418493e?w=1200&h=600&fit=crop",
  keywords: ["reality Vysočina", "nemovitosti Žďár", "ceny bytů", "realitní trh 2025", "hypotéka", "investice do nemovitostí"]
};

// Schema.org pro článek
const ArticleSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": articleData.title,
    "description": articleData.excerpt,
    "image": articleData.image,
    "datePublished": articleData.date,
    "dateModified": articleData.date,
    "author": {
      "@type": "Person",
      "name": articleData.author,
      "jobTitle": articleData.authorRole,
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
      "@id": `https://www.michalvitamvas.cz/blog/${articleData.slug}`
    },
    "keywords": articleData.keywords.join(", "),
    "articleSection": articleData.category,
    "inLanguage": "cs-CZ",
    "about": {
      "@type": "Thing",
      "name": "Realitní trh na Vysočině"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

const BlogArticlePage = () => {
  return (
    <Layout>
      <SEO
        title={`${articleData.title} | Michal Vítámvás, ZFP Group`}
        description={articleData.excerpt}
        canonical={`/blog/${articleData.slug}`}
      />
      <BreadcrumbSchema
        items={[
          { name: "Úvod", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: articleData.title, url: `/blog/${articleData.slug}` }
        ]}
      />
      <ArticleSchema />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-hero relative overflow-hidden">
        {/* Dekorativní pozadí */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-96 h-96 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-64 h-64 bg-accent rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <AnimatedSection>
            {/* Breadcrumb navigace */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
              <Link to="/blog" className="hover:text-primary transition-colors flex items-center gap-1">
                <ArrowLeft className="w-4 h-4" />
                Zpět na blog
              </Link>
              <span>/</span>
              <span className="text-primary">{articleData.category}</span>
            </div>

            {/* Kategorie a metadata */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-sm font-medium">
                {articleData.category}
              </span>
              <span className="flex items-center gap-1.5 text-muted-foreground text-sm">
                <Calendar className="w-4 h-4" />
                {articleData.dateFormatted}
              </span>
              <span className="flex items-center gap-1.5 text-muted-foreground text-sm">
                <Clock className="w-4 h-4" />
                {articleData.readTime} čtení
              </span>
            </div>

            {/* Titulek */}
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 max-w-4xl leading-tight">
              {articleData.title}
            </h1>

            {/* Podtitulek */}
            <p className="text-xl text-muted-foreground max-w-3xl mb-8">
              {articleData.subtitle}
            </p>

            {/* Autor box */}
            <div className="flex items-center gap-4 p-4 bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 max-w-fit">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-lg">
                MV
              </div>
              <div>
                <p className="font-semibold text-foreground">{articleData.author}</p>
                <p className="text-sm text-muted-foreground">{articleData.authorRole} • {articleData.authorExperience}</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Hlavní obrázek */}
      <section className="relative -mt-8 mb-12">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection delay={0.2}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={articleData.image}
                alt={articleData.title}
                className="w-full h-64 md:h-96 lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Obsah článku */}
      <article className="pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Hlavní obsah */}
            <div className="lg:col-span-8">
              <AnimatedSection delay={0.3}>
                <div className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-a:text-primary hover:prose-a:text-primary/80">
                  
                  {/* Úvod */}
                  <p className="text-xl leading-relaxed mb-8">
                    Rok 2025 přináší na realitní trh Vysočiny zajímavé změny. Po turbulentním období vysokých úrokových sazeb 
                    se situace postupně stabilizuje a pro kupující i prodávající se otevírají nové příležitosti. 
                    V tomto článku se podíváme na aktuální stav trhu v regionu Žďár nad Sázavou a okolí.
                  </p>

                  {/* Sekce 1 */}
                  <div className="my-12">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <TrendingUp className="w-6 h-6 text-primary" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-serif m-0">Aktuální vývoj cen nemovitostí</h2>
                    </div>
                    
                    <p>
                      Ceny nemovitostí na Vysočině zůstávají <strong>stabilní s mírným růstem</strong> okolo 3-5 % ročně. 
                      Na rozdíl od Prahy a velkých měst zde nedošlo k dramatickým propadům, což činí region 
                      atraktivní pro konzervativní investory.
                    </p>

                    {/* Statistiky v kartách */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8 not-prose">
                      <Card variant="premium" className="text-center p-6">
                        <div className="text-3xl font-bold text-primary mb-2">52 000 Kč</div>
                        <div className="text-sm text-muted-foreground">Průměrná cena/m² bytu</div>
                        <div className="text-xs text-green-500 mt-1">+4,2 % oproti 2024</div>
                      </Card>
                      <Card variant="premium" className="text-center p-6">
                        <div className="text-3xl font-bold text-primary mb-2">4,8 mil.</div>
                        <div className="text-sm text-muted-foreground">Průměrná cena RD</div>
                        <div className="text-xs text-green-500 mt-1">+3,1 % oproti 2024</div>
                      </Card>
                      <Card variant="premium" className="text-center p-6">
                        <div className="text-3xl font-bold text-primary mb-2">89 dní</div>
                        <div className="text-sm text-muted-foreground">Průměrná doba prodeje</div>
                        <div className="text-xs text-amber-500 mt-1">-12 dní oproti 2024</div>
                      </Card>
                    </div>

                    <p>
                      Podle dat z Českého statistického úřadu a realitních serverů se průměrná cena za metr čtvereční 
                      bytu v okrese Žďár nad Sázavou pohybuje kolem <strong>52 000 Kč</strong>. Pro srovnání – v Praze 
                      je to více než dvojnásobek.
                    </p>
                  </div>

                  {/* Sekce 2 */}
                  <div className="my-12">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-accent" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-serif m-0">Nejžádanější lokality v regionu</h2>
                    </div>

                    <p>
                      Poptávka po nemovitostech se koncentruje především do těchto oblastí:
                    </p>

                    <div className="my-8 not-prose space-y-4">
                      <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border/50">
                        <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm shrink-0">1</div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">Žďár nad Sázavou - centrum a Stalingrad</h4>
                          <p className="text-sm text-muted-foreground">Nejvyšší poptávka díky občanské vybavenosti a dostupnosti služeb. Byty 3+1 se prodávají nejrychleji.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border/50">
                        <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm shrink-0">2</div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">Nové Město na Moravě</h4>
                          <p className="text-sm text-muted-foreground">Atraktivní pro rodiny i investory díky turismu a sportovnímu zázemí (Vysočina Arena).</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border/50">
                        <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm shrink-0">3</div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">Bystřice nad Pernštejnem</h4>
                          <p className="text-sm text-muted-foreground">Cenově dostupnější alternativa s dobrou dopravní dostupností směr Brno.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Sekce 3 */}
                  <div className="my-12">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Home className="w-6 h-6 text-primary" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-serif m-0">Co ovlivňuje trh v roce 2025</h2>
                    </div>

                    <p>Na vývoj realitního trhu v regionu působí několik klíčových faktorů:</p>

                    <ul className="my-6">
                      <li><strong>Úrokové sazby hypoték</strong> – Aktuálně kolem 4,5-5,5 %, očekává se mírný pokles během roku</li>
                      <li><strong>Dotační programy</strong> – Nová zelená úsporám Light láká k renovacím starších domů</li>
                      <li><strong>Home office trend</strong> – Stále více lidí pracuje z domova a hledá bydlení mimo velká města</li>
                      <li><strong>Demografické změny</strong> – Mladé rodiny se vracejí na Vysočinu za klidnějším životem</li>
                    </ul>

                    {/* Důležitý box */}
                    <div className="my-8 p-6 bg-primary/5 border-l-4 border-primary rounded-r-xl not-prose">
                      <div className="flex items-start gap-3">
                        <BookOpen className="w-6 h-6 text-primary shrink-0 mt-1" />
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Tip od poradce</h4>
                          <p className="text-muted-foreground">
                            Při koupi nemovitosti na Vysočině zvažte energetickou náročnost budovy. Starší domy 
                            s horší energetickou třídou (D-G) mohou mít nižší pořizovací cenu, ale vyšší provozní náklady. 
                            Naopak mohou být vhodné pro investory plánující renovaci s využitím dotací.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Sekce 4 */}
                  <div className="my-12">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                        <BarChart3 className="w-6 h-6 text-accent" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-serif m-0">Predikce pro rok 2025</h2>
                    </div>

                    <p>
                      Na základě aktuálních trendů a ekonomických prognóz očekávám následující vývoj:
                    </p>

                    <div className="my-8 not-prose">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 bg-green-500/10 rounded-xl border border-green-500/20">
                          <h4 className="font-semibold text-green-600 dark:text-green-400 mb-3 flex items-center gap-2">
                            <TrendingUp className="w-5 h-5" />
                            Pozitivní faktory
                          </h4>
                          <ul className="text-sm text-muted-foreground space-y-2">
                            <li>• Klesající úrokové sazby hypoték</li>
                            <li>• Stabilní poptávka po bydlení v regionu</li>
                            <li>• Rostoucí zájem o venkov a menší města</li>
                            <li>• Dotační programy na renovace</li>
                          </ul>
                        </div>
                        <div className="p-6 bg-amber-500/10 rounded-xl border border-amber-500/20">
                          <h4 className="font-semibold text-amber-600 dark:text-amber-400 mb-3 flex items-center gap-2">
                            <BarChart3 className="w-5 h-5" />
                            Rizikové faktory
                          </h4>
                          <ul className="text-sm text-muted-foreground space-y-2">
                            <li>• Nejistá ekonomická situace v Evropě</li>
                            <li>• Rostoucí náklady na stavební materiály</li>
                            <li>• Omezená nabídka nových projektů</li>
                            <li>• Zpřísnění podmínek pro získání hypotéky</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <p>
                      <strong>Můj odhad:</strong> Ceny nemovitostí na Vysočině v roce 2025 porostou o 3-6 %, 
                      přičemž nejatraktivnější lokality (Žďár, Nové Město) zaznamenají růst na horní hranici tohoto rozpětí. 
                      Doba prodeje se bude zkracovat díky oživení hypotečního trhu.
                    </p>
                  </div>

                  {/* Závěr */}
                  <div className="my-12 p-8 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl not-prose">
                    <h3 className="text-2xl font-serif text-foreground mb-4">Shrnutí a doporučení</h3>
                    <p className="text-muted-foreground mb-6">
                      Realitní trh na Vysočině nabízí v roce 2025 zajímavé příležitosti jak pro kupující, 
                      tak pro investory. Klíčem k úspěchu je správné načasování, kvalitní financování 
                      a znalost lokálního trhu.
                    </p>
                    <p className="text-muted-foreground mb-6">
                      Pokud zvažujete koupi nemovitosti nebo potřebujete poradit s hypotékou, 
                      neváhejte se na mě obrátit. Pomohu vám s celým procesem od výběru vhodné 
                      nemovitosti přes zajištění financování až po pojištění.
                    </p>
                    <Link to="/kontakt">
                      <Button size="lg" className="group">
                        Domluvit konzultaci zdarma
                        <ArrowLeft className="w-4 h-4 ml-2 rotate-180 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>

                </div>
              </AnimatedSection>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4">
              <div className="sticky top-32 space-y-6">
                {/* Autor card */}
                <AnimatedSection delay={0.4}>
                  <Card variant="premium" className="p-6">
                    <h3 className="font-serif text-lg font-semibold mb-4">O autorovi</h3>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-xl">
                        MV
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{articleData.author}</p>
                        <p className="text-sm text-muted-foreground">{articleData.authorRole}</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      Specializuji se na finanční poradenství v oblasti hypoték, investic a pojištění. 
                      Působím ve Žďáru nad Sázavou a okolí více než 18 let.
                    </p>
                    <Link to="/o-mne">
                      <Button variant="outline" className="w-full">
                        <User className="w-4 h-4 mr-2" />
                        Více o mně
                      </Button>
                    </Link>
                  </Card>
                </AnimatedSection>

                {/* Sdílení */}
                <AnimatedSection delay={0.5}>
                  <Card variant="premium" className="p-6">
                    <h3 className="font-serif text-lg font-semibold mb-4">Sdílet článek</h3>
                    <div className="flex gap-3">
                      <Button variant="outline" size="icon" className="flex-1">
                        <Share2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </Card>
                </AnimatedSection>

                {/* Související články */}
                <AnimatedSection delay={0.6}>
                  <Card variant="premium" className="p-6">
                    <h3 className="font-serif text-lg font-semibold mb-4">Související články</h3>
                    <div className="space-y-4">
                      <Link to="/blog" className="block group">
                        <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                          5 nejčastějších chyb při sjednávání hypotéky
                        </p>
                        <p className="text-xs text-muted-foreground">Hypotéky • 6 min</p>
                      </Link>
                      <Link to="/blog" className="block group">
                        <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                          Jak začít investovat v roce 2025
                        </p>
                        <p className="text-xs text-muted-foreground">Investice • 8 min</p>
                      </Link>
                      <Link to="/blog" className="block group">
                        <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                          Pojištění nemovitosti 2025: Kompletní průvodce
                        </p>
                        <p className="text-xs text-muted-foreground">Pojištění • 7 min</p>
                      </Link>
                    </div>
                  </Card>
                </AnimatedSection>

                {/* CTA */}
                <AnimatedSection delay={0.7}>
                  <Card className="p-6 bg-gradient-to-br from-primary to-accent text-primary-foreground">
                    <h3 className="font-serif text-lg font-semibold mb-2">Potřebujete hypotéku?</h3>
                    <p className="text-sm opacity-90 mb-4">
                      Pomohu vám najít nejvýhodnější financování pro vaši vysněnou nemovitost.
                    </p>
                    <Link to="/kontakt">
                      <Button variant="secondary" className="w-full">
                        Nezávazná konzultace
                      </Button>
                    </Link>
                  </Card>
                </AnimatedSection>
              </div>
            </aside>
          </div>
        </div>
      </article>

      {/* Klíčová slova pro SEO */}
      <div className="hidden" aria-hidden="true">
        <p>
          Klíčová slova: {articleData.keywords.join(", ")}. 
          Autor: {articleData.author}, {articleData.authorRole} z {articleData.authorExperience}.
          Publikováno: {articleData.dateFormatted}.
        </p>
      </div>
    </Layout>
  );
};

export default BlogArticlePage;
