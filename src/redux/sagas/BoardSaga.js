import axios from 'axios';
import { put, takeLatest, call, select } from 'redux-saga/effects';
import {DEV_API_HOST_URL} from "../../utils/ConstUtils";
import * as ACTIONS from "../actions";

//worker saga
function* getList(action) {

    
    // 현재 스토어의 상태
    //const state = yield select();
    
    try {
        console.log("getList!");
        const response = yield call(axios.post, `${DEV_API_HOST_URL}/api/board/listPage`, action.payload);
        console.log(response);
        yield put(ACTIONS.getListOk(response));

    } catch (error) {
        // TODO 에러 처리는?
        console.log("API CALL FAILED");
        //yield put();
    }
}

function* getRead(action) {
    
    try {
        console.log(`getRead ${action.payload}`);
        yield put(ACTIONS.getReadOk({}));
        
    } catch (error) {
        // TODO 에러 처리는?
        console.log("API CALL FAILED");
        //yield put();
    }
}

//watcher saga
function* getListSaga() {
    yield takeLatest(ACTIONS.GET_LIST, getList);
}

function* getReadSaga() {
    yield takeLatest(ACTIONS.READ_POST, getRead);
}



// eslint-disable-next-line import/no-anonymous-default-export
export default [
    getListSaga,
    getReadSaga
];

