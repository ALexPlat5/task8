import { combineReducers, configureStore } from "@reduxjs/toolkit";
import logInReducer from '../features/logIn/logInSlice';
import activityReduce from '../features/activity/activitySlice';
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./rootSagas";

const rootReducer = combineReducers({
    login: logInReducer,
    activity: activityReduce
});

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
          .concat(sagaMiddleware)
})

sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
