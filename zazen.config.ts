import { Linter } from 'eslint'

const config = {
	setEslintConfig: (config: Linter.Config) => ({
		...config,
		parser: 'vue-eslint-parser',
		parserOptions: {
			parser: '@typescript-eslint/parser',
		},
		extends: [
			...(config.extends as string[]),
			'plugin:vue/vue3-recommended',
			'prettier',
		],
		rules: {
			...config.rules,
			camelcase: ['error', { allow: ['short_name', 'theme_color'] }],
			'new-cap': 'off',
		},
		overrides: [
			{
				files: ['**/*.vue', '**/components/**/*.{js,vue}'],
				rules: {
					'unicorn/prevent-abbreviations': [
						'error',
						{ allowList: { props: true } },
					],
				},
			},
			{
				files: [
					'src/pages/**/*.vue',
					'src/layouts/**/*.vue',
					'src/App.vue',
				],
				rules: {
					'unicorn/filename-case': 'off',
					'vue/multi-word-component-names': 'off',
				},
			},
			{
				files: ['*.config.{js,ts}', '.*rc.js'],
				rules: {
					'import/no-extraneous-dependencies': 'off',
					'unicorn/prefer-module': 'off',
				},
			},
			{
				files: ['*.html'],
				rules: {
					'vue/comment-directive': 'off',
				},
			},
		],
	}),
}

export default config
