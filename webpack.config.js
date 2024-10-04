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
		publicPath: "/"
	},
	devServer: {
		historyApiFallback: true,
		static: {
			directory: path.join(__dirname, "public") // Serve static files from "public"
		}
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./public/index.html"
		}),
		new webpack.DefinePlugin({
			"process.env": JSON.stringify(dotenv.config().parsed)
		}),
		new webpack.NormalModuleReplacementPlugin(/^node:/, resource => {
			resource.request = resource.request.replace(/^node:/, "");
		}),
		new webpack.ProvidePlugin({
			Buffer: ["buffer", "Buffer"]
		})
	],
	resolve: {
		modules: [__dirname, "src", "node_modules"],
		extensions: [".*", ".js", ".jsx", ".tsx", ".ts"],
		fallback: {
			url: require.resolve("url"),
			fs: require.resolve("graceful-fs"),
			buffer: require.resolve("buffer"),
			timers: require.resolve("timers"),
			events: false,
			"node:stream": require.resolve("node:stream"),
			buffer: require.resolve("buffer"),
			stream: false
		}
	},
	module: {
		rules: [
			{
				test: /\.(js|ts)x?$/,
				exclude: /node_modules/,
				use: ["babel-loader"]
			},
			// General CSS loader for your project files (src)
			{
				test: /\.css$/,
				include: path.resolve(__dirname, "src"),
				use: ["style-loader", "css-loader", "postcss-loader"]
			},
			// Handle CSS files from node_modules, specifically for cropperjs
			{
				test: /\.css$/,
				include: [
					path.resolve(__dirname, "node_modules/cropperjs"),
					path.resolve(__dirname, "node_modules/react-tabs"),
					path.resolve(__dirname, "node_modules/react-toastify"),
					path.resolve(__dirname, "node_modules/swiper"),
					path.resolve(__dirname, "node_modules/react-calendar")
				],
				use: ["style-loader", "css-loader"] // No postcss-loader for node_modules CSS
			},
			// Loader for images and assets
			{
				test: /\.(png|svg|jpg|gif|ico|json)$/,
				type: "asset/resource",
				generator: {
					filename: "images/[name][ext][query]"
				}
			}
		]
	}
};
