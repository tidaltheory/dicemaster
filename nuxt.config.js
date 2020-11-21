export default {
    /**
     * Nuxt target
     * @see https://nuxtjs.org/api/configuration-target
     */
    target: 'static',

    /**
     * Headers of the page
     * @see https://nuxtjs.org/api/configuration-head
     */
    head: {
        title: process.env.npm_package_name || '',
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            {
                hid: 'description',
                name: 'description',
                content: process.env.npm_package_description || '',
            },
        ],
        link: [
            {
                rel: 'stylesheet',
                href:
                    'https://fonts.googleapis.com/css2?family=Inter&display=swap',
            },
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        ],
        bodyAttrs: {
            class: 'text-grey-100 bg-grey-800',
        },
    },

    /** Global CSS */
    css: [],

    /**
     * Plugins to load before mounting the App
     * @see https://nuxtjs.org/guide/plugins
     */
    plugins: [],

    /**
     * Auto import components
     * @see https://nuxtjs.org/api/configuration-components
     */
    components: true,

    /** Nuxt.js dev-modules */
    buildModules: [
        /** @see https://github.com/nuxt-community/nuxt-tailwindcss */
        '@nuxtjs/tailwindcss',
    ],

    /** Nuxt.js modules */
    modules: ['@nuxtjs/pwa'],

    /**
     * Build configuration
     * @see https://nuxtjs.org/api/configuration-build/
     */
    build: {},
}
