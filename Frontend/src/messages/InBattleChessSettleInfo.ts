/* eslint-disable */
import type Long from "long";
import type { ExhibitionDisplayInfo } from "./ExhibitionDisplayInfo";

export interface InBattleChessSettleInfo {
  IsSuccess?: boolean;
  ChessExp?: number;
  ChessLevel?: number;
  OldChessLevel?: number;
  ScoreList?: ExhibitionDisplayInfo[];
  SceneTimeMs?: Long;
  OldChessExp?: number;
}
