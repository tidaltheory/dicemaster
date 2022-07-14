/**
 * Prevent TS error with `import App from './App.vue'` in `main.ts`.
 */
declare module '*.vue' {
	import type { DefineComponent } from 'vue'

	// eslint-disable-next-line prefer-let/prefer-let
	const component: DefineComponent<{}, {}, any>
	export default component
}
