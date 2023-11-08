import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import userReducer from "./slices/userSlice";
import rootSaga from "./sagas/userSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
