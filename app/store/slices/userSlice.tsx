import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserInfo } from "~services/user/types";

const initialState: UserInfo = {
  firstName: "",
  lastName: "",
  avatar: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserInfo: (state, action: PayloadAction<UserInfo>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setUserInfo } = userSlice.actions;

export default userSlice.reducer;
