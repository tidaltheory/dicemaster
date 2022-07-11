<template>
	<div class="rounded-2xl bg-slate-700 p-4">
		<TextElement>Custom Roll</TextElement>
	</div>
</template>

<script>
import Vue from 'vue'
import TextElement from './content/TextElement.vue'

export default Vue.extend({
	name: 'RollControl',
	components: { TextElement },
})
</script>
