import React from 'react';
import Profile from '../pages/Profile';
import { Switch, Route} from 'react-router-dom';
import Create from "../pages/newGoal";
import Checkin from "../pages/Checkin";
import Progress from "../pages/Progress"

const Main = () => {

    return(
        <Switch>
            <Route path="/profile" component= {Profile}></Route>
            <Route path="/create" component= {Create}></Route>
            <Route path="/checkin" component= {Checkin}></Route>
            <Route path="/progress" component= {Progress}></Route>
        </Switch>

    )
}

export default Main;