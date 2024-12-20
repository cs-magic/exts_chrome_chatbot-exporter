const { resolve } = require("path");

const baseConfig = require("@cs-magic/webpack-config/presets/webpack.chrome");
const CopyPlugin = require("copy-webpack-plugin");


// eslint-disable-next-line @typescript-eslint/unbound-method

baseConfig.entry = {
  main: "./src/main.ts",
};

baseConfig.resolve.alias = {
  "@": resolve("src"),
  "@assets": resolve("../../../../assets"),
};

baseConfig.plugins.push(
  new CopyPlugin({
    patterns: ["assets/*", "manifest.json"],
  }),
);

module.exports = baseConfig;
