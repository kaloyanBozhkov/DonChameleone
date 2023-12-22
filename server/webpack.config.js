const path = require('path')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = {
  target: 'node', // in order to ignore built-in modules like path, fs, etc.
  mode: 'production',
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, '../dist/server'),
    filename: 'bundle.js',
  },
  resolve: {
    modules: [path.resolve(__dirname, '../dist/server/node_modules'), 'node_modules'],
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
    plugins: [new TsconfigPathsPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
}
