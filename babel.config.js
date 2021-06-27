const plugins = [];

if (process.env.NODE_ENV !== "production") {
  plugins.push("@babel/plugin-transform-runtime");
}

module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          esmodules: true,
        },
      },
    ],
    ["@babel/preset-react", { runtime: "automatic" }],
  ],
  plugins: plugins,
};
