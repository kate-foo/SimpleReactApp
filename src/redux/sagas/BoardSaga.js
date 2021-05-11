import axios from 'axios';
import { put, takeLatest, call, select } from 'redux-saga/effects';
import {DEV_API_HOST_URL} from "../../utils/ConstUtils";
import * as ACTIONS from "../actions";

//worker saga
function* getList(action) {
    
    // 현재 스토어의 상태
    //const state = yield select();
    
    try {
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

function* getSave(action) {
    try {
        const response = yield call(axios.post, `${DEV_API_HOST_URL}/api/board/save`, action.payload);
        console.log(response);
        yield put(ACTIONS.savePostOk(response));
        
    } catch (error) {
        // TODO 에러 처리는?
        console.log("API CALL FAILED");
        //yield put();
    }
}



//watcher saga
function* getListSaga() {
    yield takeLatest(ACTIONS.GET_LIST_CALL, getList);
}

function* getSaveSaga() {
    yield takeLatest(ACTIONS.SAVE_POST_CALL, getSave);
}


function* getReadSaga() {
    yield takeLatest(ACTIONS.READ_POST_CALL, getRead);
}



// eslint-disable-next-line import/no-anonymous-default-export
export default [
    getListSaga,
    getReadSaga,
    getSaveSaga
];

