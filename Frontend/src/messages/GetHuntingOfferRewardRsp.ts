/* eslint-disable */
import type { HuntingPair } from "./HuntingPair";

/**
 * CmdId: 4331
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface GetHuntingOfferRewardRsp {
  HuntingPair?: HuntingPair;
  CityId?: number;
  Retcode?: number;
}
