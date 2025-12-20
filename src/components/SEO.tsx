import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  image?: string;
  type?: "website" | "article" | "profile";
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
  };
  noindex?: boolean;
}

export const SEO = ({
  title,
  description,
  canonical,
  image = "/og-image.jpg",
  type = "website",
  article,
  noindex = false,
}: SEOProps) => {
  const siteName = "Finanční Poradenství | ZFP Group";
  const fullTitle = title.includes("ZFP") ? title : `${title} | ${siteName}`;
  const baseUrl = "https://www.example.cz"; // Replace with actual domain

  return (
    <Helmet>
      {/* Basic Meta */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {canonical && <link rel="canonical" href={`${baseUrl}${canonical}`} />}
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${baseUrl}${image}`} />
      <meta property="og:site_name" content={siteName} />
      {canonical && <meta property="og:url" content={`${baseUrl}${canonical}`} />}
      <meta property="og:locale" content="cs_CZ" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${baseUrl}${image}`} />

      {/* Article specific */}
      {article?.publishedTime && (
        <meta property="article:published_time" content={article.publishedTime} />
      )}
      {article?.modifiedTime && (
        <meta property="article:modified_time" content={article.modifiedTime} />
      )}
      {article?.author && (
        <meta property="article:author" content={article.author} />
      )}

      {/* Geo Tags for Local SEO */}
      <meta name="geo.region" content="CZ-VY" />
      <meta name="geo.placename" content="Žďár nad Sázavou" />
    </Helmet>
  );
};

export default SEO;
