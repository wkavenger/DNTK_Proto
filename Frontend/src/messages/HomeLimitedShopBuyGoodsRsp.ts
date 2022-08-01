/* eslint-disable */
import type { HomeLimitedShopGoods } from "./HomeLimitedShopGoods";

/**
 * CmdId: 4750
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface HomeLimitedShopBuyGoodsRsp {
  GoodsList?: HomeLimitedShopGoods[];
  Retcode?: number;
  Goods?: HomeLimitedShopGoods;
  BuyCount?: number;
}
