const path = require('path');

module.exports = {
	entry: {
		app: './src/js/app.js',
		components: './src/js/components.js',
		styling: './src/js/styling.js',
		library: './src/js/library.js',
	},
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: '[name].js',
	},
	module: {
		rules: [
			/* style and css loader */
			{
				test: /\.css$/,
				use: [
					{
						loader: 'style-loader',
					},
					{
						loader: 'css-loader',
					},
					{
						loader: 'postcss-loader',
					},
				],
			},
		],
	},
	devServer: {
		static: {
			directory: path.join(__dirname, 'public'),
		},
	},
};
