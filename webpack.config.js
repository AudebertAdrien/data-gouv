const path = require("path");

const { merge } = require("webpack-merge");
const productionConfig = require("./webpack.prod.js");
const developmentConfig = require("./webpack.dev.js");

const commonConfig = {
  entry: {
    main: path.resolve(__dirname, "src/index.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "images/[hash][ext][query]",
    filename: "[name].bundle.js",
  },
  resolve: {
    extensions: [".js", ".jsx"],
    /* alias: {
      Components: path.resolve(__dirname, "src", "components"),
      Navigation: path.resolve(__dirname, "src", "navigation"),
    }, */
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset/resource",
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};

module.exports = () => {
  if (process.env.REACT_APP_PRODUCTION) {
    return merge(commonConfig, productionConfig);
  }
  if (process.env.REACT_APP_DEVELOPMENT) {
    return merge(commonConfig, developmentConfig);
  }
};
