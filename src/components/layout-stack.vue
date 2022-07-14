<script lang="ts">
import { defineComponent, h } from 'vue'
import LayoutDivider from './layout-divider.vue'

const gapClassMap = {
	2: 'gap-2',
	4: 'gap-4',
}

export default defineComponent({
	name: 'LayoutStack',
	functional: true,
	components: {
		LayoutDivider,
	},
	props: {
		space: {
			type: String,
			default: 'none',
		},
		dividers: Boolean,
	},
	setup(props, { slots }) {
		let wrapperClass = 'flex flex-col'
		let spaceClass =
			props.space === 'none' ? null : gapClassMap[props.space]
		let stackNodes = slots.default?.().filter((child) => child.type) || []

		return () =>
			h(
				'div',
				{ class: [wrapperClass, spaceClass] },
				stackNodes.map((node, index) => {
					let showDivider = props.dividers && index > 0
					return h(
						'div',
						{
							class: showDivider
								? [wrapperClass, spaceClass]
								: [wrapperClass],
						},
						showDivider
							? [h(LayoutDivider), h('div', {}, [node])]
							: [node]
					)
				})
			)
	},
})
</script>
