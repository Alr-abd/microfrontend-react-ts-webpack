const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
// 1. import کردن dependencies برای بخش shared
const deps = require("./package.json").dependencies;

module.exports = {
  entry: "./src/index.tsx",
  mode: "development",
  devServer: {
    static: "./public", // اگر فایل‌های استاتیک توی public هستن
    port: 3000,
  },
  output: {
    publicPath: "http://localhost:3000/",
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
      // هیچ rule مربوط به CSS نیاز نیست
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        app1: "app1@http://localhost:3001/remoteEntry.js",
        app2: "app2@http://localhost:3002/remoteEntry.js",
      },
      shared: {
        // 2. استفاده از deps برای همه‌ی shared packages
        'react-router': {
          singleton: true,
          eager: true,
          requiredVersion: deps["react-router"],
        },
        react: {
          singleton: true,
          eager: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          eager: true,
          requiredVersion: deps["react-dom"],
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: "public/index.html",
    }),
  ],
};
