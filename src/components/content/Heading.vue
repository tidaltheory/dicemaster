<template>
	<component
		:is="heading"
		class="capsize font-bold uppercase text-white font-sans text-12 leading-none md:text-20 xl:text-24"
	>
		<slot />
	</component>
</template>

<script>
import Vue from 'vue'

const resolveHeadingElement = {
	1: 'h1',
	2: 'h2',
	3: 'h3',
	4: 'h4',
}

export default Vue.extend({
	props: {
		level: {
			type: Number,
			default: 1,
		},
	},
	computed: {
		heading() {
			return resolveHeadingElement[this.level]
		},
	},
})
</script>
