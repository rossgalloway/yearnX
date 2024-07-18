const {COLORS} = require('./constants');

/** @type {import('tailwindcss').Config} */
const config = require('../lib/tailwind.config');

module.exports = {
	...config,
	content: [...config.content, './components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
	plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography'), require('tailwindcss-animate')],
	theme: {
		...config.theme,
		extend: {
			...config.theme.extend,
			colors: {
				...config.theme.extend.colors,
				...COLORS
			}
		}
	}
};
