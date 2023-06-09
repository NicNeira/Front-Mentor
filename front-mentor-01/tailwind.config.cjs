/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
			'custom-blue': '#1B1A46',
			},
			fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      },
		},
	},
	plugins: [],
}
