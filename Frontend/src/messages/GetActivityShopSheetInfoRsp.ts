/* eslint-disable */
import type { ActivityShopSheetInfo } from "./ActivityShopSheetInfo";

/**
 * CmdId: 790
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface GetActivityShopSheetInfoRsp {
  SheetInfoList?: ActivityShopSheetInfo[];
  ShopType?: number;
  Retcode?: number;
}
