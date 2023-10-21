import {PayloadAction} from '@reduxjs/toolkit';
import {put, takeLatest} from 'redux-saga/effects';
import {UserType, getUser, getUserError, getUserSuccess} from './userSlice';

export interface ApiResponseType {
  config?: any;
  data?: UserType;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}

function* getUserSaga({payload: id}: PayloadAction<string>) {
  try {
    const response: Response = yield fetch(`https://reqres.in/api/users/${id}`);

    const json: ApiResponseType = yield response.json();
    console.log(json, 3333);
    if (json.data) {
      yield put(getUserSuccess(json.data));
    } else {
      throw new Error('User not found!');
    }
  } catch (error) {
    yield put(getUserError(String(error)));
  }
}

export function* watchGetUser() {
  yield takeLatest(getUser.type, getUserSaga);
}
