const commonConfig = require("./webpack.common.js");
const productionConfig = require("./webpack.prod.js");
const developmentConfig = require("./webpack.dev.js");
const { merge } = require("webpack-merge");

module.exports = (env) => {
  if (process.env.NODE_ENV === "development") {
    return merge(commonConfig, developmentConfig);
  }
  if (process.env.NODE_ENV === "production") {
    return merge(commonConfig, productionConfig);
  }
};
