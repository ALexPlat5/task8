import { all, fork } from "redux-saga/effects";
import { watchFetchAction } from "./sagas";
import { yellow } from "@mui/material/colors";

const rootSaga = function* () {
    yield all([
        fork(watchFetchAction)
    ])
}

export default rootSaga
