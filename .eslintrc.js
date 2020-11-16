module.exports = {
    extends: ['@zazen', '@zazen/eslint-config/vue'],
    rules: {
        'vue/html-indent': 'off',
    },
    overrides: [
        {
            files: ['**/*.ts'],
            extends: [
                // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/src/configs/recommended.json
                'plugin:@typescript-eslint/recommended',
                'plugin:prettier/recommended',
                // https://github.com/prettier/eslint-config-prettier/blob/master/%40typescript-eslint.js
                'prettier/@typescript-eslint',
            ],
            parserOptions: {
                parser: '@typescript-eslint/parser',
            },
            env: {
                node: true,
            },
            rules: {
                'prefer-const': 'off',
            },
        },
    ],
}
