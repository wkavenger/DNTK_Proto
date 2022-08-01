/* eslint-disable */
import type { ProfilePicture } from "./ProfilePicture";

export interface PlantFlowerFriendFlowerWishData {
  ProfilePicture?: ProfilePicture;
  Uid?: number;
  Nickname?: string;
  FlowerNumMap?: { [key: number]: number };
}

export interface PlantFlowerFriendFlowerWishData_FlowerNumMapEntry {
  Key: number;
  Value: number;
}
