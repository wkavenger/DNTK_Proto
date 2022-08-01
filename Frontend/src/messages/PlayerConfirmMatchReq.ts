/* eslint-disable */
import type { MatchType } from "./MatchType";

/**
 * CmdId: 4172
 * EnetChannelId: 0
 * EnetIsReliable: true
 * IsAllowClient: true
 */
export interface PlayerConfirmMatchReq {
  MatchType?: MatchType;
  IsAgreed?: boolean;
}
