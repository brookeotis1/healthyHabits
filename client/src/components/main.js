import React from 'react';
import { Profile } from '../pages/Profile';
import { Switch, Route} from 'react-router-dom';
import Goals from "../pages/Goals";
import Checkin from "../pages/Checkin";
import Progress from "../pages/Progress";
import Notes from "../pages/Notes";
// import NoMatch from "../pages/NoMatch";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";

const Main = () => {

    return(
        <Switch>
            <Route path="/profile" component= {Profile}></Route>
            <Route path="/goals" component= {Goals}></Route>
            <Route path="/checkin" component= {Checkin}></Route>
            <Route path="/progress" component= {Progress}></Route>
            <Route path="/goals/:id" component= {Notes}></Route>
            <Route path="/login" component= {Login}></Route>
            <Route path="/register" component= {Register}></Route>
            {/* <Route component= {NoMatch}></Route> */}
        </Switch>

    )
}

export default Main;