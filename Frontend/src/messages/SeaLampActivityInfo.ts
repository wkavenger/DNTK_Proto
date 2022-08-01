/* eslint-disable */
import type { SeaLampSectionInfo } from "./SeaLampSectionInfo";

export interface SeaLampActivityInfo {
  IsMechanicusOpen?: boolean;
  DayIndex?: number;
  SectionInfoList?: SeaLampSectionInfo[];
  Popularity?: number;
  SeaLampCoin?: number;
  FirstDayStartTime?: number;
  MechanicusId?: number;
  IsMechanicusFeatureClose?: boolean;
  IsContentClosed?: boolean;
}
