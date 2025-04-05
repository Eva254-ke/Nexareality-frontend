module.exports = {
  // Other existing configuration...
  module: {
    rules: [
      // Other existing rules...
      {
        test: /\.mjs$/,
        enforce: 'pre',
        use: ['source-map-loader'],
        exclude: [
          /@mediapipe\/tasks-vision/ // Ignore missing source maps for this module
        ],
      },
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
        exclude: [
          /node_modules\/react-babylonjs/
        ],
      },
    ],
  },
  // Other existing configuration...
};