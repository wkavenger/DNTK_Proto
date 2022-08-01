/* eslint-disable */
import type { NpcPositionInfo } from "./NpcPositionInfo";

/**
 * CmdId: 507
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface GetSceneNpcPositionRsp {
  Retcode?: number;
  NpcInfoList?: NpcPositionInfo[];
  SceneId?: number;
}
