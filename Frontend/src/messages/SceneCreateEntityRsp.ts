/* eslint-disable */
import type { CreateEntityInfo } from "./CreateEntityInfo";

/**
 * CmdId: 226
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface SceneCreateEntityRsp {
  Retcode?: number;
  EntityId?: number;
  Entity?: CreateEntityInfo;
}
