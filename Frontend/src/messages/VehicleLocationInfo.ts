/* eslint-disable */
import type { Vector } from "./Vector";

export interface VehicleLocationInfo {
  Rot?: Vector;
  EntityId?: number;
  CurHp?: number;
  OwnerUid?: number;
  Pos?: Vector;
  UidList?: number[];
  GadgetId?: number;
  MaxHp?: number;
}
