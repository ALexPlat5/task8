import React from "react";
import { createSlice } from "@reduxjs/toolkit";

type activityType = {
    data: null | string,
    isLoading: boolean,
    errors: string
}

const activityInitialState: activityType = {
    data: null,
    isLoading: false,
    errors: ''
}

export const activitySlice = createSlice({
    name: 'activity',
    initialState: activityInitialState,
    reducers: {
        fetchData:(state, action) => {
            state.isLoading = true
        },
        successFetch:(state, action) => {
            state.data = action.payload
            state.isLoading = false
        },
        errorFetch:(state, action)=>{
            state.errors = action.payload
            state.isLoading = false
        }
    }
})

export const { fetchData, successFetch, errorFetch } = activitySlice.actions;
export default activitySlice.reducer;
