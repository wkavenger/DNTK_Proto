/* eslint-disable */
import type { ReunionSignInInfo } from "./ReunionSignInInfo";

/**
 * CmdId: 5081
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface GetReunionSignInInfoRsp {
  SignInInfo?: ReunionSignInInfo;
  Retcode?: number;
}
