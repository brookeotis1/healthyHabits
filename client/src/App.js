import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { apiAuth } from "./utils/api/index";
import { useAuth } from "./utils/context/index";
import { PrivateRoute } from "./components/Auth/PrivateRoute";
import { Login } from "./pages/login";
import { Register } from "./pages/register"
import { Profile } from "./pages/Profile"
import Main from "./components/main";
import Header from "./components/header/navbar";
import Goals from "./pages/Goals";
import Checkin from "./pages/Checkin";
import Progress from "./pages/Progress";
import Notes from "./pages/Notes";
import Resources from "./pages/Resources"
import Stress from "./pages/resourcePages/stress"
import Smart from "./pages/resourcePages/SMART"



function App() {
  const [state, setState] = useState({
    isReady: false,
  });
  const { auth, setAuth } = useAuth();

  useEffect(() => {
    const res = apiAuth.getAuth();
    if (res) {
      setAuth({ ...auth, ...res });
    }
    setState({ ...state, isReady: true });
  }, []);

  if (!state.isReady) {
    return null;
  }

  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/goals" component={Goals}></Route>
          <Route exact path="/checkin" component={Checkin}></Route>
          <Route exact path="/progress" component={Progress}></Route>
          <Route exact path="/goals/:id" component={Notes}></Route>
          <Route exact path="/resources" component={Resources}></Route>
          <Route exact path="/stress" component={Stress}></Route>
          <Route exact path="/smart" component={Smart}></Route>
          <PrivateRoute exact path="/profile" component={Profile} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;






