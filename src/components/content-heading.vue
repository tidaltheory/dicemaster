<script setup lang="ts">
const resolveHeadingElement = {
	1: 'h1',
	2: 'h2',
	3: 'h3',
	4: 'h4',
}

interface Properties {
	level: keyof typeof resolveHeadingElement
}

const props = defineProps<Properties>()
const element = resolveHeadingElement[props.level]
</script>

<template>
	<component
		:is="element"
		class="font-bold uppercase text-white font-sans text-12 leading-none leading-trim md:text-20 xl:text-24"
	>
		<slot></slot>
	</component>
</template>
