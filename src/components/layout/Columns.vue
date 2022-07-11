<template>
	<div :class="[spaceClass, alignClass]" class="flex">
		<slot />
	</div>
</template>
<script>
import Vue from 'vue'
import { useFlexAlign } from '~/hooks/use-flex-align.js'

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
			type: String,
			default: undefined,
		},
		alignY: {
			type: String,
			default: undefined,
		},
	},
	computed: {
		spaceClass() {
			return this.space === 'none' ? null : spaceClassesMap[this.space]
		},
		alignClass() {
			let { alignClass, justifyClass } = useFlexAlign({
				align: this.align,
				alignY: this.alignY,
			})
			return [alignClass, justifyClass]
		},
	},
})
</script>
