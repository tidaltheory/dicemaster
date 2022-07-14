/** @type {import('tailwindcss/types').Config} */
const config = {
	content: ['src/**/*.{vue,ts}', 'index.html', 'vite.config.{js,ts}'],
	theme: {
		colors: {
			white: '#fff',
			black: '#000',
			divider: '#101426',

			grey: {
				100: '#f1f2f2',
				200: '#e7ebed',
				300: '#dee4e8',
				400: '#c0c8cd',
				500: '#949ca1',
				600: '#62696d',
				700: '#393e41',
				800: '#202326',
				900: '#16191b',
			},
			slate: {
				50: '#f7f9fc',
				100: '#edf1f7',
				200: '#e4e9f2',
				300: '#c5cee0',
				400: '#8f9bb3',
				500: '#2e3a59',
				600: '#222b45',
				700: '#1a2138',
				800: '#151a30',
				900: '#101426',
			},
			cyan: {
				100: '#d4fffd',
				200: '#aafcff',
				300: '#80f2ff',
				400: '#60e4ff',
				500: '#2cccff',
				600: '#20a0db',
				700: '#1679b7',
				800: '#0e5693',
				900: '#083e7a',
			},
		},
		fontFamily: {
			display: 'Antenna, sans-serif',
			sans: 'Inter, sans-serif',
		},
		fontSize: {
			6: '1.5rem',
			8: '2rem',
			12: '3rem',
			18: '4.5rem',
			20: '5rem',
			24: '6rem',
		},
		fontMetrics: {
			display: {
				capHeight: 741,
				ascent: 800,
				descent: -200,
				lineGap: 200,
				unitsPerEm: 1000,
			},
			sans: {
				capHeight: 2048,
				ascent: 2728,
				descent: -680,
				lineGap: 0,
				unitsPerEm: 2816,
			},
		},
		extend: {},
	},
	plugins: [
		require('tailwindcss-capsize')({ className: 'leading-trim' }),
		require('tailwindcss-opentype'),
	],
}

module.exports = config
