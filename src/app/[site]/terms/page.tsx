import { HeadstartWPRoute } from '@headstartwp/next/app';
import TermsPage from '@/components/TermsPage';
import { Metadata } from 'next';
import { resolveTheme } from '@/themes';

export async function generateMetadata({
	params,
  }: {
	params: Promise<{ site: string }>;
  }): Promise<Metadata> {
	const resolvedParams = await params;
	const currentTheme = resolveTheme(resolvedParams.site);
	const { meta, brand } = currentTheme;
	
	// Generate metadata title and description
	const title = `Terms and Conditions`;
	const description = `Terms and Conditions for ${meta.title} ${brand.platform.toLowerCase()} ${brand.platformType.toLowerCase()} promotion services.`;

	
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
	const theme = resolvedParams.site as 'tubemagnet' | 'instalever';

	return <TermsPage theme={theme} />;
}
