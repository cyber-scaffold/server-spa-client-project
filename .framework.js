const path = require("path");

module.exports = {
  projectDirectoryPath: process.cwd(),
  assetsDirectoryName: "dist",
  swaggerInitializer: path.resolve(process.cwd(), "./main/server/cores/swagger-initializer.js"),
  dehydrateIncludePackageList: ["antd", "bootstrap", "react-bootstrap"],
  dehydrateExcludePackageList: ["@ant-design/cssinjs"],
  materiels: [
    {
      alias: "Application",
      hydrate: true,
      dehydrate: false,
      source: path.resolve(process.cwd(), "./main/views/index.tsx")
    }
  ]
};