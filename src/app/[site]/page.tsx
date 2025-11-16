import LandingPage from '@/components/LandingPage';
import OldLandingPage from '@/components/OldLandingPage';
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
	const title = `${brand.platform} Growth Strategy | Professional Visibility Service`;
	const description = `Enhance your ${brand.platform} visibility with ${brand.name} professional multi-channel promotion service. Strategic audience targeting and legitimate marketing methods. Start your FREE trial today!`;
	
	return {
	  title,
	  description,
	};
  }

export default async function SitePage({ params }: HeadstartWPRoute) {
	const resolvedParams = await params;

	const oldDomains = ['tubekarma', 'twenvy'];

	// @ts-ignore
	if (oldDomains.includes(resolvedParams.site)) {
		return <OldLandingPage theme={resolvedParams.site as 'tubekarma' | 'twenvy'} />;
	}

	return <LandingPage theme={resolvedParams.site as 'tubemagnet' | 'instalever'} />;
}
