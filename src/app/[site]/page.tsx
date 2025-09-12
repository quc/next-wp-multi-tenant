import LandingPage from '@/components/LandingPage';
import { HeadstartWPRoute } from '@headstartwp/next/app';

export default async function SitePage({ params }: HeadstartWPRoute) {
	const resolvedParams = await params;

	return <LandingPage theme={resolvedParams.site as 'tubemagnet' | 'omgtok'} />;
}
