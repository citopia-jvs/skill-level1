import axios from "axios";
import { API_URL } from "@env";

import { UserInfo, RawUserInfo } from "./types";
import { userInfoReader } from "./reader";

export const fetchUser = async ({ id }: { id: number }): Promise<UserInfo> => {
  const response = await axios.get<RawUserInfo>(`${API_URL}/users/${id}`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

  return userInfoReader(response.data);
};

export const updateUser = async ({
  payload,
  id,
}: {
  payload: UserInfo;
  id: number;
}) => {
  const { data } = await axios.put<UserInfo>(
    `${API_URL}/users/${id}`,
    { ...payload },
    {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }
  );

  return data;
};
