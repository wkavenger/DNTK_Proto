/* eslint-disable */
import type { Vector } from "./Vector";

export interface EvtRushMoveInfo {
  StateNameHash?: number;
  RushToPos?: Vector;
  RushAttackTargetPos?: Vector;
  EntityId?: number;
  TimeRange?: number;
  Velocity?: Vector;
  Pos?: Vector;
  FaceAngleCompact?: number;
}
