/* eslint-disable */
import type { PBNavMeshTile } from "./PBNavMeshTile";

/**
 * CmdId: 2400
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface GMShowNavMeshRsp {
  Tiles?: PBNavMeshTile[];
  Retcode?: number;
}
