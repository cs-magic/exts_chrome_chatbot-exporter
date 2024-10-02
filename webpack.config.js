const CopyPlugin = require("copy-webpack-plugin");

const baseConfig = require("../../packages/tools_webpack/webpack.base.config");

// eslint-disable-next-line @typescript-eslint/unbound-method
const { resolve } = require("path");

baseConfig.entry = {
  main: "./src/main.ts",
};

baseConfig.resolve.alias = {
  "@": resolve("src"),
};

baseConfig.plugins.push(
  new CopyPlugin({
    patterns: ["assets/*", "manifest.json"],
  }),
);

module.exports = baseConfig;
