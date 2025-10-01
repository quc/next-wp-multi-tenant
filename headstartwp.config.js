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
			slug: 'instalever',
            sourceUrl: process.env.NEXT_PUBLIC_HEADLESS_WP_URL_INSTALEVER,
			hostUrl: process.env.NEXT_PUBLIC_HOST_URL_INSTALEVER,
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