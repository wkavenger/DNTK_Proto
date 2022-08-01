/* eslint-disable */
import type { ObstacleInfo } from "./ObstacleInfo";

/**
 * CmdId: 2312
 * EnetChannelId: 0
 * EnetIsReliable: true
 * IsAllowClient: true
 */
export interface ObstacleModifyNotify {
  RemoveObstacleIds?: number[];
  AddObstacles?: ObstacleInfo[];
  SceneId?: number;
}
