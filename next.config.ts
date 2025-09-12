const { withHeadstartWPConfig } = require('@headstartwp/next/config');

/** @type {import('next').NextConfig} */
const nextConfig = {
	webpack: (config: any) => {
		config.resolve = {
			...config.resolve,
			conditionNames: ['import'],
		};

		return config;
	},
};

module.exports = withHeadstartWPConfig(nextConfig);