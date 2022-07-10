/** @type {import('stylelint').Config} */
const config = {
	extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
	rules: {
		'at-rule-no-unknown': [
			true,
			{ ignoreAtRules: ['tailwind', 'layer', 'apply', 'screen'] },
		],
	},
	overrides: [
		{
			files: ['**/*.vue'],
			customSyntax: 'postcss-html',
		},
	],
}

module.exports = config
