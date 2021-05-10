
import {takeLatest, put} from "redux-saga/effects";
import * as ACTIONS from "../actions";
import { getCookie } from "../../utils/CookieUtils";


function* checkSignin(action) {
    
    const v = getCookie("foo-app-jwt-flag");
    if (JSON.parse(v) === true) {
        console.log("JWT exists");
        
        switch (action.type) {
            case ACTIONS.GET_LIST:
                yield put(ACTIONS.getListCall(action.payload));
                break;
    
            default:
                return;
        }
        
    } else {
        console.log("JWT is missing");
        yield put(ACTIONS.signInFailed());
    }
    
}

function* getSigninSaga() {
    // TODO
    //  API 호출을 하는 모든 액션에 대해 호출 전 검사해야 한다!
    yield takeLatest(ACTIONS.GET_LIST, checkSignin);
}


// eslint-disable-next-line import/no-anonymous-default-export
export default [
    getSigninSaga
    
];
