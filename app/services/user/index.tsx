import axios from "axios";
import { API_URL } from "@env";

import { UserInfo } from "./types";

export const fetchUser = async ({ id }: { id: number }) => {
  const { data } = await axios.get<UserInfo>(`${API_URL}/users/${id}`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  console.log(data);
  return data;
};
