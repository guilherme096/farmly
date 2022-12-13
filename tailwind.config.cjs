/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				'landing': "url('/images/landing.jpg')",
			}
		},
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: [
			{
				mytheme: {
					"primary": "#006600",
					"secondary": "#004700",
					"accent": "#006666",
					"neutral": "#3d6600",
					"base-100": "#ffffff",
					"info": "#8CCAC1",
					"success": "#9CB686",
					"warning": "#FFD261",
					"error": "#FC9783",
				},
			},
		],
	},
}
