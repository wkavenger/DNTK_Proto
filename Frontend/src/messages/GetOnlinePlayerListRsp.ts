/* eslint-disable */
import type { OnlinePlayerInfo } from "./OnlinePlayerInfo";

/**
 * CmdId: 73
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface GetOnlinePlayerListRsp {
  Retcode?: number;
  Param?: number;
  PlayerInfoList?: OnlinePlayerInfo[];
}
