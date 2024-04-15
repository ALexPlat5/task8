import { combineReducers, configureStore } from "@reduxjs/toolkit";
import logInReducer from '../features/logIn/logInSlice';

const rootReducer = combineReducers({ login: logInReducer });

export const store = configureStore({
    reducer: rootReducer
})

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
