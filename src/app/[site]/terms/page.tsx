import { HeadstartWPRoute } from '@headstartwp/next/app';
import TermsPage from '@/components/TermsPage';

export default async function SitePage({ params }: HeadstartWPRoute) {
	const resolvedParams = await params;
	const theme = resolvedParams.site as 'tubemagnet' | 'instalever';

	return <TermsPage theme={theme} />;
}
