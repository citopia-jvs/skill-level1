import {
  takeLatest,
  call,
  put,
  CallEffect,
  PutEffect,
} from "redux-saga/effects";

import { FETCH_USER_INFO, UPDATE_USER_INFO } from "~store/actions";
import { setUserInfo } from "~store/slices/userSlice";
import { fetchUser, updateUser } from "~services/user";
import { UserInfo } from "~services/user/types";

interface FetchUserInfoAction {
  type: typeof FETCH_USER_INFO;
  payload: {
    id: number;
  };
}

function* fetchUserInfoSaga(
  action: FetchUserInfoAction
): Generator<CallEffect<UserInfo> | PutEffect, void, never> {
  try {
    const response: UserInfo = yield call(fetchUser, { id: action.payload.id });

    yield put(
      setUserInfo({
        firstName: response.firstName,
        lastName: response.lastName,
        avatar: response.avatar,
      })
    );
  } catch (error) {
    console.error("Failed to fetch user info", error);
  }
}

interface UpdateUserInfoAction {
  type: typeof FETCH_USER_INFO;
  payload: UserInfo & { id: number };
}

function* updateUserInfoSaga(
  action: UpdateUserInfoAction
): Generator<CallEffect<UserInfo> | PutEffect, void, never> {
  try {
    const response: UserInfo = yield call(updateUser, {
      payload: action.payload,
      id: action.payload.id,
    });

    yield put(
      setUserInfo({
        firstName: response.firstName,
        lastName: response.lastName,
      })
    );
  } catch (error) {
    console.error("Failed to update user info", error);
  }
}

export default function* rootSaga() {
  yield takeLatest(FETCH_USER_INFO, fetchUserInfoSaga);
  yield takeLatest(UPDATE_USER_INFO, updateUserInfoSaga);
}
