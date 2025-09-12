/**
 * Headless Config
 *
 * @type {import('@headstartwp/core').HeadlessConfig}
 */
module.exports = {
	useWordPressPlugin: true,
    redirectStrategy: 'none',

	preview: {
		usePostLinkForRedirect: true,
	},

	sites: [
		{
			slug: 'tubemagnet',
			sourceUrl: process.env.NEXT_PUBLIC_HEADLESS_WP_URL_TUBEMAGNET,
			hostUrl: process.env.NEXT_PUBLIC_HOST_URL_TUBEMAGNET,
		},
		{
			slug: 'omgtok',
            sourceUrl: process.env.NEXT_PUBLIC_HEADLESS_WP_URL_OMGTOK,
			hostUrl: process.env.NEXT_PUBLIC_HOST_URL_OMGTOK,
		},
	],
	integrations: {
		yoastSEO: {
			enable: true,
			optimizeYoastPayload: true,
		},
	},

    debug: {
		requests: true,
		redirects: true,
	}
};