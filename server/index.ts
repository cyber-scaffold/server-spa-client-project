import path from "path";
import express from "express";
import history_fallback from "connect-history-api-fallback";
import { createProxyMiddleware } from "http-proxy-middleware";

import { listenPort } from "&/configs/listenPort";
import { getGlobalConfig } from "&/resources/getGlobalConfig";

const app = express();
const { proxy } = getGlobalConfig();

/** 启动反向代理 **/
Object.keys(proxy).forEach((proxyRuleName) => {
  app.use(createProxyMiddleware(proxyRuleName, proxy[proxyRuleName]));
});

/** 控制单页应用的history路由 **/
app.use(history_fallback());
/** 这里开始提供前端渲染服务 **/
app.use(express.static(path.resolve(path.dirname(__filename), "./application/")));

const server = app.listen(listenPort, "0.0.0.0", async () => {
  try {
    console.log("address", server.address());
  } catch (error) {
    console.log(error);
    process.exit(0);
  };
});