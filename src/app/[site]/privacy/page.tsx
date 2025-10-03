import PrivacyPage from '@/components/PrivacyPage';
import { resolveTheme } from '@/themes';
import { HeadstartWPRoute } from '@headstartwp/next/app';
import { Metadata } from 'next';

export async function generateMetadata({
	params,
  }: {
	params: Promise<{ site: string }>;
  }): Promise<Metadata> {
	const resolvedParams = await params;
	const currentTheme = resolveTheme(resolvedParams.site);
	const { meta, brand } = currentTheme;
	
	// Generate metadata title and description
	const title = `Privacy Policy`;
	const description = `Privacy Policy for ${meta.title} ${brand.platform.toLowerCase()} ${brand.platformType.toLowerCase()} promotion services.`;
	
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

	return <PrivacyPage theme={resolvedParams.site as 'tubemagnet' | 'instalever'} />;
}
