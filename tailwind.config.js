/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./assets/**/*.{html,js}", "./index.html"],
	theme: {
		extend: {
			colors: {
				"main-black": "#333333",
				"main-white": "#FAFAFA",
			},
		},
	},
	plugins: [],
};
