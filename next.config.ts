const { withHeadstartWPConfig } = require('@headstartwp/next/config');
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	htmlLimitedBots: new RegExp('/.+/'),
	serverExternalPackages: ["@sparticuz/chromium", "puppeteer-core"],
	webpack: (config: any) => {
		config.resolve = {
			...config.resolve,
			conditionNames: ['import'],
		};

		config.module.rules.push({
			test: /\.svg$/i,
			issuer: /\.[jt]sx?$/,
			use: ["@svgr/webpack"],
		});

		return config;
	},
	async rewrites() {
		const domains = ['tubemagnet', 'instalever', 'xgrowlab', 'streameredge', 'bolderbook', 'omgtok', 'earforge'];
		
		const domainRewrites = domains.flatMap(domain => [
			{
				source: '/assets/:path*',
				has: [{ type: 'header', key: 'host', value: `^${domain}\\.localhost(?::\\d+)?$` }],
				destination: `/${domain}/:path*`,
			},
			{
				source: '/assets/:path*',
				has: [{ type: 'header', key: 'host', value: `^${domain}\\.com$` }],
				destination: `/${domain}/:path*`,
			},
		]);

		return {
			beforeFiles: [
				...domainRewrites,
				{
					source: '/assets/:path*',
					destination: '/tubemagnet/:path*',
				},
			],
		};
	},
};

module.exports = withHeadstartWPConfig(nextConfig);