import path from "path";
import express from "express";
import bodyParser from "body-parser";
// import { DataSource } from "typeorm";
import cookieParser from "cookie-parser";
import history_fallback from "connect-history-api-fallback";

import { listenPort } from "&/configs/listenPort";
// import { AppDataSource } from "&/resources/AppDataSource";

const app = express();
app.use(cookieParser());
app.use(bodyParser.json());

/** 控制单页应用的history路由 **/
app.use(history_fallback());
/** 这里开始提供前端渲染服务 **/
app.use(express.static(path.resolve(path.dirname(__filename), "./application/")));

const server = app.listen(listenPort, "0.0.0.0", async () => {
  try {
    // await AppDataSource.initialize();
    console.log("address", server.address());
  } catch (error) {
    console.log(error);
    process.exit(0);
  };
});