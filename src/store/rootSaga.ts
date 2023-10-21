import {all, fork} from 'redux-saga/effects';
import {watchGetUser} from '../services/users/userSaga';

const rootSaga = function* () {
  yield all([fork(watchGetUser)]);
};

export default rootSaga;
