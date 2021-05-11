import React, {Fragment, useEffect, useState} from "react";
import {BaseLayout, ButtonLogin, Modal} from "./layouts";
import axios from "axios";
import { getCookie } from "./utils/CookieUtils";
import { Provider } from "react-redux";
import store from "./redux/store";
import Main from "./pages/Main";
import LoadingContainer from "./pages/LoadingContainer";
import Spinning from "./pages/Spinning";


import logo from './logo.svg';
import naverLogin from './images/naver_login_btn.PNG';
import googleLogin from './images/btn_google_signin_dark_normal_web.png';
import './App.css';


function App() {
    
    let FLAG_DEV = false;
    let INIT_USER = "";
    if (process.env.REACT_APP_DEV) {
        console.log("========== DEV ==========");
        FLAG_DEV = true;
        INIT_USER = "foo-dev";
    }
    const [signIn, setSignIn] = useState(FLAG_DEV);
    const [nickname, setNickname] = useState(INIT_USER);
    
    useEffect(() => {
        const v = getCookie("foo-app-jwt-flag");
        if (JSON.parse(v) === true) {
            setSignIn(true);
        }
        
    }, []);
    
    // 백엔드(JWT 를 파싱)에서 사용자 ID를 리턴받음
    useEffect(() => {
       
        if (signIn && !FLAG_DEV) {
            axios.post(`/api/hello/`).then((response) => {
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
            {!signIn?
                <Fragment>
                    <img src={logo} className="App-logo" alt="logo" />
                    
                    <ButtonLogin>
                        <img src={naverLogin}  alt="Naver Login"  onClick={handleLogin} id="naver" style={{width: "120px", height: "45px", marginRight: "10px"}}/>
                        <img src={googleLogin} alt="Google Login" onClick={handleLogin} id="google"/>
                    </ButtonLogin>
                </Fragment>
                :
                <Fragment>
                    <Provider store={store}>
                        <LoadingContainer signIn={signIn} nickname={nickname}>
                            <Main handleLogout={handleLogout} nickname={nickname}/>
                        </LoadingContainer>
                        <Modal>
                            <Spinning type="Oval" />
                        </Modal>
                    </Provider>
                </Fragment>
                
            }
        </BaseLayout>
    );
}

export default App;
