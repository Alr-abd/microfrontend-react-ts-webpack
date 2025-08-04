const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  entry: './src/index.tsx',
  mode: 'development',
  devServer: {
    static: './dist',
    port: 3002,
  },
  output: {
    publicPath: 'http://localhost:3002/',
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'app2',
      filename: 'remoteEntry.js',
      exposes: {
        './App': './src/App',
      },
shared: {
  react: {
    singleton: true,
    eager: true,
    requiredVersion: require('./package.json').dependencies.react,
  },
  'react-dom': {
    singleton: true,
    eager: true,
    requiredVersion: require('./package.json').dependencies['react-dom'],
  }
}
    }),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    }),
  ],
};
