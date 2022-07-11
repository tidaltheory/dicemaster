<template>
	<div class="p-20">
		<header>
			<Heading :level="1">Dice Master</Heading>
		</header>
		<LayoutStack space="4" align="right">
			<roll-control />
		</LayoutStack>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
import Heading from '~/components/content/Heading.vue'
import LayoutStack from '~/components/layout/LayoutStack.vue'
import RollControl from '~/components/RollControl.vue'

export default Vue.extend({
	components: {
		Heading,
		RollControl,
		LayoutStack,
	},
})
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
