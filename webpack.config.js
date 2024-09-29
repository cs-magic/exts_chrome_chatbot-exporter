const CopyPlugin = require("copy-webpack-plugin");

const baseConfig = require("../../tools/webpack/webpack.base.config");

baseConfig.entry = {
  main: "./src/main.ts",
};

baseConfig.plugins.push(
  new CopyPlugin({
    patterns: ["assets/*", "manifest.json"],
  }),
);

module.exports = baseConfig;
