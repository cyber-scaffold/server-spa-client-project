import path from "path";
import express from "express";
import bodyParser from "body-parser";
import { DataSource } from "typeorm";
import cookieParser from "cookie-parser";
import history_fallback from "connect-history-api-fallback";

import { listen_port } from "@/configs/listen_port";

const app = express();
app.use(cookieParser());
app.use(bodyParser.json());

/** 这里开始放路由和api接口 **/

// app.use(...);

/** 这里开始提供前端渲染服务 **/
app.use(history_fallback());
app.use(express.static(path.resolve(path.dirname(__filename), "./application/")));

const server = app.listen(listen_port, "0.0.0.0", () => {
  console.log("address", server.address());
  console.log("DataSource", DataSource);
});