/**
 * 服务端运行时阶段需要使用的方法
 * **/
export { renderDehydratedResourceWithSandbox } from "@/frameworks/spa-tool-box/runtime/renderDehydratedResourceWithSandbox";
export { setAndInitializeRuntimeConfig } from "@/frameworks/spa-tool-box/runtime/setAndInitializeRuntimeConfig";
export { getRuntimeConfiguration } from "@/frameworks/spa-tool-box/runtime/getRuntimeConfiguration";
export { getDehydratedResource } from "@/frameworks/spa-tool-box/runtime/getDehydratedResource";
export { getHydrationResource } from "@/frameworks/spa-tool-box/runtime/getHydrationResource";
export { getResourceSummary } from "@/frameworks/spa-tool-box/runtime/getResourceSummary";

export { saveProjectDirectoryAbsolutePath } from "@/frameworks/spa-tool-box/runtime/globalSingletonStorage";
export { readProjectDirectoryAbsolutePath } from "@/frameworks/spa-tool-box/runtime/globalSingletonStorage";

export { saveProjectEntryFileAbsolutePath } from "@/frameworks/spa-tool-box/runtime/globalSingletonStorage";
export { readProjectEntryFileAbsolutePath } from "@/frameworks/spa-tool-box/runtime/globalSingletonStorage";

export type { CompileAssetsDictionaryType } from "@/frameworks/spa-tool-box/public/ResourceManager.d";
export type { RuntimeConfigReturnType } from "@/frameworks/spa-tool-box/runtime/commons/RuntimeConfigManager";