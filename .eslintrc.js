module.exports = {
    extends: ['@zazen/eslint-config', 'plugin:vue/vue3-recommended', 'prettier/vue'],
    rules: {
        "vue/html-indent": "off",
    },
    overrides: [
        {
            files: ['**/*.ts'],
            extends: [
                // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/src/configs/recommended.json
                'plugin:@typescript-eslint/recommended',
                // https://github.com/prettier/eslint-config-prettier/blob/master/%40typescript-eslint.js
                'prettier/@typescript-eslint',
            ],
            parser: '@typescript-eslint/parser',
            env: {
                node: true,
            },
        },
    ]
}
