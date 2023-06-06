const path = require("path");
const webpack = require("webpack");
const spawn = require("cross-spawn");

const client_webpack_config = require("./client/webpack.client.development");
const server_webpack_config = require("./server/webpack.server.development");

(async () => {
  const client_compiler = webpack(client_webpack_config);
  const server_compiler = webpack(server_webpack_config);
  /** watch客户端 **/
  client_compiler.watch({}, (error, stats) => {
    if (error) {
      console.log(error);
    } else {
      console.log(stats.toString({ colors: true }));
    };
  });

  const process_list = [];
  /** watch服务端 **/
  server_compiler.watch({}, (error, stats) => {
    if (error) {
      console.log(error);
    } else {
      console.log(stats.toString({ colors: true }));
      process_list.forEach((current_process) => { current_process.kill() });
      const current_process = spawn("node", [path.resolve(process.cwd(), "./dist/server.js")], { stdio: "inherit" });
      process_list.push(current_process);
    };
  });
})();