/* eslint-disable */
import type { FurnitureMakeSlot } from "./FurnitureMakeSlot";

/**
 * CmdId: 4683
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface FurnitureMakeCancelRsp {
  Retcode?: number;
  MakeId?: number;
  FurnitureMakeSlot?: FurnitureMakeSlot;
}
