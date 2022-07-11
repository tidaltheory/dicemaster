<script>
import Vue from 'vue'
import LayoutDivider from './LayoutDivider.vue'

const spaceClassNames = {
	2: {
		space: 'pt-2',
		offset: 'before:-mt-2',
	},
	4: {
		space: 'pt-4',
		offset: 'before:-mt-4',
	},
}
export default Vue.extend({
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
	render(h, context) {
		let {
			children,
			props: { space, dividers },
		} = context
		let stackNodes =
			(children && children.filter((child) => child.tag)) || []
		let spaceClass = space === 'none' ? null : spaceClassNames[space].space
		let offsetClass = spaceClass
			? `before:block before:empty-content ${spaceClass.offset}`
			: null
		return h(
			'div',
			{ class: offsetClass },
			stackNodes.map((node, index) =>
				h(
					'div',
					{ class: spaceClass },
					dividers && index > 0
						? [
								h(LayoutDivider),
								h('div', { class: spaceClass }, [node]),
						  ]
						: [node]
				)
			)
		)
	},
})
</script>
