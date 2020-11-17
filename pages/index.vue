<template>
    <div class="container">
        <div>
            <Logo />
            <h1 class="title">dicemaster</h1>
            <Columns>
                <Column>
                    <a
                        href="https://nuxtjs.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="button--green"
                    >
                        Documentation
                    </a>
                </Column>
                <Column>
                    <a
                        href="https://github.com/nuxt/nuxt.js"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="button--grey"
                    >
                        GitHub
                    </a>
                </Column>
            </Columns>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import Column from '~/components/layout/Column.vue'
import Columns from '~/components/layout/Columns.vue'
export default Vue.extend({
    components: {
        Column,
        Columns,
    },
})
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    margin: 0 auto;
    text-align: center;
}

.title {
    display: block;
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system,
        BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
        sans-serif;
    font-size: 100px;
    font-weight: 300;
    color: #35495e;
    letter-spacing: 1px;
}

.subtitle {
    padding-bottom: 15px;
    font-size: 42px;
    font-weight: 300;
    color: #526488;
    word-spacing: 5px;
}

.links {
    padding-top: 15px;
}
</style>
