import React from "react";
import { HashRouter, Route, Switch} from 'react-router-dom';

import Nav from "../components/nav";
import Home from "../screens/Home";
import Profile from "../screens/Profile";

const AppRouter = () => {
    return(
        <HashRouter>
            <Nav/>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route exact path="/Profile">
                    <Profile/>
                </Route>
            </Switch>
        </HashRouter>
    )
}

export default AppRouter;