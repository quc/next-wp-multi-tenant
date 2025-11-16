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
		{
			slug: 'xgrowlab',
			sourceUrl: process.env.NEXT_PUBLIC_HEADLESS_WP_URL_XGROWLAB,
			hostUrl: process.env.NEXT_PUBLIC_HOST_URL_XGROWLAB,
		},
		{
			slug: 'streameredge',
			sourceUrl: process.env.NEXT_PUBLIC_HEADLESS_WP_URL_STREAMEREDGE,
			hostUrl: process.env.NEXT_PUBLIC_HOST_URL_STREAMEREDGE,
		},
		{
			slug: 'bolderbook',
			sourceUrl: process.env.NEXT_PUBLIC_HEADLESS_WP_URL_BOLDERBOOK,
			hostUrl: process.env.NEXT_PUBLIC_HOST_URL_BOLDERBOOK,
		},
		{
			slug: 'omgtok',
			sourceUrl: process.env.NEXT_PUBLIC_HEADLESS_WP_URL_OMGTOK,
			hostUrl: process.env.NEXT_PUBLIC_HOST_URL_OMGTOK,
		},
		{
			slug: 'earforge',
			sourceUrl: process.env.NEXT_PUBLIC_HEADLESS_WP_URL_EARFORGE,
			hostUrl: process.env.NEXT_PUBLIC_HOST_URL_EARFORGE,
		},
		// Old domains
		{
			slug: 'tubekarma',
			sourceUrl: process.env.NEXT_PUBLIC_HEADLESS_WP_URL_TUBEKARMA,
			hostUrl: process.env.NEXT_PUBLIC_HOST_URL_TUBEKARMA,
		},
		{
			slug: 'twenvy',
			sourceUrl: process.env.NEXT_PUBLIC_HEADLESS_WP_URL_TWENVY,
			hostUrl: process.env.NEXT_PUBLIC_HOST_URL_TWENVY,
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