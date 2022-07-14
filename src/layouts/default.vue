<script setup lang="ts">
import LayoutColumn from '~/components/layout-column.vue'
import LayoutColumns from '~/components/layout-columns.vue'
</script>

<template>
	<layout-columns>
		<layout-column>
			<router-view />
		</layout-column>
		<layout-column></layout-column>
	</layout-columns>
</template>
