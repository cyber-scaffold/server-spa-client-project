const webpack = require("webpack");

const client_webpack_config = require("./client/webpack.client.build");
const server_webpack_config = require("./server/webpack.server.build");

(async () => {
  const client_compiler = webpack(client_webpack_config);
  const server_compiler = webpack(server_webpack_config);
  /** watch客户端 **/
  client_compiler.run((error, stats) => {
    if (error) {
      console.log(error);
    } else {
      console.log(stats.toString({ colors: true }));
    };
  });
  /** watch服务端 **/
  server_compiler.run((error, stats) => {
    if (error) {
      console.log(error);
    } else {
      console.log(stats.toString({ colors: true }));
    };
  });
})();