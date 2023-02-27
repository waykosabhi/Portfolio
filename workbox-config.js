module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{png,jpg,js,html}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};