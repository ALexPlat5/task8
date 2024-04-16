import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export type responseType = {
    activity: string
	accessibility: number,
	type: string,
	participants: number,
	price: number,
	link: string,
	key: string
}

type activityType = {
    data: string,
    isLoading: boolean,
    errors: string
}

const activityInitialState: activityType = {
    data: '',
    isLoading: false,
    errors: ''
}

export const activitySlice = createSlice({
    name: 'activity',
    initialState: activityInitialState,
    reducers: {
        fetchData:(state) => {
            state.isLoading = true
        },
        successFetch:(state, action:PayloadAction<responseType>) => {
            state.data = JSON.stringify(action.payload);
            state.isLoading = false
        },
        errorFetch:(state, action)=>{
            state.errors = action.payload
            state.isLoading = false
        }
    }
})

const selectLogin = (state:RootState) => state.activity;
export const selectData = createSelector([selectLogin], activity=>activity.data)
export const selectIsLoading = createSelector([selectLogin], activity=>activity.isLoading)
export const selectError = createSelector([selectLogin], activity=>activity.errors)
export const { fetchData, successFetch, errorFetch } = activitySlice.actions;
export default activitySlice.reducer;
