module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        excluse: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
