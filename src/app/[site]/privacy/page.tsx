import PrivacyPage from '@/components/PrivacyPage';
import { HeadstartWPRoute } from '@headstartwp/next/app';

export default async function SitePage({ params }: HeadstartWPRoute) {
	const resolvedParams = await params;

	return <PrivacyPage theme={resolvedParams.site as 'tubemagnet' | 'instalever'} />;
}
