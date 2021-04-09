import React, {Fragment, useEffect, useState} from 'react';
import {BaseLayout, ButtonLayout} from "./layouts";
import axios from 'axios';
import { getCookie } from "./utils/CookieUtils"
import Main from "./pages/Main";

import logo from './logo.svg';
import naverLogin from './images/naver_login_btn.PNG';
import googleLogin from './images/btn_google_signin_dark_normal_web.png';
import './App.css';

function App() {
    
    const [signIn, setSignIn] = useState(false);
    const [nickname, setNickname] = useState("");
    
    // 정상적으로 로그아웃하지 않았다면 쿠키가 남아있을 것이다.
    useEffect(() => {
        const v = getCookie("foo-app-jwt-flag");
        if (JSON.parse(v) === true) {
            setSignIn(true);
        }
    }, []);
    
    useEffect(() => {
       
        if (signIn) {
            axios.post("/api/hello/").then((response) => {
                console.log(response);
                setNickname(response.data);
            }, (error) => {console.log(error)});
        }
        
    }, [signIn]);
    
    const handleLogin = (e) => {
        const id = e.target.id;
        window.location.href = `/oauth2/authorization/${id}`;
    }
    
    const handleLogout = () => {
        window.location.href = `/logout`;
    }
    
    
    return (
        
        <BaseLayout>
            <ButtonLayout>
            {!signIn?
                <Fragment>
                    <img src={logo} className="App-logo" alt="logo" />
                    <br/>
                    <img src={naverLogin}  alt="Naver Login"  onClick={handleLogin} id="naver" style={{width: "120px", height: "45px"}}/>
                    <img src={googleLogin} alt="Google Login" onClick={handleLogin} id="google"/>
                </Fragment>
                :
                <Fragment>
                    <Main handleLogout={handleLogout} nickname={nickname}/>
                </Fragment>
                
            }
            </ButtonLayout>
        </BaseLayout>
    );
}

export default App;
