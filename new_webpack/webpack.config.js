var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	devtool : 'eval-source-map',
	entry : __dirname + '/app/main.js',
	output : {
		path : __dirname + '/public',
		filename : '[name]-[hash].js'
	},
	devServer : {
		contentBase : './public',
		port : 8883,
		colors : true,
		inline : true,
		historyApiFallback : true,
		host: '10.12.2.12'
	},
	module : {
		loaders : [
			{
				test : /\.json$/,
				loader : 'json'
			},
			{
				test : /\.js$/,
				loader : 'babel',
				exclude : /node_modules/
			},
			{
				test : /\.(jpg|png)$/,
				loader : 'url'
			},
			{
				test : /\.css$/,
				loader : ExtractTextPlugin.extract('style','css?modules!postcss')
			}
		]
	},
	postcss : [
		require('autoprefixer') //调用autoprefixer自动添加前缀的插件
	],
	plugins : [
		new webpack.BannerPlugin('Copyright Flying Unicorns inc.'),
		new HtmlWebpackPlugin({
			template : __dirname + '/app/index.tmp1.html'
		}),
		new HtmlWebpackPlugin({
			filename : 'index2.html',
			template : __dirname + '/app/index.tmp2.html'
		}),
		new HtmlWebpackPlugin({
			filename : 'index3.html',
			template : __dirname + '/app/index.tmp3.html' 
		}),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin(),
		new ExtractTextPlugin('[name]-[hash].css')
	]
};