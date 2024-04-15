import { createSlice, PayloadAction, createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

interface LogInState {
    email: string,
    password: string,
    isLogged: boolean
}

const initialState: LogInState = {
    email: '',
    password: '',
    isLogged: false
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
        },
        logOut: state => {
            return initialState
        }
    }
})

const selectLogin = (state:RootState) => state.login;
const selectEmail = createSelector([selectLogin], login=>login.email)
const selectPassword = createSelector([selectLogin], login=>login.password)
export const selectUser = createSelector([selectEmail, selectPassword], (email, password)=>{return {email:email, password:password}}
) 
export const { passwordUpdate, emailUpdate, logIn, logOut } = logInSlice.actions;
export const selectIsLogged = (state: RootState) => state.login.isLogged
export default logInSlice.reducer
