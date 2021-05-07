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
    
    const [signIn, setSignIn] = useState(true); // TODO 개발중인 경우 true
    const [nickname, setNickname] = useState("");
    
    useEffect(() => {
        const v = getCookie("foo-app-jwt-flag");
         if (JSON.parse(v) === true) {
             setSignIn(true);
         }
        
    }, []);
    
    useEffect(() => {
       
        if (signIn) {
            // TODO 개발 중에는 주석처리
            // axios.post(`/api/hello/`).then((response) => {
            //     console.log(response);
            //     setNickname(response.data);
            //
            // }, (error) => {console.log(error)});
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
                        <LoadingContainer signIn={signIn}>
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
