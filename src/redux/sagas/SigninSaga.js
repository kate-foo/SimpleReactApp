
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
        
            case ACTIONS.SAVE_POST:
                yield put(ACTIONS.savePostCall(action.payload));
                break;
                
            case ACTIONS.READ_POST:
                
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
    //  백엔드 API 호출을 하는 모든 액션에 대해 호출 전 검사!
    yield takeLatest(ACTIONS.GET_LIST, checkSignin);
    yield takeLatest(ACTIONS.SAVE_POST, checkSignin);
    yield takeLatest(ACTIONS.READ_POST, checkSignin);
    
}


// eslint-disable-next-line import/no-anonymous-default-export
export default [
    getSigninSaga
    
];
