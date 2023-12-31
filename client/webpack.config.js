const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const { DefinePlugin } = require('webpack')
module.exports = {
  devtool: process.env.VERCEL_ENV === 'production' ? false : 'source-map',
  mode: process.env.VERCEL_ENV === 'production' ? 'production' : 'development',
  // the app entry point is /src/index.js
  entry: path.resolve(__dirname, 'src', 'index.tsx'),
  output: {
    // the output of the webpack build will be in /public/dist/client directory - Next.JS will serve it from there
    path: path.resolve(__dirname, './../public/dist/client'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
    plugins: [new TsconfigPathsPlugin()],
    alias: {
      '-': path.resolve(__dirname),
    },
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif|ttf)$/i,
        type: 'asset/inline',
        parser: {
          dataUrlCondition: {
            maxSize: 1024 * 1024 * 200,
          },
        },
      },
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, 'src'),
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        // for any file with a suffix of js or jsx
        test: /\.(jsx|tsx|ts|js)?$/,
        // ignore transpiling JavaScript from node_modules as it should be that state
        exclude: /node_modules/,
        // use the babel-loader for transpiling JavaScript to a suitable format
        loader: 'babel-loader',
        options: {
          // attach the presets to the loader (most projects use .babelrc file instead)
          presets: [
            '@babel/preset-env',
            ['@babel/preset-react', { runtime: 'automatic' }],
            '@babel/preset-typescript',
          ],
        },
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: './public/assets', to: './assets' }],
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      // make localhost:8080 load desired html instantly
      filename: process.env.VERCEL_ENV === 'production' ? 'don-game.html' : 'index.html',
    }),
    (() => {
      // only for local set up the env
      const env =
          process.env.VERCEL_ENV && process.env.VERCEL_ENV !== 'development'
            ? process.env
            : require('dotenv').config({ path: path.resolve(__dirname, '../.env') }).parsed,
        whitelist = ['VERCEL_ENV'],
        // kinda useless if just for local :D
        removePrivateVars = (env) =>
          Object.keys(env).reduce(
            (acc, key) => ({
              ...acc,
              ...(key.includes('NEXT_PUBLIC') || whitelist.includes(key)
                ? { [key]: env[key] }
                : {}),
            }),
            {}
          )

      return new DefinePlugin({
        'process.env': JSON.stringify(removePrivateVars(env)),
      })
    })(),
  ],
}
