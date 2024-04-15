import { createSlice, PayloadAction, createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { User } from "../logInFunctions";

interface LogInState {
    email: string,
    password: string,
    isLogged: boolean,
    logType: string
}

const initialState: LogInState = {
    email: '',
    password: '',
    isLogged: false,
    logType: ''
}

export const logInSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        emailUpdate: (state, action:PayloadAction<string>) => {
            state.email = action.payload
        },
        passwordUpdate: (state, action:PayloadAction<string>) => {
            state.password = action.payload
        },
        logIn: state => {
            state.isLogged = true
            state.logType = 'login-redux'
        },
        logOut: state => {
            return initialState
        },
        logInFormik: (state, action:PayloadAction<User>) => {
            state.email = action.payload.email
            state.password = action.payload.password
            state.isLogged = true
            state.logType = 'login-formik'
        }
    }
})

const selectLogin = (state:RootState) => state.login;
const selectEmail = createSelector([selectLogin], login=>login.email)
const selectPassword = createSelector([selectLogin], login=>login.password)
export const selectLogType = createSelector([selectLogin], login=>login.logType)
export const selectUser = createSelector([selectEmail, selectPassword], (email, password)=>{return {email:email, password:password}}
) 
export const { passwordUpdate, emailUpdate, logIn, logOut, logInFormik } = logInSlice.actions;
export const selectIsLogged = (state: RootState) => state.login.isLogged
export default logInSlice.reducer
