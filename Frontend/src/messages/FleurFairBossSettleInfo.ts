/* eslint-disable */
import type { FleurFairPlayerStatInfo } from "./FleurFairPlayerStatInfo";

export interface FleurFairBossSettleInfo {
  RewardTokenNum?: number;
  StatInfoList?: FleurFairPlayerStatInfo[];
  IsSuccess?: boolean;
  Energy?: number;
  CostTime?: number;
}
