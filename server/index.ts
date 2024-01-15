import path from "path";
import express from "express";
import history_fallback from "connect-history-api-fallback";
import { createProxyMiddleware } from "http-proxy-middleware";

import { applicationConfigManager } from "&/transactions/bootstrap";

const app = express();
const { port, proxy } = applicationConfigManager.getRuntimeConfig();

/** 启动反向代理 **/
Object.keys(proxy).forEach((proxyRuleName) => {
  app.use(createProxyMiddleware(proxyRuleName, proxy[proxyRuleName]));
});

/** 控制单页应用的history路由 **/
app.use(history_fallback());
/** 这里开始提供前端渲染服务 **/
app.use(express.static(path.resolve(path.dirname(__filename), "./application/")));

const server = app.listen(port, "0.0.0.0", async () => {
  try {
    console.log("address", server.address());
  } catch (error) {
    console.log(error);
    process.exit(0);
  };
});