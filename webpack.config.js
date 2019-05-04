const {resolve, join} = require('path');
const webpack = require('webpack');

module.exports = {
	entry: './src/index.jsx',
	output: {
		filename: "main.js",
		path: resolve(__dirname, 'dist'),
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: '/node_modules/',
				loader: 'babel-loader'
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"]
			}
		]
	},
	devServer: {
		contentBase: join(__dirname, "public/"),
		port: 3000,
		publicPath: "http://localhost:3000/dist/",
		hotOnly: true,
		index: 'index.html',
	},
	plugins: [new webpack.HotModuleReplacementPlugin()],
	resolve: {
		alias: {
			'react-dom': '@hot-loader/react-dom'
		},
		extensions: ['*', '.js', '.jsx']
	},
	mode: 'development',
};
