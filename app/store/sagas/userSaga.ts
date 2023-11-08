import {
  takeLatest,
  call,
  put,
  CallEffect,
  PutEffect,
} from "redux-saga/effects";

import { FETCH_USER_INFO } from "~store/actions";
import { setUserInfo } from "~store/slices/userSlice";
import { fetchUser } from "~services/user";
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
    console.log("response", response);
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

export default function* rootSaga() {
  yield takeLatest(FETCH_USER_INFO, fetchUserInfoSaga);
}
