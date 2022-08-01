/* eslint-disable */
import type { ScenePlayBattleSettlePlayerInfo } from "./ScenePlayBattleSettlePlayerInfo";
import type { Unk2700OHOKEEGPPBG } from "./Unk2700_OHOKEEGPPBG";

/**
 * CmdId: 4398
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface ScenePlayBattleResultNotify {
  IsWin?: boolean;
  CostTime?: number;
  PlayType?: number;
  PlayId?: number;
  SettlePlayerInfoList?: ScenePlayBattleSettlePlayerInfo[];
  Unk2700HMENAAMGMBB?: Unk2700OHOKEEGPPBG[];
}
