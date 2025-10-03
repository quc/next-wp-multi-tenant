import CheckoutPage from '@/components/CheckoutPage';
import { HeadstartWPRoute } from '@headstartwp/next/app';
import { Metadata } from 'next';
import themes, { resolveTheme } from '@/themes';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ site: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const currentTheme = resolveTheme(resolvedParams.site);
  const { meta, brand } = currentTheme;
  
  // Generate metadata title and description
  const title = `Checkout | ${meta.title}`;
  const description = `Complete your order for ${meta.title} ${brand.platform.toLowerCase()} ${brand.platformType.toLowerCase()} promotion services.`;
  
  // Generate favicon URL based on theme (SVG is preferred, fallback to ICO)
  const faviconSvg = meta.icon;
  const faviconIco = meta.icon;
 
  
  return {
    title,
    description,
    icons: {
      icon: [
        {
          url: faviconSvg,
          type: 'image/svg+xml',
        },
        {
          url: faviconIco,
          type: 'image/x-icon',
        }
      ],
      shortcut: faviconIco,
      apple: faviconIco,
    },
    openGraph: {
      title,
      description,
      type: 'website',
      images: [
        {
          url: `/api/og?site=${brand.name}&title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`/api/og?site=${brand.name}&title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}`],
    },
    robots: {
      index: false,
      follow: true,
    },
  };
}

export default async function SitePage({ params }: HeadstartWPRoute) {
	const resolvedParams = await params;
	const theme = resolvedParams.site as 'tubemagnet' | 'instalever' | 'xgrowlab' | 'streameredge' | 'bolderbook' | 'omgtok' | 'earforge';

	return <CheckoutPage theme={theme} />;
}