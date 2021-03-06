import webpack from 'webpack';
import path from 'path';

export default {
	debug: true,
	devtool: 'cheap-module-eval-source-map',
	noInfo: false,
	entry: [
		'babel-polyfill',
		'eventsource-polyfill',
		'webpack-hot-middleware/client?reload=true',
		'./src/index'
	],
	target: 'web',
	output: {
		path: __dirname + '/dist',
		publicPath: '/',
		filename: 'bundle.js'
	},
	devServer: {
		contentBase: './src'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	],
	module: {
		loaders: [
			{test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel']},
			{test: /\.scss$/, loaders: ["style", "css", "sass"]},
			{test: /(\.css)$/, loaders: ['style', 'css']},
		]
	}
};