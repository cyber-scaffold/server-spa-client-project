const path = require("path");
const { merge } = require("webpack-merge");

const basic_server_config = require("../server/webpack.server.basic");

module.exports = merge(basic_server_config, {
  mode: "production",
  output: {
    clean: true,
    path: path.resolve(process.cwd(), "./dist/"),
    filename: "server.js",
  }
});