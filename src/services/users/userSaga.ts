import {PayloadAction} from '@reduxjs/toolkit';
import {put, takeLatest} from 'redux-saga/effects';
import {
  UserType,
  getUser,
  getUserError,
  getUserSuccess,
  updateUser,
} from './userSlice';

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
    if (json.data) {
      yield put(getUserSuccess(json.data));
    } else {
      throw new Error('User not found!');
    }
  } catch (error) {
    yield put(getUserError(String(error)));
  }
}

function* updateUserSaga({payload: user}: PayloadAction<UserType>) {
  try {
    const response: Response = yield fetch(
      `https://reqres.in/api/users/${user.id}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      },
    );

    const json: ApiResponseType = yield response.json();
    if (json) {
      yield put(getUserSuccess(json));
    } else {
      throw new Error('User not found!');
    }
  } catch (error) {
    yield put(getUserError(String(error)));
  }
}

export function* watchGetUser() {
  yield takeLatest(getUser.type, getUserSaga);
  yield takeLatest(updateUser.type, updateUserSaga);
}
