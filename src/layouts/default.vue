<template>
	<Columns>
		<Column>
			<router-view />
		</Column>
		<Column></Column>
	</Columns>
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
