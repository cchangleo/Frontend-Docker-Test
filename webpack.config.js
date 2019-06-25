const path = require('path')
const reactLoadablePlugin = require('react-loadable/webpack').ReactLoadablePlugin

module.exports = {
  entry: path.resolve(__dirname, 'src', 'app', 'app.tsx'),
  output: {
    filename: 'js/[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['.ts', '.tsx', '.js', '.json']
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },

  devServer: {
    port: 3000
  },
  plugins: [
    new reactLoadablePlugin({ filename: './dist/react-loadable.json' })
  ]
}
