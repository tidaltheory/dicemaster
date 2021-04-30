module.exports = {
    extends: ['@nuxtjs/eslint-config-typescript', '@zazen/eslint-config/vue'],
    parserOptions: {
        project: null,
    },
    rules: {
        'vue/html-indent': 'off',
    },
}
