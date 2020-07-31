const path = require( 'path' );

module.exports = {
  entry: {
    index: './src/index.js',
  },

  output: {
    filename: '[name].bundle.js',
    path: path.resolve( __dirname, 'dist' )
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve( __dirname, 'src' ),
        ],
        exclude: [
          path.resolve( __dirname, 'node_modules' ),
        ],
        use: [
          {
            loader: 'babel-loader'
          },
        ]
      }
    ]
  },

  resolve: {
    modules: [
      'node_modules',
    ]
  },

  devtool: 'source-map',
  target: 'web',
  devServer: {
    contentBase: path.join( __dirname, 'dist' ),
    compress: true,
    staticOptions: {
      redirect: true
    },
    watchOptions: {
      poll: true
    }
  }
} 
