/* eslint-disable */
import type { FurnitureMakeSlot } from "./FurnitureMakeSlot";

/**
 * CmdId: 4729
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface FurnitureMakeStartRsp {
  FurnitureMakeSlot?: FurnitureMakeSlot;
  Retcode?: number;
}
