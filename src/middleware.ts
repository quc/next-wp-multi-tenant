import { AppMiddleware } from '@headstartwp/next/middlewares';
import { NextRequest } from 'next/server';

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

export async function middleware(req: NextRequest) {
	return AppMiddleware(req, { appRouter: true });
}