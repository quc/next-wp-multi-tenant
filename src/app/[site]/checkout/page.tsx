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
  const title = `Checkout`;
  const description = `Complete your order for ${meta.title} ${brand.platform.toLowerCase()} ${brand.platformType.toLowerCase()} promotion services.`;
  
  return {
    title,
    description,
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