const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.join(__dirname, '/build'),
		filename: 'bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
			{
				test: /\.s[ac]ss$/i,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[path][name].[ext]',
						},
					},
				],
			},
		],
	},
	devServer: {
		port: 3000,
		stats: {
			assets: false,
			children: false,
			chunks: false,
			hash: false,
			modules: false,
			publicPath: false,
			timings: false,
			version: false,
			warnings: true,
			colors: {
				green: '\u001b[32m',
			},
		},
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
		}),
	],
};
