<template>
    <div :class="{ spaceClass, alignClass }" class="flex">
        <slot />
    </div>
</template>
<script>
import Vue from 'vue'
import { AlignX, AlignY, useFlexAlign } from '~/hooks/useFlexAlign'
const spaceClassesMap = {
    4: 'gap-4',
}
export default Vue.component('Columns', {
    provide() {
        return { space: this.space }
    },
    props: {
        space: {
            type: String,
            default: 'none',
        },
        align: {
            type: () => AlignX,
            default: undefined,
        },
        alignY: {
            type: AlignY,
            default: undefined,
        },
    },
    computed: {
        spaceClass() {
            return this.space !== 'none' ? spaceClassesMap[this.space] : null
        },
        alignClass() {
            return useFlexAlign({ align: this.align, alignY: this.alignY })
        },
    },
})
</script>
