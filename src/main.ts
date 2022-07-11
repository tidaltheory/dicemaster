/* eslint-disable import/no-extraneous-dependencies */

import { ViteSSG } from 'vite-ssg'
import generatedRoutes from 'virtual:generated-pages'
import { setupLayouts } from 'virtual:generated-layouts'

import App from './App.vue'

import './styles/tailwind.css'

const routes = setupLayouts(generatedRoutes)

// https://github.com/antfu/vite-ssg
export const createApp = ViteSSG(
	App,
	{ routes, base: import.meta.env.BASE_URL },
	(context) => {
		// Install all modules under `modules/`
		for (let index of Object.values(
			import.meta.globEager('./modules/*.ts')
		))
			index.install?.(context)
	}
)
