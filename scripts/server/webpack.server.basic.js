const path = require("path");
const WebpackBar = require("webpackbar");

const program_loader = require("../configs/program_loader");

module.exports = {
  cache: {
    type: "filesystem",
    allowCollectingMemory: true,
  },
  target: "node",
  devtool: "source-map",
  entry: [
    "source-map-support/register",
    path.resolve(process.cwd(), "./src/index.ts")
  ],
  resolve: {
    extensions: [".js", ".json", ".ts", ".tsx"],
    alias: {
      "@": path.resolve(process.cwd(), "./src/"),
      "@@": process.cwd(),
    }
  },
  externalsPresets: { node: true },
  optimization: {
    nodeEnv: false
  },
  module: {
    rules: [].concat(program_loader)
  },
  plugins: [
    new WebpackBar({ name: "编译服务端" })
  ]
};