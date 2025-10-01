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
		return {
		  beforeFiles: [
			// DEV: instalever.localhost -> /instalever/*
			{
			  source: '/assets/:path*',
			  has: [{ type: 'header', key: 'host', value: '^instalever\\.localhost(?::\\d+)?$' }],
			  destination: '/instalever/:path*',
			},
			// DEV: tubemagnet.localhost -> /tubemagnet/*
			{
			  source: '/assets/:path*',
			  has: [{ type: 'header', key: 'host', value: '^tubemagnet\\.localhost(?::\\d+)?$' }],
			  destination: '/tubemagnet/:path*',
			},
	
			// (Optional) PROD examples:
			// {
			//   source: '/assets/:path*',
			//   has: [{ type: 'header', key: 'host', value: '^instalever\\.yourdomain\\.com$' }],
			//   destination: '/instalever/:path*',
			// },
			// {
			//   source: '/assets/:path*',
			//   has: [{ type: 'header', key: 'host', value: '^tubemagnet\\.yourdomain\\.com$' }],
			//   destination: '/tubemagnet/:path*',
			// },
	
			// Fallback (unknown hosts) → tubemagnet by default
			{
			  source: '/assets/:path*',
			  destination: '/tubemagnet/:path*',
			},
		  ],
		};
	},
};

module.exports = withHeadstartWPConfig(nextConfig);