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
		],
		rules: {
			...config.rules,
			camelcase: ['error', { allow: ['short_name', 'theme_color'] }],
		},
		overrides: [
			{
				files: ['*.config.{js,ts}'],
				rules: {
					'new-cap': 'off',
					'import/no-extraneous-dependencies': 'off',
					'unicorn/prefer-module': 'off',
				},
			},
		],
	}),
}

export default config
