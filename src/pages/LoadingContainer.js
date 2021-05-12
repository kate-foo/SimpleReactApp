import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { signInSuccess } from "../redux/actions";

import "../css/bootstrap/css/bootstrap.min.css";

// 로그인 후 프론트엔드 애플리케이션 초기화
// 최초 1회 실행시 해주어야 하는 일들을 해주기로 한다.
//
const LoadingContainer = ({signIn, children}) => {
    
    const initialized = useSelector((state) => state.initialized);
    const dispatch = useDispatch();
    
    useEffect(() => {
        
        if (signIn) {
            //TODO
            // 인증성공 디스패치
            // 부가적인 사용자 정보를 얻기 위한 API 호출이 필요한 경우?
            dispatch(signInSuccess({}));
        }
        
    }, []);
    
    const handleSignin = () => {
        window.location.href = "/";
    }
    
    //TODO
    // JWT 만료 후에 다시 로그인
    return (
        (!initialized)?
           <div style={{marginTop: "20px"}}>
               <button type="button" className="btn btn-primary" onClick={handleSignin}>Need to sign in</button>
           </div>
           :
           children
    )
}

export default LoadingContainer;
