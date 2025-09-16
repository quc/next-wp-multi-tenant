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

		return config;
	},
};

module.exports = withHeadstartWPConfig(nextConfig);