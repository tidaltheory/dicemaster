<template>
	<component
		:is="tag"
		class="capsize text-white font-sans text-6 leading-normal"
	>
		<slot />
	</component>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
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
})
</script>
