import os from "os";
import path from "path";
import isDocker from "is-docker";
import { readFileSync } from "jsonfile";

export function get_global_config() {

  let global_config_path;

  if (isDocker()) {

    global_config_path = path.resolve("/home/", "./runtime_config.json")

  } else {

    global_config_path = path.resolve(os.homedir(), "./runtime_config.json")

  };

  const global_config = readFileSync(global_config_path);
  return global_config;
};