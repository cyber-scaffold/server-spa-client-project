/**
 * 工程脚本编译和制作物料阶段使用的方法
 * **/
export { setCompileConfiguration } from "@/frameworks/spa-tool-box/compilation/setCompileConfiguration";
export { makeDehydratedResource } from "@/frameworks/spa-tool-box/compilation/makeDehydratedResource";
export { makeHydrationResource } from "@/frameworks/spa-tool-box/compilation/makeHydrationResource";

export type { MaterielCompilationInfoType, CompilationConfigType, CustmerInputCompilationConfigType } from "@/frameworks/spa-tool-box/compilation/commons/CompilationConfigManager";
export type { CompileAssetsDictionaryType } from "@/frameworks/spa-tool-box/public/ResourceManager.d";