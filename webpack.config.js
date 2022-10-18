const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const isDevelopment = process.env.NODE_ENV === "development";

const pluginsConfig = [
  new CleanWebpackPlugin(),
  new HtmlWebpackPlugin({
    filename: "main.html",
    title: "Main",
    template: "src/index.hbs",
    chunks: ["main"],
  }),
  new HtmlWebpackPlugin({
    filename: "second.html",
    title: "Second",
    template: "src/index.hbs",
    chunks: ["second"],
  }),
];

if (!isDevelopment) {
  pluginsConfig.push(
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    })
  );
}

module.exports = {
  entry: {
    main: "./src/pages/main.js",
    second: "./src/pages/second.js",
  },
  output: {
    filename: `[name]${isDevelopment ? "" : ".[contenthash]"}.js`,
    path: path.resolve(__dirname, "./dist"),
    publicPath: "",
  },
  mode: process.env.NODE_ENV || "production",
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  devServer: {
    port: 1300,
    static: {
      directory: path.resolve(__dirname, "./dist"),
    },
    devMiddleware: {
      index: "main.html",
      writeToDisk: true,
    },
  },
  module: {
    rules: [
      {
        test: /\.png/,
        type: "asset",
        // inline  < 8kb < resource
      },
      {
        test: /\.css$/,
        use: [
          !isDevelopment ? MiniCssExtractPlugin.loader : "style-loader",
          "css-loader",
        ],
      },
      {
        test: /\.scss$/,
        use: [
          !isDevelopment ? MiniCssExtractPlugin.loader : "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-proposal-class-properties"],
          },
        },
      },
      {
        test: /\.hbs$/,
        use: ["handlebars-loader"],
      },
    ],
  },
  plugins: pluginsConfig,
};
