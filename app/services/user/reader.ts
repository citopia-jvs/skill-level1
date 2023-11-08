import { RawUserInfo } from "./types";

export const userInfoReader = (rawUserInfo: RawUserInfo) => {
  const { first_name, last_name, avatar } = rawUserInfo.data;
  return {
    firstName: first_name,
    lastName: last_name,
    avatar: avatar,
  };
};
