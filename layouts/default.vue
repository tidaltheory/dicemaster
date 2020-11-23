<template>
    <Columns>
        <Column>
            <Nuxt />
        </Column>
        <Column> </Column>
    </Columns>
</template>

<script>
import Column from '~/components/layout/Column.vue'
import Columns from '~/components/layout/Columns.vue'
export default {
    components: {
        Column,
        Columns,
    },
}
</script>
