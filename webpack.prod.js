const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const CssMinizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = merge(common, {
	mode: 'production',
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower-components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
					},
				},
			},
		],
	},
	optimization: {
		minimizer: [new CssMinizerPlugin()],
	},
});
