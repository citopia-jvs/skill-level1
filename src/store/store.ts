import createSagaMiddleware from '@redux-saga/core';
import {configureStore} from '@reduxjs/toolkit';
import {userSlice} from '../services/users/userSlice';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    [userSlice.name]: userSlice.reducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
