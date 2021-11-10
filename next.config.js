const { i18n } = require("./next-i18next.config");

/**
 * @type {import('next').NextConfig}
 **/
module.exports = {
	i18n,
	eslint: {
		ignoreDuringBuilds: true,
	},
	images: {
		domains: ["avatars.githubusercontent.com"],
	},
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			use: [{ loader: "@svgr/webpack", options: { svgo: false } }],
		});

		return config;
	},
};
