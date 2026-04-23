import { IOCContainer } from "@/frameworks/spa-tool-box/runtime/cores/IOCContainer";
import { HydrationResourceManagement } from "@/frameworks/spa-tool-box/runtime/services/HydrationResourceManagement";

import type { HydrationCompileAssetsListQueryResult } from "@/frameworks/spa-tool-box/runtime/services/HydrationResourceManagement";


/**
 * 获取注水物料资源的入口函数
 * **/
export async function getHydrationResource(alias: string): Promise<HydrationCompileAssetsListQueryResult> {
  const $HydrationResourceManagement = IOCContainer.get(HydrationResourceManagement);
  const compileAssetsInfo = await $HydrationResourceManagement.getResourceListByAlias(alias);
  if (!compileAssetsInfo) {
    return false;
  };
  return compileAssetsInfo;
};