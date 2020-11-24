<template>
    <component
        :is="tag"
        class="font-sans text-6 leading-normal text-white capsize"
    >
        <slot />
    </component>
</template>

<script>
export default {
    name: 'TextElement',
    props: {
        element: {
            type: String,
            default: 'span',
        },
    },
    computed: {
        tag() {
            return this.element
        },
    },
}
</script>
