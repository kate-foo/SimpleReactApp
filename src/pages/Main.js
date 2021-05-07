import React from "react";
import { ButtonLogout, TopLayout, MainLayout, MenuLayout } from "../layouts";
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";

import { List, Read, Write } from "./board";


const Main = ({handleLogout, nickname}) => {
   
    return (
        <div>
            <Router>
                <TopLayout>
                    <div style={{display: "flex", flexDirection: "row"}}>
                        <div>
                            {
                                nickname===""?
                                    <b>Anonymous!😓</b>
                                    :<b>Hello, {nickname}!😉</b>
                            }
                        </div>
                    </div>
                    <MenuLayout>
                        <Link to="/">Home💒</Link>
                        <Link to="/app/list">게시판</Link>
                        <a href={"/"}>메뉴2</a>
                        <a href={"/"}>메뉴3</a>
                    </MenuLayout>
                    <div style={{marginRight: "20px", paddingTop: "5px"}}>
                        <ButtonLogout onClick={handleLogout}>Logout</ButtonLogout>
                    </div>
                </TopLayout>
                <MainLayout>
                    <Switch>
                        <Route path="/app/list"  component={List} />
                        <Route path="/app/read"  component={Read} />
                        <Route path="/app/write" component={Write} />
                    </Switch>
                </MainLayout>
            </Router>
        </div>
       
    )
}

export default Main;


