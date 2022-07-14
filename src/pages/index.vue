<script setup lang="ts">
import ContentHeading from '~/components/content-heading.vue'
import LayoutStack from '~/components/layout-stack.vue'
import RollControl from '~/components/roll-control.vue'
</script>

<template>
	<div class="p-20">
		<header>
			<content-heading :level="1">Dice Master</content-heading>
		</header>
		<layout-stack space="4" align="right">
			<roll-control />
		</layout-stack>
	</div>
</template>
