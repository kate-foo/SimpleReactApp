import React from 'react';
import {BaseLayout, LoginButtonLayout} from "./layouts";
import axios from 'axios';

import logo from './logo.svg';
import naverLogin from './images/naver_login_btn.PNG';
import googleLogin from './images/btn_google_signin_dark_normal_web.png';
import './App.css';

function App() {
    
    const handleLoginNaver = async () => {
        window.location.href = "/oauth2/authorization/naver";
    }
    
    const handleLoginGoogle = async () => {
        window.location.href = "/oauth2/authorization/google"
    }
    
    
    return (
        
        <BaseLayout>
            <img src={logo} className="App-logo" alt="logo" />
            <br/>
            <LoginButtonLayout>
                <img src={naverLogin} alt="Naver Login" onClick={handleLoginNaver} style={{width: "120px", height: "45px"}}/>
                <img src={googleLogin} alt="Google Login" onClick={handleLoginGoogle} />
            </LoginButtonLayout>
        </BaseLayout>
    );
}

export default App;

