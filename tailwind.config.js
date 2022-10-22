const plugin = require('tailwindcss/plugin');

module.exports = {
	content: ['./public/*.html', './src/components/*.js'],
	theme: {
		fontFamily: {
			display: ['"Plus Jakarta Sans"', 'sans-serif'],
		},
		extend: {},
	},
	plugins: [require('@tailwindcss/line-clamp')],
};
