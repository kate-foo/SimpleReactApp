import React from 'react';
import {LogoutButton, MainLayout} from "../layouts";


const Main = ({handleLogout, nickname}) => {
    
    return (
        <MainLayout>
            <div style={{paddingBottom: "20px"}}>
                <b>Hello, {nickname}!</b>
            </div>
            <div>
                <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
            </div>
        </MainLayout>
    )
}

export default Main;


