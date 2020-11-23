<template>
    <div class="p-20">
        <header>
            <Heading :level="1">Dice Master</Heading>
        </header>
        <Columns space="4" align="center">
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
</template>

<script>
import Vue from 'vue'
import Heading from '~/components/content/Heading.vue'
import Column from '~/components/layout/Column.vue'
import Columns from '~/components/layout/Columns.vue'
export default Vue.extend({
    components: {
        Column,
        Columns,
        Heading,
    },
})
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
