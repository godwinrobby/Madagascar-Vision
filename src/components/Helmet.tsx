import { useEffect } from 'react';

// Props matching user requirements for high-integrity SEO and Social Sharing Metadata.
export interface HelmetProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'business.business';
  twitterCard?: 'summary' | 'summary_large_image';
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  canonicalUrl?: string;
  language?: 'EN' | 'FR' | 'MG';
}

/**
 * A reusable SEO and Social Sharing metadata coordinator.
 * Specially optimized for Aetheris Group | Vision Madagascar.
 */
export function Helmet({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  ogImage,
  ogType = 'website',
  twitterCard = 'summary_large_image',
  twitterTitle,
  twitterDescription,
  twitterImage,
  canonicalUrl,
  language = 'EN',
}: HelmetProps) {

  // Dynamic localization defaults for fallback values
  const defaults = {
    EN: {
      brand: 'Aetheris Group | Vision Madagascar',
      title: 'Sovereign Scale & Quantifiable Global Impact',
      desc: 'High-integrity performance indicators tracked and verified across medical diagnostics, deep-green master planning, robotic distribution, and renewable grid energy.',
      keywords: 'Aetheris Group, Vision Madagascar, sovereign scale, medical diagnostics, deep-green master planning, robotic distribution, renewable grid energy, ESG',
    },
    FR: {
      brand: 'Aetheris Group | Vision Madagascar',
      title: 'Échelle Souveraine & Impacts Globaux Quantifiables',
      desc: 'Indicateurs de performance de haute intégrité suivis et validés à travers le diagnostic médical, la logistique verte et les réseaux d’énergie renouvelable.',
      keywords: 'Aetheris Group, Vision Madagascar, échelle souveraine, diagnostic médical, logistique verte, énergies renouvelables, ESG',
    },
    MG: {
      brand: 'Aetheris Group | Vision Madagascar',
      title: 'Vokatra Goavana sy Fahombiazana azo Tsapain-tanana',
      desc: 'Tondro fahombiazana matanjaka voamarina sy arahina maso amin’ny fitsaboana, ny fotodrafitrasa maitso, ny fitaterana arifomba, ary ny angovo azo havaozina.',
      keywords: 'Aetheris Group, Vision Madagascar, tondro fahombiazana, fitsaboana, fotodrafitrasa maitso, angovo azo havaozina, ESG',
    },
  }[language];

  const finalTitle = title ? `${title} | ${defaults.brand}` : `${defaults.brand} | ${defaults.title}`;
  const finalDesc = description || defaults.desc;
  const finalKeywords = keywords || defaults.keywords;
  const finalOgTitle = ogTitle || title || defaults.brand;
  const finalOgDesc = ogDescription || finalDesc;
  
  // High-performance technology/global abstract banner for standard meta sharing
  const defaultSharingImage = 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200';
  const finalOgImage = ogImage || defaultSharingImage;
  const finalTwitterTitle = twitterTitle || finalOgTitle;
  const finalTwitterDesc = twitterDescription || finalOgDesc;
  const finalTwitterImage = twitterImage || finalOgImage;
  const finalCanonicalUrl = canonicalUrl || window.location.href;

  useEffect(() => {
    // 1. Update Document Title
    document.title = finalTitle;

    // Helper to safely upsert meta elements
    const setMeta = (attr: string, value: string, content: string) => {
      let el = document.head.querySelector(`meta[${attr}="${value}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, value);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    // Helper to safely upsert link elements
    const setLink = (rel: string, href: string) => {
      let el = document.head.querySelector(`link[rel="${rel}"]`);
      if (!el) {
        el = document.createElement('link');
        el.setAttribute(rel, rel);
        document.head.appendChild(el);
      }
      el.setAttribute('href', href);
    };

    // 2. Core SEO Headings
    setMeta('name', 'description', finalDesc);
    setMeta('name', 'keywords', finalKeywords);

    // 3. Open Graph (Facebook / LinkedIn)
    setMeta('property', 'og:title', finalOgTitle);
    setMeta('property', 'og:description', finalOgDesc);
    setMeta('property', 'og:image', finalOgImage);
    setMeta('property', 'og:type', ogType);
    setMeta('property', 'og:url', finalCanonicalUrl);
    setMeta('property', 'og:site_name', 'Aetheris Group');

    // 4. Twitter / X Cards
    setMeta('name', 'twitter:card', twitterCard);
    setMeta('name', 'twitter:title', finalTwitterTitle);
    setMeta('name', 'twitter:description', finalTwitterDesc);
    setMeta('name', 'twitter:image', finalTwitterImage);

    // 5. Canonical link localization
    setLink('canonical', finalCanonicalUrl);
  }, [
    finalTitle,
    finalDesc,
    finalKeywords,
    finalOgTitle,
    finalOgDesc,
    finalOgImage,
    ogType,
    finalTwitterTitle,
    finalTwitterDesc,
    finalTwitterImage,
    twitterCard,
    finalCanonicalUrl,
  ]);

  // React 19 Native Hoisting Support for title, meta, links
  return (
    <>
      <title>{finalTitle}</title>
      <meta name="description" content={finalDesc} />
      <meta name="keywords" content={finalKeywords} />
      <meta property="og:title" content={finalOgTitle} />
      <meta property="og:description" content={finalOgDesc} />
      <meta property="og:image" content={finalOgImage} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={finalCanonicalUrl} />
      <meta property="og:site_name" content="Aetheris Group" />
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={finalTwitterTitle} />
      <meta name="twitter:description" content={finalTwitterDesc} />
      <meta name="twitter:image" content={finalTwitterImage} />
      <link rel="canonical" href={finalCanonicalUrl} />
    </>
  );
}
