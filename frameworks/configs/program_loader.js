const path = require("path");

module.exports = [{
  test: /\.(js|jsx|mjs|cjs|ts|tsx)$/,
  exclude: /(node_modules)/,
  use: [{
    loader: "esbuild-loader",
  }, {
    loader: "babel-loader",
    options: {
      // cacheDirectory: true,
      // cacheCompression: false,
      configFile: path.join(process.cwd(), "./.babelrc.js")
    }
  }, {
    loader: "ts-loader",
    options: {
      // cacheDirectory: true,
      // cacheCompression: false,
      configFile: path.resolve(process.cwd(), "./tsconfig.json")
    }
  }]
}];