const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");
const dotenv = require("dotenv");

module.exports = {
	entry: "./src/index.tsx",
	mode: "development",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist"),
		publicPath: "/",
	},
	devServer: {
		historyApiFallback: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./public/index.html",
		}),
		new webpack.DefinePlugin({
			"process.env": JSON.stringify(dotenv.config().parsed),
		}),
	],
	resolve: {
		modules: [__dirname, "src", "node_modules"],
		extensions: ["*", ".js", ".jsx", ".tsx", ".ts"],
		fallback: {
			url: require.resolve("url"),
			fs: require.resolve("graceful-fs"),
			buffer: require.resolve("buffer"),
			timers: require.resolve("timers"),
			events: false,
			"node:stream": require.resolve("node:stream"),
			buffer: require.resolve("buffer"),
			stream: false,
		},
	},
	module: {
		rules: [
			{
				test: /\.(js|ts)x?$/,
				exclude: /node_modules/,
				use: ["babel-loader"],
			},
			{
				test: /\.css$/,
				include: path.resolve(__dirname, "src"),
				exclude: /node_modules/,
				use: ["style-loader", "css-loader", "postcss-loader"],
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				exclude: /node_modules/,
				use: ["file-loader"],
			},
		],
	},
};
