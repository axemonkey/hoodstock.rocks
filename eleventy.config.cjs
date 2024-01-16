module.exports = function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy('hoodstock.rocks/public');
	eleventyConfig.addPassthroughCopy({ 'hoodstock.rocks/robots.txt': '/robots.txt' });
	eleventyConfig.setUseGitIgnore(false);
	eleventyConfig.setServerOptions({
		// liveReload: false,
		watch: [
			'hoodstock.rocks/public/**/*',
		],
		showVersion: true,
	});

	return {
		dir: {
			includes: "_includes",
			layouts: "_layouts",
		}
	}
};
