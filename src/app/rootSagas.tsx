import { all, fork } from "redux-saga/effects";
import { watchFetchAction } from "./sagas";

const rootSaga = function* () {
    yield all([
        fork(watchFetchAction)
    ])
}

export default rootSaga
