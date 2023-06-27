const path = require("path");
const { merge } = require("webpack-merge");
const nodeExternals = require("webpack-node-externals");

const basic_server_config = require("../server/webpack.server.basic");

module.exports = merge(basic_server_config, {
  mode: "development",
  output: {
    clean: true,
    path: path.resolve(process.cwd(), "./dist/"),
    filename: "server.js",
  },
  externals: [nodeExternals({
    modulesFromFile: path.resolve(process.cwd(), "./package.json")
  })],
});