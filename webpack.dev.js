const webpack = require("webpack");

module.exports = {
  target: "web",

  mode: "development",
  devtool: "source-map",
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      WEBPACK_BASE_URL: JSON.stringify("http://localhost:5000"),
    }),
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: "./dist",
    hot: true,
    port: 8080,
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      },
    ],
  },
};
