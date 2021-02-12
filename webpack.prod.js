const path = require("path");

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
console.log("##########");
console.log("prod");
module.exports = {
  // fix a bug with postcss and webpack devserver or webpack 5, browserslistrc not sent properly to production
  target: "browserslist", // for .browserlistrc (maybe)

  mode: "production",
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/index.html"),
      filename: "index.html",
      favicon: "./src/assets/favicon.ico",
    }),
    /* new FaviconsWebpackPlugin({
      logo: "./src/assets/favicon.svg",
      cache: true,
    }), */
  ],
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { publicPath: "" },
          },
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
    ],
  },
};
