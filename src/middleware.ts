import { AppMiddleware } from '@headstartwp/next/middlewares';
import { NextRequest, NextResponse } from 'next/server';

export const config = {
	matcher: [
		/*
		 * Match all paths except for:
		 * 1. /api routes
		 * 2. /_next (Next.js internals)
		 * 3. /fonts (inside /public)
		 * 4. static files (but include favicon.ico for custom routing)
		 * 5. /icons (inside /public)
		 * 6. /tubemagnet and /instalever static files
		 * 7. /assets paths (handled by rewrite rules)
		 */
		'/((?!api|cache-healthcheck|_next|fonts[\\w-]+\\.\\w+|icons/.*|tubemagnet/.*|instalever/.*|xgrowlab/.*|streameredge/.*|bolderbook/.*|omgtok/.*|earforge/.*|assets/.*).*)',
	],
};

const validSites = ['tubemagnet', 'instalever', 'xgrowlab', 'streameredge', 'bolderbook', 'omgtok', 'earforge'];

function extractSiteFromHostname(hostname: string): string | null {
	try {
		const host = new URL(`http://${hostname}`).hostname;
		const site = host?.split('.')[0];
		return validSites.includes(site) ? site : null;
	} catch {
		return null;
	}
}

export async function middleware(req: NextRequest) {
	const hostname = req.headers.get('host') || '';
	const site = extractSiteFromHostname(hostname);
	const pathname = req.nextUrl.pathname;

	// If we have a site from hostname, rewrite to /[site] route
	if (site) {
		// If path doesn't start with /[site], rewrite it
		if (!pathname.startsWith(`/${site}`)) {
			const url = req.nextUrl.clone();
			url.pathname = pathname === '/' ? `/${site}` : `/${site}${pathname}`;
			return NextResponse.rewrite(url);
		}
		// If path already starts with /[site], skip AppMiddleware to avoid hostname matching issues
		return NextResponse.next();
	}

	// For other cases, use AppMiddleware
	return AppMiddleware(req, { appRouter: true });
}