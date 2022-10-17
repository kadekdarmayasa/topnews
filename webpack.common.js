const path = require('path');

module.exports = {
	entry: './src/js/index.js',
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'script.js',
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
