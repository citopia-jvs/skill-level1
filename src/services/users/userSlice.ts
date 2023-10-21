import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface UserType {
  id: string;
  first_name: string;
  last_name: string;
  birthday?: string;
}
const initialState = {
  data: {
    first_name: 'Kossi',
    last_name: 'BAKAR',
    birthday: '01/01/2000',
  },
  isLoading: false,
  errors: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUser: (state, {payload: id}: PayloadAction<string>) => {
      state.isLoading = true;
      state.errors = '';
    },
    getUserSuccess: (state, {payload: user}: PayloadAction<UserType>) => {
      state.data = {...state.data, ...user};
      state.isLoading = false;
    },
    getUserError: (state, {payload: error}: PayloadAction<string>) => {
      state.errors = error;
      state.isLoading = false;
    },
  },
});

export const {getUser, getUserSuccess, getUserError} = userSlice.actions;
export default userSlice.reducer;
