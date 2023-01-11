/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	plugins: [
		require('@tailwindcss/forms'),
		require('daisyui'),
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/line-clamp'),
		require('@tailwindcss/typography'),
		require('@tailwindcss/container-queries')
	]
};
