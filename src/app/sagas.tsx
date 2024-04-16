import axios, { AxiosResponse } from "axios";
import { put, takeLatest } from "redux-saga/effects";
import { successFetch, errorFetch } from "../features/activity/activitySlice";

type responseType = {
    activity: string
	accessibility: number,
	type: string,
	participants: number,
	price: number,
	link: string,
	key: string
}

function* fetchActivity() {
    try {
        const response:AxiosResponse<responseType> = yield axios.get('http://www.boredapi.com/api/activity/')
        yield put(successFetch(response.data))
    } catch (error) {
        yield put(errorFetch(error))
    }
}

export function* watchFetchAction() {
    yield takeLatest('activity/fetchData', fetchActivity);
}
