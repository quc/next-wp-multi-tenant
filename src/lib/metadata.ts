import type { Metadata } from "next";
import { generateSiteMetadata, generateYoastMetadata } from "./wordpress";
import type { YoastSEO } from "./wordpress.d";

// Utility function to strip HTML tags and limit text length
export function stripHtmlAndLimit(text: string, limit: number = 160): string {
  return text
    .replace(/<[^>]*>/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, limit)
    .replace(/\s+\S*$/, "") + (text.length > limit ? "..." : "");
}

// Generate Open Graph image URL
export function generateOgImageUrl(title: string, description?: string): string {
  const ogUrl = new URL(`http://www.tubemagnet.com/api/og`);
  ogUrl.searchParams.append("title", title);
  if (description) {
    ogUrl.searchParams.append("description", description);
  }
  return ogUrl.toString();
}

// Generate base metadata for the site
export async function generateBaseMetadata(siteSlug?: string): Promise<Metadata> {
  const wpMetadata = await generateSiteMetadata(siteSlug);
  
  return {
    metadataBase: new URL(wpMetadata.url),
    title: {
      default: wpMetadata.title,
      template: `%s | ${wpMetadata.siteName}`,
    },
    description: wpMetadata.description,
    openGraph: {
      type: "website",
      locale: "en_US",
      url: wpMetadata.url,
      siteName: wpMetadata.siteName,
      title: wpMetadata.title,
      description: wpMetadata.description,
      images: [
        {
          url: generateOgImageUrl(wpMetadata.title, wpMetadata.description),
          width: 1200,
          height: 630,
          alt: wpMetadata.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: wpMetadata.title,
      description: wpMetadata.description,
      images: [generateOgImageUrl(wpMetadata.title, wpMetadata.description)],
    },
    robots: {
      index: false,
      follow: true,
      googleBot: {
        index: false,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

// Generate metadata for posts/pages with Yoast SEO support
export async function generatePostMetadata(
  title: string,
  content: string,
  excerpt?: string,
  slug?: string,
  siteSlug?: string,
  type: "post" | "page" = "post",
  yoastData?: YoastSEO
): Promise<Metadata> {
  const baseMetadata = await generateBaseMetadata(siteSlug);
  const cleanDescription = stripHtmlAndLimit(
    excerpt || content,
    160
  );
  
  const ogImageUrl = generateOgImageUrl(title, cleanDescription);
  const canonicalUrl = slug 
    ? `${baseMetadata.metadataBase?.origin}/${type}s/${slug}`
    : baseMetadata.metadataBase?.origin;

  // If Yoast SEO data is available, use it
  if (yoastData) {
    const yoastMetadata = generateYoastMetadata(yoastData, title, cleanDescription);
    
    return {
      ...baseMetadata,
      ...yoastMetadata,
      // Merge Open Graph data
      openGraph: {
        ...baseMetadata.openGraph,
        ...yoastMetadata.openGraph,
        type: "article",
        url: yoastData.canonical || canonicalUrl,
      },
      // Merge Twitter data
      twitter: {
        ...baseMetadata.twitter,
        ...yoastMetadata.twitter,
      },
    };
  }

  // Fallback to standard metadata generation
  return {
    ...baseMetadata,
    title,
    description: cleanDescription,
    openGraph: {
      ...baseMetadata.openGraph,
      type: "article",
      title,
      description: cleanDescription,
      url: canonicalUrl,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      ...baseMetadata.twitter,
      title,
      description: cleanDescription,
      images: [ogImageUrl],
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

// Generate metadata for taxonomy pages (categories, tags, authors)
export async function generateTaxonomyMetadata(
  title: string,
  description: string,
  slug: string,
  type: "category" | "tag" | "author",
  siteSlug?: string
): Promise<Metadata> {
  const baseMetadata = await generateBaseMetadata(siteSlug);
  const cleanDescription = stripHtmlAndLimit(description, 160);
  const ogImageUrl = generateOgImageUrl(title, cleanDescription);
  const canonicalUrl = `${baseMetadata.metadataBase?.origin}/${type}s/${slug}`;

  return {
    ...baseMetadata,
    title: `${title} | ${baseMetadata.title}`,
    description: cleanDescription,
    openGraph: {
      ...baseMetadata.openGraph,
      type: "website",
      title: `${title} | ${baseMetadata.openGraph?.siteName}`,
      description: cleanDescription,
      url: canonicalUrl,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      ...baseMetadata.twitter,
      title: `${title} | ${baseMetadata.twitter?.title}`,
      description: cleanDescription,
      images: [ogImageUrl],
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

// Generate metadata for archive pages
export async function generateArchiveMetadata(
  title: string,
  description: string,
  path: string,
  siteSlug?: string
): Promise<Metadata> {
  const baseMetadata = await generateBaseMetadata(siteSlug);
  const cleanDescription = stripHtmlAndLimit(description, 160);
  const ogImageUrl = generateOgImageUrl(title, cleanDescription);
  const canonicalUrl = `${baseMetadata.metadataBase?.origin}${path}`;

  return {
    ...baseMetadata,
    title: `${title} | ${baseMetadata.title}`,
    description: cleanDescription,
    openGraph: {
      ...baseMetadata.openGraph,
      type: "website",
      title: `${title} | ${baseMetadata.openGraph?.siteName}`,
      description: cleanDescription,
      url: canonicalUrl,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      ...baseMetadata.twitter,
      title: `${title} | ${baseMetadata.twitter?.title}`,
      description: cleanDescription,
      images: [ogImageUrl],
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}
